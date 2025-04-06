import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/input/create-todo.input';
import { UpdateTodoInput } from './dto/input/update-todo.input';

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        {
            id: 1,
            description: 'Buy milk',
            done: false
        },
        {
            id: 2,
            description: 'Feed cat',
            done: true
        },
        {
            id: 3,
            description: 'Water plants',
            done: false
        }
    ];

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find(todo => todo.id === id);     

        if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);

        return todo;
    }

    create(createTodoInput: CreateTodoInput): Todo {
        const todo = new Todo();
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
        todo.description = createTodoInput.description;
        this.todos.push(todo);

        return todo;
    }

    update(updateTodoInput: UpdateTodoInput): Todo {
        const todo = this.findOne(updateTodoInput.id);        
        if (updateTodoInput.description) todo.description = updateTodoInput.description;
        if (updateTodoInput.done !== undefined) todo.done = updateTodoInput.done;

        this.todos = this.todos.map(t => t.id === updateTodoInput.id ? todo : t);

        return todo;
    }
}

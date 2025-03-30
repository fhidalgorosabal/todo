import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

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
}

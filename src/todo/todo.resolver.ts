import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/input/create-todo.input';
import { UpdateTodoInput } from './dto/input/update-todo.input';

@Resolver()
export class TodoResolver {
    constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo], { name: 'todos' })
    findAll() {
        return this.todoService.findAll();
    }

    @Query(() => Todo, { name: 'todo' })
    findOne(
        @Args('id', { type: () => Int }) id: number
    ) {
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo, { name: 'createTodo' })
    create(
        @Args('createTodoInput') createTodoInput: CreateTodoInput
    ) {
        return this.todoService.create(createTodoInput);
    }

    @Mutation(() => Todo, { name: 'updateTodo' })
    updateTodo(
        @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
    ) {
        return this.todoService.update(updateTodoInput);
    }

    removeTodo() {
        return {};
    }
}

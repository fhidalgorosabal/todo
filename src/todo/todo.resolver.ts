import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';

@Resolver(() => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo], { name: 'todos' })
    findAll(
        @Args() statusArgs?: StatusArgs
    ) {
        return this.todoService.findAll(statusArgs);
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

    @Mutation(() => Boolean, { name: 'removeTodo' })
    removeTodo(
        @Args('id', { type: () => Int }) id: number

    ) {
        return this.todoService.remove(id);
    }
}

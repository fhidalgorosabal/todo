import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {

    @Query(() => [Todo])
    findAll() {
        return [
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
    }

    findOne() {
        return {};
    }

    createTodo() {
        return {};
    }

    updateTodo() {
        return {};
    }

    removeTodo() {
        return {};
    }
}

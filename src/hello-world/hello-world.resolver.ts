import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query(() => String) 
    welloWorld(): string {
        return 'Hello, World!';
    }
}

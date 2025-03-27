import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query(() => String, { name: 'hello', description: 'Returns a hello world message' }) 
    helloWorld(): string {
        return 'Hello, World!';
    }

    @Query(() => Float, { name: 'randomNumber' })
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { name: 'randomFromZeroTo' })
    getRandomFromZeroTo(
        @Args('to', { nullable: true, type: () => Int }) to: number = 10
    ): number {
        return Math.floor(Math.random() * to);
    }
}

import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AggregationsType {
    @Field(() => Int)
    countTodos: number;

    @Field(() => Int)
    countCompletedTodos: number;
    
    @Field(() => Int)
    countPendingTodos: number;
}
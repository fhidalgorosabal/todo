import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateTodoInput {
    @Field(() => Int)
    @IsNotEmpty()
    @IsInt()
    id: number;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsString()
    @MaxLength(20)
    description?: string;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    done?: boolean;
}
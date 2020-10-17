import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo nao pode estar vazio' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo nao pode estar vazio' })
  email: string;
}
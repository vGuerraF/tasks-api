import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches } from 'class-validator';

export class UpdateUserDto {
  @IsString({
    message: 'Name must be a string',
  })
  @ApiProperty({
    type: String,
    minLength: 4,
    maxLength: 20,
    description: 'User name',
    example: 'Vinicius Guerra',
    required: false,
  })
  name?: string;

  @IsString({
    message: 'Password must be a string',
  })
  @Matches(/(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[W]).{6,20}/i)
  @ApiProperty({
    type: String,
    minLength: 8,
    description: 'Password. One number, one letter.',
    example: 'pAssword000!',
    required: false,
  })
  password?: string;

  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'Email',
    example: 'viniciusguerraf@gmail.com',
    required: false,
  })
  email?: string;
}
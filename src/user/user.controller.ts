import { Controller, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './usecases/create-user.usecase.dto';
import { CreateUserUsecase } from './usecases/create-user.usecase';
import { CheckResult } from 'src/utils/error-messages';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    @Inject(CreateUserUsecase)
    private readonly createUserUsecase: CreateUserUsecase,
  ) {}

  @Post()
  async createUser(dto: CreateUserDto): Promise<void> {
    const result = await this.createUserUsecase.execute(dto);
    return CheckResult(result);
  }
}
import { HydratedDocument } from 'mongoose';
import { User } from '../domain/user';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface IUserRepo {
  emailAlreadyExists(email: string): Promise<boolean>;
  save(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User>;
  findUserById(id: string): Promise<User>;
}

@Schema()
export class UserModel {
  @Prop({ required: true, unique: true })
  id!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true })
  password!: string;
}

export type UserDocument = HydratedDocument<UserModel>;

export const UserSchema = SchemaFactory.createForClass(UserModel);

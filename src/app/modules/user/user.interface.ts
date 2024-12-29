import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
}

export interface UserModel extends Model<TUser> {
  isPasswordMatched(password: string, password1: any): unknown;
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if the user exist
  isUserExists(id: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLE;

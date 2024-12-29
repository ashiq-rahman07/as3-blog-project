import { TUser } from './user.interface';
import { User } from './user.model';

const registerUserIntoDB = async (payload: TUser) => {
  const newUser = User.create(payload);
  return newUser;
};

export const UserServices = {
  registerUserIntoDB,
};

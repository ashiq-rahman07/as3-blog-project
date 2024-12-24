import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt';
import config from "../../config";
import { TUser, UserModel } from "./user.interface";

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
      },
      isBlocked: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true, 
    }
  );

  userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
  
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
  
    next();
  });
  
  // set '' after saving password
  userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });

  export const User = model<TUser, UserModel>('User', userSchema);
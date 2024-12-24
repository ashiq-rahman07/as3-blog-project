import { model, Schema, Types } from "mongoose";
import { TBlog } from "./blog.interface";


const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          author: {
            type: Types.ObjectId,
            ref: 'User', 
            required: true,
          },
          isPublished: {
            type: Boolean,
            default: true,
          },
    },
    { 
        timestamps: true,
    }
);


export const Blog = model<TBlog>('Blog', blogSchema);
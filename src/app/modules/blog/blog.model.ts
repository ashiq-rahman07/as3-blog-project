import { model, Schema, Types } from "mongoose";
import { BlogModel, TBlog } from "./blog.interface";


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


 blogSchema.statics.isAuthorByBlog = async function (blogId: string,authorId:string){
    return await Blog.findOne({_id:blogId,author:authorId});
  };
  

export const Blog = model<TBlog, BlogModel>('Blog', blogSchema);

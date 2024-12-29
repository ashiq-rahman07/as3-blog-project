import httpStatus from 'http-status';
import AppError from "../../errors/AppError";
import { TBlog } from "./blog.interface"
import { Blog } from "./blog.model"


const createBlog =async(user: any,payload:TBlog)=>{
  const {userId} = user;
 payload.author = userId;


  const newBlog =(await Blog.create(payload)).populate('author');

  return newBlog;
}


const getAllBlog = async()=>{
 const result = await Blog.find().populate('author');
 return result;
}

const getSingleBlog= async(id:string)=>{
  const result = await Blog.findById({ _id:id})
  

  return result;
 

}

const updateBlogById=async(id:string,userId:string,payload:TBlog)=>{
  // const { title, content } = req.body;

    // Find the blog and ensure it belongs to the logged-in user
    // const blog = await Blog.findOne({ _id: id, author: userId });
    // if (!blog) {
    //   throw new AppError(httpStatus.BAD_REQUEST, 'This User Can not update this blog');
    // }
  
 const result = await Blog.findOneAndUpdate({_id: id, author: userId},payload,{
  new: true,
    runValidators: true,
 });

 if (!result) {
  throw new AppError(httpStatus.BAD_REQUEST, 'This User Can not update this blog');
}
 return result;
}

const deleteBlogById=async(id:string, userId:string)=>{
  // const isAuthorBlog = await Blog.isAuthorByBlog(id,userId);
//  if(!isAuthorBlog){
//   throw new AppError(httpStatus.BAD_REQUEST, 'This User Can not Delete this blog');
//  }
  const result = await Blog.findOneAndDelete({_id:id,author:userId})
 if(!result){
  throw new AppError(httpStatus.BAD_REQUEST, 'This User Can not Delete this blog');
 }
  
  return result;

}






export const BlogServices={
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlogById,
    deleteBlogById
} 
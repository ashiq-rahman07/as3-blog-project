import { User } from './../user/user.model';
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
  const adminUser =await User.findById({_id:userId})

if(adminUser?.role==='admin'){
 return await Blog.findByIdAndDelete({_id:id})
}
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
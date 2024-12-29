import AppError from "../../errors/AppError";
import httpStatus from 'http-status';
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model"
import { strict } from "assert";
import { Blog } from "../blog/blog.model";

const adminBlockUser = async(role:string,userId:string)=>{
    
if(role==='admin'){

 const blockUser = await User.findByIdAndUpdate({_id:userId},{isBlocked:true},{ new: true });

 return blockUser;
 
}else{
    throw new AppError(httpStatus.NOT_FOUND, 'Just Admin Can User Block');
}
};

const adminDeleteBlog =async(blogId:string)=>{

    const isBlogExist = await Blog.findByIdAndDelete({_id:blogId});
    if(!isBlogExist){
        throw new AppError(httpStatus.NOT_FOUND, 'This Blog not found');
    };
}

 export const AdminService ={
    adminBlockUser,
    adminDeleteBlog
}
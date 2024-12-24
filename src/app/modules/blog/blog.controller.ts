import { BlogServices } from './blog.service';
import catchAsync from "../../utils/catchAsync";
import sendResponse from '../../utils/sendResponse';


const createBlog =catchAsync(async(req,res)=>{
    const result = await BlogServices.createBlog(req.body);
    

    sendResponse(res, {
      success: true,
      message: "Blog created successfully",
      statusCode: 201,
      data: {
        _id:result._id,
        name:result.title,
        email:result.content,
        author:result.author
      },
    });
});


export const BlogControllers = {
  createBlog

}
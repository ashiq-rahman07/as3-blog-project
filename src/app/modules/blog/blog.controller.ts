import { BlogServices } from './blog.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RequestHandler } from 'express';
import { Blog } from './blog.model';

const createBlog = catchAsync(async (req, res) => {
  // console.log(req.user, req.body);
  console.log(req.user);
  const result = await BlogServices.createBlog(req.user, req.body);

  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: result.author,
    },
  });
});
const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs(req.query);
  // console.log(result);

  sendResponse(res, {
    success: true,
    message: 'Blogs are retrieved succesfully',
    statusCode: 200,
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BlogServices.getSingleBlog(id);

  sendResponse(res, {
    success: true,
    message: 'Blog is retrieved succesfully',
    statusCode: 200,
    data: result,
  });
});

const updateBlogById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blogData = req.body;
  const userId = req.user.userId;
  const result = await BlogServices.updateBlogById(id, userId, blogData);

  sendResponse(res, {
    success: true,
    message: 'Blog is updated succesfully',
    statusCode: 200,
    data: result,
  });
});

const deleteBlogById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const result = await BlogServices.deleteBlogById(id, userId);

  sendResponse(res, {
    success: true,
    message: 'Blog is deleted succesfully',
    statusCode: 200,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlogById,
  deleteBlogById,
};

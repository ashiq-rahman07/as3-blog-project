import { UserValidation } from './../user/user.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const adminBlockUser = catchAsync(async (req, res) => {
  const { role } = req.user;

  const { userId } = req.params;

  const result = await AdminService.adminBlockUser(role, userId);

  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: 200,
  });
});
const adminDeleteBlog = catchAsync(async (req, res) => {
  const blogId = req.params.id;
  const result = await AdminService.adminDeleteBlog(blogId);

  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});

export const AdminController = {
  adminBlockUser,
  adminDeleteBlog,
};

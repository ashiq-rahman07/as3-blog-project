import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
    const { accessToken } = result;
  
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'User is logged in successfully!',
      data: {
        accessToken,
      }
    });
  });


  export const AuthControllers = {
    loginUser
   
  };
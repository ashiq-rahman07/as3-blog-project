import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";


const registerUserIntoDB =catchAsync(async(req,res)=>{

    const result = await UserServices.registerUserIntoDB(req.body);
   

    sendResponse(res, {
      success: true,
      message: "User registered successfully",
      statusCode: 201,
      data: {
        _id:result._id,
        name:result.name,
        email:result.email
      },
    });
})



export const UserControllers = {
    registerUserIntoDB
}
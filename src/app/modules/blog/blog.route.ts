import express from 'express';
import { BlogControllers } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import auth from '../../middlewares/auth';



const router = express.Router();


router.post('/blogs',
    auth('user'),
    // validateRequest(BlogValidations.createBlogValidationSchema),
    BlogControllers.createBlog);

router.get('/blogs/:id', BlogControllers.getSingleBlog);

router.patch('/blogs/:id',auth('user'),validateRequest(BlogValidations.updateBlogValidationSchema), BlogControllers.updateBlogById);

router.delete('/blogs/:id',auth('user','admin'),BlogControllers.deleteBlogById);
router.get('/blogs',BlogControllers.getAllBlog);




export const BlogRoutes = router;
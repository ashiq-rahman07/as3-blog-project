import express from 'express';
import { BlogControllers } from './blog.controller';



const router = express.Router();


router.post('/blogs',BlogControllers.createBlog)



export const BlogRoutes = router;
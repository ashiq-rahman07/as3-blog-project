import { TBlog } from "./blog.interface"
import { Blog } from "./blog.model"


const createBlog =async(payload:TBlog)=>{
  const newBlog =(await Blog.create(payload)).populate('author');

  return newBlog;
}


const getAllBlog=()=>{

}

const getSingleBlog=()=>{

}

const updateBlogById=()=>{

}

const deleteBlogById=()=>{

}






export const BlogServices={
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlogById,
    deleteBlogById
} 
import { z } from "zod";

const createBlogValidationSchema=z.object({
    body:z.object({
        title: z.string().nonempty("Title is required"), 
        content: z.string().nonempty("Content is required"),
        author: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format for author"), // Validates MongoDB ObjectId
        isPublished: z.boolean().default(true), 
      })
})

const updateBlogValidationSchema=z.object({
    body:z.object({
        title: z.string().nonempty("Title is required").optional(), 
        content: z.string().nonempty("Content is required").optional(),
      
        // isPublished: z.boolean().default(true), 
      })
})



export const BlogValidations={
    createBlogValidationSchema,
    updateBlogValidationSchema
}
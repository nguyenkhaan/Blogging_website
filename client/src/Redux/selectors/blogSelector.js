import { createSelector } from "@reduxjs/toolkit";

const allBlogs = createSelector(
    [
        (state , id) => state.blogs, 
        (state , id) => id 
    ], 
    (blogLists , id) => {
        const blogElement = blogLists.filter(blog => blog.blogID == id) 
        return blogElement
    } 
) 
export default allBlogs
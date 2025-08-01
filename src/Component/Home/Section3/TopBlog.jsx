import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blogs'
function TopBlog({ blogs }) {
    return (
        <div className="min-h-140 p-12 px-13">
            <div className="grid grid-cols-3">
                {blogs.map((blog, index) => {
                    return <Blog blogTitle={blog.title} middle={(index == 1)} subblog={blog.subblog} />
                })}

            </div>
        </div>
    )
}
export default TopBlog

/**
 * blogs: {
 *  name: 
 *  short description: 
 *  related: [
 *  {} , {} , {}...   (Đệ quy)
 * ]
 * }
<Blog /> 
<Blog middle = {true} /> 
<Blog /> 
 */
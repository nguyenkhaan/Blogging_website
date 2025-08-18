import React from 'react'
import ReactDOM from 'react-dom'
import BlogItem from './BlogItem'
function BlogList({blogs}) {
    return (
        <div className="px-6 lg:px-0 col-span-16 lg:col-span-12  min-h-80 gap-4 flex flex-col items-start justify-start divide-y divide-gray-300 pr-6">
            <div className="flex w-full border-none text-xl items-center justify-end gap-4">
                <i class="fa-solid fa-table-list" title="Chỉ tiêu đề"></i>
                <i class="fa-solid fa-indent" title="Xem trước nội dung"></i>
            </div>
            {
                blogs.map((blog) => <BlogItem blogData = {{...blog}} />)
            }
            
        </div>
    )
}
export default BlogList
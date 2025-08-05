//Một card Blogs 
import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
function Blogs() 
{
    return (
        // Thẻ bọc bên ngoài toàn bộ phần Blog. Phần bên trong sẽ là thẻ chứa các blogs 
        <>
            <h2 className="text-2xl font-semibold block w-full text-left font-sans mb-8">Danh sách bài viết</h2>
            <div className="w-full grid grid-cols-12 grid-rows-3 gap-6">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />

            </div>
        </>
    )
}
export default Blogs
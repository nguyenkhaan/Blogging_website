import React from 'react'
import ReactDOM from 'react-dom'
function BlogItem({blogData , preview})    //preview: Có xem trước nội dung bài viết hay không 
{
    //Toc do doc trung binh cua nguoi viet la 250WPM 
    let {id , title , author , date , views, stars, content } = blogData
    let readingTime = Math.floor(content.replace(/[\W\s]/g , '').length / 250) 
    let Views = (views > 1000) ? ((views / 1000).toFixed(1) + 'K') : views.toString() 
    return (
        <div className="flex gap-3 pb-4 items-start justify-between w-full min-h-20">
            <div 
                className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-black bg-center bg-cover bg-no-repeat"  //Avatar 
                style = {{
                    backgroundImage: 'url(Image/default-avatar.png)'
                }}
            
            ></div>
            {/* Thong tin tong quan ve bai viet: Tac gia - Thoi gian update - Thoi gian doc  */}
            <div className="flex flex-col gap-1 flex-1 min-h-20"> 
                <div className="flex items-center text-xs md:text-sm text-gray-600 justify-start gap-4">
                    <a className="hover:cursor-pointer hover:underline text-blue-700">{author}</a>
                    <span title = "Thu Sau 2:35CH mr-5">{date.toLocaleDateString("vi-VN")}</span>
                    <span className = "block mx-2">-</span> 
                    <span title = "20 phút đọc">{readingTime} phút đọc</span>
                </div>
            {/* Tieu de bai viet */}
                <h3 className = "md:text-lg text-base hover:cursor-pointer hover:underline hover:text-blue-700 text-black line-clamp-1">
                    {title}
                </h3>
                {preview && <p className = "text-base text-gray-800 my-3 line-clamp-5">
                    {content}
                </p>}
            {/* So luot xem - So sao danh gia */}
                <div className="flex gap-5 md:text-sm text-xs text-gray-600">
                    <span className = "block" title = "Lượt xem"><i class="fa-solid fa-eye"></i> {Views}</span>
                    <span className = "block" title = "Đánh giá"><i class="fa-solid fa-star"></i> {Math.floor(stars)}</span>
                </div>
            </div>
        </div>
    )
}
export default BlogItem
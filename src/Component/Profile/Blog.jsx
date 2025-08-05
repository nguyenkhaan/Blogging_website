//Một card Blogs 
import React from 'react'
import ReactDOM from 'react-dom'
function Blog({title , content , stars = 5}) {
    return (
        <div className="col-span-4 flex flex-col h-128 overflow-hidden 
    bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">

            {/* Ảnh */}
            <div className="bg-gray-400 h-50 shrink-0 w-full"></div>

            {/* Nội dung */}
            <div className="w-full py-5 max-h-62">
                <h3 className="font-light text-lg text-blue-900 break-all px-3 line-clamp-2">
                    Lorem ispum dolor Dummy Text of The Printing and Typescripting Typescripting...
                </h3>
                <div className="w-full text-sm mt-3 leading-[22px] px-3 text-gray-800 font-light line-clamp-7 h-38">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                </div>
            </div>

            {/* Button */}
            <div className="w-full flex gap-3 mt-auto shrink-0 mb-10 items-center px-3 py-3 justify-between">
                <button className="py-2.5 px-2 cursor-pointer text-xs bg-blue-900 font-semibold text-white">
                    READ MORE
                </button>
                <div className="py-2.5 px-2 cursor-pointer text-xs flex items-center justify-center font-semibold text-gray-300">
                    {Array(5).fill(0).map((curr , index) => {
                        return <i className= {`fa-solid fa-star ${(index < stars)? 'text-yellow-400' : ''}`} ></i>
                    })}
                </div>
            </div>
        </div>

    )
}
export default Blog
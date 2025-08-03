import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import HorizontalStyle from './HorizontalStyle'
import VerticalStyle from './VerticalStyle'
function NavbarAbove() {
    return (
        <div>
            <div className="bg-blue-800 px-4 md:px-12 w-full h-12 flex items-center justify-between">
                <ul className="flex text-sm md:text-base items-center p-0 gap-6 md:justify-between flex-3">
                    <li>Lorem ispum</li>
                    <li>Lorem ispum</li>
                    <li>Lorem ispum</li>
                    <li className="font-black">Lorem ispum dolor</li>
                </ul>
                <div className="flex-1 hidden md:block"></div>
                <div className="flex-1 hidden items-center md:flex justify-end gap-3 text-lg">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-x-twitter"></i>
                    <i class="fa-solid fa-xmark ml-6"></i>
                </div>
            </div>
        </div>
    )
}
function Navbar() {
    return (
        <div className="w-full static top-0 text-white text-base h-30 md:h-36">
            <NavbarAbove />
            <div className = "w-full h-20 md:h-24">
            {/*  Tùy vào loại màn hình mà chỉ một trong hai Horizontal Style và Vertical Style được phép hiển thị. Một bên là md:hiden thì bên kia md:block... */}
                <HorizontalStyle />  
                <VerticalStyle /> 
            </div>
        </div>
/**Phai ho tro them bang Framer Motion de tao ra the div Doc  */
    )
}
export default Navbar
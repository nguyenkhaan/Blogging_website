import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import MenuList from './MenuList'
import Logo from './Logo'
function HorizontalStyle() {
    return (
        <div className=" text-lg w-full hidden md:flex justify-between items-center md:justify-between h-20 md:h-24 px-4 md:px-12 ">
            <div className="flex-1 hidden md:flex justify-start">
                <Logo path="Image/Logo.png" />
            </div>
            <div className="flex-3 text-black relative">
                <i className="fa-solid fa-bars md:!hidden block"></i>
                <ul className="hidden p-0 absolute md:flex items-center md:justify-between gap-4 md:gap-7 md:relative">
                    <MenuList /> 
                </ul>
            </div>
            <div className="flex-1 text-black flex justify-end">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    )
}
export default HorizontalStyle
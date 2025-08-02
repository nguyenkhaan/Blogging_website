import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Logo from './Logo'
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
function NavbarBottomMenu() {
    return (
        <div className="flex-3 text-black relative">
            <i className="fa-solid fa-bars md:!hidden block"></i>
            <ul className="hidden p-0 absolute md:flex items-center md:justify-between gap-4 md:gap-7 md:relative">
                <li>Home</li>
                <li>Specials</li>
                <li>About</li>
                <li>Digest</li>
                <li>Announcements</li>
            </ul>
        </div>
    )
}
function NavbarBottom() 
{
    return (
        <div className=" text-lg w-full flex justify-between items-center md:justify-between h-20 md:h-24 px-4 md:px-12 ">
            <div className="flex-1 hidden md:flex justify-start">
                <Logo path="Image/Logo.png" />
            </div>
            <NavbarBottomMenu />
            <div className="flex-1 text-black flex justify-end">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    )
}
function Navbar() {
    return (
        <div className="w-full static top-0 text-white text-base h-30 md:h-36">
            <NavbarAbove />
            <NavbarBottom /> 
        </div>

    )
}
export default Navbar
import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './Logo'
function NavbarAbove() {
    return (
        <div>
            <div className="bg-blue-800 px-12 w-full h-12 flex items-center justify-between">
                <ul className="flex items-center p-0 gap-6 justify-between flex-3">
                    <li>Lorem ispum</li>
                    <li>Lorem ispum</li>
                    <li>Lorem ispum</li>
                    <li className="font-black">Lorem ispum dolor</li>
                </ul>
                <div className="flex-1"></div>
                <div className="flex-1 items-center flex justify-end gap-3 text-lg">
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
        <div className="flex-3 text-black">
            <ul className="p-0 flex items-center justify-between gap-7">
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
        <div className=" text-lg w-full flex items-center justify-between h-24 px-12 ">
            <div className="flex-1 flex justify-start">
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
        <div className="w-full static top-0 text-white text-base h-36">
            <NavbarAbove />
            <NavbarBottom /> 
        </div>

    )
}
export default Navbar
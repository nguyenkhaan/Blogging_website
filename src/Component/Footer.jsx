import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './Logo'
function Footer() {
    return (
        <div className="w-full static bottom-0 text-white text-base text-black h-46">
            <div className="flex h-24  items-center justify-between">
                <div className="flex-1 flex items-center gap-2 text-black justify-start">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-x-twitter"></i>
                </div>
                <Logo />
                <div className="flex-1 text-black items-center flex justify-end">
                    nguyenkhaan@loremipsum.com
                </div>
            </div>
            <span className="block w-full pb-5 border-solid border-b-1 border-b-black text-center mt-4 text-black text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsu</span>

        </div>
    )
}
export default Footer
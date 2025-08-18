import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

export default function SearchBoard() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className='flex flex-col w-full py-10 items-center'>
            <div className='w-[95%] max-w-[800px] h-14 rounded-[40px] border-2 flex justify-between items-center overflow-hidden'>
                <figure className=' !shrink-0 h-14 w-14 flex justify-center items-center'>
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </figure>

                <input type="text" className='flex-1 h-full outline-none' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search for blog' />

                <Link to={`/search?search=${searchInput}`} className='w-14 h-full shrink-0 flex items-center justify-center hover:opacity-90 text-white bg-[#193CB8] duration-100 cursor-pointer'>
                    <i class="fa-solid fa-arrow-right"></i>
                </Link>
            </div>


        </div>
    )
}
import React from 'react'
import ReactDOM from 'react-dom'
import Slider from '../Component/Slider';
import Navbar from '../Component/Navbar';
const slides = [
    "http://localhost:5173/Image/background-slider-1.jpg",
    "http://localhost:5173/Image/background-slider-2.jpg",
    "http://localhost:5173/Image/background-slider-3.jpg"
];
function Home() {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full h-70 my-auto mx-0">

                <Slider slides={slides} />
            </div>
        </div>
    )
}
export default Home
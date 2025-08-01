import React from 'react'
import ReactDOM from 'react-dom'
import Slider from '../Component/Slider';
import Navbar from '../Component/Navbar';
import TopBlog from '../Component/Home/Section3/TopBlog';
const slides = [
    "http://localhost:5173/Image/background-slider-1.jpg",
    "http://localhost:5173/Image/background-slider-2.jpg",
    "http://localhost:5173/Image/background-slider-3.jpg"
];
const topBlogData = [
    {
        title: 'Viet Blog that de dang',
        subblog: [
            'Hoc viet blog voi toi #1',
            'Hoc viet blog voi toi #2'
        ]
    },
    {
        title: 'Viet Blog that de dang',
        subblog: [
            'Hoc viet blog voi toi #1',
            'Hoc viet blog voi toi #2'
        ]
    },
    {
        title: 'Viet Blog that de dang',
        subblog: [
            'Hoc viet blog voi toi #1',
            'Hoc viet blog voi toi #2'
        ]
    },
]
function Home() {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="content">
                <Slider slides={slides} />
            </div>
            <div className="content">
                <TopBlog blogs = {topBlogData}/>
            </div>
        </div>
    )
}
export default Home
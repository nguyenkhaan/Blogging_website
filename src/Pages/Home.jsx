import React from 'react'
import ReactDOM from 'react-dom'
import Slider from '../Component/Slider';
import Navbar from '../Component/Navbar';
import TopBlog from '../Component/Home/Section3/TopBlog';
import Section4 from '../Component/Home/Section4/Section_4';
import Form from '../Component/Home/Section5/Form';
import Footer from '../Component/Footer';
const slides = [
    "http://localhost:5173/Image/background-slider-1.jpg",
    "http://localhost:5173/Image/background-slider-2.jpg",
    "http://localhost:5173/Image/background-slider-3.jpg"
];
const topBlogData = [  //Dữ liệu cho section3, bộ 3 Blog nổi tiếng 
    {
        title: 'Viet Blog that de dang',   //title 
        subblog: [  //title của các blog con liên quan 
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
    //1. navbar 2. Slider 3. Section 3 - Blogs 4. Section4  5. Section 5 - Form 
    return (
        <div className='w-full'>
            <Navbar />
            <div className="content">
                <Slider slides={slides} />  
            </div>
            <div className="content">
                <TopBlog blogs = {topBlogData}/>
            </div>
            <div className = "content bg-gray-200">
                <Section4 /> 
            </div>
            <div className = "content">
                <Form /> 
            </div>
            <Footer /> 
        </div>
    )
}
export default Home
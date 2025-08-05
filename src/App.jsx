import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Pages/Layout'
import Profile from './Pages/Profile'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {
    return (
        <div className='w-full relative'>
            <Navbar />
            {/* { <Home /> } */}
            {/* { <InnerBlog></InnerBlog> } */}
            {/* <Login />  */}
            {/* <Layout />  */}
            <div className="content">
                <Profile />

            </div>
            <Footer />
        </div>
    )
}
export default App
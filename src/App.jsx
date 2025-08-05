import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Pages/Layout'
import Profile from './Pages/Profile'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import UserDashboard from './Pages/UserDashboard'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Routes/routes'

function App() {
    return (
        <div className='w-full relative'>
            <Navbar />
            {/* { <Home /> } */}
            {/* { <InnerBlog></InnerBlog> } */}
            {/* <Login />  */}
            {/* <Layout />  */}
            <div className="content">
                {/* <UserDashboard /> */}
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.element />} />
                    ))}
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default App
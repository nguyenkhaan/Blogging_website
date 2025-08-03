import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { publicRoutes as router } from '../Routes/routes'
import { useLocation } from 'react-router-dom'   //Su dung useLocation de lay address / path hien tai tren thanh url 
function Layout() {
    const location = useLocation();
    const hideElementUrls = ['/login' , '/register']
    return (
        <>
            {!hideElementUrls.includes(location.pathname) && <Navbar />}
            <Routes>
                {router.map(({ path, role, element }) => {
                    return <Route path={path} element={React.createElement(element)}></Route>
                })}
            </Routes>
            {!hideElementUrls.includes(location.pathname) && <Footer />}
        </>
    )
}
export default Layout
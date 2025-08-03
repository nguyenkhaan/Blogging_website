import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
function MenuList() {
    return (
        <>
            <Link to="/"><li>Home</li></Link>
            <Link to="/blog"><li>Blogs</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/dashboard"><li>Dashboard</li></Link>
            <Link to="/"><li>Announcements</li></Link>
        </>
    )
}
export default MenuList
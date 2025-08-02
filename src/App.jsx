import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home'
import InnerBlog from './Pages/InnerBlog'
import UserDashboard from './Pages/UserDashboard'
import { User } from 'react-feather'
function App() {
    return (
        <div className='w-full relative overflow-y-scroll'>
            {/* { <Home /> } */}
            {/* {<InnerBlog></InnerBlog>} */}
            <UserDashboard></UserDashboard>
        </div>
    )
}
export default App
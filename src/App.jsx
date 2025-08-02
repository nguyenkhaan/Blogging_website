import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home'
import InnerBlog from './Pages/InnerBlog'
import Login from './Pages/Login'
function App() {
    return (
        <div className='w-full relative'>
            {/* { <Home /> } */}
            {/* { <InnerBlog></InnerBlog> } */}
            <Login /> 
        </div>
    )
}
export default App
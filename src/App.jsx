import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home'
import InnerBlog from './Pages/InnerBlog'
function App() {
    return (
        <div className='w-full relative overflow-y-scroll'>
            { <Home /> }
            {/* { <InnerBlog></InnerBlog> } */}
        </div>
    )
}
export default App
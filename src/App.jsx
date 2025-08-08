import React from 'react'
import ReactDOM from 'react-dom'
import Scroll from './Component/Scroll'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Routes/routes.jsx'
import Profile from './Pages/Profile.jsx'
function App() {
    return (
        <div className='w-full relative'>
            <Scroll />
            <Routes>
                {publicRoutes.map(({ path, role, element }, index) => {
                    return <Route key={index} path={path} element={element}></Route>
                })}
            </Routes>
        </div>
    )
}
export default App
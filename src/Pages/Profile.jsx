import React from 'react'
import ReactDOM from 'react-dom'

import Personal from '../Component/Profile/Personal'
import Frequency from '../Component/Profile/Frequency'
import Blogs from '../Component/Profile/Blogs'

import { totalAction } from '../Service/getHeatMapData'
const personalInformation = {
    name: 'Mguyen Kha An',
    email: 'nguyenkhaan2000000006@gmail.com',
    follows: 10,
    subscribers: 12,
    totalBlogs: 11
}
function Profile() {
    return (
        <div className="w-full grid min-h-screen grid-cols-16 gap-8 grid-rows-1">
            <Personal personalInformation={personalInformation} />
            <div className="col-span-12 min-h-80">
                <div className="py-8">
                    <Frequency /> 
                </div>
                <div className="py-4">
                    <Blogs />
                </div>
            </div>
        </div>
    )
}
export default Profile
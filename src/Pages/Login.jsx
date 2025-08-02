import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import LoginForm from '../Component/LoginForm'
import { FaGooglePlusG, FaFacebook, FaGithub } from "react-icons/fa";
function Icon() {
    return (
        <div className="flex my-8 items-center justify-center gap-8">
            <div className="p-3.5 bg-white border-solid border-2 border-gray-300 rounded-full">
                <FaGooglePlusG className='text-3xl text-blue-950' />
            </div>
            <div className="p-4 bg-white rounded-full border-solid border-2 border-gray-300">
                <FaFacebook className='text-3xl text-blue-950' />
            </div>
            <div className="p-4 bg-white rounded-full border-solid border-2 border-gray-300">
                <FaGithub className='text-3xl text-blue-950' />
            </div>
        </div>
    )
}
function Login() {
    useEffect(() => {
        document.getElementById('root').classList.add("full-screen-page");
        return (() => document.getElementById('root').classList.remove('full-screen-page'));
    }, [])
    return (
        <div className="w-full h-screen items-center justify-center flex">
            {/* Nửa bên trái - Background */}
            <div className="flex-1 h-full bg-no-repeat bg-cover gap-6 bg-center bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white font-bold">Hello Friends</h1>
                <p className="text-lg font-medium text-white">Enter you personal detail and start a jopurney with us</p>
                <button className="button-primary-des-1">SIGN UP</button>
            </div>

            {/* Nửa bên phải - Form đăng nhập */}
            <div className="flex-2 h-full flex bg-gray-100 flex-col items-center justify-center">
                <h1 className="text-5xl font-semibold text-blue-900 ">Sign In</h1>
                <Icon /> 
                <p className = "text-gray-600 mb-6">or use your account</p>
                <LoginForm />
            </div>
        </div>
    );
}
export default Login
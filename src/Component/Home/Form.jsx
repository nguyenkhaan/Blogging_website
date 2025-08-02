import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
function Form() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <h2 className="py-12 pt-16 text-4xl font-light block w-full text-center">
                LOREM ISPUM DOLORS
            </h2>
            <div className = "flex items-center text-base justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center mx-auto gap-6 text-base justify-evenly"
                >
                    <input 
                        {...register("email")}
                        className = "border-none w-90 h-12 bg-gray-200 p-4"
                        placeholder='Enter your email ^^'
                    ></input>
                    <button type="submit" className = "bg-blue-800 hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer font-semibold p-4 text-white text-center h-12 flex items-center justify-center">Send me</button>
                </form>

            </div>
            <span className = "pb-16 pt-8 block text-center italic w-full text-base ">Do you want to receive a small introduction about this website?</span>
        </>
    )
}
export default Form
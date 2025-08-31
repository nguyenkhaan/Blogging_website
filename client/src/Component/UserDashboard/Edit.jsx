import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import InputEdit from "./InputEdit";

export default function ({personalInfo , setPersonalInfo}) {
    const {register , handleSubmit , formState : {errors} , clearErrors} = useForm({
        mode: 'all', 
        reValidateMode: 'all' 
    })
    const avatarRef = useRef();
    const [avatar, setAvatar] = useState({preview : 'https://res.cloudinary.com/dikd164hg/image/upload/v1754925942/cld-sample-2.jpg'});
    const handleAvatarClick = () => {
        avatarRef.current.click();
    };
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file); //Su dung avatar.preview de xem truoc du lieu
    };
    // [GOI API DE CAP NHAT DU LIEU]
    const obSubmit = async (data) => {
        console.log('>>> Du lieu form: ' , {...data , avatar: avatar.preview}) 
        //GOI API DE CAP NHAT DU LIEU 

    }
    return (
        <>
            <form className="p-0 w-full" onSubmit={handleSubmit(obSubmit)}>
                <div className="flex my-2 justify-start items-end flex-1 gap-4">
                    <div
                        className="block w-60 cursor-pointer bg-cover bg-center bg-no-repeat h-60 border-solid border-gray-200 border-1 bg-blue-700 rounded-2xl "
                        style={{
                            backgroundImage: `url(${avatar.preview})`,
                        }}
                        onClick={handleAvatarClick}></div>
                    <input
                        type="file"
                        ref={avatarRef}
                        className="w-0 h-0"
                        onChange={handleAvatarChange}
                    />
                    <button
                        className="rounded text-sm bg-gray-200 border-gray-300 px-2 py-1 cursor-pointer border-1"
                        onClick={handleAvatarClick}
                        type="button">
                        Broswer...
                    </button>
                </div>
                <div className="w-full flex gap-8">
                    <InputEdit label="Username" type="text" name = "name" handleInput={{register , errors , clearErrors}}  value = {personalInfo.name}/>
                </div>
                <div className="w-full flex gap-8">
                    <InputEdit label="Old Password" type="password" name = "old_password" handleInput={{register , errors , clearErrors}} value = {personalInfo.password}/>
                    <InputEdit label="New Password" type="password" name = "new_password" handleInput={{register , errors , clearErrors}}  value = {personalInfo.password}/>
                </div>
                <div className="w-full flex gap-6 items-center justify-end mt-6">
                    <button className=" py-2 px-6 rounded-lg text-lg text-semibold cursor-pointer  text-blue-800 border-2 border-solid border-blue-800">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className=" py-2 px-6 rounded-lg text-lg text-semibold cursor-pointer text-white border-2 border-solid bg-blue-800 border-blue-800">
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Edit from './Edit'
import { getUserPersonalInformation } from "../../Service/getUserPersonalInformation";
import { getURLQuery } from "../../Service/getURLQuery";

export default function ProfileEditBoard() 
{
    const [personalInfo , setPersonalInfo] = useState({  //State chua thong tin ve personal info hien tai 
        name: '24520059@gmail.com', 
        password: '123456', 
        avatar: ''
    })
    const location = useLocation() 

    // [CALL API DE LAY DU LIEU BAN DAU]
    useEffect(() => {
        const id = getURLQuery(location).get('id') 
        getUserPersonalInformation(id).then((data) => {
            setPersonalInfo(data.data.data)
        })
    } , [])
    return (
        <div className="w-full">
            <div className="w-full h-full bg-white md:shadow-xl/30 flex items-center flex-col justify-center rounded-[5px] p-10">
                <h2 className="text-[28px] font-[600] shrink-0 text-black">
                    Edit Profile
                </h2>
                <Edit personalInfo = {personalInfo} setPersonalInfo={setPersonalInfo}></Edit>
            </div>
        </div>
    );
}

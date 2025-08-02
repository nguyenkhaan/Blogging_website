import React from 'react'
import ReactDOM from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { validationRules as rules } from '../Service/getValidationRules'  //Import rules cho từng trường 
function Input({
    placeholder = 'Enter',
    name,
    handleInput //handleInput chính là useForm được truyền vào để xử lí Form 
}) {
    //Truong nay khong duoc de trong, dung dinh dang gmail, 
    const { register, errors, clearErrors } = handleInput;
    const rule = rules[name] //Lấy ra rule tương ứng với name 
    return (
        <div className="flex justify-start items-start flex-col">
            <label htmlFor={name} className="text-base text-gray-600 mb-2">{name}:</label>
            <input
                placeholder={placeholder}
                className="text-gray-600 rounded-lg w-120 text-lg bg-gray-300 py-4 px-4 outline-0"
                id={name}
                type={(name == 'Password') ? `password` : `text`}
                {...register(name, rule)}
            // onChange={() => clearErrors(name)}
            // onFocus={() => clearErrors(name)}   Tại vì xóa lỗi quá sớm nên không thể thấy được sự xuất hiện của lỗi 
            >

            </input>
            {/**Thẻ hiển thị lỗi khi người dùng nhập giá trị không hợp lệ vào Input */}
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => {
                    return <p className="text-red-400 italic text-sm mt-1">*{message}*</p>
                }}
            />
        </div>
    )
}
function LoginForm() {
    const [loginState, setLoginState] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (loginState == 1) {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }, [loginState])
    const onSubmit = (data) => {
        setLoginState(1);   //Đăng nhập thành công 
        console.log(data);  //hiển thị thông tin gửi về 
    }
    const onError = () => {
        setLoginState(-1);   //Đăng nhập thất bại 
    }
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        mode: 'all',  //Báo lỗi trong tất cả các trường hợp 
        reValidateMode: "all"   //validation lại một lần nữa, register: đăng kí, trong register có cascx validation rules dùng để Validation
        //Mỗi khi validation bị lỗi, nó sẽ hiển thị ra ErrorMessage Component tương ứng của ô input 
        //cùng với gọi hàm State nội bộ 
        //clearError: xóa lỗi 
    });
    return (
        <form className="flex flex-col justify-center items-center gap-6 mt-4" onSubmit={handleSubmit(onSubmit, onError)}>
            <Input
                placeholder="✉️ Email"
                name="Email"
                handleInput={{ register, errors, clearErrors }}    //Truyền các thuộc tính cần thiểt để xử lí input của useForm vào    
            />
            <Input
                placeholder="⚷ Password"
                name="Password"
                handleInput={{ register, errors, clearErrors }}
            />
            {/**Chuyển đến trang đặt lại mật khẩu - sẽ code sau */}
            <Link to="/"><span className="text-gray-600 underline text-xl mt-4">Forget your password? </span> </Link>
            {/**Button submit form*/}
            <button type="submit" className="button-primary-des-2">Đăng Nhập</button>
            <span className = "italic text-base">{(loginState == 0) ? '' : ((loginState == 1) ? '🥰 Đăng nhập thành công 🥰' : '😞 Đăng nhập thất bại 😞')}</span>
        </form>
    )
}
export default LoginForm
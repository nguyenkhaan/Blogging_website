//Loi o login Form => 
/**
 * Sửa lại email thành username -> Chỉnh sửa sau (Tiến độ xử lí: 0%)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Input from '../Input'
import { sendLoginData } from '../../Feature/sendLoginData'
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
    const onSubmit = async (data) => {
        //Xử lí đăng nhập, giá trị đăng nhập sẽ được gửi về Form 
        console.log('>>>Check data: ' , data); //Thong tin dang nhap gui ve va nhan duoc cai nay 
        const {Email , Password} = data 
        const res = await sendLoginData(Email , Password)
        .then(data => {
            if (data.data.code == -1) onError() 
                else if (data.data.code == 2) onSuccess() 
        }) 
    }
    const onSuccess = () => {
        setLoginState(1);
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
        <form className="flex flex-col justify-center items-center gap-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
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
            <Link to="/"><span className="text-blue-900 underline text-lg md:text-xl mt-4">Forget your password? </span> </Link>
            <span className="text-gray-600 text-lg md:text-xl">
                Chưa có tài khoản?
                <Link to="/register"><span className="underline text-lg md:text-xl text-semibold mx-2 inline-block text-blue-900">Đăng kí ngay</span></Link>
            </span>
            {/**Button submit form*/}
            <button type="submit" className="button-primary-des-2">Đăng Nhập</button>
            <span className={`italic text-base ${(loginState > 0) ? 'text-blue-900' : 'text-red-500'}`} >{(loginState == 0) ? '' : ((loginState == 1) ? '🥰 Đăng nhập thành công 🥰' : '😞 Đăng nhập thất bại 😞')}</span>
        </form>
    )
}
export default LoginForm
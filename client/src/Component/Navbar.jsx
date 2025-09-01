import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HorizontalStyle from "./HorizontalStyle";
import VerticalStyle from "./VerticalStyle";
import AccountIcon from "./AccountIcon";
import { getTokenInformation } from "../Service/tokenExtract";
import { getUserPersonalInformation } from "../Service/getUserPersonalInformation";

function NavbarAbove() {
    const [login, setLogin] = useState(false); //Xác định xem có đăng nhập hay không
    const [tokenData, setTokenData] = useState({
        id: 0, //Dữ liệu mẫu, chính là admin tui đó
        name: "Nguyễn Khả An",
        email: "nguyenkhaan2006@gmail.com",
        avatar: "https://res.cloudinary.com/dikd164hg/image/upload/v1754925942/cld-sample-2.jpg", //Avtar mặc định, được lưu trữ trên cloud
    }); //Dữ liệu được lưu trong jwt Token - Login sẽ được tải vào đây
    
    useEffect(() => {
        if (localStorage.loginToken) {
            setLogin(true);
            const tokenInformation = getTokenInformation(
                //CALL API DE LAY DU LIEU NGUOI DUNG, JWT TOKEN CHI MANG USERID
                localStorage.getItem("loginToken")
            ); //Thông tin chiết xuất ra từ token
            const id = tokenInformation.payload.id; //Lay ra id nguoi
            console.log('>>> Check id: ' , tokenInformation) 
            const res = getUserPersonalInformation(id).then(
                (data) => {
                    console.log('>>> Check data: ' , data) 
                    setTokenData({ ...data.data.data });
                }
            ); //Giải dữ liệu nhận được vào state
            setTokenData({ ...tokenInformation.payload });
        } else setLogin(false);
    }, []);

    return (
        <div>
            <div className="bg-blue-800 px-4 md:px-12 w-full h-12 flex items-center justify-between">
                <ul className="flex text-sm md:text-base items-center p-0 gap-6 md:justify-between flex-3">
                    <li>Lorem ispum</li>
                    <li>Lorem ispum</li>
                    <li>Lorem ispum</li>
                    <li className="font-black">Lorem ispum dolor</li>
                </ul>
                <div className="flex-1 hidden md:block"></div>
                <div className="flex-2 hidden items-center md:flex justify-end gap-3 text-lg">
                    {login == false ? (
                        <>
                            {/* Nếu không đăng nhập thì hiển thị các icon */}
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                        </>
                    ) : (
                        //Đăng nhập rồi thì hiển thị icon Account
                        <span className="text-sm font-semibold">
                            {tokenData.name}
                        </span>
                    )}
                    {login == false ? (
                        <>
                            <Link to="/register">
                                <motion.span
                                    className="text-lg font-semibold block hover:cursor-pointer hover:underline mr-4"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}>
                                    Đăng ký
                                </motion.span>
                            </Link>
                            <Link to="/login">
                                <motion.span
                                    className="text-lg font-semibold block hover:cursor-pointer hover:underline"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}>
                                    Đăng nhập
                                </motion.span>
                            </Link>
                        </>
                    ) : (
                        <AccountIcon
                            id={tokenData.id}
                            avatar={tokenData.avatar}
                            name={tokenData.name}
                            loginState={setLogin}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
function Navbar() {
    return (
        <div className="w-full static top-0 text-white text-base h-30 md:h-36">
            <NavbarAbove />
            <div className="w-full h-20 md:h-24">
                {/*  Tùy vào loại màn hình mà chỉ một trong hai Horizontal Style và Vertical Style được phép hiển thị. Một bên là md:hiden thì bên kia md:block... */}
                <HorizontalStyle />
                <VerticalStyle />
            </div>
        </div>
        /**Phai ho tro them bang Framer Motion de tao ra the div Doc  */
    );
}
export default Navbar;

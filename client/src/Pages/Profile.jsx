import React from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import { ChevronLeft } from 'react-feather'
import { ChevronRight } from 'react-feather'
import Personal from '../Component/Profile/Personal'
import Frequency from '../Component/Profile/Frequency'
import Blogs from '../Component/Profile/Blogs'
import { totalAction } from '../Service/getHeatMapData'
import { getUserBlogs } from '../Service/getUserBlogs'
let personalInformation = {
    name: 'Mguyen Kha An',
    email: 'nguyenkhaan2000000006@gmail.com',
    follows: 10,
    subscribers: 12,
    totalBlogs: 11
}
function Profile() {
    const [totalPages, setTotalPages] = useState(0);
    const [userBlogs, setUserBlogs] = useState([]);
    const [currItems, setCurrItems] = useState([]); //Cac phan tu hien tai 
    const [page, setPage] = useState(1);   //Trang dau tien 
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    }
    useEffect(() => { //FAKE CALL API de goi userBlogs, no bi faile o lan goi dau tein truoc khi render 
        setUserBlogs(getUserBlogs(1));
    }, [])
    useEffect(() => {  //Chay lan dua tien khi component duoc mount nen dan toi bi fail 
        setTotalPages(Math.ceil(userBlogs.length / 9))
        setCurrItems(userBlogs.slice(1, 10));
    }, [userBlogs])
    useEffect(() => {
        setCurrItems(userBlogs.slice(9 * (page - 1), 9 * (page - 1) + 9));
    }, [page])
    return (
        <div className="w-full grid min-h-screen grid-cols-16 gap-8 grid-rows-1">
            <Personal personalInformation={personalInformation} />
            <div className="col-span-16 2xl:col-span-12 items-center min-h-80">
                <div className="hidden 2xl:block py-8">
                    <Frequency />
                </div>
                <div className="py-4 max-xl:w-screen px-6 2xl:px-0 max-w-[1280px]">
                    <Blogs userBlogs={currItems} />
                </div>
                <div className = "w-screen max-w-[1280px] 2xl:w-full flex items-center justify-center mt-4">
                    <ReactPaginate
                        nextLabel="Next"
                        onPageChange={handlePageClick}   //Khi click vao cac chuyen trang Button se goi ham nay voi tham so selected dai dien cho so trang vua moi bam 
                        pageRangeDisplayed={3}   //display bao nheiu trang thi xuat hien dau cham 
                        marginPagesDisplayed={2}
                        pageCount={totalPages}  //Tong so trang muon hien thi 
                        previousLabel='Previous'   //Nut previus
                        pageLinkClassName="2xl:p-4 p-2 border border-gray-300 cursor-pointer justify-center flex items-center flex-shrink-0 min-w-6 h-7 rounded hover:bg-gray-200 transition"
                        //class Cho cac button chuyen trang co danh so 
                        // previousClassName="page-item"
                        previousLinkClassName="p-4 p-2 border border-gray-300 cursor-pointer justify-center flex items-center flex-shrink-0 min-w-6 h-7 rounded hover:bg-gray-200 transition"
                        //class cho cac button chuyen trang Previous < 
                        // nextClassName="page-item"
                        nextLinkClassName="2xl:p-4 p-2 border border-gray-300 justify-center cursor-pointer flex items-center flex-shrink-0 min-w-6 h-7 rounded hover:bg-gray-200 transition"
                        //Class cho cac button chuyen trang Next > 
                        breakLabel="..."
                        breakClassName="page-item"
                        //break label, ... khi co qua nhieu trang hay dung ki hieu gi khac ? de ngan cach cung duoc 
                        breakLinkClassName="page-link"
                        containerClassName="pagination flex items-center text-blue-600 text-xl justify-center gap-1"
                        //Toan bo container 
                        activeClassName="rounded font-semibold text-white bg-blue-600"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}
export default Profile
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { searchBlog } from '../../Service/searchBlog';
import { SearchResult } from './SearchResult';
export default function FilterBar() {
    const [searchParams] = useSearchParams();
    const blogType = searchParams.get('blogType');
    const order = searchParams.get('order');

    const [searchInput, setSearchInput] = useState('');
    const [filterExpanded, setFilterExpanded] = useState(false);
    const [searchResult , setSearchResult] = useState({}) 
    const catagories = [
        {
            content: 'All',
            blogType: 'all',
        },
        {
            content: 'AI',
            blogType: 'ai',
        },
        {
            content: 'Web Development',
            blogType: 'web-development',
        },
        {
            content: 'IT market',
            blogType: 'it-market',
        },
    ]

    const filter = [
        {
            content: "None",
            order: 'none',
        },
        {
            content: "A-Z",
            order: 'a-z',
        },
        {
            content: "Z-A",
            order: 'z-a',
        },
        {
            content: "Lastest",
            order: 'lastest',
        },
    ]

    useEffect(() => {
        setSearchInput(searchParams.get('search'))  //Moi khi bam nut thi no se thay doi searchInput 
    }, [])

    //to={`/search?search=${searchInput}&blogType=${blogType}&order=${order}`} 
    useEffect(() => {
        const search = searchParams.get('search')
        if (search) 
        {
            searchBlog(search).then(data => {
                console.log(data.data.dataSearch)
                setSearchResult({dataShow: [...data.data.dataSearch] , searchInput: search})
            }) 
        }
    } , [searchParams.get('search')])  //Khi search Paremas thay doi thi goi lai API 
    useEffect(() => {   
        //Khi order hoac blogType thay dopi thi thuc hien viec xu li 
    } , [blogType , order])
    return (
        <>
            <div className='w-[95%] max-w-[600px] h-14 rounded-[40px] border-2 flex justify-between items-center overflow-hidden'>
                <figure className=' !shrink-0 h-14 w-14 flex justify-center items-center'>
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </figure>

                <input type="text" className='flex-1 h-full outline-none' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search for blog' />

                <Link to={`/search?search=${searchInput}&blogType=${blogType}&order=${order}`} className='w-14 h-full shrink-0 flex items-center justify-center hover:opacity-90 text-white bg-[#193CB8] duration-100 cursor-pointer'>
                    <i class="fa-solid fa-arrow-right"></i>
                </Link>
            </div>

            <div className='w-full flex justify-between lg:items-center mt-10 lg:flex-row flex-col gap-5 px-10 border-b-1 border-black/50 pb-10'>
                <div className='w-full grow-1 flex items-center gap-5'>
                    {catagories.map((item, index) => <Link to={`/search?search=${searchInput}&blogType=${item.blogType}&order=${order}`} key={index} className={`h-10 flex justify-center items-center w-fit px-5 rounded-[20px] ${blogType == item.blogType ? "bg-[#193CB8] text-white" : " "} duration-200 cursor-pointer `}>{item.content}</Link >)}
                </div>

                <button onClick={() => setFilterExpanded(f => !f)} type='button' className='relative w-fit flex justify-between items-center gap-3 h-10 text-nowrap rounded-[20px] text-white bg-[#193CB8] px-4 font-[600] text-[16px] cursor-pointer'>
                    <i className="fa-solid fa-filter"></i>

                    {order == 'none' ? 'Sort order' : filter.map(item => (order == item.order && item.content))}

                    <i className={`fa-solid fa-angle-up duration-100 ${filterExpanded ? '' : 'rotate-180'}`}></i>
                    <div className={`rounded-[20px] absolute w-full h-fit text-black bg-white left-0 top-[110%] border-1 ${filterExpanded ? '' : 'scale-x-0'} overflow-hidden flex flex-col gap-3`}>
                        {filter.map((item, index) => <Link to={`/search?search=${searchInput}&blogType=${blogType}&order=${item.order}`} key={index} className='cursor-pointer hover:bg-[#193CB8] hover:text-white py-2'>{item.content}</Link>)}
                    </div>
                </button>
            </div>
            <SearchResult data={searchResult} /> 
        </>

    )
}
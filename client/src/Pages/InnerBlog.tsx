import React from "react";
import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactBox from "../Component/InnerBlog/ContactBox";
import SideBar from "../Component/InnerBlog/SideBar";
import MailBox from "../Component/InnerBlog/MailBox";
import { textToHTML } from "../Helper/textToHTML";
import { getURLQuery } from "../Service/getURLQuery";
import { getBlogInfo } from "../Service/getBlogInfo";
export default function InnerBlog() 
{
  const [blogInfo , setBlogInfo] = useState({
    title: '', 
    content: '', 
    blogID: '', 
    banner: '' 
  })
  const location = useLocation() 
  useEffect(() => {
      const blogID = getURLQuery(location).get('id') 
      getBlogInfo(blogID).then(data => {
        console.log(data.data.blogInfo) 
        setBlogInfo({
          banner: data.data.blogInfo.banner as string, 
          content: data.data.blogInfo.content as string, 
          blogID: blogID, 
          title: data.data.blogInfo.title 
        })
      })
  } , [])
  return (
    <div className="w-full bg-[#F2F5F8] ">
      <main className="w-full grid grid-cols-16 ">
        <figure className="flex justify-center items-center overflow-hidden max-h-70 col-span-16 relative">
          <img src = {blogInfo.banner} alt="banner-pic" />
          <h2 className="absolute text-white font-[700] text-[30px] bottom-[10%]">
            {blogInfo.title}
          </h2>
        </figure>

        <section className="col-span-2 justify-center pt-20 hidden md:flex">
          <ContactBox></ContactBox>
        </section>

        <section className="w-full col-span-16 md:col-span-9 bg-white p-10 md:shadow-xl/30">
          <article className="w-full flex flex-col gap-10 ">
            {textToHTML(blogInfo.content)}
          </article>
        </section>

        <section className="col-span-16 md:col-span-5 flex flex-col items-center pt-20 gap-5 md:gap-20">
          <SideBar></SideBar>
          <MailBox></MailBox>
        </section>

        <section className="col-span-16 h-200 mt-10 justify-center flex md:hidden">
          <ContactBox></ContactBox>
        </section>
      </main>
    </div>
  );
}

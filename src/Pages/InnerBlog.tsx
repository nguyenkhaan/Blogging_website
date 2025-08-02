import React from "react";
import ContactBox from "../Component/InnerBlog/ContactBox";
import SideBar from "../Component/InnerBlog/SideBar";
import MailBox from "../Component/InnerBlog/MailBox";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
export default function InnerBlog() {
  return (
    <div className="w-full bg-[#F2F5F8] ">
      { <Navbar></Navbar> }
      <main className="w-full grid grid-cols-16 ">
        <figure className="flex justify-center items-center overflow-hidden max-h-70 col-span-16 relative">
          <img src="/Image/background-slider-1.jpg" alt="banner-pic" />
          <h2 className="absolute text-white font-[700] text-[30px] bottom-[10%]">
            Blog title
          </h2>
        </figure>

        <section className="col-span-2 justify-center pt-20 hidden md:flex">
          <ContactBox></ContactBox>
        </section>

        <section className="w-full col-span-16 md:col-span-9 bg-white p-10 md:shadow-xl/30">
          <article className="w-full flex flex-col gap-10 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut tenetur eum non ex dolorum excepturi officia saepe assumenda,
              error libero, eos labore earum repellendus mollitia commodi,
              perferendis ipsum consectetur culpa numquam modi sunt ratione
              magni. Eveniet unde quasi iusto eligendi tenetur, totam aliquam
              odio beatae nulla dicta sequi asperiores magni amet non ex. Culpa
              ipsa accusamus aut commodi, corporis, facilis iusto molestias
              autem reiciendis doloremque aliquam cum vero molestiae labore
              inventore ad placeat saepe consequatur repudiandae quae
              perspiciatis! Recusandae voluptates ipsam quisquam soluta
              repudiandae harum fugit commodi deleniti ipsum quos pariatur rem
              quam rerum, quasi tempore dolorem iste inventore. Voluptate
              voluptatem autem iusto modi dignissimos illo neque voluptates
              officia quia ex quae molestias laborum inventore ipsa, ducimus ea,
              sunt quam fugiat. Quos pariatur, numquam optio, quo inventore,
              libero enim delectus autem eligendi aut praesentium assumenda
              expedita aliquid minus impedit eaque sit velit modi nulla error
              iste fugiat sunt! Consequatur magni voluptate pariatur voluptatum
              dolorum eos cupiditate molestias officiis ipsum, enim at maiores
              optio quidem quam aut eveniet quia nihil omnis repellendus
              reprehenderit? Quibusdam soluta quis sunt molestiae at incidunt,
              officia, dicta recusandae praesentium cum a voluptas aliquid
              maiores nostrum saepe distinctio veritatis, magnam iste laboriosam
              blanditiis accusantium. A, assumenda.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut tenetur eum non ex dolorum excepturi officia saepe assumenda,
              error libero, eos labore earum repellendus mollitia commodi,
              perferendis ipsum consectetur culpa numquam modi sunt ratione
              magni. Eveniet unde quasi iusto eligendi tenetur, totam aliquam
              odio beatae nulla dicta sequi asperiores magni amet non ex. Culpa
              ipsa accusamus aut commodi, corporis, facilis iusto molestias
              autem reiciendis doloremque aliquam cum vero molestiae labore
              inventore ad placeat saepe consequatur repudiandae quae
              perspiciatis! Recusandae voluptates ipsam quisquam soluta
              repudiandae harum fugit commodi deleniti ipsum quos pariatur rem
              quam rerum, quasi tempore dolorem iste inventore. Voluptate
              voluptatem autem iusto modi dignissimos illo neque voluptates
              officia quia ex quae molestias laborum inventore ipsa, ducimus ea,
              sunt quam fugiat. Quos pariatur, numquam optio, quo inventore,
              libero enim delectus autem eligendi aut praesentium assumenda
              expedita aliquid minus impedit eaque sit velit modi nulla error
              iste fugiat sunt! Consequatur magni voluptate pariatur voluptatum
              dolorum eos cupiditate molestias officiis ipsum, enim at maiores
              optio quidem quam aut eveniet quia nihil omnis repellendus
              reprehenderit? Quibusdam soluta quis sunt molestiae at incidunt,
              officia, dicta recusandae praesentium cum a voluptas aliquid
              maiores nostrum saepe distinctio veritatis, magnam iste laboriosam
              blanditiis accusantium. A, assumenda.
            </p>

            <figure className="w-full max-h-90 ">
              <img src="/public/Image/background-slider-1.jpg" alt="" />
            </figure>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut tenetur eum non ex dolorum excepturi officia saepe assumenda,
              error libero, eos labore earum repellendus mollitia commodi,
              perferendis ipsum consectetur culpa numquam modi sunt ratione
              magni. Eveniet unde quasi iusto eligendi tenetur, totam aliquam
              odio beatae nulla dicta sequi asperiores magni amet non ex. Culpa
              ipsa accusamus aut commodi, corporis, facilis iusto molestias
              autem reiciendis doloremque aliquam cum vero molestiae labore
              inventore ad placeat saepe consequatur repudiandae quae
              perspiciatis! Recusandae voluptates ipsam quisquam soluta
              repudiandae harum fugit commodi deleniti ipsum quos pariatur rem
              quam rerum, quasi tempore dolorem iste inventore. Voluptate
              voluptatem autem iusto modi dignissimos illo neque voluptates
              officia quia ex quae molestias laborum inventore ipsa, ducimus ea,
              sunt quam fugiat. Quos pariatur, numquam optio, quo inventore,
              libero enim delectus autem eligendi aut praesentium assumenda
              expedita aliquid minus impedit eaque sit velit modi nulla error
              iste fugiat sunt! Consequatur magni voluptate pariatur voluptatum
              dolorum eos cupiditate molestias officiis ipsum, enim at maiores
              optio quidem quam aut eveniet quia nihil omnis repellendus
              reprehenderit? Quibusdam soluta quis sunt molestiae at incidunt,
              officia, dicta recusandae praesentium cum a voluptas aliquid
              maiores nostrum saepe distinctio veritatis, magnam iste laboriosam
              blanditiis accusantium. A, assumenda.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut tenetur eum non ex dolorum excepturi officia saepe assumenda,
              error libero, eos labore earum repellendus mollitia commodi,
              perferendis ipsum consectetur culpa numquam modi sunt ratione
              magni. Eveniet unde quasi iusto eligendi tenetur, totam aliquam
              odio beatae nulla dicta sequi asperiores magni amet non ex. Culpa
              ipsa accusamus aut commodi, corporis, facilis iusto molestias
              autem reiciendis doloremque aliquam cum vero molestiae labore
              inventore ad placeat saepe consequatur repudiandae quae
              perspiciatis! Recusandae voluptates ipsam quisquam soluta
              repudiandae harum fugit commodi deleniti ipsum quos pariatur rem
              quam rerum, quasi tempore dolorem iste inventore. Voluptate
              voluptatem autem iusto modi dignissimos illo neque voluptates
              officia quia ex quae molestias laborum inventore ipsa, ducimus ea,
              sunt quam fugiat. Quos pariatur, numquam optio, quo inventore,
              libero enim delectus autem eligendi aut praesentium assumenda
              expedita aliquid minus impedit eaque sit velit modi nulla error
              iste fugiat sunt! Consequatur magni voluptate pariatur voluptatum
              dolorum eos cupiditate molestias officiis ipsum, enim at maiores
              optio quidem quam aut eveniet quia nihil omnis repellendus
              reprehenderit? Quibusdam soluta quis sunt molestiae at incidunt,
              officia, dicta recusandae praesentium cum a voluptas aliquid
              maiores nostrum saepe distinctio veritatis, magnam iste laboriosam
              blanditiis accusantium. A, assumenda.
            </p>
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
      <Footer /> 
    </div>
  );
}

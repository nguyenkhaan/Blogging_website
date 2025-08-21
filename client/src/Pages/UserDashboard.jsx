import React, { useState } from "react";
// import Navbar from "../Component/Navbar";
import SideBar from "../Component/UserDashboard/SideBar";
// import Footer from "../Component/Footer";
import PostsBoard from "../Component/UserDashboard/PostsBoard";
import BlogEditBoard from "../Component/UserDashboard/BlogEditBoard";

export default function UserDashboard() {
  const [currentBoard, setCurrentBoard] = useState("BlogEditBoard");

  return (
    <div className="flex flex-col">
      <main className="flex md:flex-row flex-col">
        <aside className="md:w-1/5 w-full">
          <SideBar currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}></SideBar>
        </aside>

        <section className="w-full md:w-4/5 md:px-10">
          {currentBoard === "PostsBoard" && <PostsBoard></PostsBoard>}
          {currentBoard === "BlogEditBoard" && <BlogEditBoard></BlogEditBoard>}
        </section>
      </main>
    </div>
  );
}

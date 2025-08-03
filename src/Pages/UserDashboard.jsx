import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import SideBar from "../Component/UserDashboard/SideBar";
import Footer from "../Component/Footer";
import PostsBoard from "../Component/UserDashboard/PostsBoard";

export default function UserDashboard() {
  const [currentBoard, setCurrentBoard] = useState("PostsBoard");

  return (
    <div className="flex flex-col">
      {/* <Navbar></Navbar> */}
      <main className="flex md:flex-row flex-col">
        <aside className="md:w-1/5 w-full">
          <SideBar currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}></SideBar>
        </aside>

        <section className="w-full md:w-4/5 md:px-10">
          {currentBoard === "PostsBoard" && <PostsBoard></PostsBoard>}
        </section>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

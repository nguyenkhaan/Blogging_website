import React, { useState, useEffect } from "react";

export default function PostsBoard() {

  const [postInput, setPostInput] = useState('');
  const [postDisplayCount, setPostDisplayCount] = useState(0);

  function handleSeeMore() {
    setPostDisplayCount(p => Math.min(p + 3, postData.length))
  }

  const postData = [
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'public/Image/background-slider-2.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur Be Vy Beu adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
    {
      banner: 'The end',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate cum dolores distinctio ea quisquam.',
    },
  ]

  useEffect(() => {
    setPostDisplayCount(Math.min(postData.length, 5));
  }, [])

  return <section className="w-full h-full bg-white md:shadow-xl/30 rounded-[5px] p-10 flex flex-col gap-10">
    <div className='flex justify-between items-center flex-col sm:flex-row gap-5'>
      <h2 className='text-[30px] font-[600] shrink-0 text-blue-900'>My posts</h2>

      <label htmlFor="" className='border-1 h-10 flex justify-between items-center rounded-[5px] w-60 overflow-hidden'>
        <input type="text" className='h-full w-full outline-none px-2' placeholder='Search post' value={postInput} onChange={(e) => setPostInput(e.target.value)} />
        <button type='button' className='w-10 h-10 shrink-0 bg-[#193CB8] text-white cursor-pointer hover:text-[17px] duration-100'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </label>
    </div>

    <ul className='flex flex-col gap-5 w-full justify-center items-center'>
      {postData.length < 1 && <div className='mt-20 font-[500] text-[25px] opacity-50'>You haven't post anything yet... </div>}
      {postData.slice(0, postDisplayCount).map((post, index) => <Post post={post} key={index}></Post>)}
      {postData.length > 5 && <div className='bg-[#193CB8] text-white px-5 py-2 rounded-[5px] cursor-pointer hover:opacity-90' onClick={handleSeeMore}>See more</div>}
    </ul>
  </section>;
}


function Post({ post }) {
  return (
    <div className='w-full md:min-h-30 shadow-lg flex flex-col md:flex-row gap-5 p-5 rounded-[5px] cursor-pointer border-1 overflow-hidden items-center'>
      <figure className=' md:h-30 md:w-30 shrink-0 overflow-hidden rounded-[5px] border-2'>
        <img src={post.banner} alt="Post banner" className='h-full' />
      </figure>

      <article className='w-full grow-1'>
        <h3 className='text-[18px] md:text-[20px] font-[500]'>{post.title}</h3>

        <p className='text-[14px] md:text-[15px]'>{post.description}</p>
      </article>

      <div className='w-full md:w-10 shrink-0 flex-row md:flex-col flex justify-between items-center h-full text-white '>
        <div className='w-8 h-8 rounded-[5px] bg-[#193CB8] flex justify-center items-center cursor-pointer duration-100 hover:text-[20px] hover:opacity-80 shrink-0 '>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>

        <div className='w-8 h-8 rounded-[5px] bg-[#ff0000] flex justify-center items-center cursor-pointer duration-100 hover:text-[20px] hover:opacity-80 shrink-0'>
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  )
}
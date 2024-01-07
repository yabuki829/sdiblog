import React from 'react'
import Image from "next/image";
export const SideBar = ({ tags }) => {
  return (
    <>
          <div className="bg-gray-200 p-4 md:m-4">
            <h2 className="text-center bg-blue-400 text-white font-bold">プロフィール</h2>
            <br />
            <div className="h-32 relative">
              <Image className="rounded-full" src={"/profile.jpg"} objectFit='contain' layout='fill'  ></Image>
            </div>
            <p className="text-center"> 藪木翔大</p>
          </div>
          
          <div className="bg-gray-200 p-4 md:m-4">
            <h2 className="text-center bg-blue-400 text-white font-bold">タグ一覧</h2>
            {tags.map((tag) => (
              <a href={`/tags/${tag.id}`}  key={tag.id} className="bg-green-500 px-2 py-1 mt-2 mx-1 rounded-full text-white inline-block hover:bg-green-400">{tag.name}</a>
             ))}
          </div>
    </>
  )
}

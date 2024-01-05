
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";

import { client } from "../libs/client";
import { SideBar } from "../components/SideBar";
import TypingText from '../components/TypeingText'
export async function getStaticProps(){
 const data = await client.get({endpoint:"blog"})
 const data_2 = await client.get({endpoint:"category"})
 console.log(data)
 console.log(data_2)
 return {
  props: {
    blogs:data.contents,
    tags: data_2.contents
  }
 }
}


export default function Home({blogs,tags}) {

  return (
    <div>
      <Header/>
      <div className="w-full bg-blue-900 p-4"> 
        <h1 className="text-white bg-black mx-2 p-2 "> 
          <TypingText text={"blogs = Blog.object.all()"} spped={40}/>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">

        <div className=" md:mx-auto bg-white p-2 md:w-3/5"> 
  
          
          <div className="flex flex-wrap p-2">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col w-full md:w-1/2 p-2 md:hover:scale-105  hover:shadow-black">
                <Link href={`blog/${blog.id}`} className="border rounded-lg p-4 shadow-lg ">
                 
                    <h1 className="text-xl font-bold">{blog.title}</h1>
                    <img  src={ `${blog.thumbnail.url}` } className=" rounded-md w-full object-cover"/>
                    <p className="bg-green-500 px-2 py-1 mt-2 rounded-full text-white inline-block">
                      {blog.category.name}
                    </p>
                 
                 
                </Link>
              </div>
            ))}
          </div>
        </div>



        <div className="w-full md:w-96 md:h-full "> 
          <SideBar  tags={tags} />
        
        </div>
      </div>
      <footer className="bottom-0">
        <h1>category</h1>
      </footer>
    </div>
  )
}


import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/image";
import { client } from "../../libs/client";
import TypingText from '../../components/TypeingText'
import { SideBar } from "../../components/SideBar";

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "category" });

  const paths = data.contents.map((tag) => ({
    params: { id: tag.id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps(context){
  const category_id = context.params.id
 
  const data = await client.get({
      endpoint:"blog", 
      queries: { filters: `category[equals]${category_id}` 
    }}
  )

  console.log(data)
  const data_2 = await client.get({endpoint:"category"})

  return {
      props :{
        blogs:data.contents,
        tags: data_2.contents,
        category_id:category_id
      },
  }
}



export default function Home({blogs,tags,category_id}) {


  

  return (
    <div>
      <Header />
      <div className="w-full bg-blue-900 p-4"> 
        <p className="text-white bg-black mx-2 p-2 text-sm  "> 
          <TypingText text={"Blog.object.filter(category="+`${category_id})`} spped={60}/>
        </p>
      </div>
      <div className="flex flex-col md:flex-row ">

        <div className=" md:mx-auto bg-white p-2 md:w-3/5"> 

          <div className="flex flex-wrap p-2">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col w-full md:w-1/2 p-2 md:hover:scale-105  hover:shadow-black">
                <Link href={`/blog/${blog.id}`} className="border rounded-lg p-4 shadow-lg ">
                 
                    <h1 className="text-xl font-bold whitespace-nowrap truncate">{blog.title}</h1>
                    <br />
                    <img src={ `${blog.thumbnail.url}` } className=" rounded-md "/>
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
   
    </div>
  )
}

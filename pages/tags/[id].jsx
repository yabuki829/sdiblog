
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/image";
import { client } from "../../libs/client";
import TypingText from '../../components/TypeingText'

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
        <h1 className="text-white bg-black mx-2 p-2 "> 
          <TypingText text={"Blog.object.filter(category="+`${category_id})`} spped={40}/>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">

        <div className=" md:mx-auto bg-white p-2 md:w-3/5"> 

          <div className="flex flex-wrap p-2">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col w-full md:w-1/2 p-2 md:hover:scale-105  hover:shadow-black">
                <Link href={`/blog/${blog.id}`} className="border rounded-lg p-4 shadow-lg ">
                 
                    <h1 className="text-xl font-bold">{blog.title}</h1>
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
          <div className="bg-gray-200 p-4 md:m-4">
            <h1 className="text-center bg-blue-400 text-white font-bold">プロフィール</h1>
            <br />
            <div className="h-32 relative">
              <Image className="rounded-full" src={"/profile.jpg"} objectFit='contain' layout='fill'  ></Image>
            </div>
            <h1 className="text-center"> 藪木翔大</h1>
          </div>
          
          <div className="bg-gray-200 p-4 md:m-4">
            <h1 className="text-center bg-blue-400 text-white font-bold">タグ一覧</h1>
            {tags.map((tag) => (
              <a href={`/tags/${tag.id}`}  key={tag.id} className="bg-green-500 px-2 py-1 mt-2 mx-1 rounded-full text-white inline-block">{tag.name}</a>
             ))}
          </div>
        
        </div>
      </div>
   
    </div>
  )
}

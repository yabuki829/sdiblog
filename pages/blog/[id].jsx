import Head from "next/head";
import { client } from "../../libs/client";
import Link from "next/link";
import Header from "../../components/Header";
import Moment from 'react-moment'
import TypingText from '../../components/TypeingText'
import Footer from "../../components/Footer";
export async function getStaticPaths(){
    const data =  await client.get({endpoint:"blog"})
    const paths = data.contents.map((content) => `/blog/${content.id}`)
    return {
        paths,
        fallback:false,
    }
}
export async function getStaticProps(context){

    const id = context.params.id
    const postData =  await client.get({endpoint:"blog",contentId:id})
    return {
        props :{
            postData,
        },
    }
}

function DateString({ dateString }) {
  console.log("デートストリング",dateString)
  return format(dateString, 'yyyy-MM-dd (EEEE) HH:mm:ss', {locale:ja}) 
};

export default function Blog({ postData }) {
  return (
    <div className="bg-gray-100 min-h-screen styles.heading">
      <Header/>
      <div className="w-full bg-blue-900 p-4"> 
        <p className="text-white bg-black mx-2 p-2"> 
          <TypingText  text={` Blog.object.get(id=${postData.id})`} spped={100}/>
        </p>
      </div>
      <div className="bg-white md:w-2/3 mx-auto p-6 md:p-8 md:my-12 md:rounded-3xl ">
        
        <p className="text-xl md:text-4xl font-bold  ">{postData.title}</p>
       
        <div className="border-b-4 w-16 border-black rounded"></div>
        <br />
        <a href={`/tags/${postData.category.id}`} className="bg-green-500 px-2 py-1 rounded-full text-white hover:bg-green-400">{postData.category.name}</a>
        <p className="text-right"><Moment format="YYYY年MM月DD日HH:mm">{postData.createdAt}</Moment></p>
        <div className="mx-3" dangerouslySetInnerHTML={{__html :postData.body}}/>
        <br />
       
        
      </div>

      <br /> 
      <div className="flex justify-center">
        <Link className='bg-gray-50 hover:text-gray-700 hover:bg-green-400 border-green-300 border-4 px-8 py-4 rounded-full ' href={"/"}>  <span className='text-xl font-bold'>  一覧へ戻る</span> </Link>
      </div>
      <br />
      <Footer/>
    </div>
  );
}

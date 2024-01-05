import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TypingText from '../components/TypeingText'


const Header = (title) => {
  return (
    <div className='px-3 pt-3  items-center h-50 w-full bg-blue-900 text-white  '>
      <Link className='' href={"/"}>  
        <h1 className='text-3xl font-bold  '> <TypingText  text="＜ SDI Blog ＞" spped={100} /> </h1> 
      </Link>
      <br />
      
      <h1 className=' py-2'>
        Thank you for watching.</h1>
      <h1 className='py-2'>This is a blog where we post python and other programming articles </h1>
      <h1 className='pt-2 '> No useful knowledge on this blog.</h1>
 
    </div>
  )
}

export default Header
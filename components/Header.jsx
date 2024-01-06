import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TypingText from '../components/TypeingText'


const Header = (title) => {
  return (
    <div className='px-3 pt-3  items-center h-50 w-full bg-blue-900 text-white  '>
      <Link className='' href={"/"}>  
        <p className='text-3xl font-bold  '> <TypingText  text="＜ SDI Blog ＞" spped={100} /> </p> 
      </Link>
      <br />
      
      <p className=' py-2'>
        Thank you for watching.</p>
      <p className='py-2'>This is a blog where we post python and other programming articles </p>
      <p className='pt-2 '> No useful knowledge on this blog.</p>
 
    </div>
  )
}

export default Header
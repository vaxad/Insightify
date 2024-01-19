"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [nav, setnav] = useState(false)
  const [side, setside] = useState(false)


  return (
    <div className=' w-full fixed top-0 z-40 h-[8vh] py-4 px-8 bg-slate-950 bg-opacity-60 flex flex-row justify-between items-center overflow-x-clip'>
        <div className='flex cursor-pointer flex-row justify-center items-center gap-2 h-full'>
            <img className=' w-6 h-6 rounded-full' src='https://img.icons8.com/ios/128/ffffff/logo.png'></img>
            <h6  className=' text-xl font-bold'>logo</h6>
        </div>
        <div className={`fixed top-0 right-0 h-screen w-full md:w-fit z-30 px-24 py-12 flex gap-8 flex-col justify-center items-center bg-slate-900 ${side?" translate-x-0 duration-700 delay-300":" translate-x-full duration-300 delay-100"} transition-all  `} >
        <img onClick={()=>{setside(false)}} className=" cursor-pointer w-8 h-8 absolute top-6 right-6" src="https://img.icons8.com/ios/50/ffffff/multiply.png" alt="multiply"/>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Card'}>Card</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Carausel'}>Carausel</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Form'}>Form</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Footer'}>Footer</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Marquee'}>Marquee</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Slider'}>Slider</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Particles'}>Particles</Link>
          <Link onClick={()=>{setside(false); setnav(false)}} className=" font-medium hover:font-bold p-1" href={'/components/Parallax'}>Parallax</Link>
        </div>
        <div className=' md:flex flex-row  gap-8 justify-center items-center hidden '>
            <Link href={'/'} className=' hover:drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.0)] cursor-pointer transition-all font-medium text-md'>Home</Link>
            <button onClick={()=>{setside(!side)}} className=' hover:drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.0)] cursor-pointer transition-all font-medium text-md'>Components</button>
            <a target="_blank" href={'https://vaxad.vercel.app'} className=' hover:drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.0)] cursor-pointer transition-all font-medium text-md'>About</a>
            <a target="_blank" href={'https://github.com/vaxad/vaxadUI'} className=' hover:drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.0)] cursor-pointer transition-all font-medium text-md'>Repository</a>
        </div>
        <button onClick={()=>{setnav(!nav)}} className={`z-50 md:hidden ${nav?"-rotate-90":" rotate-0"} transition-all delay-200 duration-700  p-2 rounded-lg text-2xl`}>
        <svg xmlns="http://www.w3.org/2000/svg"fill="#ffffff" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
</svg>
        </button>
        <div className={`flex flex-col ${nav?"translate-y-0":"-translate-y-full"} delay-200 duration-700 transition-all w-screen h-screen absolute top-0 right-0 bg-slate-400  gap-8 justify-center items-center md:hidden `}>
            <Link href={'/'} className='cursor-pointer transition-all font-medium text-md'>Home</Link>
            <button onClick={()=>{setside(!side)}} className='  cursor-pointer transition-all font-medium text-md'>Components</button>
            <a target="_blank" href={'https://vaxad.vercel.app'} className='  cursor-pointer transition-all font-medium text-md'>About</a>
            <a target="_blank" href={'https://github.com/vaxad/vaxadUI'} className='  cursor-pointer transition-all font-medium text-md'>Repository</a>
        </div>
    </div>
  )
}

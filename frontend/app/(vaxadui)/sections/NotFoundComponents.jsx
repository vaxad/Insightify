"use client"
import { useState } from 'react'
import { CopyBlock, dracula } from "react-code-blocks";


export default function NotFoundComponents() {
    const [showCode, setshowCode] = useState(false)
    const copyBlockProps = {
        text: `
<div className=" flex flex-col h-full min-h-[60vh] justify-center items-center">
    <img className=" w-32 h-32 my-8" src="https://i.imgflip.com/8bz0fz.jpg" alt="" />
    <h1 className="md:text-5xl text-3xl text-center font-semibold py-4 text-slate-900 ">Component Not Found </h1>
    <p className=' text-center text-slate-800'>Make your own and add to <span className=" font-semibold hover:underline transition-all"><a target="_blank" href="https://github.com/vaxad/vaxadUI">vaxadUI</a></span></p>
</div>
`,
        theme: dracula,
        language: "jsx",
        showLineNumbers: true,
        startingLineNumber: 1,
        wrapLines: false,
        wrapLongLines: false,
    };
    return (
        <div className='pt-[10vh]  flex flex-col gap-4 justify-center items-center min-h-screen bg-violet-800 w-full px-6 md:px-24 py-8'>
            <div className=' flex flex-col bg-slate-300 rounded-md w-full '>
                <div className=' bg-slate-400 flex w-full justify-between items-center rounded-t-md border-b border-slate-100 px-5 py-2'>
                    <h1 className=' text-2xl font-bold text-slate-900'>Hein ji?</h1>
                    <button onClick={() => setshowCode(!showCode)}>
                        {showCode ?
                            <img width="25" height="25" src="https://img.icons8.com/ios/50/000000/visible--v1.png" alt="visible--v1" />
                            : <img width="25" height="25" src="https://img.icons8.com/ios/50/000000/code--v1.png" alt="code--v1" />}
                    </button>
                </div>
                {showCode ?
                    <div className=' w-full h-full flex justify-start items-center flex-row overflow-x-scroll'>
                        <CopyBlock {...copyBlockProps} />
                    </div> :
                    <div className=' px-5 w-full h-full py-6 gap-5 flex flex-col justify-center items-center '>
                        <div className=" flex flex-col h-full min-h-[60vh] justify-center items-center">
                            <img className=" w-32 h-32 my-8" src="https://i.imgflip.com/8bz0fz.jpg" alt="" />
                            <h1 className="md:text-5xl text-3xl text-center font-semibold py-4 text-slate-900 ">Component Not Found </h1>
                            <p className=' text-center text-slate-800'>Make your own and add to <span className=" font-semibold hover:underline transition-all"><a target="_blank" href="https://github.com/vaxad/vaxadUI">vaxadUI</a></span></p>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

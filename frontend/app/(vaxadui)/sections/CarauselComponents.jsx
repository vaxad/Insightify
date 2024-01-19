"use client"
import { useState } from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Carausel from '../components/Carausel';

export default function CarauselComponents() {
    const [showCode, setshowCode] = useState(false)
    const copyBlockProps = {
        text: `
"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Carausel({ imgs, removeImage, size, link }) {
    const [imageIndex, setimageIndex] = useState(0)
    const next = () => { setimageIndex((imageIndex + 1) % (imgs.length)) }
    const prev = () => { setimageIndex((imageIndex - 1) % (imgs.length) < 0 ? (imageIndex - 1) % (imgs.length) * -1 : (imageIndex - 1) % (imgs.length)) }
    useEffect(() => {
        setimageIndex(0)
    }, [imgs])

    const [startX, setStartX] = useState(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        // You can perform additional calculations based on touch move if needed
        e.preventDefault();
    };

    const handleTouchEnd = (e) => {
        if (startX !== null) {
            const endX = e.changedTouches[0].clientX;
            const deltaX = endX - startX;
            if (deltaX > 50) {
                // Swipe right
                next()
                console.log('Swipe right');
            } else if (deltaX < -50) {
                // Swipe left
                console.log('Swipe left');
                prev()
            }
            // Reset the startX after processing the swipe
            setStartX(null);
        }
    };
    return (
        <div x-data="imageSlider"
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full h-full flex relative flex-col overflow-hidden  ">
            {!!removeImage && <button className=" z-20 absolute top-2 right-2 text-slate100 text-2xl cursor-pointer bg-purple-600 bg-opacity-60 rounded-full " onClick={() => removeImage(imageIndex)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className=" w-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M 8.71875 7.28125 L 7.28125 8.71875 L 14.5625 16 L 7.28125 23.28125 L 8.71875 24.71875 L 16 17.4375 L 23.28125 24.71875 L 24.71875 23.28125 L 17.4375 16 L 24.71875 8.71875 L 23.28125 7.28125 L 16 14.5625 Z"></path>
                </svg>
            </button>}

            {<button onClick={() => prev()} style={{
                opacity: imageIndex > 0 ? 1 : 0,
                transitionDuration: "0.5s",
                transitionDelay: "0.1s",
                transitionProperty: "all"
            }} className="absolute text-slate-100 left-2 top-1/2 z-20 flex w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-slate-900  shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-full rotate-180" fill="currentColor" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"></path>
                </svg>
            </button>}

            <button style={{
                opacity: imageIndex < imgs.length - 1 ? 1 : 0,
                transitionDuration: "0.5s",
                transitionDelay: "0.1s",
                transitionProperty: "all"
            }} onClick={() => next()} 
            className="absolute text-slate-100 right-2 top-1/2 z-20 flex w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-slate-900 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-full" fill="currentColor" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"></path>
                </svg>
            </button>

            <div className={\` relative w-full \${size === "big" ? "h-full" : "h-[30vh] max-h-[40vh]"}\`}>
                {size === "big" || removeImage !== null ?
                    <div className="w-full flex h-full justify-center items-center relative  top-0 overflow-x-hidden">
                        {imgs.map((val, ind) => (
                            <div key={ind} className={\`rounded-sm w-full absolute top-0 flex justify-center items-center bg-slate-900 h-full \${ind === imageIndex ? "" : ind > imageIndex ? \`translate-x-full\` : \`-translate-x-full\`}\`} style={{ transitionDuration: "0.8s", transitionDelay: "0.1s", transitionProperty: "all", transitionTimingFunction: "ease-in-out" }} >
                                <img src={val} alt="image" className=" w-full absolute bg-slate-100 h-full" style={{ filter: "blur(2px)", WebkitFilter: "blur(2px)" }} />
                                <img src={val} alt="image" className=" bg-slate-100 shadow-md shadow-slate-900  h-full z-10" />
                            </div>
                        ))}
                    </div> :
                    <Link href={\`/shoots/\${link}\`} className="w-full flex h-full justify-center items-center relative  top-0 overflow-x-hidden">
                        {imgs.map((val, ind) => (
                            <div key={ind} className={\`rounded-sm w-full absolute top-0 flex justify-center items-center bg-slate-900 h-full \${ind === imageIndex ? "" : ind > imageIndex ? \`translate-x-full\` : \`-translate-x-full\`}\`} style={{ transitionDuration: "0.8s", transitionDelay: "0.1s", transitionProperty: "all", transitionTimingFunction: "ease-in-out" }} >
                                <img src={val} alt="image" className=" w-full absolute bg-slate-100 h-full" style={{ filter: "blur(2px)", WebkitFilter: "blur(2px)" }} />
                                <img src={val} alt="image" className=" bg-slate-100 shadow-md shadow-slate-900  h-full z-10" />
                            </div>
                        ))}
                    </Link>}
                <div className=" flex flex-row gap-2 absolute bottom-5 left-0 right-0 w-fit  ml-auto mr-auto">
                    {imgs.length > 1 && imgs.map((val, ind) => {
                        return (
                            <div key={ind} className={\` text-2xl transition-all bg-slate-200 \${ind === imageIndex ? " bg-opacity-100" : " bg-opacity-50"} w-2 h-2 rounded-full font-bold\`}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
        `,
        theme:dracula,
        language: "jsx",
        showLineNumbers: true,
        startingLineNumber: 1,
        wrapLines: true,
        wrapLongLines: true,
    };
    const imageArray = [
    'https://images.pexels.com/photos/19518788/pexels-photo-19518788/free-photo-of-buddha-figur.jpeg',
    'https://images.pexels.com/photos/2206609/pexels-photo-2206609.jpeg',
    'https://images.pexels.com/photos/2289484/pexels-photo-2289484.jpeg',
    'https://images.pexels.com/photos/18111144/pexels-photo-18111144/free-photo-of-equipment-of-a-painter.jpeg',
    'https://images.pexels.com/photos/16133655/pexels-photo-16133655/free-photo-of-woman-painting-hills.jpeg',
    'https://images.pexels.com/photos/7291913/pexels-photo-7291913.jpeg',
    'https://images.pexels.com/photos/19518788/pexels-photo-19518788/free-photo-of-buddha-figur.jpeg',
    'https://images.pexels.com/photos/18148613/pexels-photo-18148613/free-photo-of-horses-running-in-a-shadow.jpeg',
    'https://images.pexels.com/photos/2206609/pexels-photo-2206609.jpeg',
    'https://images.pexels.com/photos/18111144/pexels-photo-18111144/free-photo-of-equipment-of-a-painter.jpeg',
    'https://images.pexels.com/photos/7291913/pexels-photo-7291913.jpeg',
    'https://images.pexels.com/photos/19518788/pexels-photo-19518788/free-photo-of-buddha-figur.jpeg',
    'https://images.pexels.com/photos/16133655/pexels-photo-16133655/free-photo-of-woman-painting-hills.jpeg',
    'https://images.pexels.com/photos/18111144/pexels-photo-18111144/free-photo-of-equipment-of-a-painter.jpeg',
    'https://images.pexels.com/photos/2206609/pexels-photo-2206609.jpeg',
];
    return (
        <div className='pt-[10vh] flex flex-col gap-4 justify-center items-center min-h-screen bg-violet-500 w-full px-6 md:px-24 py-8'>
            <div className=' flex flex-col bg-slate-300 rounded-md w-full '>
                <div className=' bg-slate-400 flex w-full justify-between items-center rounded-t-md border-b border-slate-100 px-5 py-2'>
                    <h1 className=' text-2xl font-bold text-slate-900'>Carausel</h1>
                    <button onClick={() => setshowCode(!showCode)}>
                    {showCode?
                    <img width="25" height="25" src="https://img.icons8.com/ios/50/000000/visible--v1.png" alt="visible--v1"/>
                    :<img width="25" height="25" src="https://img.icons8.com/ios/50/000000/code--v1.png" alt="code--v1"/>}
                    </button>
                </div>
                {showCode ?
                    <div className=' w-full h-full flex justify-start items-center flex-row overflow-x-scroll'>
                        <CopyBlock {...copyBlockProps} />
                    </div> :
                    <div className='  w-full py-6 px-12 md:px-24 lg:px-48 gap-5 flex flex-col h-[650px] justify-center items-center'>
                        <Carausel imgs={imageArray} size={"big"} />
                        <Carausel imgs={imageArray} size={"big"} removeImage={()=>{}}/>

                        </div>}
            </div>
        </div>
    )
}

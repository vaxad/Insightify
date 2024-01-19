"use client"
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CopyBlock, dracula } from "react-code-blocks";
import Select from '../components/Select';

export default function CardComponents() {
    const [showCode, setshowCode] = useState(false)
    const [clr, setclr] = useState("slate")
    const [round, setround] = useState("xl")

    const copyBlockProps = {
        text: `
import Btn1 from "./Btn1"

export default function Card({ title, paragraph, img, btnText, color, rounded }) {
    const colorVariants = {
        blue: 'bg-blue-900 text-blue-400',
        red: 'bg-red-900 text-red-400',
        yellow: 'bg-yellow-900 text-yellow-400',
        green: 'bg-green-900 text-green-400',
        violet: 'bg-violet-900 text-violet-400',
        slate: 'bg-slate-900 text-slate-400',
        pink: 'bg-pink-900 text-pink-400',
        indigo: 'bg-indigo-900 text-indigo-400',
        gray: 'bg-gray-900 text-gray-400',
        orange: 'bg-orange-900 text-orange-400',
        teal: 'bg-teal-900 text-teal-400',
        cyan: 'bg-cyan-900 text-cyan-400',
        lime: 'bg-lime-900 text-lime-400',
        emerald: 'bg-emerald-900 text-emerald-400',
        amber: 'bg-amber-900 text-amber-400',
        fuchsia: 'bg-fuchsia-900 text-fuchsia-400',
        rose: 'bg-rose-900 text-rose-400',
    }
    const roundedVariants = {
        none: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
    }
    const roundedTVariants = {
        none: '',
        sm: 'rounded-t-sm',
        md: 'rounded-t-md',
        lg: 'rounded-t-lg',
        xl: 'rounded-t-xl',
        full: 'rounded-t-full',
    }

    const roundedBtnVariants = {
        none: 'none',
        sm: 'sm',
        md: 'md',
        lg: 'md',
        xl: 'md',
        full: 'rounded-t-full',
    }
    return (
        <div className={\`max-w-sm lg:my-2 overflow-hidden md:my-3 my-5 \${colorVariants[color ? color : "violet"]} \${roundedVariants[rounded ? rounded : "xl"]} hover:scale-105 transition-all flex flex-col justify-start h-full\`}>
            <div className=' overflow-clip w-full flex justify-center items-center md:h-[40vh] h-[20vh] relative'>
                <img className={\` \${roundedTVariants[rounded ? rounded : "xl"]} w-fit h-fit max-h-full max-w-full z-10\`} src={img ? img : '/loading.gif'} alt="" />
                <img className={\` \${roundedTVariants[rounded ? rounded : "xl"]} w-full overflow-hidden h-full top-0 absolute blur-[2px]\`} src={img ? img : '/loading.gif'} alt="" />
            </div>
            <div className={\`flex flex-col justify-start md:h-fit h-full\`}>
                <div className="px-5 pb-6 flex flex-col justify-around h-full">
                    <h5 className="py-2 text-2xl font-bold tracking-tight text-slate-100">{title > 100 ? title.slice(0, 100) + "..." : title}</h5>
                    <p className="pb-3 font-normal">{paragraph > 200 ? paragraph.slice(0, 200) + "..." : paragraph}</p>
                    <Btn1 text={btnText} color={color} rounded={roundedBtnVariants[rounded ? rounded : "xl"]} />
                </div>
            </div>
        </div>
    )
}
`,
        theme: dracula,
        language: "jsx",
        showLineNumbers: true,
        startingLineNumber: 1,
        wrapLines: true,
        wrapLongLines: false
    };
    return (
        <div className='pt-[10vh]  flex flex-col gap-4 justify-center items-center min-h-screen bg-violet-500 w-full px-6 md:px-24 py-8'>
            <div className=' flex flex-col bg-slate-300 rounded-md w-full '>
                <div className=' bg-slate-400 flex w-full justify-between items-center rounded-t-md border-b border-slate-100 px-5 py-2'>
                    <div className=' flex flex-row z-30 justify-center items-center w-fit h-fit  top-5 left-5 gap-8'>
                        <h1 className=' text-2xl font-bold text-slate-900'>Card</h1>
                        <Select className={" "} value={clr} name={"card-color"} options={[{ name: "blue", value: "blue" }, { name: "red", value: "red" }, { name: "yellow", value: "yellow" }, { name: "green", value: "green" }, { name: "violet", value: "violet" }, { name: "slate", value: "slate" }, { name: "pink", value: "pink" }, { name: "indigo", value: "indigo" }, { name: "gray", value: "gray" }, { name: "orange", value: "orange" }, { name: "teal", value: "teal" }, { name: "cyan", value: "cyan" }, { name: "lime", value: "lime" }, { name: "emerald", value: "emerald" }, { name: "amber", value: "amber" }, { name: "fuchsia", value: "fuchsia" }, { name: "rose", value: "rose" }]} setValue={(val) => setclr(val)} />
                        <Select className={" "} value={round} name={"card-round"} options={[{ name: "full", value: "full" }, { name: "xl", value: "xl" }, { name: "lg", value: "lg" }, { name: "md", value: "md" }, { name: "sm", value: "sm" }, { name: "none", value: "none" },]} setValue={(val) => setround(val)} />
                    </div>
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
                    <div className=' px-5 w-full py-6 gap-5 relative flex flex-col lg:flex-row justify-center items-center'>


                        {/* <Card color={"violet"} btnText={"Catchy clickbait"} img={"https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg"} title={"Huge ass title"} paragraph={"Lorem ipsum dolor sit amet, consectetur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /> */}
                        <Card color={clr} rounded={round} btnText={"Catchy clickbait"} title={"Huge ass title"} img={"https://images.pexels.com/photos/18515836/pexels-photo-18515836/free-photo-of-portrait-of-a-starling-standing-outdoors.jpeg"} paragraph={"Lorem ipsum dolor sit amet, consectetur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
                        {/* <Card color={"green"} btnText={"Catchy clickbait"} title={"Huge ass title"} img={"https://images.pexels.com/photos/19749458/pexels-photo-19749458/free-photo-of-riga.jpeg"} paragraph={"Lorem ipsum dolor sit amet, consectetur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /> */}
                    </div>}
            </div>
        </div>
    )
}

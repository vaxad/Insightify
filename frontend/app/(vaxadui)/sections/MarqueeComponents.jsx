"use client"
import { useState } from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import MarqueeCards from '../components/MarqeeCards';


export default function MarqueeComponents() {
    const [showCode, setshowCode] = useState(false)
    const copyBlockProps = {
        text: `
import Marquee from "react-fast-marquee";

export default function MarqueeCards({ gradientColor, direction, speed }) {

    const icons = ["git", "bootstrap", "c", "cpp", "css", "androidstudio", "vite", "vercel", "netlify", "prisma", "supabase", "express", "figma", "firebase", "github", "html", "java", "js", "md", "mongodb", "mysql", "postgresql", "nextjs", "nodejs", "arduino", "postman", "py", "react", "redux", "tailwind", "ts", "vscode"]
    return (
        <div className="flex w-full justify-center items-center h-full ">
            <Marquee gradientWidth={100} gradient={gradientColor ? true : false} pauseOnHover={false} gradientColor={gradientColor ? gradientColor : ""} style={{ width: "100%" }} direction={direction ? direction : "left"} speed={speed ? speed : 200}>
                {icons.map((icon, index) => (
                    <img key={index} className=" px-2 " src={\`https://skillicons.dev/icons?i=\${icon}&perline=1\`} />
                ))}
            </Marquee>
        </div>
    )
}
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
                    <h1 className=' text-2xl font-bold text-slate-900'>Marquee</h1>
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
                        <MarqueeCards />
                        <MarqueeCards gradientColor={"#000000"} direction={"right"} />
                        <MarqueeCards gradientColor={"#ffffff"} direction={"left"} speed={100} />
                    </div>}
            </div>
        </div>
    )
}

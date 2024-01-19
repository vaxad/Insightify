import Banner from "../components/Banner";
import Btn1 from "../components/Btn1";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

export default function Hero() {
  const imgs =[
    "https://img.icons8.com/color/128/nextjs.png",
    "https://img.icons8.com/external-soleicons-solid-amoghdesign/128/external-react-native-soleicons-solid-vol-1-soleicons-solid-amoghdesign.png",
    "https://img.icons8.com/color/128/tailwindcss.png",
    "https://img.icons8.com/color/128/vue-js.png",
    "https://img.icons8.com/doodle/128/svetle.png"
  ]
  return (
    <div className=" flex flex-col bg-slate-200 min-h-screen  selection:bg-violet-300 relative overflow-clip justify-center items-center">
    {/* <Navbar/> */}
    <div className=" rounded-full w-[100vw] h-[100vw] absolute top-0 bottom-0 right-0 m-auto translate-y-1/2 left-0 -z-0 opacity-65" style={{background: "rgb(102,0,255)",background: "radial-gradient(circle, rgba(102,0,255,1) 0%, rgba(208,75,255,1) 100%)"}}></div>
    <div className={`flex flex-col mt-[8vh]  h-full justify-center items-center z-0`}>
        <div className={`h-fit flex flex-col justify-center items-center`}>
            <Banner label={"Label"} text={"Some exciting text"} color={"violet"} className={""}/>
            <Heading highlight={"Some Highlights"} text={"Heading Text With"} color={"violet"} className={"py-8"}/>
            <Paragraph align={"center"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} color={"slate"} className={" md:w-1/2 w-10/12"}/>
            <div className=" flex md:flex-row flex-col md:py-6 py-12  gap-6 justify-center items-center">
            <Btn1 color={"violet"} text={"Some clickbait text"}/>
            <Btn1 color={"violet"} text={"Lesser clickbait text"} className={"!bg-transparent !text-violet-700"}/>
            </div>
            <div className={`pt-12 flex flex-col gap-2 justify-center items-center text-slate-700`}>
                <p className={` text-xs font-medium`}>Some small feature/achievement</p>
                <div className={` flex flex-row justify-center items-center gap-2`}>
                {imgs.map((img,i)=>(
                  <img key={i} src={img} className=" w-16 h- opacity-35 hover:opacity-50 transition-all" alt="icon" />
                ))}
                </div>
              </div>
        </div>
        
    </div>
    </div>
  )
}

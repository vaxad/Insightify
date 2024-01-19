import Btn1 from "./Btn1"

export default function Card({ title, paragraph, img, btnText, color, label1, label2, value1, value2, rounded }) {
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
        sm: 'md:rounded-l-sm rounded-l-none md:rounded-t-none rounded-t-sm',
        md: 'md:rounded-l-md rounded-l-none md:rounded-t-none rounded-t-md',
        lg: 'md:rounded-l-lg rounded-l-none md:rounded-t-none rounded-t-lg',
        xl: 'md:rounded-l-xl rounded-l-none md:rounded-t-none rounded-t-xl',
        full: 'md:rounded-l-full rounded-l-none md:rounded-t-none rounded-t-full',
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
        <div className={` flex ${colorVariants[color]} lg:h-[30vh] md:h-[60vh] h-full pb-6 md:pb-0  md:flex-row flex-col overflow-hidden ${roundedVariants[rounded?rounded:"sm"]} items-center cursor-default transition-all relative hover:scale-[101%]`}>
            <div className={` ${roundedTVariants[rounded?rounded:"sm"]} overflow-hidden h-full  lg:w-1/4 md:w-2/5 w-full flex flex-row justify-center items-center relative`}>
                <img className=" w-fit h-full max-h-full max-w-full z-30" src={img ? img : '/loading.gif'} alt="" />
                <img className="w-full  h-full top-0 absolute blur-[2px]" src={img ? img : '/loading.gif'} alt="" />
            </div>
            <div className=' flex flex-col h-full justify-start w-full items-start px-5 py-5 gap-3'>
                <h1 className=' text-2xl font-bold text-slate-200'>{title > 100 ? title.slice(0, 100) + "..." : title}</h1>
                <h1 className=' text-lg font-medium italic '>{paragraph > 200 ? paragraph.slice(0, 200) + "..." : paragraph}</h1>
                <div className=' flex justify-between w-full'><div className=' flex-col gap-5'>
                    {!!label1 && <h1 className=' text-xl font-semibold'>{label1}: {value1}</h1>}
                    {!!label2 && <h1 className=' text-xl font-semibold'>{label2}: {value2}</h1>}
                </div>
                </div>
            </div>
            <div className=" px-5 flex flex-row md:flex-col justify-center items-center gap-3">
                <Btn1 text={"Click me!"} color={color} rounded={roundedBtnVariants[rounded?rounded:"sm"]} />
                <Btn1 text={"Or here!"} color={color} rounded={roundedBtnVariants[rounded?rounded:"sm"]}/>
            </div>
        </div>
    )
}

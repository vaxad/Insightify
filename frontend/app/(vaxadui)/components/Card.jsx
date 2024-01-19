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
        <div className={`max-w-sm lg:my-2 overflow-hidden md:my-3 my-5 ${colorVariants[color ? color : "violet"]} ${roundedVariants[rounded ? rounded : "xl"]} hover:scale-105 transition-all flex flex-col justify-start h-full`}>
            <div className=' overflow-clip w-full flex justify-center items-center md:h-[40vh] h-[20vh] relative'>
                <img className={` ${roundedTVariants[rounded ? rounded : "xl"]} w-fit h-fit max-h-full max-w-full z-10`} src={img ? img : '/loading.gif'} alt="" />
                <img className={` ${roundedTVariants[rounded ? rounded : "xl"]} w-full overflow-hidden h-full top-0 absolute blur-[2px]`} src={img ? img : '/loading.gif'} alt="" />
            </div>
            <div className={`flex flex-col justify-start md:h-fit h-full`}>
                <div className="px-5 pb-6 flex flex-col justify-around h-full">
                    <h5 className="py-2 text-2xl font-bold tracking-tight text-slate-100">{title > 100 ? title.slice(0, 100) + "..." : title}</h5>
                    <p className="pb-3 font-normal">{paragraph > 200 ? paragraph.slice(0, 200) + "..." : paragraph}</p>
                    <Btn1 text={btnText} color={color} rounded={roundedBtnVariants[rounded ? rounded : "xl"]} />
                </div>
            </div>
        </div>
    )
}

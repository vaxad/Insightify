
export default function Heading({ text, highlight, color, className }) {
    const colorVariants = {
        blue: 'text-blue-800',
        red: 'text-red-800',
        yellow: 'text-yellow-800',
        green: 'text-green-800',
        violet: 'text-violet-800',
        slate: 'text-slate-800',
        pink: 'text-pink-800',
        indigo: 'text-indigo-800',
        gray: 'text-gray-800',
        orange: 'text-orange-800',
        teal: 'text-teal-800',
        cyan: 'text-cyan-800',
        lime: 'text-lime-800',
        emerald: 'text-emerald-800',
        amber: 'text-amber-800',
        fuchsia: 'text-fuchsia-800',
        rose: 'text-rose-800',
      }
    return (
        <div className={`flex flex-col justify-center items-center gap-2 ${className}`}>
            <h1 className={`md:text-6xl text-3xl font-semibold text-slate-700 `}>
                {text?text:"Insert text"}
            </h1>
            {!!highlight&&<h1 className={`md:text-6xl text-3xl font-semibold ${colorVariants[color?color:"blue"]}`}>
                {highlight}
            </h1>}
        </div>
    )
}

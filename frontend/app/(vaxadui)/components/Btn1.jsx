"use client"
export default function Btn1({ onClick, text, color, className, rounded, type }) {
  const dummyOnclik = () => {
  }
  const colorVariants = {
    blue: 'bg-blue-700 hover:bg-blue-100 border-blue-400 text-blue-100 hover:text-blue-700',
    red: 'bg-red-700 hover:bg-red-100 border-red-400 text-red-100 hover:text-red-700',
    yellow: 'bg-yellow-700 hover:bg-yellow-100 border-yellow-400 text-yellow-100 hover:text-yellow-700',
    green: 'bg-green-700 hover:bg-green-100 border-green-400 text-green-100 hover:text-green-700',
    violet: 'bg-violet-700 hover:bg-violet-100 border-violet-400 text-violet-100 hover:text-violet-700',
    slate: 'bg-slate-700 hover:bg-slate-100 border-slate-400 text-slate-100 hover:text-slate-700',
    pink: 'bg-pink-700 hover:bg-pink-100 border-pink-400 text-pink-100 hover:text-pink-700',
    indigo: 'bg-indigo-700 hover:bg-indigo-100 border-indigo-400 text-indigo-100 hover:text-indigo-700',
    gray: 'bg-gray-700 hover:bg-gray-100 border-gray-400 text-gray-100 hover:text-gray-700',
    orange: 'bg-orange-700 hover:bg-orange-100 border-orange-400 text-orange-100 hover:text-orange-700',
    teal: 'bg-teal-700 hover:bg-teal-100 border-teal-400 text-teal-100 hover:text-teal-700',
    cyan: 'bg-cyan-700 hover:bg-cyan-100 border-cyan-400 text-cyan-100 hover:text-cyan-700',
    lime: 'bg-lime-700 hover:bg-lime-100 border-lime-400 text-lime-100 hover:text-lime-700',
    emerald: 'bg-emerald-700 hover:bg-emerald-100 border-emerald-400 text-emerald-100 hover:text-emerald-700',
    amber: 'bg-amber-700 hover:bg-amber-100 border-amber-400 text-amber-100 hover:text-amber-700',
    fuchsia: 'bg-fuchsia-700 hover:bg-fuchsia-100 border-fuchsia-400 text-fuchsia-100 hover:text-fuchsia-700',
    rose: 'bg-rose-700 hover:bg-rose-100 border-rose-400 text-rose-100 hover:text-rose-700',
    white: 'bg-slate-100 hover:bg-slate-900 border-slate-100 text-slate-900 hover:text-slate-100',
    black: 'bg-slate-900 hover:bg-slate-100 border-slate-900 text-slate-100 hover:text-slate-900',
  }

  const roundedVariants = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }

  return (
    <button type={type?type:"button"} className={` font-semibold py-2 whitespace-nowrap px-4 text-lg ${roundedVariants[rounded?rounded:"full"]} border transition-all ${colorVariants[color?color:"blue"]} ${className}`} onClick={() => { onClick ? onClick() : dummyOnclik() }}>
      {text ? text : "Button Text"}
    </button>
  )
}

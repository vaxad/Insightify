
export default function Paragraph({ align, text, color, className }) {
    const alignVariants = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    }
    const colorVariants = {
        blue: 'text-blue-700',
        red: 'text-red-700',
        yellow: 'text-yellow-700',
        green: 'text-green-700',
        violet: 'text-violet-700',
        slate: 'text-slate-700',
        pink: 'text-pink-700',
        indigo: 'text-indigo-700',
        gray: 'text-gray-700',
        orange: 'text-orange-700',
        teal: 'text-teal-700',
        cyan: 'text-cyan-700',
        lime: 'text-lime-700',
        emerald: 'text-emerald-700',
        amber: 'text-amber-700',
        fuchsia: 'text-fuchsia-700',
        rose: 'text-rose-700',
      }
    return (
            <p className={`md:text-lg text-sm font-bold break-words ${alignVariants[align]} ${colorVariants[color]} ${className}`}>{text?text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
    )
}

import { useRef, useState } from "react"
import Btn1 from "./Btn1"
import Datepicker from "tailwind-datepicker-react"
//npm i tailwind-datepicker-react
export default function Form({color, rounded}) {
    const [email, setemail] = useState("")
    const [num, setNum] = useState("")
    const [msg, setmsg] = useState("")
    const [gender, setgender] = useState("")
    const [date, setdate] = useState("")
    const [file, setfile] = useState(null)
    const imgRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    const [show, setShow] = useState(false)
    const handleChange = (selectedDate) => {
        setdate(selectedDate)
    }
    const handleClose = (state) => {
        setShow(state)
    }
    
    const dateColorVariants = {
        blue: 'bg-blue-600 text-blue-100 placeholder:text-blue-300',
        red: 'bg-red-600 text-red-100 placeholder:text-red-300',
        yellow: 'bg-yellow-600 text-yellow-100 placeholder:text-yellow-300',
        green: 'bg-green-600 text-green-100 placeholder:text-green-300',
        violet: 'bg-violet-600 text-violet-100 placeholder:text-violet-300',
        slate: 'bg-slate-600 text-slate-100 placeholder:text-slate-300',
        pink: 'bg-pink-600 text-pink-100 placeholder:text-pink-300',
        indigo: 'bg-indigo-600 text-indigo-100 placeholder:text-indigo-300',
        gray: 'bg-gray-600 text-gray-100 placeholder:text-gray-300',
        orange: 'bg-orange-600 text-orange-100 placeholder:text-orange-300',
        teal: 'bg-teal-600 text-teal-100 placeholder:text-teal-300',
        cyan: 'bg-cyan-600 text-cyan-100 placeholder:text-cyan-300',
        lime: 'bg-lime-600 text-lime-100 placeholder:text-lime-300',
        emerald: 'bg-emerald-600 text-emerald-100 placeholder:text-emerald-300',
        amber: 'bg-amber-600 text-amber-100 placeholder:text-amber-300',
        fuchsia: 'bg-fuchsia-600 text-fuchsia-100 placeholder:text-fuchsia-300',
        rose: 'bg-rose-600 text-rose-100 placeholder:text-rose-300',
    }
    const options = {
        title: "Pick a Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: " opacity-0 pointer-events-none",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span><img width="15" height="15" src="https://img.icons8.com/ios/50/ffffff/long-arrow-left--v1.png" alt="long-arrow-left--v1" /></span>,
            next: () => <span><img width="15" height="15" src="https://img.icons8.com/ios/50/ffffff/long-arrow-right--v1.png" alt="long-arrow-right--v1" /></span>,
        },
        datepickerClassNames: " !absolute !-top-0 !-translate-y-[60vh] !left-0 ",
        defaultDate: new Date("2022-01-01"),
        language: "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }
    const colorVariants = {
        blue: 'bg-blue-900 text-blue-100',
        red: 'bg-red-900 text-red-100',
        yellow: 'bg-yellow-900 text-yellow-100',
        green: 'bg-green-900 text-green-100',
        violet: 'bg-violet-900 text-violet-100',
        slate: 'bg-slate-900 text-slate-100',
        pink: 'bg-pink-900 text-pink-100',
        indigo: 'bg-indigo-900 text-indigo-100',
        gray: 'bg-gray-900 text-gray-100',
        orange: 'bg-orange-900 text-orange-100',
        teal: 'bg-teal-900 text-teal-100',
        cyan: 'bg-cyan-900 text-cyan-100',
        lime: 'bg-lime-900 text-lime-100',
        emerald: 'bg-emerald-900 text-emerald-100',
        amber: 'bg-amber-900 text-amber-100',
        fuchsia: 'bg-fuchsia-900 text-fuchsia-100',
        rose: 'bg-rose-900 text-rose-100',
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
        <form onSubmit={(e) => handleSubmit(e)} className={` z-20 ${colorVariants[color?color:"slate"]} w-full md:w-3/5 ${roundedVariants[rounded?rounded:"lg"]} flex flex-col justify-center items-center gap-4 h-full p-6`}>
            <div className=" flex flex-col gap-2 w-full">
                <h5>Email</h5>
                <input maxLength={100} type="email" placeholder="abcd@gmail.com" required value={email} onChange={(e) => setemail(e.target.value)} className={` outline-none w-full py-1 px-2 ${roundedVariants[rounded?rounded:"xl"]} ${dateColorVariants[color?color:"gray"]}`} />
            </div>
            <div className=" flex flex-col gap-2 w-full">
                <h5>Number</h5>
                <input maxLength={100} type="number" placeholder="376155233" required value={num} onChange={(e) => setNum(e.target.value)} className={`outline-none w-full py-1 px-2 ${roundedVariants[rounded?rounded:"xl"]} ${dateColorVariants[color?color:"gray"]}`}/>
            </div>
            <div className=" flex flex-col gap-2 w-full">
                <h5>Message</h5>
                <textarea maxLength={2000} rows={10} type="text" placeholder="lorem ipsum dolor elet..." required value={msg} onChange={(e) => setmsg(e.target.value)} className={`outline-none w-full py-1 px-2 ${roundedVariants[rounded?rounded:"xl"]} ${dateColorVariants[color?color:"gray"]}`} />
            </div>
            <div className=" flex flex-col gap-2 w-full cursor-pointer">
                <h5>Image</h5>
                <div onClick={() => { imgRef.current.click() }} className={` outline-none w-full py-1 px-2 ${roundedVariants[rounded?rounded:"xl"]} ${dateColorVariants[color?color:"gray"]}`} >
                    <p className=" text-md t1xt-slate-100">{file ? file : "Upload image"}</p>
                </div>
                <input ref={imgRef} type="file" placeholder="Upload image" required value={file} onChange={(e) => setfile(e.target.value)} className=" hidden" />
            </div>
            <div className=" flex flex-col gap-2 w-full">
                <h5>Gender</h5>
                <select type="text" placeholder="Select a gender" required onChange={(e) => setgender(e.target.value)} className={`outline-none w-full py-1 px-2 ${roundedVariants[rounded?rounded:"xl"]} ${dateColorVariants[color?color:"gray"]}`} >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 w-full ">
                <h5>Date</h5>
                <Datepicker classNames=" !right-0  relative " options={options} onChange={handleChange} show={show} setShow={handleClose} />
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                <Btn1 color={color} text={"Submit"} type={"submit"} rounded={rounded?rounded:"lg"} />
                <Btn1 color="red" text={"Clear"} rounded={rounded?rounded:"lg"} />
            </div>

        </form>
    )
}

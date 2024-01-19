"use client"
import { useEffect, useState } from "react";

export default function Toast({ error, text, showToast, warning }) {
  const [toast, setToast] = useState(false)
  useEffect(() => {
    setToast(showToast)
  }, [showToast, text])
  
  useEffect(() => {
    let timer;
    if (toast) {
      // If flag becomes true, set a timer to reset it to false after 5 seconds
      timer = setTimeout(() => {
        setToast(false);
      }, 5000);
    }

    // Cleanup function to clear the timer if the component unmounts or if flag changes before the timer completes
    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  return (
    <div className={`py-2 scale-80 hover:scale-105 cursor-pointer hover:bg-opacity-90 md:scale-100 px-4 ${toast ? "translate-x-0 delay-0 duration-300" : "translate-x-[200%] delay-100 duration-700"} transition-all  flex flex-row items-center justify-between w-fit min-w-[30vw] max-w-[70vw] bg-slate-600 bg-opacity-80 rounded-lg fixed z-50 top-20 right-5 md:right-16`}>
      <div className=' flex flex-row justify-start items-center gap-2'>
        {error ?
          <img width="16" height="16" src="https://img.icons8.com/office/16/cancel.png" alt="cancel" /> :
          warning ?
            <img width="16" height="16" src="https://img.icons8.com/color/48/box-important--v1.png" alt="warning" />
            :
            <img width="16" height="16" src="https://img.icons8.com/office/16/checked--v1.png" alt="checked" />
        }
        <p className=' text-xs md:text-sm'>{text}</p>
      </div>
      <button onClick={() => { setToast(false) }} className='w-fit h-fit p-1 bg-transparent rounded-md  hover:bg-slate-600 transition-all'>
        <img width="16" height="16" src="https://img.icons8.com/ios/50/ffffff/multiply.png" alt="multiply" />
      </button>
    </div>
  )
}

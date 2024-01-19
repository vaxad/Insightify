import "./Select.css";

import { useEffect, useRef, useState } from "react";

export default function Select({name,options,setValue,className,value}) {
    const [show, setshow] = useState(false)
    const myDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myDivRef.current && !myDivRef.current.contains(event.target)) {
        setshow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  return (
    <div ref={myDivRef} className={className}>
    <div className=" border border-slate-300 relative w-48 rounded-lg bg-slate-100 hover:bg-slate-300 px-2 py-2 flex flex-row justify-between items-center" 
        onClick={()=>{setshow(!show)}}>
          <p className=" text-center font-medium text-lg text-slate-950">{value}</p>
          <img
        className={` w-5 h-5 ${show?" rotate-180":" rotate-0"} transition-all`}
        src="https://img.icons8.com/windows/32/000000/expand-arrow--v1.png"
        alt="Arrow Icon"
        aria-hidden="true"
      />
        
        
    <div className={`max-h-[50vh] absolute top-full right-0 w-fit rounded-md overflow-y-scroll flex flex-col justify-start origin-top ${show?" scale-y-100":" scale-y-0"} transition-all`} tabIndex="1" id="style-3">
      {options.map((option, index) => (
        <div className=" border border-slate-300 bg-slate-100 cursor-pointer hover:bg-slate-400 px-12 py-2 flex flex-row justify-center items-center" 
        onClick={()=>{setValue(option.value);console.log(option.value)}} key={index}>
          <input
            className=" opacity-0 "
            type="radio"
            value={option.value}
            name={name}
            checked={value===option.value}
          />
          <p className="w-full text-center font-medium text-lg text-slate-950">{option.name}</p>
        </div>
      ))}
      </div>
      
    </div>
  </div>
  )
}

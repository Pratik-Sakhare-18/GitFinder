import React from 'react'

const Appinput = ({type="text",placeholder="i am placeholder", onChange=()=>{}}) => {
  return (
    <input type={type} placeholder={placeholder}  className='h-[45px] w-[50%] md:w-[80%] rounded-[5px] border-3 border-white outline-none p-5 text-lg md:text-xl font-bold text-white'  onChange={(e)=>onChange(e.target.value)} />
  )
}

export default Appinput
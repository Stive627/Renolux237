import React from 'react'
import { useScreen } from './useScreen'
import './verificationCode.css'

function Square({value, handleChange,handlekey, active,err}) {
    const large = useScreen()
  return (
    <div className ={`p-1 border rounded-md ${err ? ' square' : active || value  ? 'border-blue-600':'border-black'}`}>
        {!active &&<input type={large ? 'text':'number'} autoFocus={active} onKeyUp={(e)=>handlekey(e.key)} className={`${large ? 'w-10 h-10 p-4' :'w-8 h-8 p-3'} border-none outline-none  bg-gray-100`} value={value} onChange={(e)=>handleChange(e.target.value.slice(0,1))}/>}
    {active &&<input autoFocus={active} onKeyUp={(e)=>handlekey(e.key)} className={`${large? 'w-10 h-10 p-4' :'w-8 h-8 p-3'} border-none outline-none bg-gray-100`} value={value} onChange={(e)=>handleChange(e.target.value.slice(0,1))}/>}
    </div>
  )
}

export default Square
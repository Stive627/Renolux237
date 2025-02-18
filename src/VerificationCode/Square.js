import React from 'react'
import { useScreen } from './useScreen'

function Square({value, handleChange,handlekey, active}) {
    const large = useScreen()
  return (
    <div className ={`p-1 border rounded-md ${active || value  ? 'border-blue-600':'border-black'}`}>
        {!active &&<input autoFocus={active} onKeyUp={(e)=>handlekey(e.key)} className={`${large ? 'w-10 h-10 p-4' :'w-8 h-8 p-3'} border-none outline-none  bg-gray-100`} value={value} onChange={(e)=>handleChange(e.target.value)}/>}
    {active &&<input autoFocus={active} onKeyUp={(e)=>handlekey(e.key)} className={`${large? 'w-10 h-10 p-4' :'w-8 h-8 p-3'} border-none outline-none bg-gray-100`} value={value} onChange={(e)=>handleChange(e.target.value)}/>}
    </div>
  )
}

export default Square
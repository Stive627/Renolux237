import React from 'react'
import { fetchLink } from '../Ttools'

function FramePage({children}) {
  return (
    <>
        <div className=' py-2 px-2 flex flex-row gap-3 '><img src={fetchLink('medias/logo.png')} alt='logo' width={35} height={35}/> {' '} <span className=' font-bold  text-[25px]'> Renolux Cameroon</span></div>
        <hr style = {{color:'rgba(226, 221, 221, 1)', backgroundColor:'rgba(226, 221, 221, 1)'}}/>
        <div className=' w-full h-full'>
            {children}
        </div>
    </>
  )
}

export default FramePage
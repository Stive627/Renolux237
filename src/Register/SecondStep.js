import React, { useState,useRef } from 'react'
import useScreen from '../hook/useScreen'
import PasswordUI from './PasswordUI'
import UsernameUI from './UsernameUI'

function SecondStep({password1, password2, valuePassword1, valuePassword2, value, handleUsername, handleFinish, username}) {
    const large = useScreen()
    const [step, setStep] = useState({first:true, second:false})
    const usernameRef = useRef(null)
    function handleMove(){
        usernameRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
          setStep({...step, second:true})
    }
    
  return (
    <div className=' w-full flex justify-center'>
        <div className={`${large?'w-1/4':'w-3/4'}`}>
        <p className=' text-center text-[18px] mt-9'>Creer votre compte pour continuer.</p>
        <div className=' flex justify-center'>
            <div className=' flex flex-row justify-between w-1/4 mt-7'>
                <div className={`w-8 h-8 border rounded-full flex  justify-center items-center text-white`} style={{backgroundColor:'rgba(38, 103, 255, 1)'}}><p>1</p></div>
                <div className={`w-8 h-8 border rounded-full flex justify-center items-center `} style={{backgroundColor:step.second?'rgba(38, 103, 255, 1)':'rgba(217, 217, 217, 1)', color:step.second?'white':'black'}}><p>2</p></div>
            </div>
        </div>
        <div className={` mt-4 overflow-x-hidden flex flex-row ${large && 'gap-2'}`}>
            <PasswordUI handleMove={handleMove} password1={password1} password2={password2} valuePassword1={valuePassword1} valuePassword2={valuePassword2} value={value}/>
            <div  className=' px-5'> <div ref={usernameRef}><UsernameUI username={username} handleUsername={handleUsername} handleFinish={handleFinish}/></div></div>
        </div>
        </div>
    </div>
  )
}

export default SecondStep
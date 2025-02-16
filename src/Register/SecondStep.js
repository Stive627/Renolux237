import React, { useState } from 'react'
import useScreen from '../hook/useScreen'
import PasswordUI from './PasswordUI'
import UsernameUI from './UsernameUI'

function SecondStep({password1, password2, valuePassword1, valuePassword2, value, handleVerification, username, handleFinish}) {
    const large = useScreen()
    const [step, setStep] = useState({first:true, second:false})
  return (
    <div className=' w-full flex justify-center'>
        <div className={`${large?'w-1/4':'w-3/4'}`}>
        <p className=' text-center text-[18px] mt-9'>Creer votre compte pour continuer.</p>
        <div className=' flex justify-center'>
            <div className=' flex flex-row justify-between w-1/4 mt-7'>
                <div className={`w-8 h-8 border rounded-full flex  justify-center items-center text-white`} style={{backgroundColor:'rgba(72, 149, 239, 1)'}}><p>1</p></div>
                <div className={`w-8 h-8 border rounded-full flex justify-center items-center `} style={{backgroundColor:step.second?'rgba(72, 149, 239, 1)':'rgba(217, 217, 217, 1)'}}><p>2</p></div>
            </div>
        </div>
        <div className=' w-full h-full border-black border mt-4 overflow-x-scroll flex flex-row'>
            <PasswordUI password1={password1} password2={password2} valuePassword1={valuePassword1} valuePassword2={valuePassword2} value={value} handleVerification={handleVerification}/>
            <UsernameUI username={username} handleFinish={handleFinish}/>
        </div>
        </div>
    </div>
  )
}

export default SecondStep
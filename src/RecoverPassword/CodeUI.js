import React, { useEffect, useState } from 'react'
import useScreen from '../hook/useScreen'
import Notication from '../Notications/Notication'
import { fetchLink } from '../Ttools'
import VerificationCode from '../VerificationCode/VerificationCode'

function CodeUI({email, handleCode, valid, valcode, handleGeneratePassword}) {
  const [newCode, setNewCode] = useState(false)
  const large = useScreen()
  useEffect(()=>{
    if(newCode){
      let timeId = setTimeout(() => {
                    setNewCode(false)
                  }, 7000);
      return ()=> clearTimeout(timeId)
    }
  },[newCode])
  if(valid){
      return(
        <div className=' px-5'>
          <div style={{width:large? '25vw':'90vw'}}>
          <p className=' text-[21px]  mb-4'>Verification complete!</p>

            <div className=' flex justify-center'><div className=' w-1/2'><img alt='' className=' object-cover' src={fetchLink('confirm.svg')}/></div></div>
          </div>
        </div>
      )
  }
  return (
    <div className=' px-5'>
        <div style={{width:large? '25vw':'90vw'}}>
          {newCode && <Notication/>}
            <p className = ' text-[23px]'>Saissisez le code de 06 chiffres envoye a l’addresse <b>{email}</b></p>
            <div className = 'flex justify-center mb-6'><VerificationCode valcode={valcode} start={-1} handleCode={handleCode}/></div>
            <p className=' text-[18px] text-center'>Generer un nouveau code <button onClick={()=>{setNewCode(true); handleGeneratePassword()}} className=' text-blue-500 border border-none'>ici</button></p>
        </div>
    </div>
  )
}

export default CodeUI
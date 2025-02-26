import React, { useEffect, useState } from 'react'
import useScreen from '../hook/useScreen'
import CodeVerification from './CodeVerification'
import Notication from '../Notications/Notication'
import { fetchLink } from '../Ttools'

function CodeUI({email, handleCode, valid}) {
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

            <div className=' flex justify-center'><div className=' w-1/2'><img className=' object-cover' src={fetchLink('confirm.svg')}/></div></div>
          </div>
        </div>
      )
  }
  return (
    <div className=' px-5'>
        <div style={{width:large? '25vw':'90vw'}}>
          {newCode && <Notication/>}
            <p className = ' text-[23px]'>Saissisez le code de 06 chiffres envoye a l’addresse <b>{email}</b></p>
            <div className = 'flex justify-center mb-6'><CodeVerification handleCode={handleCode}/></div>
            <p className=' text-[18px] text-center'>Generer un nouveau code <button onClick={()=>setNewCode(true)} className=' text-blue-500 border border-none'>ici</button></p>
        </div>
    </div>
  )
}

export default CodeUI
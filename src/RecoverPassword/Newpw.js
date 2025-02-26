import React, { useState } from 'react'
import Password from '../Register/Password'
import useScreen from '../hook/useScreen'
import ButtonAdmin from '../Register/Button'

function Newpw() {
    const [password, setPassword] = useState({psw1:'', psw2:''})
    const large = useScreen()
  return (
    <div className=' px-5'>
        <p className=' text-[24px] mb-2'>Entrez votre nouveau mot de passe</p>
        <div style={{width:large? '22vw':'90vw'}} className=' flex justify-center'>
            <form className=' flex flex-col gap-3 justify-center w-4/5'>
                <Password value={password.psw1} onChange={(e) => setPassword({...password, psw1:e.target.value})} placeholder={'Entrez votre mot de passe'}/>
                <Password value={password.psw2} onChange={(e) => setPassword({...password, psw2:e.target.value})} placeholder={'Verifier votre mot de passe'}/>
                <div className=' flex justify-center'><ButtonAdmin value={'Terminer'} validation={false}/></div>
            </form>
        </div>
    </div>
  )
}

export default Newpw
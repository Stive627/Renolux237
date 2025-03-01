import React, { useState } from 'react'
import Password from '../Register/Password'
import useScreen from '../hook/useScreen'
import ButtonAdmin from '../Register/Button'

function Newpw({password, handlePassword, handleSubmit}) {
    const [password1, setPassword1] = useState('')
    const large = useScreen()

  return (
    <div className=' px-5'>
        <p className=' text-[24px] mb-2'>Entrez votre nouveau mot de passe</p>
        <div style={{width:large? '22vw':'90vw'}} className=' flex justify-center'>
            <form onSubmit={handleSubmit} className=' flex flex-col gap-3 justify-center w-4/5'>
                <Password value={password} onChange={handlePassword} placeholder={'Entrez votre mot de passe'}/>
                <Password value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder={'Verifier votre mot de passe'}/>
                <p  style={{color:'rgba(80, 74, 74, 1)', fontSize:12}}>Le mot de passe doit contenir plus de 6 characters,un chiffre et une majuscule</p>
                <div className=' flex justify-center'><ButtonAdmin value={'Terminer'} validation={password === password1}/></div>
            </form>
        </div>
    </div>
  )
}

export default Newpw
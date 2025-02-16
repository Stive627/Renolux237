import React from 'react'
import { InputAdmin } from './Input'
import ButtonAdmin from './Button'
import useScreen from '../hook/useScreen'

function PasswordUI({password1, password2, valuePassword1, valuePassword2, handleVerification, value}) {
   const samePassword= password1 === password2
      const validPassword = password1.length > 5 && /\d/.test(password1) && /[A-Z]/.test(password1) && samePassword
      const handleSubmit = (e) =>{
          e.preventDefault()
          handleVerification()
      }
      const large = useScreen()
      return (
          <form onSubmit={e =>handleSubmit(e)} className=' flex justify-center'>
            <div className={`${large? 'w-1/4 ':'w-3/4'} flex flex-col gap-2`}>
              <InputAdmin type={'password'} placeholder={'Entrez votre mot de passe'} value={password1} handleChange={(e) => valuePassword1(e.target.value)}/>
              <InputAdmin type={'password'} value={password2 } placeholder={'Verifiez votre mot de passe'} handleChange={(e) => valuePassword2(e.target.value)}/>
              <p style={{color:'rgba(80, 74, 74, 1)', fontSize:12}}>Le mot de passe doit contenir plus de 6 characters,un chiffre et une majuscule</p>
              <div className=' flex justify-center'><ButtonAdmin validation={validPassword} value={value}/></div>
              </div>
          </form>
  
      )
}

export default PasswordUI
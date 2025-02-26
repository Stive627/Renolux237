import React from 'react'
import { InputAdmin } from '../Register/Input'
import ButtonAdmin from '../Register/Button'
import validateEmail from '../Register/validateEmail'
import useScreen from '../hook/useScreen'

function EmailUI({value, handleEmail, handleSubmit}) {
  const large = useScreen()
  return (
    <div className=' px-5'>
        <form onSubmit={handleSubmit} style={{width:large? '22vw':'90vw'}}>
            <p className=' text-[25px] mb-3 '>Saissisez votre Email</p>
            <div className=' w-full  mb-6'><InputAdmin placeholder={'Entrez votre addresse email'} value={value} handleChange={handleEmail} type={'text'}/></div>
            <div  className=' w-full  flex justify-center '><ButtonAdmin value={'Continuer'} validation={validateEmail(value)}/></div>
        </form>
    </div>
  )
}

export default EmailUI
import React, { useState } from 'react'
import ButtonAdmin from './Button'
import useScreen from '../hook/useScreen'
import Password from './Password'

function PasswordUI({password1, password2, valuePassword1, valuePassword2, value, handleMove}) {
   const samePassword= password1 === password2
   const [visible, setVisible] = useState({visible1:true, visible2:true})
      const validPassword = password1.length > 5 && /\d/.test(password1) && /[A-Z]/.test(password1) && samePassword
      const handleSubmit = (e) =>{
          e.preventDefault()
      }
      const large = useScreen()
      return (
          <form onSubmit={e =>{handleSubmit(e); handleMove()}} className=' flex justify-center '>
            <div style={{width:large?'49.2vh':'36.6vh'}} className={`   flex flex-col gap-2`}>
              <Password type={'password'} visible={visible.visible1} handleVisibility={()=>setVisible({...visible, visible1:!visible.visible1})}  placeholder={'Entrez votre mot de passe'} value={password1} onChange={(e) => valuePassword1(e.target.value)}/>
              <Password type={'password'} visible={visible.visible2} handleVisibility={()=>setVisible({...visible, visible2:!visible.visible2})} value={password2 } placeholder={'Verifiez votre mot de passe'} onChange={(e) => valuePassword2(e.target.value)}/>
              <p style={{color:'rgba(80, 74, 74, 1)', fontSize:12}}>Le mot de passe doit contenir plus de 6 characters,un chiffre et une majuscule</p>
              <div className=' flex justify-center'><ButtonAdmin validation={validPassword} value={value}/></div>
              </div>
          </form>
  
      )
}

export default PasswordUI
import React, { useState } from 'react'
import { fetchLink } from '../Ttools'
import Navbar from '../ComponentsReno/Navbar'
import useScreen from '../hook/useScreen'
import '../App.css'
import Password from '../ComponentsAdmin/Password'



function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState({user:false, password:false})
  const [visible, setVisible] = useState(true)
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('usernameOrEmail', user)
    formData.append('password', password)
    if(!user && !password){
      return setErr({user:true, password:true})
    }
    if(!user){
     return setErr({...err, user:true})
    }
    if(!password){
     return setErr({...err, password:true})
    }

    try{
      await fetch(fetchLink('login'), {body:formData})
      .then((value) =>value.json())
      .then(value =>{
        localStorage.setItem('token', value.token)
      })
    }
    catch(error){
      console.error(error.response.data)
    }

  }
  const large = useScreen()
  const handleVisibility = () => setVisible(!visible)
  return (
        <>
          <Navbar right={false}/>
          <div className='mb-1 mt-9'>
                <p className=' text-center text-[28px]'> Bienvenue dans RenoluxAdmin </p>
                <p className=' my-3 text-center text-[21px]'>Connectez-vous pour continuer</p>
          </div>
          <div className=' flex justify-center w-full mb-2'>
          <form autoComplete='off'  className={ `  flex flex-col gap-3 mb-2 justify-center ${large ?  'w-1/4':' w-3/4'}`} onSubmit={e =>handleSubmit(e)}>
              <input onFocus={()=>setErr({...err, user:false})}  value={user} onChange={e =>setUser(e.target.value)} type='text' className={` p-2 rounded-md    outlineInput border ${err.user ? ' border-red-600':'border-black'}`} placeholder="Nom d'utilisateur ou email" autoComplete='new-password'/>
              <Password placeholder={'Mot de passe'} onFocus={()=>setErr({...err, password:false})} value={password} onChange={e =>setPassword(e.target.value)} err={err} handleVisibility={handleVisibility} visible={visible}/>
              <div className=' flex justify-center'><button type='submit' className={ `  bg-blue-600 text-white p-2 outlineInput rounded-lg  w-1/2`}>Connexion</button></div>
          </form>
          </div>
            <p className=' text-center text-[17px]'>Mot de passe oublie? cliquez <span className=' text-blue-600 underline'>ici</span></p>
            <p className=' my-3 text-center text-[18px]'>Vous n'avez pas de compte? creer en un <span className=' text-blue-600 underline'>ici</span></p>
        </>
  )
}

export default Login
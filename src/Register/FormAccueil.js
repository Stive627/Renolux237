import React, { useState } from 'react'
import { InputAdmin } from './Input'
import ButtonAdmin  from './Button'
import validateEmail from './validateEmail'
import useScreen from '../hook/useScreen'
import { fetchLink } from '../Ttools'
import Password from './Password'
import { useNavigate } from 'react-router-dom'

function FormAccueil({emailValue, passord1Value, password2Value, email, password1, password2, handleVerification}) {
    const [visible, setVisible] = useState({p:true, v:true})
    const samePassword = password1 === password2
    const validPassword = password1.length > 5 && /\d/.test(password1) && /[A-Z]/.test(password1) && samePassword && validateEmail(email)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()  
        handleVerification()
    }
    const large = useScreen()

    return(
        <>  
            <div className='mb-1 mt-9'>
                <p className=' text-center text-[28px]'> Bienvenue dans RenoluxAdmin </p>
                <p className=' my-3 text-center text-[21px]'>Creer votre compte pour continuer</p>
            </div>
            <div className=' flex justify-center w-full'>
                <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' className={`flex flex-col justify-center gap-2 ${large ? 'w-1/4':'w-3/4'}`}>
                    <InputAdmin type={'text'} placeholder={'Email ou numero de telephone'} value={email} handleChange={(e) =>emailValue(e.target.value)}  onblur={()=>{}}/>
                    <Password placeholder={'Entrez votre mot de passe'}  value={password1} onChange={e =>passord1Value(e.target.value)}  handleVisibility={()=>setVisible({...visible, p:!visible.p})} visible={visible.p}/>
                    <Password placeholder={'Entrez votre mot de passe'}  value={password2} onChange={e =>password2Value(e.target.value)}  handleVisibility={()=>setVisible({...visible, v:!visible.v})} visible={visible.v}/>
                    <p style={{color:'rgba(80, 74, 74, 1)', fontSize:12}}>Le mot de passe doit contenir plus de 6 characters,un chiffre et une majuscule</p>
                    <div className=' flex justify-center'><ButtonAdmin validation={validPassword} value={'Continuer'}/></div>
                </form>
            </div>
            <div className='  flex justify-center mt-10 '><a className=' w-full flex justify-center' href='http://localhost:3001/auth/google'><div className={ `flex flex-row gap-2 items-center googleBorder ${large? 'w-1/4':'w-3/4'} justify-center rounded-md p-1 `}><button className=' p-1'><img alt='logo google' className=' w-7 h-7' src={fetchLink('medias/google.png')}/></button><p className=' text-[18px] cursor-pointer'>Continuer avec google</p></div></a></div>
            <p className=' text-[16px] w-full text-center py-5'>Vous avez un compte? connecter vous <span onClick={()=>navigate('/login')} style={{color:'rgba(38, 103, 255, 1)'}} className=' underline cursor-pointer'>ici</span></p>
        </>
    )
}

export default FormAccueil
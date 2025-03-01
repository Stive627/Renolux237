import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../ComponentsReno/Navbar'
import useScreen from '../hook/useScreen'
import EmailUI from './EmailUI'
import CodeUI from './CodeUI'
import Newpw from './Newpw'
import axios from 'axios'
import { fetchLink } from '../Ttools'
import { useNavigate } from 'react-router-dom'

function RecoverPassword() {
    const large = useScreen()
    const refCode = useRef(undefined)
    const refnpw = useRef(undefined)
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const [code2, setCode2] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', email)
   await axios({url:fetchLink('admin/emailverification'), method:'POST', headers:{"Content-Type":"application/json"},data:formData })
    .then((value) => {setCode2(value.data.code); console.log(`the code sent to email ${email} is ${value.data.code}`)})
    .catch(err => console.error(err))
    refCode.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
}
function handleCode(code1){
    if(+code1 === code2){
      setValid(true)
    }
}
useEffect(()=>{
  if(valid){
  var timeId = setTimeout(() => {
    refnpw.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }, 3000);
  return () => clearTimeout(timeId)
  }
}, [valid])

function handleOnSubmit(e){
  e.preventDefault()
  var formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)
  axios({url:fetchLink('admin/passwordChange'), method:'POST', data:formData, headers:{"Content-Type":"application/json"}})
  .then(value => { navigate('/login'); console.log(value.data)})
  .catch(err => console.log(err))
}
async function handleGeneratePassword(){
  var formdata = new FormData()
  formdata.append('email', email)
  await axios({url:fetchLink('admin/emailverification'), method:'POST', headers:{"Content-Type":"application/json"},data:formdata })
  .then((value) => {setCode2(value.data.code); console.log(`the code sent to email ${email} is ${value.data.code}`)})
  .catch(err => console.error(err))
}
  return (
    <div>
        <Navbar right={false}/>
        <div className=' mt-24 flex justify-center w-full'>
            <div style={{width:large? '25vw' : '100vw'}}  className = ' h-60 flex flex-row overflow-hidden p-2'>
                <EmailUI value={email} handleEmail={(value) => setEmail(value.target.value)} handleSubmit={handleSubmit}/>
                <div ref={refCode}><CodeUI handleGeneratePassword={handleGeneratePassword} valcode={code2} valid={valid} handleCode={handleCode}  email={email}/></div>
                <div ref={refnpw}><Newpw  password={password} handlePassword={(e) => setPassword(e.target.value)} handleSubmit={handleOnSubmit}/></div>
            </div>
        </div>
    </div>
  )
}

export default RecoverPassword
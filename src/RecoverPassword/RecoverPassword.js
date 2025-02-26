import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../ComponentsReno/Navbar'
import useScreen from '../hook/useScreen'
import EmailUI from './EmailUI'
import CodeUI from './CodeUI'
import Newpw from './Newpw'
import axios from 'axios'
import { fetchLink } from '../Ttools'

function RecoverPassword() {
    const large = useScreen()
    const refCode = useRef(undefined)
    const refnpw = useRef(undefined)
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const [code2, setCode2] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData
        formData.append('email', email)
        axios({url:fetchLink('admin/emailverification'), method:'POST', headers:{"Content-Type":"application/json"},data:formData })
        .then((value) => setCode2(value.code))
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
        else{
          
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
  return (
    <div>
        <Navbar right={false}/>
        <div className=' mt-24 flex justify-center w-full'>
            <div style={{width:large? '25vw' : '100vw'}}  className = ' h-60 flex flex-row overflow-hidden p-2'>
                <EmailUI value={email} handleEmail={(value) => setEmail(value.target.value)} handleSubmit={handleSubmit}/>
                <div ref={refCode}><CodeUI valid={valid} handleCode={handleCode}  email={email}/></div>
                <div ref={refnpw}><Newpw/></div>
            </div>
        </div>
    </div>
  )
}

export default RecoverPassword
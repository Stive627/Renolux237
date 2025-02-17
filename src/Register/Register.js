import React, { useEffect, useState } from 'react'
import Navbar from '../ComponentsReno/Navbar';
import { fetchLink } from '../Ttools';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import FormAccueil from './FormAccueil';
import VerificationCode from './VerificationCode';
import UsernameUI from './UsernameUI';
import RoundStep from './RoundStep';
import PasswordUI from './PasswordUI';
import SecondStep from './SecondStep';
import axios from 'axios';

function Register() {
    const [email, setEmail]= useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [code, setCode] = useState(undefined)
    const [username, setUsername] = useState('')
    const [steps, setSteps] = useState({one:true, second:false})
    const [ui, setUI] = useState(0)
    const navigate = useNavigate()

    const checkUsername = () =>{
        return true 
    }
    const handleFinish = (user) =>{
        let formData = new FormData()
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password1)
        axios({url:fetchLink('admin/register'), headers:{"Content-Type":"application/json"}, data:formData, method:'POST'})
        .then(value => {console.log(value); navigate('/admin')})
        .catch(err => {console.error(err); console.log(user, email, password1)})
        }
    const handleNext = () =>{
        setTimeout(() => {
            setUI(ui + 1)
        }, 750);}

    useEffect(() => {
        fetch('http://localhost:3001/admin/connect',{credentials:'include'})
        .then(v => v.json())
        .then(value =>{
            setEmail(value.email)
            setUsername(value.given_name)
            setUI(2)
        } )
        .catch((err) => console.log(err.response.data))
        }
   ,[])
   switch(ui){
    case 1:
        return <div><Navbar right = {false}/><VerificationCode email={email} code={code} checkUsername={checkUsername} handleFunc={handleNext}/></div>
    case 2:
        return <div><Navbar right = {false}/><SecondStep  value={'Continuer'} valuePassword1={(value) => setPassword1(value)} valuePassword2={(value) => setPassword2(value)} password1={password1} password2={password2} passord1Value = {value => setPassword1(value)} password2Value={value =>setPassword2(value)} username = {username} handleFinish = {handleFinish}/></div>
    default:
        return <div> <Navbar right = {false}/><FormAccueil email= {email} password1 = {password1} password2 = {password2} emailValue = {value => setEmail(value)} passord1Value = {value => setPassword1(value)} password2Value={value =>setPassword2(value)} handleVerification={handleNext} /></div>
   }
}

export default Register
import React, { useState } from 'react'

function VerificationCode({email, code, handleFunc}) {
 const [num, setNum] = useState(1)
     const [one, setOne] = useState(undefined)
     const [second, setSecond] = useState(undefined)
     const [three, setThree] = useState(undefined)
     const [four, setFour] = useState(undefined)
     const [five, setFive] = useState(undefined)
     const [six, setSix] = useState(undefined)
     const [err, setErr] = useState(false)
 
     const CaseS = ({indx, value, setValue }) => <div className={` p-2 border ${indx === num ? 'border-black':'border-blue-600'}`}><input type='number' value={value} autoFocus={indx === num} onChange={(e)=>setValue(e.target.value)} disabled={ indx !== num} className=' border-none text-[16px]'/></div>
 
     const handleCode = (lastValue) =>{
         const codeA = String(one)+String(second)+String(three) + String(four) + String(five) + String(lastValue)
         if(code === codeA){
             handleFunc()
         }
         else{
             setOne(undefined); setSecond(undefined); setThree(undefined);setFour(undefined);setFive(undefined);setSix(undefined)
             setErr(true)
         }
     }
     return(
         <div className=' flex justify-center items-center  w-full h-full '>
             <p className=' mb-3'>Saississez le code de 06 chiffres envoye a l'addresse <span className=' font-bold'>{email}</span></p>
             <div className=' flex flex-row gap-2'>
             <CaseS indx={1} value={one} setValue={(value) =>{setOne(value); setNum(num + 1)}}/>
             <CaseS indx={2} value={second} setValue={(value) =>{setSecond(value); setNum(num + 1)}}/>
             <CaseS indx={3} value={three} setValue={(value) =>{setThree(value); setNum(num + 1)}}/>
             <CaseS indx={4} value={four} setValue={(value) =>{setFour(value); setNum(num + 1)}}/>
             <CaseS indx={5} value={five} setValue={(value) =>{setFive(value); setNum(num + 1)}}/>
             <CaseS indx={6} value={six} setValue={(value) => handleCode(value)}/>
             </div>
             {err &&<p>Le code est  erroné</p>}
             <p className=' mt-4'> vous n'avez pas recu de code? cliquez <span style={{color:'rgba(38, 103, 255, 1)'}}>ici</span></p>
         </div>
     )
    }

export default VerificationCode
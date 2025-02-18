import React, { useEffect, useState } from 'react'
import VerificationCode from '../VerificationCode/VerificationCode'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import useScreen from '../hook/useScreen';

function VerificationCodeUI({email, code, handleFunc}) {
    const [check, setCheck] = useState(undefined)
    const large = useScreen()
    function handleCode(localcode){
        if(localcode.length === 6){
            if(+localcode === code){
                setCheck(true)
            }
            else{
                setCheck(false)
            }
        }
    }
    useEffect(()=>{
        if(check){
            setTimeout(() => {
                handleFunc()
            }, 550);
        }
    },[check, handleFunc])
    if(check){ 
        return(
            <div className=' w-screen h-screen flex items-center justify-center'>
                <p className=' text-[21px]'>Verification complete{' '} <CheckCircleOutlineIcon className=' text-blue-700'/></p>
            </div>
        )

    }
    return(
        <div className=' flex justify-center'>
           <div className={`${large && 'w-1/2'}`}>
               <p className=' mb-3 text-[21px] text-center'>Saississez le code de 06 chiffres envoye a l'addresse <span className=' font-bold'>{email}</span></p>
              <>
                   <VerificationCode handleCode={handleCode}/>
                   {check === false &&<p className=' text-red-500'>Le code est  erroné</p>}
                   <p className=' mt-4 text-center'> vous n'avez pas recu de code? cliquez <span style={{color:'rgba(38, 103, 255, 1)'}}>ici</span></p>
               </>
           </div>
        </div>
    )
}

export default VerificationCodeUI
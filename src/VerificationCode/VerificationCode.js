import React, {useState } from 'react'
import { useScreen } from './useScreen'
import Square from './Square'

function VerificationCode({handleCode, start = 0, valcode}){
    const large = useScreen()
    const [localcode, setLocalcode] = useState(['','','','','',''])
    const [i, setI] = useState(start)
    const [err, setErr] = useState(false)
    function handleChange(value, index){
        localcode[index] = value
        if(localcode.join('').length === 6){ 
            if(+localcode.join('') === valcode){
                setErr(false)
            }
            else{
                setErr(true)
            }
        }
        setLocalcode(localcode)
        if(i === 5 ){
            setI(5)
        }
        else{ 
        setI(i + 1)
        }
        console.log(localcode)
        handleCode(localcode.join(''))
        console.log(i)

    }

    function handleKey(ekey){
        if(ekey === 'Backspace' || ekey === 'ArrowLeft'){
            if(i <=0){
                setI(0)
            }
            else{
                setI(i - 1)
            }
        }
        if(ekey === 'ArrowRight'){
            setI(i + 1)
        }
    }

  return (
    <div className=' w-full flex justify-center mt-8'>
        <div className={`${large? 'w-1/2' : 'w-full px-6'} flex flex-row gap-3 justify-center`}>
            {localcode.map((elt, indx) => <Square err={err} active={i === indx} value={elt} handleChange={(value) => handleChange(value, indx)} handlekey={(ekey) => handleKey(ekey)} key={indx}/>)}
        </div>
    </div>
  )
}

export default VerificationCode
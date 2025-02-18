import React from 'react'
import useScreen from '../hook/useScreen'
import ButtonAdmin from './Button'
import { InputAdmin } from './Input'

function UsernameUI({handleUsername, handleFinish,username}) {
    const large = useScreen()
    return(
            <div className={` w-full flex flex-col gap-2 ${large&& 'pr-3'} ${!large && ' pr-4'}`}>
                <p>Votre nom d'utilisateur</p>
                <form  style={{width:large?'44.4vh':'30.6vh'}} className={`${large ? 'w-full':'w-80'} flex  flex-col gap-2`} onSubmit={(e)=>{e.preventDefault(); handleFinish()}}>
                    <InputAdmin handleChange={(e)=>handleUsername(e.target.value)} type={'text'} value={username} placeholder={"Votre nom d'utilisateur"}/>
                    <div className=' flex justify-center'><ButtonAdmin validation={username.length >3} value={'Terminer'}/></div>
                </form>
            </div>
    )
}

export default UsernameUI
import React, { useState } from 'react'
import useScreen from '../hook/useScreen'
import ButtonAdmin from './Button'
import { InputAdmin } from './Input'

function UsernameUI({username, handleFinish}) {
    const [user, setUser] = useState(username)
    const large = useScreen()
    return(
        <div className=' flex  justify-center'>
            <div className={`${large? 'w-1/4':'w-3/4'} flex flex-col gap-2`}>
                <p>Votre nom d'utilisateur</p>
                <form  className=' flex w-full flex-col gap-2' onSubmit={(e)=>{e.preventDefault(); handleFinish(user)}}>
                    <InputAdmin handleChange={(e)=>setUser(e.target.value)} type={'text'} value={user} placeholder={"Votre nom d'utilisateur"}/>
                    <ButtonAdmin validation={user.length >0} value={'Terminer'}/>
                </form>
            </div>
        </div>
    )
}

export default UsernameUI
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useScreen from '../hook/useScreen'

const ButtonDomain = ({value, handleClick}) => <button onClick={()=>handleClick()} className=' border rounded-md hover:bg-blue-600  hover:text-white text-lg p-2' style={{border:'1px solid rgba(3, 4, 94, 1)'}}>{value}</button>
function Admin() {
  const large = useScreen()
  const navigate = useNavigate()
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className={`${large ? 'w-1/3':'w-3/4'} flex flex-col gap-1 justify-center`}>
            <ButtonDomain value={'Performance Renolux'} handleClick={()=>navigate('/adminPerformance')}/>
            <ButtonDomain value={'Manager les medias'} handleClick={()=>navigate('/adminMedia')}/>
            <ButtonDomain value={'Generer un devis'} handleClick={()=>navigate('/adminDevis')}/>
        </div>
    </div>
  )
}

export default Admin
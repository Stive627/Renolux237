import React from 'react'
import SelectUI from './SelectUI'

function HandleFile({file, type, handleType, handleAnnuler, handleAjouter, elts, disable}) {
  return (
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.008)'}} className=' w-full flex justify-center items-center'>
        <div className=' w-full border border-black p-2'>
           <div className=' flex justify-center border'><img src={URL.createObjectURL(file)} alt='file' className='w-1/2 h-1/2'/></div>
           <div className=' w-full flex justify-center my-5'><div className=' w-3/4 justify-normal'><SelectUI elts={elts} type={type} handleType={handleType} /></div></div>
           <div className='w-full flex justify-center'>
                <div className=' w-3/4 flex justify-end gap-3'>
                    <button onClick={() => handleAnnuler()} className=' border rounded-md border-black py-1 px-2'>Annuler</button>
                    <button disabled={disable} onClick={() => handleAjouter()} className={`${disable? ' bg-gray-600 text-black':' bg-black text-white'} py-1 px-2 rounded-md`}>Ajouter</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HandleFile
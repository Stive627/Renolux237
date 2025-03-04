import React from 'react'
import useScreen from '../hook/useScreen'

function SingleElt({active, value, handleActive, indx}){
    return(
        <div className=' flex flex-col gap-1'>
            <button onClick={()=> handleActive(indx)}  className={`${active ? 'text-blue-600':'text-black'} text-[16px] border border-none`}>{value}</button>
            {active && <hr className=' w-full'/>}
        </div>
    )
}

function Header({active, handleActive}) {
    const large = useScreen()
    const deco = 'DECORATION' + (large ? '  MAISON' : '')
    const elt = ['PLACOPLATRE', deco, 'PEINTURE']
  return (
        <div className=' flex justify-center'>
            <div className=' flex flex-row gap-8 mt-4  mx-1'>
                {elt.map((elt, indx) => <SingleElt key={indx} active={active === indx} value={elt} indx={indx} handleActive={handleActive}/>)}
            </div>
        </div>

  )
}

export default Header
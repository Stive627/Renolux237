import React, { useState } from 'react'
import { fetchLink, Timg } from '../Ttools'
import MenuIcon from '@mui/icons-material/Menu';
import useScreen from '../hook/useScreen';
import CloseIcon from '@mui/icons-material/Close';
import '../App.css'

const scroll = (id) => {
    const elt = document.getElementById(id)
    if(elt){
        elt.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }
}

export function LeftNav(){
    const large = useScreen()
    return(
        <div className = 'flex flex-row items-center gap-2'>
            <Timg alt={'Logo Renolux'} url={fetchLink('medias/logo.png')} className={`${large? 'w-16 h-16' : 'w-10 h-10'}`}/>
            <p style={{color:'rgba(57, 55, 55, 1)'}} className={`font-semibold  ${large? 'text-[26px]':'text-[20px]'}`}>Renolux Cameroun</p>
        </div>
    )
}

function RightNav(){
    const [sm, setSm] = useState(false)
    const large = useScreen()
    const links = [{title:'Catalogue', link:'#catalogue'}, {title:'Obtenir un devis', link:'#devis'}, {title:'Contact & localisation', link:'#contact'}]
    if(large){
        return(<div className='flex flex-row items-center gap-4'>{links.map((elt, indx) => <a key={indx} href={elt.link} onClick={scroll(elt.link.slice(1))} className = 'navhov no-underline text-[18px] hover:underline'>{elt.title}</a>)}</div>)
    }
    return(
        <div>
            <button onClick={()=> setSm(!sm)} className=' p-2 border-x-gray-300'>{ sm ? <CloseIcon className=' w-5 h-6'/> : <MenuIcon className=' w-5 h-6'/>}</button>
            {sm && <div className=' absolute top-16 left-0 w-full h-full bg-white '>
                        <div className='  w-full flex justify-center'>
                        <div className=' flex flex-col justify-center w-3/4 divide-y gap-3 '>
                            {links.map((elt, indx) =><button onClick={() => setSm(false)}><a key={indx} href={elt.link} onClick={scroll(elt.link.slice(1))}  className = 'no-underline navhov'>{elt.title}</a></button>)}
                        </div>
                        </div>
                    </div>
            }
        </div>
    )
}

function Navbar({right = true}) {    
  return (
        <>
            <div className = 'flex justify-between px-2 py-2'>
                <LeftNav/>
                { right &&<RightNav/>}
            </div>
            <hr/>
        </>
  )
}

export default Navbar
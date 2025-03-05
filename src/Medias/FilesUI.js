import React from 'react'
import useScreen from '../hook/useScreen'
import { fetchLink } from '../Ttools'

function FilesUI({content}) {
    const large = useScreen()
    console.log(content)
    if(content === undefined){
        return(
            <div className='h-64 flex justify-center items-center'>
                <p className='animate-spin text-white p-4 border-2 border-blue-500 rounded-full w-12 h-12 border-b-white'> hi</p>
            </div>
        )
    }
    if(content.length === 0){
        return(
            <p className=' text-center text-[21px]'>No content...</p>
        )
    }
    if(content.length>0){
        console.log(content[0].url)
        return (
            <div className={`grid ${large ? 'grid-cols-3':'grid-cols-2'} gap-2`}>
                {content.map((elt, indx) =><img key={indx} className=' h-full border w-full cursor-pointer' alt={`file${indx}`} src={fetchLink(elt.url)}/>)}
            </div>
        )}
}

export default FilesUI
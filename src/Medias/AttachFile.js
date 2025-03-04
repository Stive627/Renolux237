import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

function AttachFile({handlefile}) {
  return (
    <div>
        <div className=' relative top-10 left-4'>
            <label className=' cursor-pointer border border-none p-2 bg-black rounded-full flex justify-center items-center w-10 h-10' htmlFor='med'><AttachFileIcon className=' text-white'/>
                <input className=' hidden' id="med" type='file' onChange={(e) => handlefile(e.target.files[0])}/>
           </label>
        </div>

    </div>
  )
}

export default AttachFile
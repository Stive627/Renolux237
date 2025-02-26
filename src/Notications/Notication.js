import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './notication.css'

//We have to add the overflow hidden while using this functionnality 
function Notication() {
  return (
        <div className=' absolute right-0 -top-14'>
            <div className=' w-64 bg-white border border-blue-500 p-2 rounded-md first'>
                <p className = 'text-[18px]'><CheckCircleIcon className=' rounded-full text-blue-600'/>{' '} Password sent</p>
            </div>
    </div>
    )
}
export default Notication
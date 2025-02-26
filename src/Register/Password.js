import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

function Password({onFocus=() =>{}, value, onChange, err=undefined, placeholder}) {
  const [visible, setVisible] = useState(false)
  return (
    <div className=' w-full relative'>
      <input onFocus={onFocus} value={value} onChange={onChange} type={visible ? 'text':'password'} className={` p-2 rounded-md outlineInput w-full  border ${err?.password ? 'border-red-600':'border-black'}`} placeholder={placeholder}/>
      <button type='button' onClick={() => setVisible(!visible)} className=' absolute top-2 right-2'>{visible ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button>
    </div> 
  )
}

export default Password
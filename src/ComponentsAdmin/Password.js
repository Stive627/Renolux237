import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Password({handleVisibility, visible, onFocus=() =>{}, value, onChange, err, placeholder}) {
  return (
    <div className=' w-full relative'>
      <input onFocus={onFocus} value={value} onChange={onChange} type={!visible ? 'text':'password'} className={` p-2 rounded-md outlineInput w-full  border ${err?.password ? 'border-red-600':'border-black'}`} placeholder={placeholder} autoComplete='new-password'/>
      <button type='button' onClick={() => handleVisibility()} className=' absolute top-2 right-2'>{!visible ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button>
    </div> 
  )
}

export default Password
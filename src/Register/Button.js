import SettingsIcon from '@mui/icons-material/Settings';

function ButtonAdmin({value, validation}){
    return(
        <button type='submit' disabled={!validation} className={` w-1/2 text-[18px]  p-2 cursor-pointer text-white font-semibold rounded-lg`} style={{backgroundColor:validation?'rgba(38, 103, 255, 1)':'rgba(72, 149, 239, 1)', borderColor:'rgba(38, 103, 255, 1)'}}>{validation &&<SettingsIcon className=' text-white animate-spin'/>}{value}</button>
    )
}
export default ButtonAdmin

export const InputAdmin = ({handleChange, placeholder,value, type, autoComplete=''}) => {
    return(
        <input  autoComplete={autoComplete}  onChange={(e) =>handleChange(e)} placeholder={placeholder} value={value} className=' w-full p-2 border border-black   rounded-md outlineInput focus:border-blue-500' type={type}/>
    )
}
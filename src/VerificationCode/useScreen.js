import { useEffect, useState } from "react";

export function useScreen(){
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleChange(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleChange)
        return ()=> window.removeEventListener('resize', handleChange)
    },[width])
    return width>600
}
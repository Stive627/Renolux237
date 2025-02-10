import { useEffect, useState } from "react";

export default function useScreen(){
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleWidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
        return () => window.removeEventListener('resize', handleWidth)
    }, [width])
    return width > 600
}
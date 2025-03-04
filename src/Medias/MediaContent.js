import React, { useEffect } from 'react'
import FilesUI from './FilesUI';

function MediaContent({active, content}) {

    useEffect(() => {
        console.log(content)
    },[content])
    switch(active){
        case 1:
            return <FilesUI content={content?.Decoration}/>
        case 2:
            return <FilesUI content={content?.Peinture}/>
        default:
            return <FilesUI content={content?.Placoplatre}/>
    }
}

export default MediaContent
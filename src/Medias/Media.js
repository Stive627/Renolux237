import React, { useState } from 'react'
import Navbar from '../ComponentsReno/Navbar'
import Header from './Header'
import AttachFile from './AttachFile'
import HandleFile from './HandleFile'
import MediaContent from './MediaContent'
import useScreen from '../hook/useScreen'
import axios from 'axios'

function Media() {
    const [active, setActive] = useState(0)
    const [file, setFile] = useState(undefined)
    const [type, setType]=useState('--select the service--')
    const large = useScreen()
    const url = file? URL.createObjectURL(file) : undefined
    const [content, setContent] = useState({Placoplatre:[], Decoration:[], Peinture:[]})
    const disable = type === '--select the service--'
    function handleAjouter(){
      var formdata = new FormData()
      formdata.append('category', type)
      formdata.append('media', file)
      axios({method:'POST', url:fetch('media/add'), headers:{"Content-Type":"application/json"}, data:formdata})
      .then(value =>{
        console.log(value.data)
        setContent({...content, [type]:[...content[type], url]});
         setFile(undefined)
      })
      .catch(err => console.log(err))
    }
  return (
    <div>
        <Navbar/>
        <div className=' flex justify-center w-screen'>
          <div className={`${large ? 'w-1/2' : ' w-full'}`}>
          { !file && <>
                      <Header active={active} handleActive={(val) => setActive(val)}/>
                      <div className=" float-right relative right-7 bottom-5"><AttachFile handlefile={(value) =>{ setFile(value); console.log(value)}}/></div>
                      <div className=' mt-16'><MediaContent content={content} active={active} /></div>
                    </>
          }
            {file && <HandleFile disable={disable}  type={type} elts={['Placoplatre', 'Decoration', 'Peinture']}  handleType={setType} file={file} handleAnnuler={()=>setFile(undefined)} handleAjouter={handleAjouter}/>}
          </div>
        </div>
    </div>
  )
}

export default Media
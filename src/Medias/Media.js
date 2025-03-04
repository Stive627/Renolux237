import React, { useEffect, useState } from 'react'
import Navbar from '../ComponentsReno/Navbar'
import Header from './Header'
import AttachFile from './AttachFile'
import HandleFile from './HandleFile'
import MediaContent from './MediaContent'
import useScreen from '../hook/useScreen'
import axios from 'axios'
import { fetchLink } from '../Ttools'

function Media() {
  useEffect(()=>{ 
    axios({method:'GET', url:fetchLink('media/show'), headers:{"Content-Type":"application/json"}})
    .then(value =>{
      setContent({Placoplatre:value.data.filter(elt => elt.category === 'Placoplatre'), Decoration:value.data.filter(elt => elt.category === 'Decoration'), Peinture:value.data.filter(elt => elt.category === 'Peinture')})
    })
    .catch(err => console.log(err))
  },[])
    const [active, setActive] = useState(0)
    const [file, setFile] = useState(undefined)
    const [type, setType]=useState('--select the service--')
    const large = useScreen()
    const url = file? URL.createObjectURL(file) : undefined
    const [content, setContent] = useState({Placoplatre:undefined, Decoration:undefined, Peinture:undefined})
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
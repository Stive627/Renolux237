import React, { useState } from 'react'
import Navbar from '../ComponentsReno/Navbar'
import Header from './Header'

function Media() {
    const [active, setActive] = useState(0)
  return (
    <div>
        <Navbar/>
        <Header active={active} handleActive={(val) => setActive(val)}/>

    </div>
  )
}

export default Media
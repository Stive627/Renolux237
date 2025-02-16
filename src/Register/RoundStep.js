import React from 'react'

function RoundStep({step, value}) {
  return (
    <div className={`${step? 'bg-blue-600 text-white':' bg-slate-500 text-black'} p-1 border border-none rounded-full`}><p>{value}</p></div>
  )
}

export default RoundStep
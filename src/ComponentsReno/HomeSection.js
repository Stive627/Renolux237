import React, { useEffect, useState } from 'react'
import { fetchLink, Timg, TypeWriterArr } from '../Ttools'
import useScreen from '../hook/useScreen'

const Plans = () => {
    const [plans, setPlans] = useState([])
    const large = useScreen()
    useEffect(() => {
        fetch((fetchLink('plans')), {
            method: 'GET',
        })
        .then((value)=> value.json())
        .then((value)=>{
            const usefulPlans = value.map(elt => fetchLink(`public/plans/${elt}`))
            console.log(value)
            const items = usefulPlans.map((elt,indx) => <Timg key={indx} url={elt} className={'  w-full h-full rounded-sm'} alt={`plan de placo n0${indx}`}/>)
            setPlans(items); 
            })
        .catch((error) => console.log('An error occured!', error))
    }, [])

    if(plans.length <=0 ) return <div className=' flex justify-center items-center h-1/2'> <div className=' border-2 border-blue-500 w-10 h-10 animate-spin rounded-full border-b-white'></div></div>
    return(
        <div className=' flex justify-end'>
            <div className={`border border-gray-200 p-2 rounded-sm flex flex-col gap-1 overflow-hidden ${large ? 'w-[75vh] h-[60vh]' :' h-[50vh]' }`}>
                <div className='flex flex-col gap-1 scrollVertical '>
                    {plans}
                </div> 
            </div>            
        </div>
    )
        
}

function HomeSectionRight(){
    const large = useScreen()
    return(
        <div className = ' ml-1 col-span-4'>
            <div className=''>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ${large ? 'text-[55px]' : 'text-[35px]'} `}>Nous sommes </span>{large &&<br/>}
                <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500  ${large ? 'text-[55px]' : 'text-[35px]'}`}>recommandés pour</span>
            </div>
            <div className=' flex justify-start pb-2'>
                <div className=' border border-blue  bg-gradient-to-r  from-blue-500 to bg-green-500'><TypeWriterArr arr={['Des solutions innovantes', 'Un service de qualité', 'le  respect des delais', 'Une approche orientée client.']} className={`${large?' text-[40px]' : ' text-[25px]'} font-bold text-white`} ms={100}/></div>
            </div>
            <Plans/>
        </div>
    )
}

function HomeSection(){
    const large = useScreen()
    if(!large){
        return(
            <div>
                <img alt='' className=' h-full w-full' src={fetchLink('medias/homepic.png')}/>
                <HomeSectionRight/>
            </div>
        )
    }
  return (
    <div className='grid grid-cols-7'>
        <div className=' col-span-3'> <img alt='' className=' w-[84vh] h-[84vh]' src={fetchLink('medias/homepic.png')}/></div>
        <HomeSectionRight/>
    </div>
  )
}

export default HomeSection
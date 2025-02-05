import React from 'react'
import SideLine from './SideLine'
import pantera from '../../assets/pantera.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import reddit from '../../assets/reddit.png'
import line from '../../assets/lineDesign.png'


const Partner = () => {
  return (
    <div className=' bg-black h-screen text-white w-full justify-center py-10 flex'>
       <div className=' w-[80%] flex flex-col justify-between'>
          <div className=' flex flex-col gap-10 w-full'>
           <span>our partners</span>
            <div className=' flex w-full justify-between'>
              <img src={pantera} alt="" />
              <img src={reddit} alt="" />
              <img src={tcs} alt="" />
              <img src={chorus} alt="" />
              <img src={pantera} alt="" />
            </div>
           </div>

           <div className=' flex w-full justify-between'>
            <div className=' flex gap-10 h-auto'>
              <div className=' flex flex-col gap-5 w-44 items-center'>
                <span className=' text-5xl font-bold'>75,000+</span>
                <p className=' text-center text-xl'>Startups & Service Providers</p>
              </div>
            </div>
            <hr className=' border-2 border-white h-full'/>

            <div className=' flex gap-10 h-auto'>
              <div className=' flex flex-col gap-5 w-44 items-center'>
                <span className=' text-5xl font-bold'>1,500+</span>
                <p className=' text-center text-xl'>Institutional Investors</p>
              </div>
            </div>
            <hr className=' border-2 border-white h-full'/>

            <div className=' flex gap-10 h-auto'>
              <div className=' flex flex-col gap-5 w-44 items-center'>
                <span className=' text-5xl font-bold'>9,000+</span>
                <p className=' text-center text-xl'>Angel <br/>Investors</p>
              </div>
            </div>
           </div>

           <div className=' w-full flex justify-center items-center'>
            <img src={line} alt="" />
           </div>
       </div>
    </div>
  )
}

export default Partner
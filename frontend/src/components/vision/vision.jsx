import React from 'react'
import girl from './Image1.png'
import circle from './Frame.png'
import square from './Frame2.png'

const Vision = () => {
  return (
    <div className='  flex h-[550px]'>
        <div className='flex justify-center items-center  w-[50%] border-yellow-950'>
          <div className='h-[22rem] sm:h-[28rem] dropp-shadow bg-white border-black mx-24 w-[45rem] border-2 rounded-2xl ' >
            <h3 className='syne-fon font-extrabold leading-3 sm:text-4xl my-2  mx-2 p-4 sm:p-7 '>Our Vision</h3>
            <div className='border-b-4 ml-11 w-[42%] rounded-lg border-[#8C9C4E]'></div>
            <div>
              <ul className='list-inside mx-4 sm:mx-7 sm:py-3 sm:px-11 px-4 sm:leading-normal text-xs  sm:text-xl font-medium syne-fon' style={{"list-style":"square"}}>
                <li className='my-4'>To move the world of design forward and enrich the creativeness among the students</li>
                <li className='my-4'>To add on values to the institute by enhancing the designing culture.</li>
                <li className='my-4'>To help innovative minds create virtual heritage and explore this field.</li>
              </ul>
            </div>
            <div className='flex mx-4 justify-between'>
              <div>
              <img className='h-12' src={square} alt="" />
              </div>
              <div>
                <button className=' border-2 border-black syne-fon  w-48 py-2 px-1 text-xs sm:text-xl font-medium text-white bg-[#FE3D4D] rounded-3xl' style={{"filter": "drop-shadow(rgb(0, 0, 0) 0px 5px 0px)"}}>
                  Read our Mission
                </button>
              </div>
            </div>
          </div>
         
        </div>
        <div className=' relative top-[10rem] sm:top-0 w-[50%] flex flex-col items-center border-black'>
          <div><img className='h-20 sm:h-40 sm:ml-72' src={circle} alt="" /> </div>
          <div><img className='h-48 sm:h-auto sm:pr-[20rem]'  src={girl} alt="" /></div>
          
        </div>
        
    </div>
  )
}

export default Vision
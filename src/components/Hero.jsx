import React from 'react'

export default function Hero({riveAnimation, reverse=false, decorator, title, description}) {
  return (
    <div className={`w-full flex justify-between ${reverse ? 'flex-row-reverse':""} items-center gap-x-20 pl-14 pr-14 pt-18 pb-18 `}>
        <div className='w-1/2'>
            <p>{decorator}</p>
            <h1 className='font-black text-6xl'>{title}</h1>
            <p>{description}</p>
        </div>
        <div className='w-1/2 overflow-hidden'>
        <iframe style={{ width:"500px", height:"600px"}} src={riveAnimation} allowfullscreen title={riveAnimation}></iframe>
        </div>
    </div>
  )
}

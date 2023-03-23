import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='w-full  pt-2 pb-2 pl-4 pr-4 border-b-2 border-gray-100 flex items-center justify-between   '>
        <p className='font-black text-2xl  '>BOC</p>
        <div className='flex gap-x-16 text-gray-400'>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Collaborate</p>
        </div>
        <Button />
    </div>
  )
}

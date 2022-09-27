import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='w-full  text-white pl-12 pr-12 pt-4 pb-4 h-18 flex items-center justify-between rounded-br-lg  '>
        <p className='font-bold text-2xl text-yellow-100 '>CAD</p>
        <div className='flex gap-x-16 text-gray-50'>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Collaborate</p>
        </div>
        <Button />
    </div>
  )
}

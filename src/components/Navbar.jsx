import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='w-full pl-12 pr-12 pt-4 pb-4 border-b h-18 flex items-center justify-between rounded-br-lg'>
        <p className='font-bold text-2xl'>CAD</p>
        <div className='flex gap-x-16 text-gray-500'>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Collaborate</p>
        </div>
        <Button />
    </div>
  )
}

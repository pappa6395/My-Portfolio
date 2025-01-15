"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {

  const router = useRouter()

  const handleLogin = () => {
    
    router.push('/login')
    
  }

  return (

    <footer className='bg-white dark:bg-slate-900 h-12 w-full 
    text-center space-x-4 tracking-wider py-3 md:py-2 text-xs md:text-base'>
        &copy;2025 PapFolio is Proudly Powered by{" "} 
        <span className='text-lime-500'>bslthemes</span>
        <button
        onClick={handleLogin}
        type='button'
        className='border rounded-full dark:bg-slate-800 bg-slate-100 px-3 
        dark:text-neutral-500 text-neutral-700'
        >
          Dashboard
        </button>
    </footer> 

  )
}

export default Footer
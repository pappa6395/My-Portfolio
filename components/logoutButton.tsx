"use client"

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

const LogoutButton = ({variant}: {variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined}) => {

    const router = useRouter()
    const handleLogout = async () => {
        await signOut();
        router.push('/')
    }

  return (

    <Button 
        onClick={handleLogout} 
        variant={variant}
        size={"sm"}
        className='w-full'
    >
        Logout
    </Button>

  )
}

export default LogoutButton
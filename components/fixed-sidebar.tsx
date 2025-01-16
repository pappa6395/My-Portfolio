"use client"

import React, { useState } from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { BriefcaseBusiness, Dumbbell, Landmark, UserRoundPen } from 'lucide-react'
import { VscTools } from 'react-icons/vsc'
import { FaFacebook, FaGithub, FaInstagram, FaLine, FaLinkedin, FaRegNewspaper } from 'react-icons/fa'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Image from 'next/image'
import { WordRotateDown } from './ui/word-rotate'
import { Settings } from '@prisma/client'
import { Button } from './ui/button'


const FixedSidebar = ({siteSettings}: {siteSettings: Settings | null}) => {

    const [isClose, setIsClose] = useState(false)
    
    const profileText = siteSettings?.animatedText.split(",") || [
        "Fullstack", 
        "Web Developer"
    ]
    const navItems = [
        {
            href: "/#about",
            icon: UserRoundPen,
            title: "About"
        },
        {
            href: "/#projects",
            icon: BriefcaseBusiness,
            title: "Projects"
        },
        {
            href: "/#skills",
            icon: Dumbbell,
            title: "Skills"
        },
        {
            href: "/#services",
            icon: VscTools,
            title: "Services"
        },
        {
            href: "/#resume",
            icon: Landmark,
            title: "Resume"
        },
        {
            href: "/#blogs",
            icon: FaRegNewspaper,
            title: "Blogs"
        },
        {
            href: "/#contact",
            icon: LiaTelegramPlane,
            title: "Contact"
        },
    ];
    const socialLinks = [
        {
            href: `${siteSettings?.linkedIn}`,
            icon: FaLinkedin,
            title: "LinkedIn"
        },
        {
            href: `${siteSettings?.instagram}`,
            icon: FaInstagram,
            title: "Instagram"
        },
        {
            href: `${siteSettings?.facebook}`,
            icon: FaFacebook,
            title: "Facebook"
        },
        {
            href: `${siteSettings?.line}`,
            icon: FaLine,
            title: "Line"
        },
        {
            href: `${siteSettings?.github}`,
            icon: FaGithub,
            title: "GitHub"
        },
    ]

    const handleToggleCard = () => {
        
        if (isClose === false) {
            setIsClose(true)
        } else {
            setIsClose(false)
        }
    }


  return (

    <div className='md:fixed flex mx-2 gap-0 md:gap-4 z-50'>
        <div className='space-y-3 hidden md:block'>
            {/* Menu */}
            <button 
                type='button'
                onClick={handleToggleCard}
                className='flex flex-col gap-1.5 dark:bg-slate-900 p-3.5
            group items-start justify-center bg-slate-50 rounded-[24px] w-14 h-14'>
                <span className='flex-shrink-0 w-5 group-hover:w-6 h-[1.8px] 
                dark:bg-slate-50 bg-slate-900 group-hover:bg-lime-500 transition-all duration-500'></span>
                <span className='flex-shrink-0 w-6 h-[1.8px] 
                dark:bg-slate-50 bg-slate-900 group-hover:bg-lime-500'></span>
                <span className='flex-shrink-0 w-3 group-hover:w-6 h-[1.8px] 
                dark:bg-slate-50 bg-slate-900 group-hover:bg-lime-500 transition-all duration-500'></span>
            </button>
            <ModeToggle />
            {/* Navigation */}
            <div className='flex flex-col gap-6 space-y-3 dark:bg-slate-900 
            bg-slate-50 p-3.5 group items-start justify-center 
            rounded-full'>
                { navItems.map((Item, i) => {
                    return (
                        <div key={i} className='mt-2'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={Item.href} className='hover:text-lime-500 duration-300'>
                                                <Item.icon className='w-5 h-5 ml-0.5' />
                                                <span className='sr-only'>{Item.title}</span>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent side='right' className='text-xs uppercase tracking-wider'>
                                            <p>{Item.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                        </div>
                    )
                })}
            </div>
        </div>
        {!isClose ? (
            <div className='block md:hidden lg:block dark:bg-slate-900 bg-slate-50 gap-4 p-6 rounded-tl-xl
            rounded-b-xl w-full'>
                    <Image 
                        src={`${siteSettings?.imageUrl}`} 
                        alt={`${siteSettings?.profileName}`} 
                        width={500} 
                        height={500}
                        className='object-cover rounded-b-xl
                         rounded-tl-xl w-full h-72'
                    />
                
                <div className='py-2 mt-2 gap-3 flex flex-col justify-center items-center'>
                    <WordRotateDown 
                        className='text-lime-500 text-xl font-bold uppercase tracking-wider'
                        words={profileText}
                    />
                    <p className='dark:text-slate-50 text-slate-900 font-semibold
                    scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0'>
                        {siteSettings?.profileName}
                    </p>
                    <div className='relative flex space-x-3 gap-2'>
                    { socialLinks.map((Item, i) => {
                            return (
                                <div key={i} className='rounded-full border 
                                border-slate-500/50 w-8 h-8 text-center pt-1'>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link href={Item.href} target='_blank' className='dark:text-slate-50 text-slate-900
                                                hover:text-lime-500 dark:bg-slate-900 bg-slate-50 duration-300'>
                                                    <Item.icon className='w-4 h-4' />
                                                    <span className='sr-only'>{Item.title}</span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side='right' className='text-xs uppercase tracking-wider'>
                                                <p>{Item.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full border-t mt-2 pt-2 gap-6 flex justify-between items-center'>
                        <Button 
                            asChild 
                            type="button" 
                            variant={"outline"}
                            style={{ borderRadius: '100px'}}
                        >
                            <Link 
                                href={`${siteSettings?.cvUrl}`}
                                target='_blank' 
                                className='hover:text-lime-500
                            font-semibold h-10 text-sm text-center py-2
                            duration-300'>
                                Download CV
                            </Link>
                        </Button>
                        <Button 
                            asChild 
                            type="button" 
                            variant={"outline"}
                            style={{ borderRadius: '100px' }}
                        >
                            <Link 
                                href="https://calendar.app.google/6x8LJAxemjJSFfAbA"
                                target="_blank" 
                                className='hover:text-lime-500 font-semibold 
                                text-sm text-center py-2 duration-300'>
                                Appointment
                            </Link> 
                        </Button>
                    </div>
                </div>
            </div>
        ) : ""}
        
    </div>

  )
}

export default FixedSidebar
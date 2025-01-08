import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { BriefcaseBusiness, Dumbbell, Landmark, UserRoundPen } from 'lucide-react'
import { VscTools } from 'react-icons/vsc'
import { FaFacebook, FaGithub, FaLine, FaLinkedin, FaRegNewspaper } from 'react-icons/fa'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Image from 'next/image'
import { WordRotateDown } from './ui/word-rotate'
import ShinyButton from './ui/shiny-button'


const FixedSidebar = () => {

    const navItems = [
        {
            href: "#",
            icon: UserRoundPen,
            title: "About"
        },
        {
            href: "#",
            icon: Dumbbell,
            title: "Skills"
        },
        {
            href: "#",
            icon: VscTools,
            title: "Services"
        },
        {
            href: "#",
            icon: BriefcaseBusiness,
            title: "Projects"
        },
        {
            href: "#",
            icon: Landmark,
            title: "Resume"
        },
        {
            href: "#",
            icon: FaRegNewspaper,
            title: "Articles"
        },
        {
            href: "#",
            icon: LiaTelegramPlane,
            title: "Contact"
        },
    ];
    const socialLinks = [
        {
            href: "#",
            icon: FaLinkedin,
            title: "LinkedIn"
        },
        {
            href: "#",
            icon: FaFacebook,
            title: "Facebook"
        },
        {
            href: "#",
            icon: FaLine,
            title: "Line"
        },
        {
            href: "#",
            icon: FaGithub,
            title: "GitHub"
        },
    ]

  return (

    <div className='flex px-2 gap-4'>
        <div className='space-y-3'>
            {/* Menu */}
            <button className='flex flex-col gap-1.5 dark:bg-slate-900 p-3.5
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
        <div className='dark:bg-slate-900 bg-slate-50 gap-4 p-4 rounded-tl-xl
        rounded-b-xl w-full flex flex-col items-center'>
                <Image 
                    src={'/Pappo.JPG'} 
                    alt='devpap' 
                    width={500} 
                    height={500}
                    className='object-cover rounded-b-xl
                     rounded-tl-xl h-72'
                />
            
            <div className='py-2 mt-8 gap-3 flex flex-col justify-center items-center'>
                <WordRotateDown 
                    className='text-lime-500 text-xl font-bold uppercase tracking-wider'
                    words={["Fullstack", "Web Developer"]}
                />
                <p className='dark:text-slate-50 text-slate-900 font-semibold
                scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0'>
                    Nontachai Pahsukkul
                </p>
                <div className='flex justify-center items-center space-x-3 py-2'>
                { socialLinks.map((Item, i) => {
                        return (
                            <div key={i} className='mt-2 rounded-full p-3 border 
                            border-slate-500/50 w-12 h-12 text-center'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={Item.href} className='dark:text-slate-50 text-slate-900
                                            hover:text-lime-500 dark:bg-slate-900 bg-slate-50 duration-300'>
                                                <Item.icon className='w-5 h-5' />
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
                <div className='w-full border-t mt-4 pt-8 gap-6 flex justify-between items-center'>
                    <ShinyButton>
                        <Link href="#" className='hover:text-lime-500
                        font-semibold h-10 text-center py-2
                        duration-300'>
                            Download
                        </Link>
                    </ShinyButton>
                    <ShinyButton>
                        <Link href="#" className='hover:text-lime-500
                        font-semibold text-center py-2
                        duration-300'>
                            Hire me
                        </Link> 
                    </ShinyButton>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default FixedSidebar
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

    <div className='gap-0 md:gap-4'>
        <div className='hidden md:block lg:hidden dark:bg-slate-900 bg-slate-50 gap-4 p-6 rounded-tl-xl
        rounded-b-xl w-full'>
                <Image 
                    src={'/Pappo.JPG'} 
                    alt='devpap' 
                    width={500} 
                    height={500}
                    className='object-cover rounded-b-xl
                     rounded-tl-xl w-full h-72'
                />
            
            <div className='py-2 mt-2 gap-3 flex flex-col justify-center items-center'>
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
                            <div key={i} className='rounded-full p-3 border 
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
                <div className='w-full border-t mt-2 pt-2 gap-6 flex justify-between items-center'>
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
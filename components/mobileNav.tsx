"use client"

import React from 'react'
import { ModeToggle } from './mode-toggle'
import { MobileModeToggle } from './mobile mode-toggle'
import { AlignJustify, BriefcaseBusiness, Dumbbell, Landmark, UserRoundPen } from 'lucide-react'
import { VscTools } from 'react-icons/vsc'
import { FaRegNewspaper } from 'react-icons/fa'
import { LiaTelegramPlane } from 'react-icons/lia'
import Link from 'next/link'


const MobileNav = () => {

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

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

  return (

    <nav className='fixed w-full z-50'>
        <div className="px-3 py-4 mx-auto h-20 dark:bg-slate-900 bg-white flex justify-between">
            <div>
                <p>Nontachai Pahsukkul</p>
                <p className='text-lime-500'>Web Developer</p>
            </div>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <MobileModeToggle />
                <button 
                    data-collapse-toggle="navbar-user" 
                    type="button" 
                    className="inline-flex items-center p-2 w-12 h-12 
                    justify-center text-sm text-gray-500 rounded-lg 
                    md:hidden hover:bg-gray-100 focus:outline-none 
                    focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                    dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-user" 
                    aria-expanded="false"
                    onClick={handleToggleDropdown}
                >
                    <span className="sr-only">Open main menu</span>
                    <AlignJustify className='size-10' />
                </button>
            </div>
        </div>
        <div 
            className={`absolute items-center justify-end z-50 top-20
            ${isDropdownOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-user">
            <div className="flex flex-col w-full z-40 font-medium p-4 md:p-0 border 
            border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse 
            md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
            md:dark:bg-gray-900 dark:border-gray-700"
            >
                {navItems.map((item,index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className='flex items-center ' >
                            <Icon className="w-5 h-5 text-slate-600 
                            dark:text-slate-100 hover:text-lime-500"
                            />
                            <Link 
                                href={item.href} 
                                className="block py-2 px-3 text-gray-900 rounded 
                                hover:bg-gray-100 md:hover:bg-transparent 
                                md:hover:text-blue-700 md:p-0 dark:text-white 
                                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                                dark:hover:text-white md:dark:hover:bg-transparent 
                                dark:border-gray-700"
                                >
                                    
                                    <p className='text-base font-semibold 
                                    tracking-wider text-slate-600 dark:text-slate-100'>
                                        {item.title}
                                    </p>
                            </Link>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </nav>

  )
}

export default MobileNav
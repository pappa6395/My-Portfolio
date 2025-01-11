import React from 'react'
import SectionHeading from './SectionHeading'
import SectionSubHeading from './SectionSubHeading'
import { GrServices } from'react-icons/gr'
import { FiPenTool } from'react-icons/fi'
import { FaConnectdevelop } from 'react-icons/fa'
import { MdOutlineRocketLaunch } from 'react-icons/md'
import { GiJigsawBox } from 'react-icons/gi'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const ServicesListing = () => {

    const services = [
        {
            title: "Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
            icon: FiPenTool,
            devCount: 1,
            color: "text-emerald-400",
            href: "#"
        },
        {
            title: "Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
            icon: FaConnectdevelop,
            devCount: 2,
            color: "text-blue-400",
            href: "#"
        },
        {
            title: "Cloud Platform",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
            icon: MdOutlineRocketLaunch,
            devCount: 2,
            color: "text-ember-400",
            href: "#"
        },
        {
            title: "Technical Preparation",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
            icon: GiJigsawBox,
            devCount: 1,
            color: "text-sky-400",
            href: "#"
        },
    ]

  return (

    <div id="services" className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Services"} icon={GrServices}/>
            <SectionHeading title={"What service I provide ?"}/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-8 gap-6'>
                    {services.map((service,i) => {
                        const Icon = service.icon;
                        return (
                            <div key={i} className='border rounded-xl shadow-md p-3 dark:border-gray-800 '>
                                <div className='flex justify-start items-center w-fit p-3'>
                                    <Icon className={cn('size-12 flex-shrink-0', service.color)}/>
                                    <div className='rounded-full px-6 py-2 border inline-block'>
                                         <p className='text-slate-400'>{service.devCount} Developers</p> 
                                        <p className='text-xl'>{service.title}</p>
                                    </div>
                                </div>
                                <div className='py-3 px-3 text-wrap text-muted-foreground'>
                                    {service.description}
                                </div>
                                <Link href={service.href} className='px-5 underline'>
                                    Get Started
                                </Link>
                            </div>
                        )
                    })}
                </div>
    </div>

  )
}

export default ServicesListing
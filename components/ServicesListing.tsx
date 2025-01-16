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
import { Services } from '@prisma/client'
import Image from 'next/image'
import { Button } from './ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { X } from 'lucide-react'

const ServicesListing = ({allServices}: {allServices: Services[]}) => {

    // const services = [
    //     {
    //         title: "Design",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
    //         icon: FiPenTool,
    //         devCount: 1,
    //         color: "text-emerald-400",
    //         href: "#"
    //     },
    //     {
    //         title: "Development",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
    //         icon: FaConnectdevelop,
    //         devCount: 2,
    //         color: "text-blue-400",
    //         href: "#"
    //     },
    //     {
    //         title: "Cloud Platform",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
    //         icon: MdOutlineRocketLaunch,
    //         devCount: 2,
    //         color: "text-ember-400",
    //         href: "#"
    //     },
    //     {
    //         title: "Technical Preparation",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia enim consequatur ullam, fugit itaque debitis ad suscipit corporis laboriosam.",
    //         icon: GiJigsawBox,
    //         devCount: 1,
    //         color: "text-sky-400",
    //         href: "#"
    //     },
    // ]

  return (

    <div id="services" className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Services"} icon={GrServices}/>
            <SectionHeading title={"What service I provide ?"}/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 sm:max-w-5xl py-8 gap-6'>
                    {allServices.map((service,i) => {
                        return (
                            <div key={i} className='flex flex-col justify-between border rounded-xl shadow-md p-3 dark:border-gray-800 '>
                                <div className='p-3 gap-2'>
                                    <Image
                                        src={`${service.iconUrl}` || '/defaultImage.png'}
                                        alt='icon'
                                        width={500}
                                        height={500} 
                                        className={cn('w-full h-28 object-cover rounded')}/>
                                    <div className='px-6 py-4 inline-block'>
                                        <p className='text-xl'>{service.title}</p>
                                        <p className='text-slate-400'>{service.slogan}</p>
                                    </div>
                                    <div className='px-3 text-wrap text-muted-foreground line-clamp-2'>
                                    {service.description}
                                    </div>
                                </div>
                                <div className='space-x-2'>
                                    <Button asChild variant={"secondary"} className='w-32 border rounded'>
                                        <Link href={"/book"} className='px-5'>
                                            Get Started
                                        </Link>
                                    </Button>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant={"secondary"} className='w-32 border rounded'>
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[380px] max-h-[800px] sm:max-h-screen sm:max-w-[550px]">
                                            <DialogHeader>
                                                <DialogTitle className='text-3xl font-semibold'>{service.title}</DialogTitle>
                                                <DialogDescription className='text-lg'>
                                                    {service.slogan}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <Image
                                                src={`${service.iconUrl}` || '/defaultImage.png'}
                                                alt='icon'
                                                width={500}
                                                height={500} 
                                                className={cn('w-full object-cover rounded')}/>
                                            <div className='flex items-center justify-between'>
                                                <div className='p-3 text-lg font-medium flex-wrap space-x-1'>
                                                    <p className='line-clamp-5 sm:line-clamp-none overflow-scroll'>{service.description}</p>
                                                </div>
                                            </div>
                                            <DialogFooter className='flex flex-row justify-end gap-2'>
                                                <DialogClose asChild>
                                                    <Button type="button" variant={"secondary"}>
                                                        Close
                                                    </Button>
                                                </DialogClose>
                                                <DialogClose asChild>
                                                    <Button asChild type="button" variant={"default"}>
                                                        <Link href={"/book"} className='px-3'>
                                                            Book Service
                                                        </Link>
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        )
                    })}
                </div>
    </div>

  )
}

export default ServicesListing
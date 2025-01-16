import React from 'react'
import { IconCloudGlobe } from './GlobeIcons'
import SectionHeading from './SectionHeading'
import SectionSubHeading from './SectionSubHeading'
import { Dumbbell } from 'lucide-react'
import { TechnologyCards } from './TechnologyCards'
import { IconType, TechStack } from './TechStack'
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from'react-icons/ri'
import { SiPrisma, SiTypescript } from 'react-icons/si'
import { SVGProps } from "react";
import { cn } from '@/lib/utils'
import { GiGears } from 'react-icons/gi'
import ToolDetails from './toolDetails'
import GeneralSkills from './general-skills'
import { Skills, Tools } from '@prisma/client'
import Image from 'next/image'

const TechnicalSkills = ({
    allSkills, 
    allTools
}: {
    allSkills: Skills[]; 
    allTools: Tools[];
}) => {

    // const technologies = [
    //     {
    //         title: "Next Js",
    //         icon: RiNextjsFill,
    //         percent: 90,
    //         color: "text-slate-600"
    //     },
    //     {
    //         title: "React Js",
    //         icon: RiReactjsFill,
    //         percent: 95,
    //         color: "text-blue-400"
    //     },
    //     {
    //         title: "Prisma ORM",
    //         icon: SiPrisma,
    //         percent: 95,
    //         color: "text-gray-400"
    //     },
    //     {
    //         title: "Tailwind CSS",
    //         icon: RiTailwindCssFill,
    //         percent: 95,
    //         color: "text-sky-500"
    //     },
    // ]

  return (

    <div id="skills" className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Technical skills"} icon={Dumbbell}/>
            <SectionHeading title={"Technologies"}/>
        </div>
        <h3>Fullstack Expertise</h3>
        <p className='text-base py-3'>
            I excel in creating intuitive, responsive, and accessible user 
            interfaces using modern web technologies and frameworks. Also,
            experience in server-side programming and database management,
            I build secure, scalable systems using:
        </p>
        <ul>Next.js: Crafting interactive SPAs and SSR solutions for optimized performance.</ul>
        <ul>TypeScript: Ensuring scalable and type-safe codebases.</ul>
        <ul>Prisma: for seamless database management.</ul>
        <ul>MongoDB: or efficient NoSQL data storage and querying.</ul>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-8 gap-6'>
            {allSkills.map((tech,i) => {
                return (
                    <div key={i} className='border rounded-xl shadow-lg p-3 dark:border-gray-800 '>
                        <div className='flex justify-end'>
                            <div className='rounded-full px-6 py-2 border inline-block'>
                                {tech.percent} %    
                            </div>
                        </div>
                        <div className='flex items-center gap-6 py-3 pt-2 pb-5'>
                            <Image
                                src={`${tech.iconUrl}` || '/defaultImage.png'}
                                alt="icon"
                                width={200}
                                height={200} 
                                className={cn('size-12 flex-shrink-0')}/>
                            <p className='text-xl'>{tech.title}</p>
                        </div>
                        <div 
                            className="flex w-full h-1.5 bg-gray-200 rounded-full 
                            overflow-hidden dark:bg-neutral-700" 
                            role={'progressbar'} 
                        >
                            <div 
                                className="flex flex-col justify-center rounded-full 
                                overflow-hidden bg-lime-300 text-xs text-white 
                                text-center whitespace-nowrap transition 
                                duration-500 dark:bg-blue-50" 
                                style={{width: `${tech.percent}%`}}></div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='space-y-2'>
            <SectionSubHeading title={"Tool Skills"} icon={GiGears}/>
            <SectionHeading title={"Tools Stack"}/>
        </div>
        <div>
          <h3>Tech Tools Proficiency</h3>
          <p className='text-base py-3'>
          These tools streamline development workflows, foster collaboration,
           and improve project quality and deployment efficiency.
          </p>
            <ToolDetails allTools={allTools || []} />
        </div>
         <div className='flex flex-col justify-center items-center border-none 
        space-x-6 rounded-full'>
            <IconCloudGlobe />
        </div>   
    </div>

  )
}

export default TechnicalSkills

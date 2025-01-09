"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import SectionSubHeading from './SectionSubHeading'
import { FaBriefcase } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'


interface ProjectProps {
    title: string;
    slug: string;
    projects: ProjectDetails[];
}

type ProjectDetails = {
    title: string;
    image: string;
    tech: string[];
    github: string;
    previewLink: string;
}

const Projects = () => {

    const projectCategories: ProjectProps[] = [
        {
            title: "All",
            slug: "all",
            projects: [
                {
                    title: "All Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
                {
                    title: "All Services",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
            ]
        },
        {
            title: "MongoDB",
            slug: "mongodb",
            projects: [
                {
                    title: "Property Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
                {
                    title: "Hospital Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
            ]
        },
        {
            title: "SQL",
            slug: "sql",
            projects: [
                {
                    title: "Shopping Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
                {
                    title: "Food Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
            ]
        },
        {
            title: "Azure",
            slug: "azure",
            projects: [
                {
                    title: "Landing Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
                {
                    title: "Quiz Project",
                    image: "https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2020/04/work6-1.jpg",
                    tech: ["SQL", "Mongodb","Prisma"],
                    github: "#",
                    previewLink: "#"
                },
            ]
        }
    ]

    const [activeCategory, setActiveCategory] = React.useState(projectCategories[0])

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Projects"} icon={FaBriefcase}/>
            <SectionHeading title={"Explore Portfolio By Technology"}/> 
        </div>
        <div className='py-5'>
            <div className='flex gap-4'>
                {projectCategories.map((category, i) => {
                    return (
                        <button  
                        key={i} 
                        className={cn('dark:bg-slate-600 bg-slate-200 py-2 px-6 text-sm rounded-full uppercase', 
                        activeCategory.slug === category.slug && "bg-lime-500")}
                        onClick={() => setActiveCategory(category)}
                        >
                            {category.title}
                        </button>
                    )
                })}
            </div>
            <div className='py-4'>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {activeCategory.projects?.map((project,i) => {
                    return (
                        <div key={i} className='border rounded-xl shadow-md p-3 dark:border-gray-800'>
                            <div>
                                <Link href={project.previewLink}>
                                    <img 
                                        src={project.image}
                                        alt={"image"}
                                        className='rounded-2xl'
                                    />
                                </Link>
                                <Link href={"#"} className='block py-2 hover:text-lime-400 duration-300'>
                                    <h2 className='font-bold text-2xl'>{project.title}</h2>
                                </Link>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-wrap space-x-1'>
                                        {project.tech.map((item,i) => {
                                            return (
                                                <button key={i} className='dark:bg-slate-600 bg-slate-200 hover:bg-lime-500
                                                rounded-full py-1 px-3 text-xs uppercase'>
                                                    {item}
                                                </button>

                                            )
                                        })}
                                    </div>
                                    <div>
                                        <Link href={project.previewLink} className='p-3 dark:bg-slate-500 bg-slate-200 rounded-full block'>
                                            <ArrowUpRight className='size-4' />
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </div>

  )
}

export default Projects
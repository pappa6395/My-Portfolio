import React from 'react'
import { WordRotateUp } from './ui/word-rotate'
import Meteors from './ui/meteors'
import { Settings } from '@prisma/client'

const AboutSection = ({siteSettings}: {siteSettings: Settings | null}) => {

    const aboutText = siteSettings?.animatedText.split(",") || [
        "Nontachai P.",
        "Fullstack", 
        "Web Developer"
    ]

    const stats = [
        {
            title1: 'Completed',
            title2: 'Projects',
            count: 3,
            plus: false,
        },
        {
            title1: 'Months',
            title2: 'of Experience',
            count: siteSettings?.monthOfExperience ?? 0,
            plus: false,
        },
        {
            title1: 'Weeks',
            title2: 'of Practices',
            count: siteSettings?.weekOfPractice ?? 0,
            plus: true,
        },
    ]

  return (

    <div id="about" className='relative bg-slate-50 dark:bg-slate-900 -z-40
    rounded-tr-2xl px-8 py-8'>
        <Meteors number={55} />
        <div className='flex items-center gap-4 py-2'>
            <p className='text-xl md:text-2xl inline-block'>Hello,&nbsp; I &apos; m &nbsp;</p>
            <WordRotateUp
                className='text-lime-400 text-xl md:text-2xl font-semibold tracking-wider'
                words={aboutText}
            />
        </div>
        <div className='space-y-2'>
        <h2 className='scroll-m-20 text-4xl py-2 lg:text-5xl leading-[4.5rem]'>
            {siteSettings?.profileLineOne || ""}
        </h2>
        <p className='bg-lime-400 w-full lg:w-fit px-2 lg:px-4 py-2 rounded-full 
            -rotate-2  text-3xl lg:text-4xl inline-block'>
        {siteSettings?.profileLineTwo || ""}
        </p> 
        <span className='inline-block  pt-2 text-3xl md:text-4xl lg:text-5xl'>&nbsp;Based in</span>  
        <p className='text-5xl pt-2'>{siteSettings?.profileLineThree || ""}</p>
        </div>
        
        <div className='mt-5 pt-5'>
            <p className='highlight highlight-amber-300 dark:highlight-lime-800 
            highlight-variant-7 highlight-spread-md text-xl'>
                {siteSettings?.profileDescription || ""}
            </p>
        </div>
        <div className='grid grid-cols-2 lg:flex justify-between mt-8 gap-4'>
        {stats?.map((stat, i) => {
            return (
                <div key={i} className='grid col-span-1 lg:flex gap-4 lg:gap-6 px-2 items-center'>
                    <p className='text-6xl'>{stat.count || 0} {stat.plus && "+"}</p>
                    <div className='text-sm'>
                        <p>{stat.title1 || ""}</p>
                        <p>{stat.title2 || ""}</p>
                    </div> 
                </div>
            )
        })}
        </div>
    </div>

  )
}

export default AboutSection
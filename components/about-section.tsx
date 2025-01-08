import React from 'react'
import { WordRotateUp } from './ui/word-rotate'
import Meteors from './ui/meteors'

const AboutSection = () => {

    const stats = [
        {
            title1: 'Completed',
            title2: 'Projects',
            count: 2,
            plus: false,
        },
        {
            title1: 'Months',
            title2: 'of Experience',
            count: 6,
            plus: false,
        },
        {
            title1: 'Weeks',
            title2: 'of Practices',
            count: 24,
            plus: true,
        },
    ]

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <Meteors number={55} />
        <div className='flex items-center gap-4 py-2'>
            <p className='text-2xl inline-block'>Hello,&nbsp; I &apos; m &nbsp;</p>
            <WordRotateUp
                className='text-lime-400 text-2xl font-semibold tracking-wider'
                words={["Nontachai  Pahsukkul","Fullstack", "Web Developer"]}
            />
        </div>
        <h2 className='scroll-m-20 text-4xl py-2 tracking-wide lg:text-5xl'>
            Junior Web Developer and 
        </h2>
        <p className='bg-lime-400 w-fit px-4 py-2 rounded-full 
            -rotate-2 text-4xl inline-block'>
        Fullstack Developer
        </p> 
        <span className='text-5xl'>&nbsp;Based in</span>  
        <p className='text-5xl pt-2'>Bangkok, Thailand.</p>
        <div className='mt-5 pt-5'>
            <p className='highlight highlight-amber-300 dark:highlight-lime-800 
            highlight-variant-7 highlight-spread-md text-xl'>
                have been a passionate and detail-oriented full-stack web developer with
                a proven track record of designing and implementing dynamic, 
                user-centric web applications. My expertise spans both front-end 
                and back-end development, enabling me to create seamless, end-to-end solutions 
                that align with business objectives.
            </p>
        </div>
        <div className='flex justify-between mt-8'>
        {stats.map((stat, i) => {
            return (
                <div key={i} className='flex gap-6 items-center'>
                    <p className='text-6xl'>{stat.count} {stat.plus && "+"}</p>
                    <div className='text-sm'>
                        <p>{stat.title1}</p>
                        <p>{stat.title2}</p>
                    </div> 
                </div>
            )
        })}
        </div>
        
    </div>

  )
}

export default AboutSection
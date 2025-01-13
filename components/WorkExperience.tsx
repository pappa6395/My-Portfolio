import React from 'react'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import { IoBriefcaseOutline } from 'react-icons/io5'
import EmblaCarousel from './ui/embla-carousel'
import { EmblaOptionsType } from 'embla-carousel'
import CoursesCarousel from './carousel/courses-carousel'
import EducationCarousel from './carousel/education-carousel'



const WorkExperience = () => {

    const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" }
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (

    <div id="resume" className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Resume"} icon={IoBriefcaseOutline}/>
            <SectionHeading title={"Work Experience & Education"}/> 
        </div>
        <div className='py-3'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4'>
            <div>
                <SectionSubHeading title={"Courses"} icon={IoBriefcaseOutline}/>
                <CoursesCarousel />
            </div>
            <div className=''>
                <SectionSubHeading title={"Education"} icon={IoBriefcaseOutline}/>
                <EducationCarousel />
            </div>
        </div>
    </div>

  )
}

export default WorkExperience
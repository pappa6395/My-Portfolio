import React from 'react'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import GeneralDetails from './generalDetails'
import { FaCode, FaLanguage, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import { MdFormatListBulleted } from'react-icons/md'
import { BiData, BiLogoJavascript, BiLogoTypescript } from'react-icons/bi'
import { Check } from 'lucide-react'

const GeneralSkills = () => {

    const languages = [
        {
            title: "JavaScript",
            icon: BiLogoJavascript,
            percent: 90,
            color: "text-lime-500"
        },
        {
            title: "TypeScript",
            icon: BiLogoTypescript,
            percent: 90,
            color: "text-lime-500"
        },
        {
            title: "Node.Js",
            icon: FaNodeJs,
            percent: 90,
            color: "text-lime-500"
        },
        {
            title: "Python",
            icon: FaPython,
            percent: 50,
            color: "text-lime-500"
        },
    ];

    const practices = [
        'DWH & DB Concepts',
        'Data Analytics Engineering',
        'Data Preparation',
        'Oracle SQL Server',
        'Data Integration',
        'Data Provisioning',
        'Data Solution Architecture',
        'ETL/ELT Solutions',
    ];

    const Circle = ({filled}:{filled: boolean}) => {
        return (
            <div className={`w-4 h-4 rounded-full ${filled ? 'bg-lime-500' : 'bg-gray-500'}`}/>
        )
    }

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-2'>
        <div className='space-y-2'>
            <SectionHeading title={"Fullstack"}/>
            <SectionSubHeading title={"Database"} icon={BiData}/>
        </div>
        <div>
            <GeneralDetails />
        </div>
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <SectionSubHeading title={"Languages"} icon={FaCode}/>
                {languages.map((lang, i) => {
                    const percent = Math.floor(lang.percent / 10)
                    const Icon = lang.icon;
                    const progress = Array(10).fill(false).fill(true, 0, percent);
                    return (
                        <div key={i} className='py-4'>
                            <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 rounded-2xl border flex items-center justify-center'>
                                <Icon className='size-6'/>
                            </div>
                            <div className=''>
                                <p>{lang.title}</p>
                                <div className='flex items-center gap-6'>
                                    <div>
                                        <div className=' flex space-x-2'>
                                            {progress.map((filled, i) => (
                                                <Circle key={i} filled={filled}/>
                                            ))}
                                        </div>
                                    </div>
                                    <p>{lang.percent}%</p>
                                </div>
                            </div>  
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <SectionSubHeading title={"Best Practices"} icon={MdFormatListBulleted}/>
                <div className='py-3 px-3 space-y-4'>
                    {practices.map((item, i) => {
                        return (
                            <div key={i} className='flex items-center gap-2'>
                                <Check className='text-lime-500 w-4 h-4 flex-shrink-0 mr-2' />
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>

  )
}

export default GeneralSkills
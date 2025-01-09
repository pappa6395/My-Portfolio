import React from 'react'
import { FaDocker, FaGithub, FaNodeJs } from 'react-icons/fa'
import { DiVisualstudio } from 'react-icons/di'
import ChatGPT from '@/public/artificial-intelligence.png'
import { SiDbeaver, SiFirebase, SiPostman } from 'react-icons/si'
import { IoLogoVercel } from'react-icons/io5'
import { cn } from '@/lib/utils'
import { IconProps, IconType } from './TechStack'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { PiOpenAiLogoLight } from 'react-icons/pi'


interface ToolsStackProps {
    title: string,
    icon: React.FC<IconProps>,
    percent: number,
    color: string
}

const ToolDetails = () => {

    const toolsStacks: ToolsStackProps[] = [
            {
                title: "GitHub",
                icon: FaGithub,
                percent: 95,
                color: "text-cyan-400"
            },
            {
                title: "Vercel",
                icon: IoLogoVercel,
                percent: 95,
                color: "text-emerald-400"
            },
            {
                title: "Postman",
                icon: SiPostman,
                percent: 90,
                color: "text-orange-400"
            },
            {
                title: "Docker",
                icon: FaDocker,
                percent: 90,
                color: "text-sky-400"
            },
            {
                title: "Firebase",
                icon: SiFirebase,
                percent: 90,
                color: "text-red-400"
            },
            {
                title: "DBeaver",
                icon: SiDbeaver,
                percent: 90,
                color: "text-amber-700"
            },
            {
                title: "ChatGPT",
                icon: PiOpenAiLogoLight,
                percent: 95,
                color: "text-indigo-400"
            },
            {
                title: "Visual Studio",
                icon: DiVisualstudio,
                percent: 95,
                color: "text-blue-500"
            },
        ]

  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 py-8 gap-6">
        {toolsStacks?.map((tool,i) => {
            const Icon = tool.icon;
            return (
                <div key={i} className="w-fit border rounded-xl shadow-2xl p-3 dark:border-gray-800">
                    <div className="relative size-32 px-2">
                        <svg 
                            className="size-full -rotate-90" 
                            viewBox="0 0 36 36" 
                            xmlns="http://www.w3.org/2000/svg">
                                <circle 
                                    cx="18" cy="18" r="16" fill="none" 
                                    className="stroke-current text-gray-200 dark:text-neutral-700" 
                                    strokeWidth="1"
                                ></circle>
                                <circle 
                                    cx="18" cy="18" r="16" fill="none" 
                                    className="stroke-current text-lime-500 dark:text-lime-500" 
                                    strokeWidth="1" 
                                    strokeDasharray="100" 
                                    strokeDashoffset={`${100-tool.percent}`} 
                                    strokeLinecap="round"
                                ></circle>
                        </svg>
                        <div className="absolute pt-2 gap-1 flex flex-col items-center top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <Icon className={cn("size-10 flex-shrink-0", tool.color)} />
                            <span className="text-center text-base font-sm text-slate-800 dark:text-slate-50">
                                {tool.percent}%
                            </span>
                        </div>
                    </div>
                    <div className='text-center pt-2'>
                        <p>{tool.title}</p>
                    </div>
                </div> 
            )
        })}
          
    </div>

  )
}

export default ToolDetails
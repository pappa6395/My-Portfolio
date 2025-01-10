import React from 'react'

interface GeneralsSkillProps {
    title: string;
    percent: number;
    color: string;
}


const GeneralDetails = () => {

    const generalsSkills: GeneralsSkillProps[] = [
                    {
                        title: "MongoDB",
                        percent: 95,
                        color: "text-cyan-400"
                    },
                    {
                        title: "Express.Js",
                        percent: 95,
                        color: "text-emerald-400"
                    },
                    {
                        title: "React.js",
                        percent: 90,
                        color: "text-orange-400"
                    },
                    {
                        title: "Node.js",
                        percent: 90,
                        color: "text-sky-400"
                    },
                    
                ]

  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 py-6 gap-6">
        {generalsSkills?.map((skill,i) => {
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
                                    strokeDashoffset={`${100-skill.percent}`} 
                                    strokeLinecap="round"
                                ></circle>
                        </svg>
                        <div className="absolute pt-2 gap-1 flex flex-col items-center top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-base font-sm text-slate-800 dark:text-slate-50">
                                {skill.percent}%
                            </span>
                        </div>
                    </div>
                    <div className='text-center pt-2'>
                        <p>{skill.title}</p>
                    </div>
                </div> 
            )
         })}
    </div>

  )
}

export default GeneralDetails
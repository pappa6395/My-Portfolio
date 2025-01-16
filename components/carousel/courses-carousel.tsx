import { Courses } from '@prisma/client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CoursesCarousel = ({courses}: {courses: Courses[]}) => {


  return (

    <div>
        <div>
            <div className="flex gap-x-3 py-2">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                    </div>
                </div>
                {courses?.map((course, i) => {
                    return (
                        <div
                            key={i} 
                            className="grow border dark:bg-slate-900/80  
                            bg-slate-100/80 shadow-md p-4 rounded-md pt-4 pb-4 space-y-2"
                        >
                            <h3 className="w-fit text-xs font-medium uppercase text-gray-500 
                            dark:text-neutral-400 border border-gray-400 rounded-full 
                            py-1.5 px-4 mb-2">
                                {course?.period || ""}
                            </h3>
                            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                {course?.school || ""}
                            </h3>
                            <p className="mt-1 text-base text-gray-600 dark:text-neutral-400">
                                {course?.title || ""}
                            </p>
                            <h2 className="flex gap-x-1.5 font-medium text-gray-800 dark:text-slate-100">
                                {course?.description || ""}
                            </h2>
                            <button 
                                type="button" 
                                className="mt-1 -ms-1 p-1 gap-x-2 rounded-lg 
                                border border-transparent focus:outline-none 
                                focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none 
                                dark:focus:bg-neutral-700">
                                <Link 
                                    href={`${course?.certificate || ""}`}
                                    target='_blank' 
                                    className='flex items-center dark:hover:text-lime-500 
                                    hover:text-lime-600'
                                >
                                    <span className='text-base dark:text-slate-50 
                                    text-slate-700 font-semibold uppercase 
                                    dark:hover:text-lime-500 hover:text-lime-600'
                                    >Certificate
                                    </span>
                                    <ChevronRight className='size-6' />
                                </Link>
                            </button>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>

  )
}

export default CoursesCarousel
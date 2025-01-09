import React from 'react'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import { GiReceiveMoney } from 'react-icons/gi'
import ShinyButton from './ui/shiny-button'
import Link from 'next/link'
import { Check, X } from 'lucide-react'


const pricing = () => {

    const pricePlans = [
        {
            price: 20,
            mode: "Hour",
            button: "Order Now",
            href: "#",
            features: [
                {
                    title: "Feature 1",
                    isIncluded: true
                },
                {
                    title: "Feature 2",
                    isIncluded: true
                },
                {
                    title: "Feature 3",
                    isIncluded: false
                },
                {
                    title: "Feature 4",
                    isIncluded: true
                },
            ] 
        },
        {
            price: 100,
            mode: "Day",
            button: "Order Now",
            href: "#",
            features: [
                {
                    title: "Feature 1",
                    isIncluded: true
                },
                {
                    title: "Feature 2",
                    isIncluded: true
                },
                {
                    title: "Feature 3",
                    isIncluded: false
                },
                {
                    title: "Feature 4",
                    isIncluded: true
                },
            ] 
        },
    ]

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Pricing"} icon={GiReceiveMoney}/>
            <SectionHeading title={"Amazing Pricing For Your Projects"}/>
        </div>
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pricePlans?.map((plan,i) => {
                return (
                    <div key={i} className='border rounded-xl shadow-md p-3 dark:border-gray-800'>
                        <div className='flex justify-end'>
                            <div className='rounded-full px-6 py-2 border
                            inline-block bg-lime-500 dark:text-slate-800
                            font-semibold mr-4 mt-2'>
                                Per {plan.mode}    
                            </div>
                        </div>
                        <div className='flex items-center gap-6 py-3 pt-2 pb-5'>
                            <p className='text-5xl font-semibold text-lime-500 ml-3'>${plan.price}</p>
                        </div>
                        <ShinyButton className='bg-slate-800 dark:bg-slate-50 rounded-full ml-3'>
                            <Link href="#" className='font-semibold dark:text-slate-800 text-slate-50  h-10 text-center py-2 duration-300'>
                                {plan.button}
                            </Link>
                        </ShinyButton>
                        <div className='py-3 px-3 space-y-5 ml-3 mt-3'>
                            {plan.features.map((item, i) => {
                                return (
                                    <div key={i} className='flex items-center'>
                                        {item.isIncluded ? 
                                        ( 
                                            <div className='flex items-center'>
                                                <Check className='text-lime-500 w-6 h-6 flex-shrink-0 mr-2' />
                                                <p className=''>{item.title}</p>
                                            </div>
                                        ) : (
                                            <div className='flex items-center'>
                                                <X className='text-red-500 w-6 h-6 flex-shrink-0 mr-2' />
                                                <p className='line-through'>{item.title}</p>
                                            </div>
                                        )}   
                                    </div>
                                )
                            })}
                        </div>                
                    </div>
                )
            })}
        </div>
    </div>

  )
}

export default pricing
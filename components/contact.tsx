import React from 'react'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Mail } from 'lucide-react'
import ContactForm from './contact-form'

const Contact = () => {

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Contact"} icon={LiaTelegramPlane}/>
            <SectionHeading title={"Let's Get in Touch!"}/> 
        </div>
        <div className="py-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className='flex items-center gap-6 border p-4 rounded 
                border-slate-300 dark:border-slate-700  '>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <Mail />
                    </span>

                    <div>
                        <h2 className="text-base font-medium text-gray-800 dark:text-white">Email</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                        <p className="text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                    <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <div className='grid col-span-full'>
                    <ContactForm />
                </div>
            </div>

        </div>
    </div>

  )
}

export default Contact
import React from 'react'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Headset, Mail, MapPin } from 'lucide-react'
import ContactForm from './contact-form'

const Contact = () => {

    const contactLists = [
        {
            label: "Email",
            icon: Mail,
            contact: "npahsukkul@gmail.com"
        },
        {
            label: "Phone",
            icon: Headset,
            contact: "(+66)93-935-5695"
        },
        {
            label: "Location",
            icon: MapPin,
            contact: "Bangna, Bangkok Thailand"
        },

    ]

  return (

    <div id="contact" className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Contact"} icon={LiaTelegramPlane}/>
            <SectionHeading title={"Let's Get in Touch!"}/> 
        </div>
        <div className="py-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {contactLists.map((contact, i ) => {
                    const Icon = contact.icon;
                    return (
                        <div key={i} className='flex items-center gap-6 border p-4 rounded 
                        border-slate-300 dark:border-slate-700  '>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <Icon />
                            </span>
                            <div>
                                <h2 className="text-base font-medium text-gray-800 dark:text-white">{contact.label}</h2>
                                <p className="text-sm text-blue-500 dark:text-blue-400">{contact.contact}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                    <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>

        </div>
        <div className='flex justify-center items-center'>
            <ContactForm />
        </div>
    </div>

  )
}

export default Contact
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
                    <iframe width="100%" height="100%" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62029.8196342074!2d100.57532040242542!3d13.666049099359526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a00bb218f43d%3A0x30100b25de25070!2sBang%20Na%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1736649964708!5m2!1sen!2sth"  loading="lazy"></iframe>
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
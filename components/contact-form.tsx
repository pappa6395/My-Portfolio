'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactForm() {

  const [agreed, setAgreed] = useState(false)

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <form action="#" method="POST" className="mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md dark:bg-slate-800 
                px-3.5 py-2 text-base outline outline-1 -outline-offset-1 
                outline-neutral-200 placeholder:text-gray-400 focus:outline 
                focus:outline-2 focus:-outline-offset-2 focus:outline-lime-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold ">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md dark:bg-slate-800 
                px-3.5 py-2 text-base outline outline-1 -outline-offset-1 
                outline-neutral-200 placeholder:text-gray-400 focus:outline 
                focus:outline-2 focus:-outline-offset-2 focus:outline-lime-200"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold ">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md dark:bg-slate-800 
                px-3.5 py-2 text-base outline outline-1 -outline-offset-1 
                outline-neutral-200 placeholder:text-gray-400 focus:outline 
                focus:outline-2 focus:-outline-offset-2 focus:outline-lime-200"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md dark:bg-slate-800 
                px-3.5 py-2 text-base outline outline-1 -outline-offset-1 
                outline-neutral-200 placeholder:text-gray-400 focus:outline 
                focus:outline-2 focus:-outline-offset-2 focus:outline-lime-200"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold">
              Phone number
            </label>
            <div className="mt-2.5">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  placeholder="+123-456-7890"
                  className="block w-full rounded-md grow py-1.5 pl-1 pr-3 ps-3 
                  text-base outline outline-1 -outline-offset-1 sm:text-sm/6 
                  outline-neutral-200 placeholder:text-gray-400 
                  focus:outline focus:outline-2 focus:-outline-offset-2 
                  focus:outline-lime-200 dark:bg-slate-800"
                />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                defaultValue={''}
                className="block w-full rounded-md dark:bg-slate-800 
                px-3.5 py-2 text-base outline outline-1 -outline-offset-1 
                outline-neutral-200 placeholder:text-gray-400 focus:outline 
                focus:outline-2 focus:-outline-offset-2 focus:outline-lime-200"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 
            border text-center text-sm font-semibold shadow-sm 
            hover:bg-lime-500 dark:hover:bg-lime-500 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-gray-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
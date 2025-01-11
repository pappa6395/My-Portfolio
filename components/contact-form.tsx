'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import TextInput from './FormInputs/TextInput'
import TextArea from './FormInputs/TextAreaInput'
import { useRouter } from 'next/navigation'
import { ContactProps } from '@/utils/type'
import SubmitButton from './FormInputs/SubmitButton'
import { createMessage } from '@/actions/messages'



export default function ContactForm() {

  //firstName, lastName, email, message
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactProps>();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const saveContact = async (data: ContactProps) => {
    setIsLoading(true);
    
    try {
      
      await createMessage(data)
      reset()
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 3000);

    } catch (err) {
      setIsLoading(false);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full p-4 max-w-3xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <div className='text-center py-4 mb-4'>
        <h2 className='text-2xl md:text-5xl font-medium'>Let's make your project brilliant!</h2>
      </div>
      {/* <form action="#" method="POST" className="mx-auto max-w-xl">
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
            className="block w-full rounded-xl px-3.5 py-2.5 
            border text-center text-base font-semibold shadow-sm
            hover:bg-lime-500 dark:hover:bg-lime-500 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-gray-600 dark:bg-slate-800
            active:scale-95 duration-300"
          >
            Send Message
          </button>
        </div>
      </form> */}
      <form className="" onSubmit={handleSubmit(saveContact)}>
        {success && (
          <div className='border-l border-green-600 bg-green-50 p-3 rounded-md'>
          <p>
            <span className='text-green-500 font-semibold'>Your message has been successfully</span> sent. We are
            appreciated you're reaching out to us and will get back to you
            as soon as possible.
          </p>
        </div>
        )}
        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="col-span-full space-y-3">
              <div className="grid gap-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="First Name"
                      name="firstName"
                    />
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Last Name"
                      name="lastName"
                    />
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="grid gap-3">
                    <TextArea
                      register={register}
                      errors={errors}
                      label="Message"
                      name="message"
                    />
                  </div>
                </div>
          </div>
        </div>
        <SubmitButton
          title={"Send Message"}
          loading={isLoading}
        />
      </form>
    </div>
  )
}
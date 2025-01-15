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
'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import { ContactProps, ContactSettingProps, SettingProps } from '@/utils/type'

import { createMessage } from '@/actions/messages'
import TextInput from '../../FormInputs/TextInput'
import SubmitButton from '../../FormInputs/SubmitButton'
import TextArea from '../../FormInputs/TextAreaInput'
import { CircleCheck, Headphones, Mail, Map } from 'lucide-react'
import { Settings } from '@prisma/client'
import { updateSettings } from '@/actions/settings'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import toast from 'react-hot-toast'



export default function SocialLinksUpdateForm({settings}: {settings: Settings | null}) {

  //firstName, lastName, email, message
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SettingProps>({
    defaultValues: {
      linkedIn: settings?.linkedIn ?? "",
      instagram: settings?.instagram ?? "",
      facebook: settings?.facebook ?? "",
      line: settings?.line ?? "",
      github: settings?.github ?? "",
    },
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const saveContact = async (data: SettingProps) => {
    setIsLoading(true);
    
    try {
      
      await updateSettings(settings?.id??"", data)
      reset()
      toast.success("Settings Updated Successfully")
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (err) {
      setIsLoading(false);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full p-4 max-w-3xl bg-white border border-gray-200 
    rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
        overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <form className="" onSubmit={handleSubmit(saveContact)}>
        <Card>
          <CardHeader>
            <CardTitle>Update Website Contact Section</CardTitle>
            <CardDescription>
              These are the social media links used on different sections on the website
            </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-12 gap-6 py-8">
              <div className="col-span-full space-y-3">
                  <div className="grid gap-6">
                      <div className="grid grid-cols-1 gap-3">
                        <TextInput
                          register={register}
                          errors={errors}
                          label="Linkedin"
                          name="linkedIn"
                          icon={Mail}
                        />
                        <TextInput
                          register={register}
                          errors={errors}
                          label="Instagram"
                          name="instagram"
                          icon={Mail}
                        />
                        <TextInput
                          register={register}
                          errors={errors}
                          label="Facebook"
                          name="facebook"
                          icon={Headphones}
                        />
                        <TextInput
                          register={register}
                          errors={errors}
                          label="Line"
                          name="line"
                          icon={Map}
                        />
                        <TextInput
                          register={register}
                          errors={errors}
                          label="GitHub"
                          name="github"
                          icon={Map}
                        />
                      </div>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='mt-2 pt-4'>
          <SubmitButton
          buttonIcon={CircleCheck}
            title={"Send Message"}
            loading={isLoading}
          />
        </div>
      </form>
    </div>
  )
}
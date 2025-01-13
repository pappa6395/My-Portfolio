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
import ImageInput from '@/components/FormInputs/ImageInput'
import FileInput from '@/components/FormInputs/FileInput'



export default function ProfileImageUpdate({settings}: {settings: Settings | null}) {

  const initialImage = settings?.imageUrl || "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const initialCvUrl = settings?.cvUrl || "/placeholder.svg";
  const [fileUrl, setFileUrl] = useState(initialCvUrl);

  //firstName, lastName, email, message
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SettingProps>({
    defaultValues: {
      email: settings?.email ?? "",
      phone: settings?.phone ?? "",
      location: settings?.location ?? "",
    },
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const saveContact = async (data: SettingProps) => {
    setIsLoading(true);
    data.cvUrl = fileUrl || "";
    data.imageUrl = imageUrl || "/public/defaultImage.png";
    
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
            <CardTitle>Update Website Profile Image</CardTitle>
            <CardDescription>
              Here you can update profile image and upload your CV
            </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-12 gap-6 py-8">
              <div className="col-span-full space-y-3">
                  <div className="grid gap-6">
                      <div className="grid grid-cols-1 gap-3">
                        <ImageInput
                          title="Profile Image"
                          imageUrl={imageUrl}
                          setImageUrl={setImageUrl}
                          endpoint="profileImageUpdate"
                        />
                        <FileInput
                          title="Upload your CV"
                          fileUrl={fileUrl}
                          setFileUrl={setFileUrl}
                          endpoint="cvUpload"
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
            title={"Update Settings"}
            loading={isLoading}
          />
        </div>
      </form>
    </div>
  )
}
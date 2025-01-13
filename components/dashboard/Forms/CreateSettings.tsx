'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import { ContactProps, ContactSettingProps, SettingProps } from '@/utils/type'

import { createMessage } from '@/actions/messages'
import TextInput from '../../FormInputs/TextInput'
import SubmitButton from '../../FormInputs/SubmitButton'
import TextArea from '../../FormInputs/TextAreaInput'
import { Headphones, Loader2, Mail, Map } from 'lucide-react'
import { Settings } from '@prisma/client'
import { createSettings, updateSettings } from '@/actions/settings'
import { Button } from '@/components/ui/button'



export default function CreateSettings({settings}: {settings: Settings | null}) {

    const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
        setIsLoading(true);
        try {
            const data={}
            const newSettings = await createSettings(data)
            window.location.reload();
            console.log("New Settings: ", newSettings);
        } catch (error) {
            console.log(error); 
        } finally {
            setIsLoading(false);
        }
    }

  

  return (
    <>
    {isLoading ? (
        <Button variant={"secondary"} disabled>
            <Loader2 className='w-4 h-4 mr-2 animate-spin'/>
            Initializing Please wait...
        </Button>
    ) : (
        <Button onClick={handleCreate}>
            Initialize Settings
        </Button>
    )}
    </>
    
  )
}
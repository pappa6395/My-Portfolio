import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getSettings } from '@/actions/settings'
import ContactUpdateForm from '@/components/dashboard/Forms/ContactUpdateForm'
import CreateSettings from '@/components/dashboard/Forms/CreateSettings'
import SocialLinksUpdateForm from '@/components/dashboard/Forms/SocialLinksUpdateForm'
import HeroAreaUpdateForm from '@/components/dashboard/Forms/HeroAreaUpdateForm'
import ProfileImageUpdate from '@/components/dashboard/Forms/ProfileImageUpdate'


const page = async () => {

  let settings = null;
  try {
    settings = await getSettings() || null;
  } catch (err) {
    console.log("Failed to get settings:", err);
  }

  return (

    <>
      {settings?.id ? (
        <Tabs defaultValue="contact" className="w-[w-full]">
          <TabsList>
              <TabsTrigger value="contact">Contact Settings</TabsTrigger>
              <TabsTrigger value="socials">Social Links Settings</TabsTrigger>
              <TabsTrigger value="hero">Hero Section Settings</TabsTrigger>
              <TabsTrigger value="profile">Profile Image Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="contact">
            <div className='py-6'>
              <ContactUpdateForm settings={settings}/>
            </div>
          </TabsContent>
          <TabsContent value="socials">
              <div className='py-6'>
                <SocialLinksUpdateForm settings={settings}/>
              </div>
          </TabsContent>
          <TabsContent value="hero">
              <div className='py-6'>
                <HeroAreaUpdateForm settings={settings}/>
              </div>
          </TabsContent>
          <TabsContent value="profile">
              <div className='py-6'>
                <ProfileImageUpdate settings={settings}/>
              </div>
          </TabsContent>
        </Tabs>
      ) : (
        <Tabs defaultValue="create" className="w-[w-full]">
          <TabsList>
              <TabsTrigger value="create">Create Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <div className='py-6'>
              <CreateSettings settings={settings}/>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </>
    


  )
}

export default page
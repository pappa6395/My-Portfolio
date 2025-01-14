
import { getExperienceById } from '@/actions/experiences';
import { getServiceById } from '@/actions/services';
import ExperienceForm from '@/components/dashboard/Forms/ExperienceForm';
import ServiceForm from '@/components/dashboard/Forms/ServiceForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const experience = await getExperienceById(id) || null;
  
  return (

    <div>
        <ExperienceForm 
          initialData={experience}
          editingId={id}
        />
    </div>


  )
}

export default page
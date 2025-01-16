
import { getExperienceById } from '@/actions/experiences';
import ExperienceForm from '@/components/dashboard/Forms/ExperienceForm';
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
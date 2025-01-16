
import { getEducationById } from '@/actions/educations';
import EducationForm from '@/components/dashboard/Forms/EducationForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const education = await getEducationById(id) || null;
  
  return (

    <div>
        <EducationForm 
          initialData={education}
          editingId={id}
        />
    </div>


  )
}

export default page

import { getEducationById } from '@/actions/educations';
import EducationForm from '@/components/dashboard/Forms/EducationForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;

  let education = null;
  try {
    education = await getEducationById(id) || null;
  } catch (err) {
    console.log("Failed to get education:", err);
  }
  
  return (

    <div>
      <EducationForm 
        initialData={education ?? null}
        editingId={id ?? ""}
      />
    </div>

  )
}

export default page
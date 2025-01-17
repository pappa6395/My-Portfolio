
import { getExperienceById } from '@/actions/experiences';
import ExperienceForm from '@/components/dashboard/Forms/ExperienceForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

    const { id } = await paramsPromise;
    
    let experience = null;
    
    try {
        experience = await getExperienceById(id) || null;
    } catch (err) {
        console.log("Failed to get experience:", err);
    }
    
    return (
  
      <div>
          <ExperienceForm 
            initialData={experience ?? null}
            editingId={id ?? ""}
          />
      </div>
  
  
    )
}

export default page
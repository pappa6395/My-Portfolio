

import { getSkillById } from '@/actions/skills';
import SkillForm from '@/components/dashboard/Forms/SkillForm';
import React from 'react';

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const skillById = await getSkillById(id) || null;

  return (

    <div>
        <SkillForm 
          initialData={skillById}
          editingId={id}
        />
    </div>


  )
}

export default page
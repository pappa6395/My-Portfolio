

import { getSkillById } from '@/actions/skills';
import SkillForm from '@/components/dashboard/Forms/SkillForm';
import React from 'react';

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;

  let skillById = null;
  try {
    skillById = await getSkillById(id) || null;
  } catch (err) {
    console.log("Failed to get skill by id:", err);
  }

  return (

    <div>
        <SkillForm 
          initialData={skillById ?? null}
          editingId={id ?? ""}
        />
    </div>


  )
}

export default page
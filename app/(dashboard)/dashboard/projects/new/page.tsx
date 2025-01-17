import { getProjectCategories } from '@/actions/projects';
import ProjectForm from '@/components/dashboard/Forms/ProjectForm'
import { ProjectCategory } from '@prisma/client';
import React from 'react'


const page = async () => {

  let categories = [] as ProjectCategory[];
  try {
    categories = await getProjectCategories() || [];
  } catch (err) {
    console.log("Failed to get project categories:", err);
  }

  const projectCategories = categories?.map((item) => {
      return {
          value: item?.id || "",
          label: item?.title || "",
      };
  })

  return (

    <div>
      <ProjectForm projectCategories={projectCategories ?? []} />
    </div>

  )
}

export default page
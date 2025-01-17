
import { getProjectById, getProjectCategories } from '@/actions/projects';
import ProjectForm from '@/components/dashboard/Forms/ProjectForm'
import { ProjectCategory } from '@prisma/client';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;

  let project = null;
  let categories = [] as ProjectCategory[];

  try {
    const [projectResponse, categoriesResponse] = await Promise.all([
      getProjectById(id),
      getProjectCategories(),
    ]);
    project = projectResponse || null;
    categories = categoriesResponse || [];
  } catch (err) {
    console.log("Failed to get project or categories:", err);
  }

  const projectCategories = categories?.map((item) => {
    return {
        value: item?.id || "",
        label: item?.title || "",
    };
  })

  return (

    <div>
        <ProjectForm 
          initialData={project ?? null}
          editingId={id ?? ""}
          projectCategories={projectCategories ?? []} />
    </div>
    
  )
}

export default page
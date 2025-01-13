
import { getProjectById, getProjectCategories } from '@/actions/projects';
import ProjectForm from '@/components/dashboard/Forms/ProjectForm'
import React from 'react'

const page = async ({params: {id}}: {params: {id: string}}) => {

  const project = await getProjectById(id) || null;
  const categories = await getProjectCategories() || [];
  const projectCategories = categories?.map((item) => {

      return {
          value: item.id,
          label: item.title,
      };
  })

  return (

    <div>
        <ProjectForm 
          initialData={project}
          editingId={id}
          projectCategories={projectCategories} />
    </div>


  )
}

export default page
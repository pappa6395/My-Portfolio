
import { getCourseById } from '@/actions/courses';
import CourseForm from '@/components/dashboard/Forms/CourseForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const course = await getCourseById(id) || null;
  
  return (

    <div>
        <CourseForm 
          initialData={course}
          editingId={id}
        />
    </div>


  )
}

export default page
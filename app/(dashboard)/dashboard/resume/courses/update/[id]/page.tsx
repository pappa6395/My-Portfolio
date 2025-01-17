
import { getCourseById } from '@/actions/courses';
import CourseForm from '@/components/dashboard/Forms/CourseForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;

  let course = null;
  try {
    course = await getCourseById(id) || null;
  } catch (err) {
    console.log("Failed to get course:", err);
  }
  
  return (

    <div>
      <CourseForm 
        initialData={course ?? null}
        editingId={id ?? ""}
      />
    </div>

  )
}

export default page
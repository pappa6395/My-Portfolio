
import { getBlogById, getBlogCategories } from '@/actions/blogs';
import BlogForm from '@/components/dashboard/Forms/BlogForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const blog = await getBlogById(id) || null;
  const categories = await getBlogCategories() || [];
  const blogCategories = categories?.map((item) => {

      return {
          value: item.id,
          label: item.title,
      };
  })

  return (

    <div>
        <BlogForm 
          initialData={blog}
          editingId={id}
          blogCategories={blogCategories} />
    </div>


  )
}

export default page
import { getBlogCategories } from '@/actions/blogs';
import BlogForm from '@/components/dashboard/Forms/BlogForm';
import React from 'react'


const page = async () => {

        const categories = await getBlogCategories() || [];
        const blogCategories = categories?.map((item) => {
            return {
                value: item.id,
                label: item.title,
            };
        })

  return (

    <div>
        <BlogForm blogCategories={blogCategories} />
    </div>


  )
}

export default page
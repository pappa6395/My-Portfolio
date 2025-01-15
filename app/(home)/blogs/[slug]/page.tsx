import { getBlogBySlug, getBlogCategories, getBlogsByCategories, getRelatedBlogs } from '@/actions/blogs'
import { getSettings } from '@/actions/settings'
import BlogDetail from '@/components/blogDetail'
import React from 'react'

const BlogPage = async ({params: paramsPromise}: any) => {

    const { slug } = await paramsPromise
    const blog = await getBlogBySlug(slug);
    const categories = await getBlogsByCategories() || [];
    const settings = await getSettings() || null;

    if (!blog) {
        return <h1>Blog not found</h1>
    }
    const relatedBlog = await getRelatedBlogs(blog?.id)


  return (

    <div>
        <BlogDetail 
            blog={blog} 
            relatedBlog={relatedBlog}
            categories={categories as any}
            settings={settings}
        />
    </div>

  )
}

export default BlogPage
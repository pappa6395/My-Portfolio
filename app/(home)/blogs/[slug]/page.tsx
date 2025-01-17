import { getBlogBySlug, getBlogCategories, getBlogsByCategories, getRelatedBlogs } from '@/actions/blogs'
import { getSettings } from '@/actions/settings'
import BlogDetail from '@/components/blogDetail'
import { BlogCategory, Blogs, Settings } from '@prisma/client'
import React from 'react'

const BlogPage = async ({params: paramsPromise}: any) => {

    const { slug } = await paramsPromise
    // const blog = await getBlogBySlug(slug);
    // const categories = await getBlogsByCategories() || [];
    // const settings = await getSettings() || null;

    let blog = null;
    let categories = [] as BlogCategory[];
    let settings = null;

    try {
      const [
        blogResponse, 
        categoriesResponse, 
        settingsResponse
      ] = await Promise.all([

        getBlogBySlug(slug),
        getBlogsByCategories(),
        getSettings(),
      ])

      blog = blogResponse || null;
      categories = categoriesResponse || [];
      settings = settingsResponse || null;

    } catch (err) {
      console.log("Failed to fetch blog data:",err)
    }

    if (!blog) {
        return <h1>Blog not found</h1>
    }

    let relatedBlog = [] as Blogs[]
    try {
      relatedBlog = await getRelatedBlogs(blog?.id) || []
    } catch (err) {
      console.log("Failed to fetch related blogs:", err)
    }
    
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
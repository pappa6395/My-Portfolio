import { BlogCategory, Blogs, Settings } from '@prisma/client'
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image'
import { getBlogDate, getShortBlogDate } from '@/utils/getBlogDate';
import Link from 'next/link';
import parse from 'html-react-parser';
import { Calendar } from 'lucide-react';
import ShareBlog from './shareBlog';

interface IBlog extends Blogs {
    category: BlogCategory;
}
interface IBlogCategory extends Blogs {
    blogs: Blogs[];
}

const BlogDetail = ({
    blog, 
    relatedBlog,
    categories,
    settings
}: {
    blog: IBlog; 
    relatedBlog: Blogs[];
    categories: IBlogCategory[];
    settings: Settings | null;
}) => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const blogUrl = `${baseUrl}/blogs/${blog.slug}`

  return (

    <div className='max-w-7xl mx-auto'>
        <div className='lg: container'>
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-8 p-6 col-span-full'>
                    <Button>{blog.category.title}</Button>
                    <h1 className="scroll-m-20 text-4xl font-extrabold 
                    tracking-tight lg:text-5xl py-3">
                        {blog.title}
                    </h1>
                    <div className='flex items-center space-x-7 py-4 mt-3 border-t '>
                        <div className='flex items-center space-x-2'>
                            <Link href={'/#about'}>
                                <Image 
                                    src={settings?.imageUrl || "/defaultImage.png"}
                                    alt={settings?.profileName || ""} 
                                    width={400} 
                                    height={400}
                                    className='size-10 md:size-12 object-cover rounded-full'
                                />
                            </Link>
                            <p className='text-xs md:text-base'>
                                {settings?.profileName}
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Calendar className='size-4 md:size-6' />
                            <p className='text-xs md:text-base'>{getShortBlogDate(blog.createdAt)}</p>
                        </div>
                        <div className='hidden md:block'>
                            <ShareBlog productUrl={blogUrl} />
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <ShareBlog productUrl={blogUrl} />
                    </div>
                    <div>
                        <Image 
                            src={blog.imageUrl || ""}
                            alt={blog.title}
                            width={1280}
                            height={720}
                            className='w-full rounded-lg'
                        />
                    </div>
                    <div className='py-6 prose lg:prose-xl 
                    dark:text-slate-50 dark:prose-headings:text-slate-50
                    dark:prose-strong:text-slate-50'
                    >
                        {parse(blog.content || "No content found")}
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-full p-6'>
                        {/* Social Links */}
                        {/* Related Blog */}
                    {relatedBlog && relatedBlog.length > 0 && (
                            <div className='pb-4'>
                                <h2 className='text-xl font-semibold border-b pb-2'>
                                    Related Blogs
                                </h2>
                                {relatedBlog.map((blog,i) => {
                                    return (
                                        <Link 
                                            href={`blogs/${blog.slug}`} 
                                            key={i} 
                                            className='flex items-center gap-4 py-4'>
                                            <Image
                                                src={blog.imageUrl || ""}
                                                alt={blog.title}
                                                width={100}
                                                height={100}
                                                className='w-20 h-20 rounded-2xl object-fit'
                                            />
                                            <div>
                                                <h2 className='text-sm'>{blog.title}</h2>
                                                <p className='text-xs text-muted-foreground'>
                                                    {getBlogDate(blog.createdAt)}
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                        {/* Categories */}
                        {categories && categories.length > 0 && (
                            <div className='py-2'>
                                <h2 className='text-xl font-semibold border-b pb-2'>
                                    Categories
                                </h2>
                                <div className='inline-flex flex-col gap-3 pt-3'>
                                    {categories.map((category,i) => {
                                        return (
                                            <Button asChild key={i} variant={"outline"}>
                                                <Link 
                                                href={`category/${category.slug}`} 
                                                className='flex items-center gap-4 py-4'>
                                                    <div>
                                                        <p className='text-sm'>
                                                            {category.title}
                                                            ({category.blogs.length.toString().padStart(2,"0")}){" "}
                                                        </p>
                                                        
                                                    </div>
                                                </Link>
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                        
                </div>
            </div>
        </div>
    </div>

  )
}

export default BlogDetail

"use client";
 
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card";
 
import FormHeader from "@/components/FormInputs/FormHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
Options,
SelectValue,
} from "react-tailwindcss-select/dist/components/type";
import FormFooter from "@/components/FormInputs/FormFooter";
import ImageInput from "@/components/FormInputs/ImageInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import generateSlug from "@/utils/generateSlug";
import { BlogProps, SelectOptionProps } from "@/utils/type";
import { Blogs } from "@prisma/client";
import { createBlog, updateBlogById } from "@/actions/blogs";
import BlogCategoryForm from "./BlogCategoryForm";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";



type BlogFormProps = {
    editingId?: string | undefined;
    initialData?: Blogs | undefined | null;
    blogCategories: SelectOptionProps[];
}

const QuillEditor = dynamic(() => import('@/components/FormInputs/QuillEditor'), { ssr: false });

export default function BlogForm({
editingId,
initialData,
blogCategories,
}: BlogFormProps) {
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<BlogProps>({
    defaultValues: {
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    tags: initialData?.tags || "",
    summary: initialData?.summary || "",
    content: initialData?.content || "",

    },
});

const router = useRouter();
const initialBlogCategoryId = initialData?.categoryId || "";
const initialCategory = blogCategories.find(
(item) => item.value === initialBlogCategoryId
);
const [selectedMainCategory, setSelectedMainCategory] =
useState<any>(initialCategory);
const [isLoading, setIsLoading] = useState(false);
const initialImage = initialData?.imageUrl || "/placeholder.svg";
const [imageUrl, setImageUrl] = useState(initialImage);
const initialContent = initialData?.content || "";
const [content, setContent] = useState(initialContent);
const [step, setStep] = useState(1)

    const nextStep= () => {
        if (step < 3) {
            setStep((prev) => prev + 1)
        }
    }
    const prevStep = () => {
        if (step > 1) {
            setStep((prev) => prev - 1)
        }
    }

    const options: Options = [
    { value: "true", label: "Active" },
    { value: "false", label: "Disabled" },
    ];
    const handleChange = (item: SelectValue) => {
        console.log("value:", item);
    }

async function saveCategory(data: BlogProps) {

try {
  setIsLoading(true);
  data.slug = generateSlug(data.title);
  data.imageUrl = imageUrl;
  data.categoryId = selectedMainCategory?.value;
  data.content = content;
 
  if (editingId) {
    await updateBlogById(editingId, data);
    console.log("UpdateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Updated!");
    //reset
    reset();
    //route
    router.push("/dashboard/blogs");
    setImageUrl("/placeholder.svg");

  } else {
    await createBlog(data);
    console.log("CreateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Created!");
    //reset
    reset();
    //route
    router.push("/dashboard/blogs");
    setImageUrl("/placeholder.svg");
  }
} catch (error) {
  setIsLoading(false);
  console.log(error);
}
 
}
// async function handleDeleteAll() {
// setLoading(true);
// try {
// await deleteManyCategories();
// setLoading(false);
// } catch (error) {
// console.log(error);
// }
// }
 
    return (
    
        <form className="" onSubmit={handleSubmit(saveCategory)}>
            {step === 2 ? (
                <FormHeader
                href="/blogs"
                title="Blog"
                editingId={editingId}
                loading={isLoading}
            />
            ) : (
                <div className="flex items-center justify-between">
                    <h2>Create Blog</h2>
                    <Button type="button" onClick={nextStep}>Next Step</Button>
                </div>
            )}

            {step === 1 && (
                <div className="grid grid-cols-12 gap-6 py-8">
                    <div className="lg:col-span-8 col-span-full space-y-5">
                    <Card>
                        <CardHeader>
                        <CardTitle>New Blog</CardTitle>
                        <CardDescription>
                            Add your new Blog category and details here.
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 space-y-3">
                                <div className="grid gap-3">
                                    <TextInput
                                        register={register}
                                        errors={errors}
                                        label="Blog Title"
                                        name="title"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <TextInput
                                        register={register}
                                        errors={errors}
                                        label="Blog Tags"
                                        name="tags"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <TextArea
                                        register={register}
                                        errors={errors}
                                        label="Blog Summary"
                                        name="summary"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 px-3">
                                <div className="flex space-x-2 items-end">
                                    <FormSelectInput
                                    label="Blog Categories"
                                    options={blogCategories}
                                    option={selectedMainCategory}
                                    setOption={setSelectedMainCategory}
                                    />
                                    <div>
                                        <BlogCategoryForm />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="lg:col-span-4 col-span-full ">
                    <div className="grid auto-rows-max items-start gap-4 ">
                        <ImageInput
                        title="Blog Banner Image"
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint="blogImageUpdate"
                        />
                    </div>
                    </div>
                </div>
            )}
            
            {step === 2 && (
                <div className="space-y-3">
                    <QuillEditor
                    label="Write your content here..."
                    className=""
                    value={content}
                    onChange={setContent}
                    />
                    <Button 
                        size={"sm"}
                        type="button" 
                        variant={"secondary"} 
                        onClick={prevStep}
                    >
                        Prev Step
                    </Button>
                </div>
                
            )}
            
            {step === 2 ? (
                <FormFooter
                href="/blogs"
                editingId={editingId}
                loading={isLoading}
                title="Blog"
                />
            ) : (
                <div className="flex justify-between items-center">
                    <div>
                        <Button variant={"outline"} type="button">
                            <Link href='/dashboard/blogs'>
                                Close
                            </Link>
                        </Button>
                    </div>
                    <Button type="button" onClick={nextStep} >
                        Next Step
                    </Button>
                </div>
            )}
            
        </form>
    
    );
}
 

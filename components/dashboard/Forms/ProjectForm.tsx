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
import { ProjectProps, SelectOptionProps } from "@/utils/type";
import { Projects } from "@prisma/client";
import ProjectCategoryForm from "./ProjectCategoryForm";
import { createProject, updateProjectById } from "@/actions/projects";

type ProjectFormProps = {
    editingId?: string | undefined;
    initialData?: Projects | undefined | null;
    projectCategories: SelectOptionProps[];
}

export default function ProjectForm({
editingId,
initialData,
projectCategories,
}: ProjectFormProps) {
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<ProjectProps>({
    defaultValues: {
    title: initialData?.title || "",
    description: initialData?.description || "",
    github: initialData?.github || "",
    hostedLink: initialData?.hostedLink || "",
    tags: initialData?.tags || "",
    },
});

const router = useRouter();
const initialProjectCategoryId = initialData?.categoryId || "";
const initialCategory = projectCategories.find(
(item) => item.value === initialProjectCategoryId
);
const [selectedMainCategory, setSelectedMainCategory] =
useState<any>(initialCategory);
const [isLoading, setIsLoading] = useState(false);
const initialImage = initialData?.imageUrl || "/placeholder.svg";
const [imageUrl, setImageUrl] = useState(initialImage);

    const options: Options = [
    { value: "true", label: "Active" },
    { value: "false", label: "Disabled" },
    ];
    const handleChange = (item: SelectValue) => {
        console.log("value:", item);
    }

async function saveCategory(data: ProjectProps) {

try {
  setIsLoading(true);
  data.slug = generateSlug(data.title);
  data.imageUrl = imageUrl;
  data.categoryId = selectedMainCategory?.value;
 
  if (editingId) {
    await updateProjectById(editingId, data);
    console.log("UpdateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Updated!");
    //reset
    reset();
    //route
    router.push("/dashboard/projects");
    setImageUrl("/placeholder.svg");

  } else {
    await createProject(data);
    console.log("CreateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Created!");
    //reset
    reset();
    //route
    router.push("/dashboard/projects");
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
            <FormHeader
                href="/projects"
                title="Project"
                editingId={editingId}
                loading={isLoading}
            />
            <div className="grid grid-cols-12 gap-6 py-8">
                <div className="lg:col-span-8 col-span-full space-y-5">
                <Card>
                    <CardHeader>
                    <CardTitle>New Project</CardTitle>
                    <CardDescription>
                        Add your new project category and details here.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 space-y-3">
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Project Title"
                                    name="title"
                                />
                            </div>
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Project Tags ( eg.mongodb, prisma, typecript,...etc. )"
                                    name="tags"
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Project GitHub"
                                    name="github"
                                />
                                 <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Project Hosted Link"
                                    name="hostedLink"
                                />
                            </div>  
                            <div className="grid gap-3">
                                <TextArea
                                    register={register}
                                    errors={errors}
                                    label="Description"
                                    name="description"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 px-3">
                            <div className="flex space-x-2 items-end">
                                <FormSelectInput
                                label="Project Categories"
                                options={projectCategories}
                                option={selectedMainCategory}
                                setOption={setSelectedMainCategory}
                                />
                                <div>
                                    <ProjectCategoryForm />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                </div>
                <div className="lg:col-span-4 col-span-full ">
                <div className="grid auto-rows-max items-start gap-4 ">
                    <ImageInput
                    title="Project Image"
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="projectImageUpdate"
                    />
                </div>
                </div>
            </div>
            <FormFooter
                href="/projects"
                editingId={editingId}
                loading={isLoading}
                title="Project"
            />
        </form>
    
    );
}
 

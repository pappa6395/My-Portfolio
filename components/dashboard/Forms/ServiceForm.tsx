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
import { ProjectProps, SelectOptionProps, ServiceProps } from "@/utils/type";
import { Projects, Services } from "@prisma/client";
import ProjectCategoryForm from "./ProjectCategoryForm";
import { createProject, updateProjectById } from "@/actions/projects";
import { createService, updateServiceById } from "@/actions/services";

type ServiceFormProps = {
    editingId?: string | undefined;
    initialData?: Services | undefined | null;
    projectCategories?: SelectOptionProps[];
}

export default function ProjectForm({
editingId,
initialData,
projectCategories,
}: ServiceFormProps) {
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<ServiceProps>({
    defaultValues: {
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        iconUrl: initialData?.iconUrl || "/defaultImage.png",
        description: initialData?.description || "",
        slogan: initialData?.slogan || "",
    },
});

const router = useRouter();

const [isLoading, setIsLoading] = useState(false);
const initialIcon = initialData?.iconUrl || "/placeholder.svg";
const [iconUrl, setIconUrl] = useState(initialIcon);


async function saveCategory(data: ServiceProps) {

try {
  setIsLoading(true);
  data.slug = generateSlug(data.title);
  data.iconUrl = iconUrl;
 
  if (editingId) {
    await updateServiceById(editingId, data);
    console.log("UpdateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Updated!");
    //reset
    reset();
    //route
    router.push("/dashboard/services");
    setIconUrl("/placeholder.svg");

  } else {
    await createService(data);
    console.log("CreateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Created!");
    //reset
    reset();
    //route
    router.push("/dashboard/services");
    setIconUrl("/placeholder.svg");
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
                href="/services"
                title="Service"
                editingId={editingId}
                loading={isLoading}
            />
            <div className="grid grid-cols-12 gap-6 py-8">
                <div className="lg:col-span-8 col-span-full space-y-5">
                <Card>
                    <CardHeader>
                    <CardTitle>New Service</CardTitle>
                    <CardDescription>
                        Add your new service and details here.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 space-y-3">
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Service Title"
                                    name="title"
                                />
                            </div>
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Service Slogan"
                                    name="slogan"
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
                    </CardContent>
                </Card>
                </div>
                <div className="lg:col-span-4 col-span-full ">
                    <div className="grid auto-rows-max items-start gap-4 ">
                        <ImageInput
                        title="Service Icon"
                        imageUrl={iconUrl}
                        setImageUrl={setIconUrl}
                        endpoint="serviceIconUpdate"
                        />
                    </div>
                </div>
            </div>
            <FormFooter
                href="/services"
                editingId={editingId}
                loading={isLoading}
                title="Service"
            />
        </form>
    
    );
}
 

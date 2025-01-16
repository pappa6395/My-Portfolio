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

import FormFooter from "@/components/FormInputs/FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import { CourseProps, EducationProps, SelectOptionProps } from "@/utils/type";
import { Educations } from "@prisma/client";

import FileInput from "@/components/FormInputs/FileInput";
import { createEducation, updateEducationById } from "@/actions/educations";

type EducationFormProps = {
    editingId?: string | undefined;
    initialData?: Educations | undefined | null;
    projectCategories?: SelectOptionProps[];
}

export default function ProjectForm({
editingId,
initialData,
projectCategories,
}: EducationFormProps) {
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<EducationProps>({
    defaultValues: {
        title: initialData?.title || "",
        period: initialData?.period || "",
        school: initialData?.school || "",
        certificate: initialData?.certificate || "",
        description: initialData?.description || "",
    },
});

const router = useRouter();

const [isLoading, setIsLoading] = useState(false);
const initialFile = initialData?.certificate || "";
const [fileUrl, setFileUrl] = useState(initialFile);

async function saveCategory(data: CourseProps) {

try {
  setIsLoading(true);
  data.certificate = fileUrl;
 
  if (editingId) {
    await updateEducationById(editingId, data);
    console.log("UpdateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Updated!");
    //reset
    reset();
    //route
    router.push("/dashboard/resume");


  } else {
    await createEducation(data);
    console.log("CreateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Created!");
    //reset
    reset();
    //route
    router.push("/dashboard/resume");
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
                href="/resume"
                title="Education"
                editingId={editingId}
                loading={isLoading}
            />
            <div className="grid grid-cols-12 gap-6 py-8">
                <div className="lg:col-span-8 col-span-full space-y-5">
                <Card>
                    <CardHeader>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>
                        Add your Education and details here.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 space-y-3">
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Degree Title"
                                    name="title"
                                />
                            </div>
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="School Name"
                                    name="school"
                                />
                            </div>
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Period of Time"
                                    name="period"
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
                        <FileInput
                        title="Skill Icon"
                        fileUrl={fileUrl}
                        setFileUrl={setFileUrl}
                        endpoint="educationUpload"
                        />
                    </div>
                </div>
            </div>
            <FormFooter
                href="/resume"
                editingId={editingId}
                loading={isLoading}
                title="Education"
            />
        </form>
    
    );
}
 

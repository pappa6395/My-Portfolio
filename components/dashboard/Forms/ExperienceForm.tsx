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
import { ExperienceProps, SelectOptionProps } from "@/utils/type";
import { Experiences } from "@prisma/client";
import { createExperience, updateExperienceById } from "@/actions/experiences";

type ExperienceFormProps = {
    editingId?: string | undefined;
    initialData?: Experiences | undefined | null;
    projectCategories?: SelectOptionProps[];
}

export default function ExperienceForm({
editingId,
initialData,
projectCategories,
}: ExperienceFormProps) {
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<ExperienceProps>({
    defaultValues: {
        title: initialData?.title || "",
        period: initialData?.period || "",
        company: initialData?.company || "",
        description: initialData?.description || "",
    },
});

const router = useRouter();

const [isLoading, setIsLoading] = useState(false);

async function saveCategory(data: ExperienceProps) {

try {
  setIsLoading(true);
 
  if (editingId) {
    await updateExperienceById(editingId, data);
    console.log("UpdateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Updated!");
    //reset
    reset();
    //route
    router.push("/dashboard/resume");


  } else {
    await createExperience(data);
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
                title="Experience"
                editingId={editingId}
                loading={isLoading}
            />
            <div className="grid grid-cols-12 gap-6 py-8">
                <div className="lg:col-span-8 col-span-full space-y-5">
                <Card>
                    <CardHeader>
                    <CardTitle>Experience</CardTitle>
                    <CardDescription>
                        Add your Experience and details here.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 space-y-3">
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Job Title"
                                    name="title"
                                />
                            </div>
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Company Name"
                                    name="company"
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
            </div>
            <FormFooter
                href="/resume"
                editingId={editingId}
                loading={isLoading}
                title="Experience"
            />
        </form>
    
    );
}
 

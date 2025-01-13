"use client"

import { createProjectCategory } from "@/actions/projects";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { Button } from "@/components/ui/button";
import {
Sheet,
SheetClose,
SheetContent,
SheetDescription,
SheetFooter,
SheetHeader,
SheetTitle,
SheetTrigger,
} from "@/components/ui/sheet"
import { ProjectCategoryProps } from "@/utils/type";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import generateSlug from "@/utils/generateSlug";

const ProjectCategoryForm = () => {

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm<ProjectCategoryProps>();

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const saveContact = async (data: ProjectCategoryProps) => {
        setIsLoading(true);
        data.slug = generateSlug(data.title);

        try {
            
            const newCategory = await createProjectCategory(data)
            reset()
            setSuccess(true)
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            toast.success("Project Category Created Successfully")
            console.log("newCategory: ", newCategory);
            
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        } finally {
            setIsLoading(false);
            setSuccess(false);
        }
    }

  return (

    <div className="grid grid-cols-2 gap-2">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                type="button"
                                variant={"outline"} 
                                size={"sm"} 
                                className="active:scale-90"
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader className="mt-2 py-3">
                                <SheetTitle>Create Project Category</SheetTitle>
                                <SheetDescription className="py-3">
                                    Make changes to your project here. Click create when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="w-full p-4 max-w-3xl bg-white border border-gray-200 
                            rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-900 dark:border-gray-700">
                                <form className="" onSubmit={handleSubmit(saveContact)}>
                                    <div className="col-span-full space-y-3">
                                        <div className="grid gap-6">
                                            <div className="gap-3">
                                                <TextInput
                                                register={register}
                                                errors={errors}
                                                label="Project Category Title"
                                                name="title"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                    <div className="py-4">
                                        <SubmitButton
                                            title={"Create Project Category"}
                                            loading={isLoading}
                                        />
                                    </div>
                                </SheetFooter>
                                </form>
                            </div>
                        </SheetContent>
                    </Sheet>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add the new category</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>

  )
}

export default ProjectCategoryForm
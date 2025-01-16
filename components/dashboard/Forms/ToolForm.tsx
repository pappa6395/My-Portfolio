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
import ImageInput from "@/components/FormInputs/ImageInput";
import TextInput from "@/components/FormInputs/TextInput";
import generateSlug from "@/utils/generateSlug";
import { SelectOptionProps, ToolProps } from "@/utils/type";
import { Tools } from "@prisma/client";
import { createTool, updateToolById } from "@/actions/tools";

type ToolFormProps = {
    editingId?: string | undefined;
    initialData?: Tools | undefined | null;
    projectCategories?: SelectOptionProps[];
}

export default function ToolForm({
editingId,
initialData,
projectCategories,
}: ToolFormProps) {
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<ToolProps>({
    defaultValues: {
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    iconUrl: initialData?.iconUrl || "/defaultImage.png",
    percent: initialData?.percent || 0,
    },
});

const router = useRouter();

const [isLoading, setIsLoading] = useState(false);
const initialIcon = initialData?.iconUrl || "/placeholder.svg";
const [iconUrl, setIconUrl] = useState(initialIcon);


async function saveCategory(data: ToolProps) {

try {
  setIsLoading(true);
  data.slug = generateSlug(data.title);
  data.iconUrl = iconUrl;
  data.percent = Number(data.percent);
 
  if (editingId) {
    await updateToolById(editingId, data);
    console.log("UpdateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Updated!");
    //reset
    reset();
    //route
    router.push("/dashboard/tools");
    setIconUrl("/placeholder.svg");

  } else {
    await createTool(data);
    console.log("CreateData:", data);
    setIsLoading(false);
    // Toast
    toast.success("Successfully Created!");
    //reset
    reset();
    //route
    router.push("/dashboard/tools");
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
                href="/tools"
                title="Tool"
                editingId={editingId}
                loading={isLoading}
            />
            <div className="grid grid-cols-12 gap-6 py-8">
                <div className="lg:col-span-8 col-span-full space-y-5">
                <Card>
                    <CardHeader>
                    <CardTitle>New Tool</CardTitle>
                    <CardDescription>
                        Add your new Tool and details here.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 space-y-3">
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Tool Title"
                                    name="title"
                                />
                            </div>
                            <div className="grid gap-3">
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    label="Tool Percent"
                                    name="percent"
                                    type="number"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                </div>
                <div className="lg:col-span-4 col-span-full ">
                    <div className="grid auto-rows-max items-start gap-4 ">
                        <ImageInput
                        title="Tool Icon"
                        imageUrl={iconUrl}
                        setImageUrl={setIconUrl}
                        endpoint="toolIconUpdate"
                        />
                    </div>
                </div>
            </div>
            <FormFooter
                href="/tools"
                editingId={editingId}
                loading={isLoading}
                title="tool"
            />
        </form>
    
    );
}
 

"use server";
import { db } from "@/prisma/db";
import { EducationProps } from "@/utils/type";
import { revalidatePath } from "next/cache";


export async function getEducations() {
  try {
    const educations = await db.educations.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return educations;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getEducationById(id: string) {
  if (id) {
    try {
      const education = await db.educations.findUnique({
        where: {
          id,
        }
      });
  
      return education;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function createEducation(data: EducationProps) {
  
  try {
    const newEducation = await db.educations.create({
      data,
    });
    revalidatePath("/dashboard/resume");
    return newEducation;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateEducationById(id: string, data: EducationProps) {
  try {
    const updatedEducation = await db.educations.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/resume");
    return updatedEducation;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteEducationById(id: string) {

  if (id) {
    try {
      const deletedEducation = await db.educations.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/resume");
      return {
        ok: true,
        data: deletedEducation,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

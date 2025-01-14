"use server";
import { db } from "@/prisma/db";
import { ExperienceProps } from "@/utils/type";
import { revalidatePath } from "next/cache";



export async function getExperiences() {
  try {
    const experiences = await db.experiences.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return experiences;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getExperienceById(id: string) {
  if (id) {
    try {
      const experience = await db.experiences.findUnique({
        where: {
          id,
        }
      });
  
      return experience;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function createExperience(data: ExperienceProps) {
  
  try {
    const newExperience = await db.experiences.create({
      data,
    });
    revalidatePath("/dashboard/resume");
    return newExperience;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateExperienceById(id: string, data: ExperienceProps) {
  try {
    const updatedExperience = await db.experiences.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/resume");
    return updatedExperience;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteExperienceById(id: string) {

  if (id) {
    try {
      const deletedExperience = await db.experiences.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/resume");
      return {
        ok: true,
        data: deletedExperience,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

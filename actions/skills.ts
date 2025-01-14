"use server";
import { db } from "@/prisma/db";
import { ContactProps, SkillProps } from "@/utils/type";
import { revalidatePath } from "next/cache";

export async function createSkill(data: SkillProps) {
  try {
    const newSkill = await db.skills.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/skills");
    return newSkill;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getSkills() {
  try {
    const skills = await db.skills.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return skills;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getSkillById(id: string) {
  if (id) {
    try {
      const skills = await db.skills.findUnique({
        where: {
          id,
        },
      });
  
      return skills;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function updateSkillById(id: string, data: SkillProps) {
  try {
    const updatedSkill = await db.skills.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/skills");
    return updatedSkill;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSkillById(id: string) {
  if (id) {
    try {
      const deletedSkill = await db.skills.delete({
        where: {
          id,
        },
      });
      return {
        ok: true,
        data: deletedSkill,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

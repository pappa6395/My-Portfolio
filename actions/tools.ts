"use server";
import { db } from "@/prisma/db";
import { ToolProps } from "@/utils/type";
import { revalidatePath } from "next/cache";

export async function createTool(data: ToolProps) {
  try {
    const newTool = await db.tools.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/tools");
    return newTool;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getTools() {
  try {
    const tools = await db.tools.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return tools;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getToolById(id: string) {
  if (id) {
    try {
      const tools = await db.tools.findUnique({
        where: {
          id,
        },
      });
  
      return tools;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function updateToolById(id: string, data: ToolProps) {
  try {
    const updatedTool = await db.tools.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/tools");
    return updatedTool;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteToolById(id: string) {
  if (id) {
    try {
      const deletedTool = await db.tools.delete({
        where: {
          id,
        },
      });
      return {
        ok: true,
        data: deletedTool,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

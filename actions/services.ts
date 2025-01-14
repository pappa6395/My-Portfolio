"use server";
import { db } from "@/prisma/db";
import { ContactProps, ProjectCategoryProps, ProjectProps, ServiceProps, SettingProps } from "@/utils/type";
import { revalidatePath } from "next/cache";




export async function getServices() {
  try {
    const services = await db.services.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return services;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getServiceById(id: string) {
  if (id) {
    try {
      const service = await db.services.findUnique({
        where: {
          id,
        }
      });
  
      return service;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function createService(data: ServiceProps) {
  const slug = data.slug
  try {
    const existingService = await db.services.findUnique({
      where: {
        slug,
      }
    });
    if (existingService) {
      return existingService;
    }
    const newService = await db.services.create({
      data,
    });
    revalidatePath("/dashboard/services");
    return newService;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateServiceById(id: string, data: ServiceProps) {
  try {
    const updatedService = await db.services.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/projects");
    return updatedService;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteServiceById(id: string) {

  if (id) {
    try {
      const deletedService = await db.services.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/services");
      return {
        ok: true,
        data: deletedService,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
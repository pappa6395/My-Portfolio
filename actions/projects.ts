"use server";
import { db } from "@/prisma/db";
import { ContactProps, ProjectCategoryProps, ProjectProps, SettingProps } from "@/utils/type";
import { revalidatePath } from "next/cache";


export async function updateProject(id: string, data: ProjectProps) {
  try {
    const updatedProjects = db.projects.update({
      where: {
        id,
      },
      data,
    });
    
    // console.log(newCategory);
    revalidatePath("/dashboard/projects");
    return updatedProjects;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProjects() {
  try {
    const projects = await db.projects.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return projects;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProjectById(id: string) {
  if (id) {
    try {
      const project = await db.projects.findUnique({
        where: {
          id,
        }
      });
  
      return project;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function createProject(data: ProjectProps) {
  const slug = data.slug
  try {
    const existingProject = await db.projects.findUnique({
      where: {
        slug,
      }
    });
    if (existingProject) {
      return existingProject;
    }
    const newProject = await db.projects.create({
      data,
    });
    revalidatePath("/dashboard/projects");
    return newProject;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createProjectCategory(data: ProjectCategoryProps) {
  const slug = data.slug
  if (slug) {
    try {
      const existingCategory = await db.projectCategory.findUnique({
        where: {
          slug,
        }
      });
      if (existingCategory) {
        return existingCategory;
      }
      const newCategory = await db.projectCategory.create({
        data,
      });
      revalidatePath("/dashboard/projects");
      return newCategory;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export async function getProjectCategories() {
  try {
    const categories = await db.projectCategory.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
 
    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProjectsByCategories() {
  try {
    const categories = await db.projectCategory.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        projects: true,
      }
    });
 
    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProjectById(id: string, data: ProjectProps) {
  try {
    const updatedProject = await db.projects.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/projects");
    return updatedProject;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProjectById(id: string) {

  if (id) {
    try {
      const deletedProject = await db.projects.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/projects");
      return {
        ok: true,
        data: deletedProject,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
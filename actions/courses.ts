"use server";
import { db } from "@/prisma/db";
import { CourseProps } from "@/utils/type";
import { revalidatePath } from "next/cache";


export async function getCourses() {
  try {
    const courses = await db.courses.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return courses;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getCourseById(id: string) {
  if (id) {
    try {
      const course = await db.courses.findUnique({
        where: {
          id,
        }
      });
  
      return course;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}

export async function createCourse(data: CourseProps) {
  
  try {
    const newCourse = await db.courses.create({
      data,
    });
    revalidatePath("/dashboard/resume");
    return newCourse;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateCourseById(id: string, data: CourseProps) {
  try {
    const updatedCourse = await db.courses.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/resume");
    return updatedCourse;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCourseById(id: string) {

  if (id) {
    try {
      const deletedCourse = await db.courses.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/resume");
      return {
        ok: true,
        data: deletedCourse,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getExperiences } from "@/actions/experiences";
import { getCourses } from "@/actions/courses";
import { getEducations } from "@/actions/educations";
import CourseTable from "@/components/courseTable";
import EducationTable from "@/components/educationTable";
import ExperienceTable from "@/components/experienceTable";
import { Courses, Educations, Experiences } from "@prisma/client";
 
export default async function page() {

  let experiences = [] as Experiences[];
  let courses = [] as Courses[];
  let educations = [] as Educations[];
  
  try {
    const [
      experiencesResponse, 
      coursesResonse, 
      educationResonse
    ] = await Promise.all([
      getExperiences(),
      getCourses(),
      getEducations(),
    ]);
    experiences = experiencesResponse || [];
    courses = coursesResonse || [];
    educations = educationResonse || [];

  } catch (err) {
    console.log("Failed to get experiences, courses, or educations:", err);
  }

  return (
    <div className="p-8">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <ExperienceTable experiences={experiences ?? []} />
        </TabsContent>
        <TabsContent value="courses">
          <CourseTable courses={courses ?? []} />
        </TabsContent>
        <TabsContent value="education">
          <EducationTable educations={educations ?? []} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
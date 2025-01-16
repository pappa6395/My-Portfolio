import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getExperiences } from "@/actions/experiences";
import { getCourses } from "@/actions/courses";
import { getEducations } from "@/actions/educations";
import CourseTable from "@/components/courseTable";
import EducationTable from "@/components/educationTable";
import ExperienceTable from "@/components/experienceTable";
 
export default async function page() {

  const experiences = (await getExperiences()) || [];
  const courses = (await getCourses()) || [];
  const educations = (await getEducations()) || [];

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
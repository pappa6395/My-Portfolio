
import { getBlogsByCategories } from "@/actions/blogs";
import { getCourses } from "@/actions/courses";
import { getEducations } from "@/actions/educations";
import { getExperiences } from "@/actions/experiences";
import { getProjectsByCategories } from "@/actions/projects";
import { getReviews } from "@/actions/reviews";
import { getServices } from "@/actions/services";
import { getSettings } from "@/actions/settings";
import { getSkills } from "@/actions/skills";
import { getTools } from "@/actions/tools";
import AboutSection from "@/components/about-section";
import BlogSection, { IBlogCategory } from "@/components/blogSection";
import Contact from "@/components/contact";
import FixedSidebar from "@/components/fixed-sidebar";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";
import ProfileCard from "@/components/ProfileCard";
import Projectz, { ProjectCategoryProps } from "@/components/projectz";
import ServicesListing from "@/components/ServicesListing";
import TechnicalSkills from "@/components/technical-skills";
import { Testimonial } from "@/components/testimonial";
import VideoBackground from "@/components/video-background";
import WorkExperience from "@/components/WorkExperience";
import { ReviewCardProps } from "@/utils/type";
import { Courses, Educations, Experiences, Services, Skills, Tools } from "@prisma/client";


export default async function Home() {

  let siteSettings = null;
  let projectCategories = [] as ProjectCategoryProps[]
  let allSkills = [] as Skills[]
  let allTools = [] as Tools[]
  let allServices = [] as Services[]
  let allExperiences = [] as Experiences[]
  let allCourses = [] as Courses[]
  let allEducations = [] as Educations[]
  let reviews = [] as ReviewCardProps[]
  let blogCategories = [] as IBlogCategory[]

  try {
    const [
      siteSettingsResponse, 
      projectCategoriesResponse, 
      allSkillsResponse, 
      allToolsResponse,
      allServicesResponse, 
      allExperiencesResponse, 
      allCoursesResponse,
      allEducationsResponse, 
      reviewsResponse, 
      blogCategoriesResponse] = await Promise.all(
        [
          getSettings(),
          getProjectsByCategories(),
          getSkills(),
          getTools(),
          getServices(),
          getExperiences(),
          getCourses(),
          getEducations(),
          getReviews(),
          getBlogsByCategories(),
      ])
      siteSettings = siteSettingsResponse || null;
      projectCategories = projectCategoriesResponse || [];
      allSkills = allSkillsResponse || [];
      allTools = allToolsResponse || [];
      allServices = allServicesResponse || [];
      allExperiences = allExperiencesResponse || [];
      allCourses = allCoursesResponse || [];
      allEducations = allEducationsResponse || [];
      reviews = reviewsResponse?.data || [];
      blogCategories = blogCategoriesResponse || [];
    
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }
  

  return (
    <div>
      <VideoBackground />
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="py-4">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-4 py-20 md:py-8">
          <div className="w-full mx-auto">
            <FixedSidebar siteSettings={siteSettings} />
          </div>
          <div className="mx-2 space-y-4 -mt-4">
            <ProfileCard />
            <AboutSection siteSettings={siteSettings} />
            <Projectz projectCategories={projectCategories} />
            <TechnicalSkills allSkills={allSkills} allTools={allTools || []}/>
            <ServicesListing allServices={allServices}/>
            {/* <Pricing /> */}
            <WorkExperience 
              allExperiences={allExperiences}
              allCourses={allCourses}
              allEducations={allEducations}
            />
            <Testimonial reviews={reviews}/>
            <BlogSection blogCategories={blogCategories} />
            <Contact/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

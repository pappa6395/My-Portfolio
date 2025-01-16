
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
import BlogSection from "@/components/blogSection";
import Contact from "@/components/contact";
import FixedSidebar from "@/components/fixed-sidebar";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";
import ProfileCard from "@/components/ProfileCard";
import Projectz from "@/components/projectz";
import ServicesListing from "@/components/ServicesListing";
import TechnicalSkills from "@/components/technical-skills";
import { Testimonial } from "@/components/testimonial";
import VideoBackground from "@/components/video-background";
import WorkExperience from "@/components/WorkExperience";


export default async function Home() {

  const siteSettings = await getSettings() || null;
  const projectCategories = await getProjectsByCategories() || [];
  const allSkills = await getSkills() || [];
  const allTools = await getTools() || [];
  const allServices = await getServices() || [];
  const allExperiences = await getExperiences() || [];
  const allCourses = await getCourses() || [];
  const allEducations = await getEducations() || [];
  const reviews = (await getReviews())?.data || [];
  const blogCategories = await getBlogsByCategories() || [];
  

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

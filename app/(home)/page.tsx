
import { getExperiences } from "@/actions/experiences";
import { getProjectsByCategories } from "@/actions/projects";
import { getReviews } from "@/actions/reviews";
import { getServices } from "@/actions/services";
import { getSettings } from "@/actions/settings";
import { getSkills } from "@/actions/skills";
import AboutSection from "@/components/about-section";
import Blogs from "@/components/blogs";
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
  const allServices = await getServices() || [];
  const allExperiences = await getExperiences() || [];
  const reviews = (await getReviews())?.data || [];

  return (
    <div>
      <VideoBackground />
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="py-4">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-0 py-20 md:py-8">
          <div className="w-full">
            <FixedSidebar siteSettings={siteSettings} />
          </div>
          <div className="mx-2 space-y-4 -mt-4">
            <ProfileCard />
            <AboutSection siteSettings={siteSettings} />
            <Projectz projectCategories={projectCategories} />
            <TechnicalSkills allSkills={allSkills}/>
            <ServicesListing allServices={allServices}/>
            {/* <Pricing /> */}
            <WorkExperience allExperiences={allExperiences}/>
            <Testimonial reviews={reviews}/>
            <Blogs />
            <Contact/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

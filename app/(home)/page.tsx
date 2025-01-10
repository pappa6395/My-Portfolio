
import AboutSection from "@/components/about-section";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import FixedSidebar from "@/components/fixed-sidebar";
import Footer from "@/components/footer";
import GeneralSkills from "@/components/general-skills";
import MobileNav from "@/components/mobileNav";
import Pricing from "@/components/pricing";
import ProfileCard from "@/components/ProfileCard";
import Projects from "@/components/projects";
import ServicesListing from "@/components/ServicesListing";
import TechnicalSkills from "@/components/technical-skills";
import { Testimonial } from "@/components/testimonial";
import ToolsStack from "@/components/tool-stack";

import VideoBackground from "@/components/video-background";
import WorkExperience from "@/components/WorkExperience";




export default function Home() {


  return (
    <div>
      <VideoBackground />
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="py-4">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-0 py-20 md:py-8">
          <div className="w-full">
            <FixedSidebar />
          </div>
          <div className="mx-2 space-y-4 -mt-4">
            <ProfileCard />
            <AboutSection />
            <TechnicalSkills/>
            <ToolsStack />
            <GeneralSkills />
            <ServicesListing />
            <Pricing />
            <Projects />
            <WorkExperience />
            <Testimonial />
            <Blogs />
            <Contact/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

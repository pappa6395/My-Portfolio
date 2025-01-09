
import AboutSection from "@/components/about-section";
import FixedSidebar from "@/components/fixed-sidebar";
import GeneralSkills from "@/components/general-skills";
import Pricing from "@/components/pricing";
import Projects from "@/components/projects";
import ServicesListing from "@/components/ServicesListing";
import TechnicalSkills from "@/components/technical-skills";
import ToolsStack from "@/components/tool-stack";

import VideoBackground from "@/components/video-background";
import WorkExperience from "@/components/WorkExperience";




export default function Home() {


  return (
    <div>
      <VideoBackground />
      <div className="container py-4">
        <div className="grid grid-cols-12">
          <div className="grid col-span-full lg:col-span-4">
            <FixedSidebar />
          </div>
          <div className="grid gap-6 col-span-full lg:col-span-8">
            <AboutSection />
            <TechnicalSkills/>
            <ToolsStack />
            <GeneralSkills />
            <ServicesListing />
            <Pricing />
            <Projects />
            <WorkExperience />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

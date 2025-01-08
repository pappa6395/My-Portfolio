
import AboutSection from "@/components/about-section";
import FixedSidebar from "@/components/fixed-sidebar";
import TechnicalSkills from "@/components/technical-skills";
import ToolsStack from "@/components/tool-stack";

import VideoBackground from "@/components/video-background";




export default function Home() {


  return (
    <div>
      <VideoBackground />
      <div className="container py-4">
        <div className="grid grid-cols-12">
          <div className="grid col-span-4">
            <FixedSidebar />
          </div>
          <div className="grid gap-6 col-span-8">
            <AboutSection />
            <TechnicalSkills/>
            <ToolsStack />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

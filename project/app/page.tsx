import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCards";
import UpcomingWedinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/ [0.02]">
        <HeroSection />
        <FeaturedCourses/>
        <WhyChooseUs />
        <TestimonialCard />
        <UpcomingWedinars />
        <Instructors />
      </main>
    </div>  
  );
}

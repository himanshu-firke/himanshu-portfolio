import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import EducationSection from "@/components/Education";
import CertificatesSection from "@/components/Certificates";
import LeetCodeSection from "@/components/LeetCode";
import ViewsSection from "@/components/Views";
import ContactSection from "@/components/Contact";

export default function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Skills />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <LeetCodeSection />
      <ViewsSection />
      <ContactSection />
    </main>
  );
}

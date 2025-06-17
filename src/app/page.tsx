import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectManagementSection from '@/components/ProjectManagementSection'
import CoreBusinessSection from '@/components/CoreBusinessSection'
import FeaturesSection from '@/components/FeaturesSection'
import PlanningSection from '@/components/PlanningSection'
import SimplicitySection from '@/components/SimplicitySection'
import CollaborationSection from '@/components/CollaborationSection'
import CTASection from '@/components/CTASection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CustomerTestimonialsSection from '@/components/CustomerTestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProjectManagementSection />
      <CoreBusinessSection />
      <FeaturesSection />
      <PlanningSection />
      <SimplicitySection />
      <CollaborationSection />
      <CTASection />
      <TestimonialsSection />
      <CustomerTestimonialsSection />
      <Footer />
    </main>
  )
}

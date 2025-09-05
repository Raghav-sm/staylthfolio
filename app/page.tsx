import IntroSection from "@/components/IntroSection"
import RecentPosts from "@/components/recent-posts"
import RecentProjects from '@/components/recent-projects'
import TechStack from "@/components/TechStack"
import SectionSeparator from '@/components/ui/selection-seperator'
export default function Home() {
  return (
    <section className='pt-24 pb-16 md:pt-32'>
      <IntroSection />
      <TechStack />
      <RecentProjects />
      <RecentPosts />
    </section>
  )
}

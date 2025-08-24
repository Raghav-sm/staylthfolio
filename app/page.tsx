import IntroSection from "@/components/IntroSection"
import RecentPosts from "@/components/recent-posts"
export default function Home() {
  return (
    <section className='pt-24 pb-16 md:pt-32'>
        <IntroSection />
        <RecentPosts/>
    </section>
  )
}

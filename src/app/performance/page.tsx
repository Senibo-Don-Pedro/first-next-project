import performanceImg from '/public/performance.jpg'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt='performance image'
        title='Performance Page'
      />
    </div>
  )
}

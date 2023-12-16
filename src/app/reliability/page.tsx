import reliabilityImg from '/public/reliability.jpg'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt='reliability image'
        title='reliability Page'
      />
    </div>
  )
}

import scaleImg from '/public/scale.jpg'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <div>
      <Hero imgData={scaleImg} imgAlt='scale image' title='scale Page' />
    </div>
  )
}

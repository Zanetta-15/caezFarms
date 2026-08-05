import { useEffect, useState } from 'react'
import solarImage from '../../images/solar.jpeg'
import aerialImage from '../../images/farm aerial shot.jpeg'
import coconutSproutImage from '../../images/coconut sprout 1.jpeg'
import teamImage from '../../images/Ed and farm team 1.jpeg'

const images = [
  {
    src: solarImage,
    alt: 'Solar panels at CAEZ Farms',
    caption: 'Solar power supports sustainable farm operations.'
  },
  {
    src: aerialImage,
    alt: 'Aerial view of CAEZ Farms',
    caption: 'Aerial view of the CAEZ Farms landscape in Ghana.'
  },
  {
    src: coconutSproutImage,
    alt: 'Coconut sprout at CAEZ Farms',
    caption: 'Elite hybrid coconut cultivation thriving in fertile soil.'
  },
  {
    src: teamImage,
    alt: 'CAEZ Farms team on site',
    caption: 'Local team members working together in the field.'
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-6 text-center">
      <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white/95 shadow-soft">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="h-[420px] w-full object-cover sm:h-[360px] md:h-[420px]"
        />
      </div>

      <div className="rounded-[1.75rem] bg-white/90 px-6 py-5 text-sm text-forestDark/80 shadow-soft">
        {images[currentIndex].caption}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous image"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/15 bg-white text-forestDark transition duration-300 hover:bg-forest/5"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next image"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/15 bg-white text-forestDark transition duration-300 hover:bg-forest/5"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`View image ${index + 1}`}
            className={
              index === currentIndex
                ? 'h-3.5 w-3.5 rounded-full bg-forest'
                : 'h-3.5 w-3.5 rounded-full bg-forest/30'
            }
          />
        ))}
      </div>
    </div>
  )
}

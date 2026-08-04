import { useEffect, useRef, useState } from 'react'
import type { Media } from '../types/item'
import './MediaCarousel.css'

interface MediaCarouselProps {
  media: Media[]
  title: string
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function MediaCarousel({ media, title }: MediaCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const hasMultiple = media.length > 1

  useEffect(() => {
    const track = trackRef.current
    if (!track || !hasMultiple) return

    const observer = new IntersectionObserver(
      (entries) => {
        // O slide mais visível no viewport do container vira o ativo.
        const mostVisible = entries.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        )
        if (mostVisible.intersectionRatio > 0.5) {
          const index = slideRefs.current.findIndex((el) => el === mostVisible.target)
          if (index !== -1) setActiveIndex(index)
        }
      },
      { root: track, threshold: [0.5, 0.75, 1] }
    )

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide)
    })

    return () => observer.disconnect()
  }, [hasMultiple, media.length])

  function scrollToIndex(index: number) {
    const track = trackRef.current
    const target = slideRefs.current[index]
    if (!track || !target) return
    // scrollIntoView arrastaria a pagina inteira junto, nao so o carrossel.
    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  function goPrev() {
    scrollToIndex(Math.max(0, activeIndex - 1))
  }

  function goNext() {
    scrollToIndex(Math.min(media.length - 1, activeIndex + 1))
  }

  return (
    <div className="media-carousel">
      <div
        className="media-carousel__track"
        ref={trackRef}
        tabIndex={0}
        aria-label={`Fotos de ${title}`}
      >
        {/* O indice e a chave porque varios itens repetem o mesmo
            placeholder.svg e a ordem da midia e fixa. */}
        {media.map((item, index) => (
          <div
            className="media-carousel__slide"
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el
            }}
          >
            {item.type === 'image' ? (
              <img
                className="media-carousel__media"
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <video
                className="media-carousel__media"
                src={item.src}
                poster={item.poster}
                aria-label={item.alt}
                controls
                playsInline
                muted
                preload="none"
              />
            )}
          </div>
        ))}
      </div>

      {hasMultiple && (
        <>
          <div className="media-carousel__dots" aria-hidden="true">
            {media.map((_, index) => (
              <span
                key={index}
                className={
                  index === activeIndex
                    ? 'media-carousel__dot media-carousel__dot--active'
                    : 'media-carousel__dot'
                }
              />
            ))}
          </div>

          <button
            type="button"
            className="media-carousel__arrow media-carousel__arrow--prev"
            onClick={goPrev}
            aria-label="Foto anterior"
            disabled={activeIndex === 0}
          >
            ‹
          </button>
          <button
            type="button"
            className="media-carousel__arrow media-carousel__arrow--next"
            onClick={goNext}
            aria-label="Próxima foto"
            disabled={activeIndex === media.length - 1}
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}

export default MediaCarousel

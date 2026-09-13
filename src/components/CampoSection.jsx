import React, { useState, useEffect, useRef } from 'react'
import { HOYOS_CAMPO } from '../data/content'

function HoleVideoItem({ hoyo, isVisible }) {
  const [shouldLoad, setShouldLoad] = useState(isVisible)
  const itemRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      setShouldLoad(true)
      return
    }
    if ('IntersectionObserver' in window && itemRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        },
        { rootMargin: '300px' }
      )
      observer.observe(itemRef.current)
      return () => observer.disconnect()
    } else {
      setShouldLoad(true)
    }
  }, [isVisible])

  return (
    <article
      id={`hoyo-${hoyo.numero}`}
      className="campo-video-card"
      ref={itemRef}
    >
      <div className="campo-video-card__header">
        <div className="campo-video-card__info">
          <span className="campo-video-card__num">Hoyo {hoyo.numero}</span>
          <span className="campo-video-card__side">{hoyo.etiqueta}</span>
        </div>
        <span className="campo-video-card__dur">⏱ {hoyo.duracion} min</span>
      </div>

      <div className="campo-video-card__media">
        {shouldLoad ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${hoyo.youtubeId}?rel=0`}
            title={`${hoyo.titulo} - Fincas de San Vicente Golf`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="campo-video-iframe"
          />
        ) : (
          <div className="campo-video-placeholder">
            <img
              src={`https://img.youtube.com/vi/${hoyo.youtubeId}/hqdefault.jpg`}
              alt={hoyo.titulo}
              className="campo-placeholder-thumb"
              loading="lazy"
            />
            <div className="campo-placeholder-play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default function CampoSection({ onBackToHome }) {
  // Load initially the first 2 visible videos, then progressively sequentially load others
  const [loadedCount, setLoadedCount] = useState(2)

  useEffect(() => {
    if (loadedCount >= HOYOS_CAMPO.length) return
    const timer = setTimeout(() => {
      setLoadedCount(prev => Math.min(prev + 1, HOYOS_CAMPO.length))
    }, 250)
    return () => clearTimeout(timer)
  }, [loadedCount])

  return (
    <div className="campo-page">
      {/* ─── Minimal Header ─── */}
      <header className="campo-header">
        <div className="campo-header__inner">
          <button onClick={onBackToHome} className="campo-back-btn" aria-label="Volver al inicio">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Volver al inicio</span>
          </button>
          <h1 className="campo-header__title">
            Conocé Nuestro <em>Campo</em>
          </h1>
        </div>
      </header>

      {/* ─── 18 Holes Direct Video Embeddings with Sequential Loading ─── */}
      <main className="campo-videos-container">
        <div className="campo-videos-grid">
          {HOYOS_CAMPO.map((hoyo, index) => (
            <HoleVideoItem
              key={hoyo.numero}
              hoyo={hoyo}
              isVisible={index < loadedCount}
            />
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="campo-bottom-cta">
          <button onClick={onBackToHome} className="btn-back-home-refined">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Volver a la Página Principal</span>
          </button>
        </div>
      </main>
    </div>
  )
}

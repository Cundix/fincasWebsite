import React, { useState, useRef, useEffect } from 'react'
import { HOYOS_CAMPO, YOUTUBE_CANAL_URL } from '../data/content'

export default function CampoSection({ onBackToHome }) {
  const [filter, setFilter] = useState('todos') // 'todos' | 'ida' | 'vuelta'
  const [activeHole, setActiveHole] = useState(HOYOS_CAMPO[0])
  const playerSectionRef = useRef(null)
  const holeBarRef = useRef(null)

  const filteredHoyos = filter === 'todos'
    ? HOYOS_CAMPO
    : HOYOS_CAMPO.filter(h => h.lado === filter)

  const handleSelectHole = (hoyo, shouldScroll = true) => {
    setActiveHole(hoyo)
    if (shouldScroll && window.innerWidth <= 768) {
      playerSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePrev = () => {
    const currentIndex = HOYOS_CAMPO.findIndex(h => h.numero === activeHole.numero)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : HOYOS_CAMPO.length - 1
    setActiveHole(HOYOS_CAMPO[prevIndex])
  }

  const handleNext = () => {
    const currentIndex = HOYOS_CAMPO.findIndex(h => h.numero === activeHole.numero)
    const nextIndex = currentIndex < HOYOS_CAMPO.length - 1 ? currentIndex + 1 : 0
    setActiveHole(HOYOS_CAMPO[nextIndex])
  }

  // Scroll active pill into view in the quick-bar
  useEffect(() => {
    const activePill = holeBarRef.current?.querySelector(`[data-hole="${activeHole.numero}"]`)
    if (activePill && holeBarRef.current) {
      const barRect = holeBarRef.current.getBoundingClientRect()
      const pillRect = activePill.getBoundingClientRect()
      if (pillRect.left < barRect.left || pillRect.right > barRect.right) {
        activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [activeHole.numero])

  return (
    <div className="campo-page">
      {/* ─── Top Sub-Nav ─── */}
      <div className="campo-subnav">
        <div className="campo-subnav__inner">
          <button onClick={onBackToHome} className="campo-back-btn" aria-label="Volver al inicio">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Volver al inicio</span>
          </button>
          <div className="campo-subnav__meta">
            <span>18 Hoyos</span>
            <span className="campo-subnav__dot">•</span>
            <span>Par 71</span>
            <span className="campo-subnav__dot">•</span>
            <span>6.474 Yardas</span>
            <span className="campo-subnav__dot">•</span>
            <span>Emilio N. Serra</span>
          </div>
        </div>
      </div>

      {/* ─── Hero Header ─── */}
      <header className="campo-hero">
        <div className="campo-hero__container">
          <div className="campo-hero__badge">Recorrido Aéreo Oficial · Dron HD</div>
          <h1 className="campo-hero__title">
            Conocé Nuestro <em>Campo</em>
          </h1>
          <p className="campo-hero__desc">
            Diseño estratégico de 18 hoyos creado por el maestro Emilio N. Serra. Explorá cada hoyo en videos oficiales de alta definición filmados en sobrevuelo de dron (menos de 1 minuto).
          </p>
          <div className="campo-hero__actions">
            <a
              href={YOUTUBE_CANAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="campo-yt-pill"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Canal Oficial de YouTube</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─── Quick Hole Selector Bar (1 to 18) ─── */}
      <div className="campo-hole-bar-wrap">
        <div className="campo-hole-bar-container">
          <div className="campo-hole-bar-label">Elegir hoyo:</div>
          <div className="campo-hole-bar" ref={holeBarRef}>
            {HOYOS_CAMPO.map((hoyo) => {
              const isActive = hoyo.numero === activeHole.numero
              return (
                <button
                  key={hoyo.numero}
                  data-hole={hoyo.numero}
                  className={`campo-hole-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleSelectHole(hoyo)}
                  aria-label={`Ver Hoyo ${hoyo.numero}`}
                >
                  <span className="campo-hole-pill__prefix">H</span>
                  <span className="campo-hole-pill__num">{hoyo.numero}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ─── Featured Video Theater (Card in Desktop, Full-Width in Mobile) ─── */}
      <section className="campo-player-section" ref={playerSectionRef}>
        <div className="campo-player-wrapper">
          <div className="campo-player-card">
            {/* Video Player */}
            <div className="campo-player-media">
              <iframe
                key={activeHole.youtubeId}
                src={`https://www.youtube.com/embed/${activeHole.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${activeHole.titulo} - Fincas de San Vicente Golf`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="campo-player-iframe"
              />
            </div>

            {/* Video Controls & Information */}
            <div className="campo-player-details">
              <div className="campo-player-header-row">
                <div className="campo-player-badges">
                  <span className="campo-badge-tag campo-badge-tag--hole">Hoyo {activeHole.numero}</span>
                  <span className="campo-badge-tag campo-badge-tag--side">{activeHole.etiqueta}</span>
                  <span className="campo-badge-tag campo-badge-tag--dur">⏱ {activeHole.duracion} min</span>
                </div>
                <div className="campo-player-nav-desktop">
                  <button onClick={handlePrev} className="btn-hole-step" aria-label="Hoyo anterior">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <span>Hoyo anterior</span>
                  </button>
                  <button onClick={handleNext} className="btn-hole-step" aria-label="Hoyo siguiente">
                    <span>Hoyo siguiente</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <h2 className="campo-player-headline">
                {activeHole.titulo} · Fincas de San Vicente Golf
              </h2>
              <p className="campo-player-caption">{activeHole.descripcion}</p>

              {/* Mobile Hole Navigation Controls */}
              <div className="campo-player-nav-mobile">
                <button onClick={handlePrev} className="btn-hole-step btn-hole-step--mobile" aria-label="Hoyo anterior">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span>Anterior</span>
                </button>
                <span className="campo-mobile-current">Hoyo {activeHole.numero} de 18</span>
                <button onClick={handleNext} className="btn-hole-step btn-hole-step--mobile" aria-label="Hoyo siguiente">
                  <span>Siguiente</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="campo-player-footer-links">
                <a
                  href={`https://www.youtube.com/watch?v=${activeHole.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="campo-player-yt-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Abrir este video en YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Full Course Gallery Grid ─── */}
      <section className="campo-gallery-section">
        <div className="campo-gallery-container">
          <div className="campo-gallery-header">
            <div>
              <span className="section-tag">Colección Completa</span>
              <h3 className="campo-gallery-title">Recorrido Hoyo por Hoyo</h3>
              <p className="campo-gallery-sub">Seleccioná cualquiera de los 18 hoyos para reproducir su sobrevuelo aéreo</p>
            </div>
            <div className="campo-gallery-filters">
              <button
                className={`campo-filter-pill ${filter === 'todos' ? 'is-active' : ''}`}
                onClick={() => setFilter('todos')}
              >
                Todos (1-18)
              </button>
              <button
                className={`campo-filter-pill ${filter === 'ida' ? 'is-active' : ''}`}
                onClick={() => setFilter('ida')}
              >
                Ida (1 a 9)
              </button>
              <button
                className={`campo-filter-pill ${filter === 'vuelta' ? 'is-active' : ''}`}
                onClick={() => setFilter('vuelta')}
              >
                Vuelta (10 a 18)
              </button>
            </div>
          </div>

          <div className="campo-gallery-grid">
            {filteredHoyos.map((hoyo) => {
              const isSelected = hoyo.numero === activeHole.numero
              return (
                <article
                  key={hoyo.numero}
                  className={`campo-card-item ${isSelected ? 'is-playing' : ''}`}
                  onClick={() => handleSelectHole(hoyo)}
                >
                  <div className="campo-card-item__media">
                    <img
                      src={`https://img.youtube.com/vi/${hoyo.youtubeId}/hqdefault.jpg`}
                      alt={hoyo.titulo}
                      className="campo-card-item__img"
                      loading="lazy"
                    />
                    <div className="campo-card-item__overlay">
                      <div className="campo-card-item__play-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="campo-card-item__number">Hoyo {hoyo.numero}</span>
                    <span className="campo-card-item__duration">{hoyo.duracion}</span>
                  </div>
                  <div className="campo-card-item__info">
                    <span className="campo-card-item__side">{hoyo.etiqueta}</span>
                    <h4 className="campo-card-item__name">{hoyo.titulo}</h4>
                    <div className="campo-card-item__status">
                      {isSelected ? (
                        <span className="status-playing">● Reproduciendo en visor</span>
                      ) : (
                        <span className="status-play">Ver recorrido →</span>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Return Home Footer CTA */}
          <div className="campo-footer-cta">
            <button onClick={onBackToHome} className="btn-back-home-refined">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Volver a la Página Principal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

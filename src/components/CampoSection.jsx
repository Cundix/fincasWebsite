import React, { useState, useRef } from 'react'
import { HOYOS_CAMPO, YOUTUBE_CANAL_URL } from '../data/content'

export default function CampoSection({ onBackToHome }) {
  const [filter, setFilter] = useState('todos') // 'todos' | 'ida' | 'vuelta'
  const [activeHole, setActiveHole] = useState(HOYOS_CAMPO[0])
  const playerRef = useRef(null)

  const filteredHoyos = filter === 'todos'
    ? HOYOS_CAMPO
    : HOYOS_CAMPO.filter(h => h.lado === filter)

  const handleSelectHole = (hoyo) => {
    setActiveHole(hoyo)
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

  return (
    <div className="campo-page">
      {/* ─── Breadcrumb & Top Bar ─── */}
      <div className="campo-top-bar">
        <div className="campo-container">
          <button onClick={onBackToHome} className="btn-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Volver al inicio</span>
          </button>
          <div className="campo-top-badge">
            18 Hoyos · Par 71 · 6.474 Yardas
          </div>
        </div>
      </div>

      {/* ─── Header ─── */}
      <header className="campo-header">
        <div className="campo-container">
          <span className="section-tag">Recorrido Aéreo Oficial</span>
          <h1 className="campo-title">Conocé Nuestro <em>Campo</em></h1>
          <p className="campo-intro">
            Diseñado por el maestro <strong>Emilio N. Serra</strong>. Recorré hoyo por hoyo en videos oficiales de alta definición filmados con dron. Cada video dura menos de un minuto para que aprecies en detalle las líneas de juego, fairways, bunkers y espejos de agua.
          </p>
          <div className="campo-header-links">
            <a
              href={YOUTUBE_CANAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube-channel"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Canal Oficial de YouTube (@fincassanvicentegolf351)</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─── Featured Video Player (Theater Mode) ─── */}
      <section className="campo-player-section" ref={playerRef}>
        <div className="campo-container">
          <div className="campo-player-card">
            <div className="campo-player-card__video-wrapper">
              <iframe
                key={activeHole.youtubeId}
                src={`https://www.youtube.com/embed/${activeHole.youtubeId}?autoplay=1&rel=0`}
                title={`${activeHole.titulo} - Fincas de San Vicente Golf`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="campo-player-iframe"
              />
            </div>
            <div className="campo-player-card__info">
              <div className="campo-player-meta">
                <span className="campo-pill campo-pill--number">Hoyo {activeHole.numero}</span>
                <span className="campo-pill campo-pill--side">{activeHole.etiqueta}</span>
                <span className="campo-pill campo-pill--dur">⏱️ {activeHole.duracion} min</span>
              </div>
              <h2 className="campo-player-title">{activeHole.titulo} de Fincas de San Vicente Golf</h2>
              <p className="campo-player-desc">{activeHole.descripcion}</p>

              <div className="campo-player-actions">
                <div className="campo-nav-buttons">
                  <button onClick={handlePrev} className="btn-campo-nav" aria-label="Hoyo anterior">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <span>Hoyo Anterior</span>
                  </button>
                  <button onClick={handleNext} className="btn-campo-nav" aria-label="Hoyo siguiente">
                    <span>Hoyo Siguiente</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${activeHole.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-campo-yt"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Abrir en YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Grid of 18 Holes ─── */}
      <section className="campo-grid-section">
        <div className="campo-container">
          <div className="campo-grid-header">
            <div>
              <h3 className="campo-grid-title">Explorá los 18 Hoyos</h3>
              <p className="campo-grid-subtitle">Hacé clic en cualquier hoyo para cargarlo en el reproductor principal</p>
            </div>
            {/* Filtros Ida / Vuelta */}
            <div className="campo-filter-tabs">
              <button
                className={`campo-filter-btn ${filter === 'todos' ? 'is-active' : ''}`}
                onClick={() => setFilter('todos')}
              >
                Todos (1-18)
              </button>
              <button
                className={`campo-filter-btn ${filter === 'ida' ? 'is-active' : ''}`}
                onClick={() => setFilter('ida')}
              >
                Ida (Hoyos 1-9)
              </button>
              <button
                className={`campo-filter-btn ${filter === 'vuelta' ? 'is-active' : ''}`}
                onClick={() => setFilter('vuelta')}
              >
                Vuelta (Hoyos 10-18)
              </button>
            </div>
          </div>

          <div className="campo-grid">
            {filteredHoyos.map((hoyo) => {
              const isCurrent = hoyo.numero === activeHole.numero
              return (
                <article
                  key={hoyo.numero}
                  className={`campo-card ${isCurrent ? 'is-selected' : ''}`}
                  onClick={() => handleSelectHole(hoyo)}
                >
                  <div className="campo-card__media">
                    <img
                      src={`https://img.youtube.com/vi/${hoyo.youtubeId}/hqdefault.jpg`}
                      alt={hoyo.titulo}
                      className="campo-card__thumb"
                      loading="lazy"
                    />
                    <div className="campo-card__overlay">
                      <div className="campo-card__play-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="campo-card__badge-num">Hoyo {hoyo.numero}</span>
                    <span className="campo-card__badge-dur">{hoyo.duracion}</span>
                  </div>
                  <div className="campo-card__content">
                    <div className="campo-card__tag">{hoyo.etiqueta}</div>
                    <h4 className="campo-card__title">{hoyo.titulo}</h4>
                    <p className="campo-card__desc">{hoyo.descripcion}</p>
                    <div className="campo-card__footer">
                      <span className="campo-card__action">
                        {isCurrent ? '▶ Reproduciendo' : 'Ver video del hoyo'}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* ─── Bottom CTA ─── */}
          <div className="campo-bottom-cta">
            <button onClick={onBackToHome} className="btn-back-home-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Volver a la Página Principal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

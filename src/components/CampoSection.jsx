import React, { useState } from 'react'
import { HOYOS_CAMPO } from '../data/content'

export default function CampoSection({ onBackToHome }) {
  const [filter, setFilter] = useState('todos') // 'todos' | 'ida' | 'vuelta'

  const filteredHoyos = filter === 'todos'
    ? HOYOS_CAMPO
    : HOYOS_CAMPO.filter(h => h.lado === filter)

  const scrollToHole = (numero) => {
    const el = document.getElementById(`hoyo-${numero}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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

        {/* ─── Quick Jump Pills Bar ─── */}
        <div className="campo-nav-bar">
          <div className="campo-nav-filters">
            <button
              className={`campo-filter-chip ${filter === 'todos' ? 'is-active' : ''}`}
              onClick={() => setFilter('todos')}
            >
              Todos (1-18)
            </button>
            <button
              className={`campo-filter-chip ${filter === 'ida' ? 'is-active' : ''}`}
              onClick={() => setFilter('ida')}
            >
              Ida (1-9)
            </button>
            <button
              className={`campo-filter-chip ${filter === 'vuelta' ? 'is-active' : ''}`}
              onClick={() => setFilter('vuelta')}
            >
              Vuelta (10-18)
            </button>
          </div>

          <div className="campo-quick-pills">
            {filteredHoyos.map((hoyo) => (
              <button
                key={hoyo.numero}
                className="campo-quick-pill"
                onClick={() => scrollToHole(hoyo.numero)}
                aria-label={`Ir a Hoyo ${hoyo.numero}`}
              >
                H{hoyo.numero}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ─── 18 Holes Direct Video Embeddings ─── */}
      <main className="campo-videos-container">
        <div className="campo-videos-grid">
          {filteredHoyos.map((hoyo) => (
            <article
              key={hoyo.numero}
              id={`hoyo-${hoyo.numero}`}
              className="campo-video-card"
            >
              <div className="campo-video-card__header">
                <div className="campo-video-card__info">
                  <span className="campo-video-card__num">Hoyo {hoyo.numero}</span>
                  <span className="campo-video-card__side">{hoyo.etiqueta}</span>
                </div>
                <span className="campo-video-card__dur">⏱ {hoyo.duracion} min</span>
              </div>

              <div className="campo-video-card__media">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${hoyo.youtubeId}?rel=0`}
                  title={`${hoyo.titulo} - Fincas de San Vicente Golf`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="campo-video-iframe"
                />
              </div>
            </article>
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

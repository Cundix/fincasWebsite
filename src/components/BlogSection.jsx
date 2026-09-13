import React, { useState } from 'react'
import { BLOG_POSTS } from '../data/content'

export default function BlogSection({ onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [activeArticle, setActiveArticle] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['Todas', 'Cultura de Golf', 'Estilo de Vida', 'Infraestructura']

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'Todas' || post.categoria === selectedCategory
    const matchesSearch = searchQuery === '' ||
      post.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.extracto.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  // ─── Article Reader View ───
  if (activeArticle) {
    return (
      <div className="blog-reader-view">
        <div className="blog-reader-container">
          <button
            className="blog-back-btn"
            onClick={() => {
              setActiveArticle(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Volver a las Crónicas y Artículos</span>
          </button>

          <header className="blog-reader-header">
            <div className="blog-reader-meta">
              <span className="blog-tag">{activeArticle.categoria}</span>
              <span className="blog-dot">·</span>
              <span className="blog-date">{activeArticle.fecha}</span>
              <span className="blog-dot">·</span>
              <span className="blog-time">{activeArticle.tiempoLectura}</span>
            </div>
            <h1 className="blog-reader-title">{activeArticle.titulo}</h1>
            <p className="blog-reader-subtitulo">{activeArticle.subtitulo}</p>
            <div className="blog-reader-author">
              <div className="blog-author-avatar">
                <img src="/images/FSV_Golf_Logo_verde_sombra.png" alt="FSV Logo" />
              </div>
              <div>
                <strong className="blog-author-name">{activeArticle.autor}</strong>
                <span className="blog-author-role">Fincas de San Vicente Golf</span>
              </div>
            </div>
          </header>

          <div className="blog-reader-cover">
            <img src={activeArticle.portada} alt={activeArticle.titulo} />
          </div>

          <div className="blog-reader-content">
            {activeArticle.contenido.map((paragraph, idx) => (
              <p key={idx} className="blog-paragraph">{paragraph}</p>
            ))}
          </div>

          <footer className="blog-reader-footer">
            <div className="blog-reader-share">
              <span>Compartir este artículo</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${activeArticle.titulo} - Fincas de San Vicente Golf`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
              >
                WhatsApp
              </a>
            </div>
            <button
              className="blog-back-btn blog-back-btn--bottom"
              onClick={() => {
                setActiveArticle(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              ← Volver al listado de artículos
            </button>
          </footer>
        </div>
      </div>
    )
  }

  // ─── Blog Listing View ───
  return (
    <div className="blog-view">
      <div className="blog-container">
        <div className="blog-top-bar">
          <button className="blog-home-link" onClick={onBackToHome}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Volver a la Página Principal</span>
          </button>
          <span className="blog-edition-badge">Edición Digital FSV</span>
        </div>

        <header className="blog-hero">
          <span className="section-tag">Crónicas &amp; Artículos</span>
          <h1 className="blog-title">El Cuaderno de Campo</h1>
          <p className="blog-subtitle">
            Artículos editoriales, análisis de recorrido, agronomía del club y relatos de la vida en comunidad en Fincas de San Vicente Golf.
          </p>

          <div className="blog-controls">
            <div className="blog-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Buscar artículos por tema o palabra clave..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>

            <div className="blog-category-pills">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`blog-cat-pill ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="blog-card"
              onClick={() => {
                setActiveArticle(post)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="blog-card__media">
                <img src={post.portada} alt={post.titulo} className="blog-card__img" />
                <span className="blog-card__badge">{post.categoria}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span>{post.fecha}</span>
                  <span>·</span>
                  <span>{post.tiempoLectura}</span>
                </div>
                <h2 className="blog-card__title">{post.titulo}</h2>
                <p className="blog-card__excerpt">{post.extracto}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__author">{post.autor}</span>
                  <span className="blog-card__read">
                    Leer nota
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="blog-empty">
            <p>No se encontraron artículos para los criterios de búsqueda.</p>
            <button
              className="btn-cuero"
              onClick={() => { setSelectedCategory('Todas'); setSearchQuery(''); }}
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

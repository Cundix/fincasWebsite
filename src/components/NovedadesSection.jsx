import React, { useEffect } from 'react'
import { INSTAGRAM_CONFIG } from '../data/content'

export default function NovedadesSection() {
  const { usuario, perfilUrl, posts, widgetId } = INSTAGRAM_CONFIG

  // Filtrar publicaciones válidas que tengan URL exacta (/p/ o /reel/)
  const validPosts = (posts || []).filter(
    (p) => p.url && (p.url.includes('/p/') || p.url.includes('/reel/')) && !p.url.includes('C_sample')
  )

  useEffect(() => {
    // Si hay publicaciones válidas con embed nativo de Instagram
    if (validPosts.length > 0) {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      } else {
        const existingScript = document.getElementById('instagram-embed-script')
        if (!existingScript) {
          const script = document.createElement('script')
          script.id = 'instagram-embed-script'
          script.src = 'https://www.instagram.com/embed.js'
          script.async = true
          script.onload = () => {
            window.instgrm?.Embeds?.process()
          }
          document.body.appendChild(script)
        }
      }
    }

    // Si se utiliza un widget externo automático (ej. Elfsight)
    if (widgetId) {
      const widgetScriptId = 'elfsight-platform-script'
      if (!document.getElementById(widgetScriptId)) {
        const script = document.createElement('script')
        script.id = widgetScriptId
        script.src = 'https://static.elfsight.com/platform/platform.js'
        script.async = true
        document.body.appendChild(script)
      }
    }
  }, [validPosts.length, widgetId])

  return (
    <section id="novedades" className="novedades-section reveal">
      <div className="novedades-container">
        {/* Encabezado Institucional */}
        <div className="novedades-header">
          <div className="novedades-header__text">
            <span className="section-tag">Canal Oficial en Vivo</span>
            <h2 className="section-title">Instagram &amp; <em>Comunidad</em></h2>
            <p className="novedades-intro">
              Contenido oficial en directo desde nuestra cuenta. Cada enlace te lleva al posteo exacto y original publicado por el club.
            </p>
          </div>
          <div className="novedades-header__cta">
            <a
              href={perfilUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>{usuario}</span>
            </a>
          </div>
        </div>

        {/* Caso 1: Widget automático configurado */}
        {widgetId && (
          <div className="novedades-widget-container">
            <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy></div>
          </div>
        )}

        {/* Caso 2: Posts oficiales embebidos mediante script oficial de Meta */}
        {!widgetId && validPosts.length > 0 && (
          <div className="novedades-embed-grid">
            {validPosts.map((post, idx) => (
              <div key={post.id || idx} className="novedades-embed-card">
                {post.etiqueta && (
                  <div className="novedades-embed-card__tag">
                    {post.etiqueta}
                  </div>
                )}
                <div className="novedades-embed-wrapper">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={post.url}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: '0',
                      borderRadius: '8px',
                      margin: '0 auto',
                      maxWidth: '540px',
                      minWidth: '300px',
                      padding: '0',
                      width: '100%',
                    }}
                  >
                    <div style={{ padding: '16px', textAlign: 'center' }}>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="novedades-fallback-link"
                      >
                        Ver publicación exacta en Instagram
                      </a>
                    </div>
                  </blockquote>
                </div>
                <div className="novedades-embed-card__footer">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="novedad-card__readmore"
                  >
                    <span>Abrir este contenido en Instagram</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Caso 3: Estado inicial sin URLs añadidas aún (100% verídico, sin contenido simulado) */}
        {!widgetId && validPosts.length === 0 && (
          <div className="novedades-official-banner">
            <div className="novedades-official-banner__inner">
              <div className="novedades-official-banner__icon">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="novedades-official-banner__content">
                <span className="novedades-official-banner__tag">Perfil Verificado</span>
                <h3 className="novedades-official-banner__title">
                  Seguí el día a día oficial de Fincas en Instagram
                </h3>
                <p className="novedades-official-banner__text">
                  Mirá en vivo los torneos, los estados de cancha, las obras y la vida social en nuestra cuenta oficial <strong>{usuario}</strong>.
                </p>
                <div className="novedades-official-banner__actions">
                  <a
                    href={perfilUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-instagram-wide"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Ir a {usuario} en Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botón inferior al perfil oficial */}
        <div className="novedades-bottom-cta">
          <a
            href={perfilUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram-wide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Ver perfil completo en {usuario}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

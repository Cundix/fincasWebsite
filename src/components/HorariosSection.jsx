import React from 'react'
import { HORARIOS_DATA } from '../data/content'

export default function HorariosSection() {
  const { starteria, administracion } = HORARIOS_DATA

  return (
    <section id="horarios" className="horarios-section reveal">
      <div className="horarios-container">
        <div className="horarios-header">
          <span className="section-tag">Información Operativa</span>
          <h2 className="section-title">Horarios de <em>Atención y Juego</em></h2>
          <p className="horarios-intro">
            Planificá tu visita y tus rondas de golf. Ponemos a disposición los canales directos y horarios actualizados de nuestros servicios.
          </p>
        </div>

        <div className="horarios-grid">
          {/* Card Startería */}
          <div className="horario-card">
            <div className="horario-card__header">
              <div className="horario-card__tag-wrap">
                <span className="horario-card__badge">{starteria.badge}</span>
                <span className="horario-card__status">
                  <span className="status-dot"></span> Cancha Habilitada
                </span>
              </div>
              <h3 className="horario-card__title">{starteria.title}</h3>
              <p className="horario-card__desc">{starteria.description}</p>
            </div>

            <div className="horario-card__body">
              <h4 className="horario-subtitle">Horarios de Salidas</h4>
              <ul className="horario-list">
                {starteria.dias.map((item, idx) => (
                  <li key={idx} className="horario-item">
                    <div className="horario-item__main">
                      <span className="horario-dia">{item.dia}</span>
                      <span className={`horario-hora ${item.horario === 'Cerrado' ? 'horario-hora--cerrado' : ''}`}>
                        {item.horario}
                      </span>
                    </div>
                    <span className="horario-detalle">{item.detalle}</span>
                  </li>
                ))}
              </ul>

              <div className="horario-extra">
                <div className="horario-extra__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong className="horario-extra__title">Driving Range & Práctica</strong>
                  <p className="horario-extra__text">{starteria.drivingRange.horario}</p>
                  <small className="horario-extra__note">{starteria.drivingRange.detalle}</small>
                </div>
              </div>
            </div>

            <div className="horario-card__footer">
              <div className="horario-contact-row">
                <span className="contact-label">Ubicación:</span>
                <span className="contact-val">{starteria.contacto.ubicacion}</span>
              </div>
              <div className="horario-actions">
                <a
                  href={starteria.contacto.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-starteria"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Reservar Tee Time por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card Administración */}
          <div className="horario-card">
            <div className="horario-card__header">
              <div className="horario-card__tag-wrap">
                <span className="horario-card__badge horario-card__badge--admin">{administracion.badge}</span>
                <span className="horario-card__status horario-card__status--admin">
                  <span className="status-dot status-dot--admin"></span> Atención al Propietario
                </span>
              </div>
              <h3 className="horario-card__title">{administracion.title}</h3>
              <p className="horario-card__desc">{administracion.description}</p>
            </div>

            <div className="horario-card__body">
              <h4 className="horario-subtitle">Horarios de Atención al Socio</h4>
              <ul className="horario-list">
                {administracion.dias.map((item, idx) => (
                  <li key={idx} className="horario-item">
                    <div className="horario-item__main">
                      <span className="horario-dia">{item.dia}</span>
                      <span className={`horario-hora ${item.horario === 'Cerrado' ? 'horario-hora--cerrado' : ''}`}>
                        {item.horario}
                      </span>
                    </div>
                    <span className="horario-detalle">{item.detalle}</span>
                  </li>
                ))}
              </ul>

              <div className="horario-extra">
                <div className="horario-extra__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <strong className="horario-extra__title">Guardia y Acceso Principal</strong>
                  <p className="horario-extra__text">{administracion.guardiaSeguridad.horario}</p>
                  <small className="horario-extra__note">{administracion.guardiaSeguridad.detalle}</small>
                </div>
              </div>
            </div>

            <div className="horario-card__footer">
              <div className="horario-contact-row">
                <span className="contact-label">Sede Central:</span>
                <span className="contact-val">{administracion.contacto.ubicacion}</span>
              </div>
              <div className="horario-actions">
                <a
                  href={administracion.contacto.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-admin"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Contactar Administración</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

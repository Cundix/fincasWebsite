import { useState, useEffect, useRef } from 'react'
import './App.css'
import './sections.css'
import HorariosSection from './components/HorariosSection'
import NovedadesSection from './components/NovedadesSection'
import CampoSection from './components/CampoSection'

// ─── Real Fincas de San Vicente images ───
const IMAGES = {
  hero: '/images/hero-golf.jpg',
  legado: '/images/legado.jpg',
  panoramic: '/images/hoyo14.jpg',
  golf: '/images/golf-field.jpg',
  futbol: '/images/futbol.jpg',
  gym: '/images/clubhouse-wide.png',
  clubhouse: '/images/clubhouse.png',
  logo: '/images/FSV_Golf_Logo_blanco.png',
  logoSalvia: '/images/FSV_Golf_Logo_verde_salvia.png',
  logoSombra: '/images/FSV_Golf_Logo_verde_sombra.png',
  video: '/images/hoyo14-video.mp4',
}

function App() {
  const [currentView, setCurrentView] = useState('home') // 'home' | 'blog' | 'campo'
  const heroRef = useRef(null)

  useEffect(() => {
    // ── Reveal on scroll ──
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    reveals.forEach(el => observer.observe(el))

    // ── Nav scroll ──
    const nav = document.getElementById('main-nav')
    const handleScroll = () => {
      if (window.scrollY > 120) {
        nav?.classList.add('scrolled')
      } else {
        nav?.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // ── Hero loaded animation ──
    setTimeout(() => {
      heroRef.current?.classList.add('loaded')
    }, 100)

    // ── Counter animation ──
    const counters = document.querySelectorAll('[data-count]')
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.getAttribute('data-count'))
          let current = 0
          const step = Math.ceil(target / 60)
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              e.target.textContent = target
              clearInterval(timer)
            } else {
              e.target.textContent = current
            }
          }, 25)
          counterObserver.unobserve(e.target)
        }
      })
    }, { threshold: 0.5 })
    counters.forEach(el => counterObserver.observe(el))

    // ── Parallax ──
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    const handleParallax = () => {
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax'))
        const rect = el.getBoundingClientRect()
        const offset = (rect.top - window.innerHeight / 2) * speed
        const img = el.querySelector('img')
        if (img) img.style.transform = `translateY(${offset}px) scale(1.1)`
      })
    }
    window.addEventListener('scroll', handleParallax, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleParallax)
      observer.disconnect()
      counterObserver.disconnect()
    }
  }, [currentView])

  const toggleMenu = () => {
    document.getElementById('nav-menu')?.classList.toggle('open')
  }

  const closeMenu = () => {
    document.getElementById('nav-menu')?.classList.remove('open')
  }

  const navigateTo = (anchor) => {
    closeMenu()
    if (currentView !== 'home') {
      setCurrentView('home')
      setTimeout(() => {
        const el = document.querySelector(anchor)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(anchor)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openCampo = () => {
    closeMenu()
    setCurrentView('campo')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    closeMenu()
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ═══ NAVIGATION ═══ */}
      <nav id="main-nav" className={`nav ${currentView !== 'home' ? 'nav--visible scrolled' : ''}`}>
        <div className="nav__inner">
          <a
            href="#hero"
            className="nav__logo"
            onClick={(e) => { e.preventDefault(); goHome(); }}
            aria-label="Ir al inicio"
          >
            <img src={IMAGES.logo} alt="Fincas de San Vicente Golf" className="nav__logo-img" />
          </a>
          <button className="nav__toggle" aria-label="Abrir menú" onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
          <ul id="nav-menu" className="nav__menu">
            <li>
              <a
                href="#horarios"
                className="nav__link"
                onClick={(e) => { e.preventDefault(); navigateTo('#horarios'); }}
              >
                Horarios
              </a>
            </li>
            <li>
              <a
                href="#horarios"
                className="nav__link"
                onClick={(e) => { e.preventDefault(); navigateTo('#horarios'); }}
              >
                Horarios
              </a>
            </li>
            <li>
              <a
                href="#novedades"
                className="nav__link"
                onClick={(e) => { e.preventDefault(); navigateTo('#novedades'); }}
              >
                Novedades
              </a>
            </li>
            <li>
              <a
                href="#clubhouse"
                className="nav__link"
                onClick={(e) => { e.preventDefault(); navigateTo('#clubhouse'); }}
              >
                Club House
              </a>
            </li>
            <li>
              <a
                href="#ubicacion"
                className="nav__link"
                onClick={(e) => { e.preventDefault(); navigateTo('#ubicacion'); }}
              >
                Ubicación
              </a>
            </li>
            <li>
              <button
                type="button"
                className={`nav__link nav__link--btn ${currentView === 'campo' ? 'nav__link--badge' : ''}`}
                onClick={openCampo}
              >
                Nuestro Campo
              </button>
            </li>
            <li>
              <a
                href="#contacto"
                className="nav__link nav__link--cta"
                onClick={(e) => { e.preventDefault(); navigateTo('#contacto'); }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ═══ CONDITIONAL VIEWS ═══ */}
      {currentView === 'campo' ? (
        <main>
          <CampoSection onBackToHome={goHome} />
        </main>
      ) : (
        <main>
          {/* ═══ HERO ═══ */}
          <section id="hero" className="hero" ref={heroRef}>
            <div className="hero__bg">
              <img src={IMAGES.hero} alt="Campo de golf al amanecer" className="hero__bg-img" />
              <div className="hero__overlay"></div>
            </div>
            <div className="hero__content hero__content--logo-only">
              <img
                src={IMAGES.logo}
                alt="Fincas de San Vicente Golf"
                className="hero__center-logo"
              />
              <span className="hero__location-tag">- San Vicente, Buenos Aires -</span>
            </div>
            <div className="hero__scroll-indicator">
              <div className="hero__scroll-line"></div>
              <span>Scroll</span>
            </div>
          </section>

          {/* ═══ EL LEGADO ═══ */}
          <section id="legado" className="legado">
            <div className="legado__container">
              <div className="legado__image-col reveal">
                <div className="legado__image-wrapper">
                  <img src={IMAGES.legado} alt="Vida en comunidad" className="legado__image" />
                  <div className="legado__image-frame"></div>
                </div>
                <div className="legado__stat">
                  <span className="legado__stat-number" data-count="625">0</span>
                  <span className="legado__stat-label">hectáreas de naturaleza<br/>y diseño integrado</span>
                </div>
              </div>
              <div className="legado__text-col reveal reveal--delay-1">
                <span className="section-tag">Mucho más que golf</span>
                <h2 className="section-title">Un estilo de vida,<br/><em>un barrio en crecimiento</em></h2>
                <div className="legado__body">
                  <p>En el corazón de San Vicente, existe un lugar pensado para quienes entienden que la verdadera riqueza es el tiempo bien vivido.</p>
                  <p><strong>Fincas de San Vicente Golf</strong> es una comunidad que busca la desconexión genuina del ruido de la ciudad, y un entorno natural que da bienestar a vecinos y visitantes.</p>
                </div>
                <div className="legado__features">
                  <Feature icon="shield" title="Seguridad 24/7" desc="Perímetro completo, acceso controlado y monitoreo permanente." />
                  <Feature icon="people" title="Comunidad Participativa" desc="Familias que comparten actividades, participando de distintas comisiones" />
                  <Feature icon="nature" title="Naturaleza Viva" desc="Arboledas, lagunas y espacios verdes que enriquecen cada jornada." />
                </div>
              </div>
            </div>
          </section>

          {/* ═══ VIDEO BREAK ═══ */}
          <section className="visual-break">
            <video
              className="visual-break__video"
              autoPlay muted loop playsInline
              poster={IMAGES.panoramic}
            >
              <source src={IMAGES.video} type="video/mp4" />
            </video>
            <div className="visual-break__overlay"></div>
            <div className="visual-break__content reveal">
              <blockquote className="visual-break__quote">
                "18 hoyos diseñados por Emilio N. Serra.<br/>Par 71. 6.474 yardas de pura excelencia."
              </blockquote>
              <div className="visual-break__cta">
                <button
                  type="button"
                  className="visual-break__btn"
                  onClick={openCampo}
                  aria-label="Conocé Nuestro Campo - 18 Hoyos en Video"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Conocé Nuestro Campo (18 Hoyos en Video)</span>
                </button>
              </div>
            </div>
          </section>

          {/* ═══ INSTALACIONES ═══ */}
          <section id="instalaciones" className="instalaciones">
            <div className="instalaciones__header reveal">
              <span className="section-tag">Deporte y tranquilidad</span>
              <h2 className="section-title">Momentos únicos<br/><em>para compartir</em></h2>
              <p className="instalaciones__intro">Espacios concebidos para elevar la experiencia. Desde la estrategia del golf profesional hasta la intensidad deportiva y el bienestar físico.</p>
            </div>
            <div className="instalaciones__grid instalaciones__grid--3col">
              <AmenityCard
                n="01"
                img={IMAGES.golf}
                title="Campo de Golf"
                desc="18 hoyos diseñados para desafiar y maravillar en cada swing. Un recorrido par 71 concebido por Emilio N. Serra que atraviesa paisajes inolvidables."
              />
              <AmenityCard
                n="02"
                img={IMAGES.gym}
                title="Gimnasio & Natación"
                desc="Instalaciones deportivas que permiten complementar la actividad de golf"
                delay={1}
              />
              <AmenityCard
                n="03"
                img={IMAGES.futbol}
                title="Canchas de Fútbol y Tenis"
                desc="Espacios de primer nivel para la práctica deportiva y el encuentro comunitario. Canchas en un predio que respira compañerismo, competencia sana y aire puro."
                delay={2}
              />
            </div>
          </section>

          {/* ═══ HORARIOS (STARTERIA & ADMINISTRACION) ═══ */}
          <HorariosSection />

          {/* ═══ NOVEDADES IG FEED ═══ */}
          <NovedadesSection />

          {/* ═══ CLUB HOUSE ═══ */}
          <section id="clubhouse" className="clubhouse">
            <div className="clubhouse__bg" data-parallax="0.2">
              <img src={IMAGES.clubhouse} alt="Club House al atardecer" className="clubhouse__bg-img" />
              <div className="clubhouse__overlay"></div>
            </div>
            <div className="clubhouse__content">
              <div className="clubhouse__text reveal">
                <span className="section-tag section-tag--light">Nuestro Punto de Encuentro</span>
                <h2 className="section-title section-title--light">El Club House.<br/><em>Corazón de la comunidad.</em></h2>
                <p className="clubhouse__body">Más que un edificio, es el escenario donde la vida social de Fincas cobra sentido. 800 metros cuadrados de arquitectura pensada para el encuentro: desde el almuerzo familiar del domingo hasta las cenas que se prolongan bajo las estrellas.</p>
                <p className="clubhouse__body">Un espacio gastronómico y social con vista al campo de golf, donde compartir momentos inolvidables con amigos y familia luego de una jornada de deporte o descanso.</p>
                <div className="clubhouse__highlights">
                  <div className="clubhouse__highlight">
                    <span className="clubhouse__highlight-number">800</span>
                    <span className="clubhouse__highlight-label">m² de Club House</span>
                  </div>
                  <div className="clubhouse__highlight">
                    <span className="clubhouse__highlight-number">∞</span>
                    <span className="clubhouse__highlight-label">Momentos para compartir</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ UBICACIÓN ═══ */}
          <section id="ubicacion" className="ubicacion">
            <div className="ubicacion__container">
              <div className="ubicacion__text reveal">
                <span className="section-tag">Ubicación Privilegiada</span>
                <h2 className="section-title">En el centro<br/><em>de San Vicente.</em></h2>
                <p>Sobre la Ruta 58 y la calle Capdevila, a minutos de los principales accesos desde Canning y la zona sur del Gran Buenos Aires.</p>
                <div className="ubicacion__details">
                  <div className="ubicacion__detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Capdevila y Ruta 58, San Vicente, Buenos Aires</span>
                  </div>
                  <div className="ubicacion__detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>55 min desde CABA — 15 min desde Canning</span>
                  </div>
                </div>
              </div>
              <div className="ubicacion__map reveal reveal--delay-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13060.725178651816!2d-58.4744191!3d-35.0121058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2f2336a2acf9%3A0x481c9cd6b20635ce!2sFincas%20de%20San%20Vicente%20Club%20de%20Golf!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'saturate(0.3) contrast(1.1) brightness(0.85)' }}
                  allowFullScreen loading="lazy"
                  title="Ubicación de Fincas de San Vicente Golf"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ═══ FOOTER ═══ */}
      <footer id="contacto" className="footer">
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__brand">
              <img src={IMAGES.logo} alt="Fincas de San Vicente Golf" className="footer__logo-img" />
              <p className="footer__tagline">El refugio donde el prestigio, el deporte<br/>y la naturaleza se encuentran.</p>
            </div>
            <div className="footer__links-group">
              <h4 className="footer__heading">Navegación</h4>
              <ul className="footer__links">
                <li><a href="#legado" onClick={(e) => { e.preventDefault(); navigateTo('#legado'); }}>El Legado</a></li>
                <li><a href="#instalaciones" onClick={(e) => { e.preventDefault(); navigateTo('#instalaciones'); }}>Instalaciones</a></li>
                <li><a href="#horarios" onClick={(e) => { e.preventDefault(); navigateTo('#horarios'); }}>Horarios</a></li>
                <li><a href="#novedades" onClick={(e) => { e.preventDefault(); navigateTo('#novedades'); }}>Novedades</a></li>
                <li><a href="#clubhouse" onClick={(e) => { e.preventDefault(); navigateTo('#clubhouse'); }}>Club House</a></li>
                <li><a href="#campo" onClick={(e) => { e.preventDefault(); openCampo(); }}>Conocé Nuestro Campo</a></li>
              </ul>
            </div>
            <div className="footer__links-group">
              <h4 className="footer__heading">Servicios</h4>
              <ul className="footer__links">
                <li>Startería: Salidas & Tee Times</li>
                <li>Administración: Atención a Propietarios</li>
                <li>info@fincasdesanvicente.com.ar</li>
                <li>Ruta 58 km 12, San Vicente</li>
              </ul>
            </div>
            <div className="footer__links-group">
              <h4 className="footer__heading">Seguinos</h4>
              <div className="footer__social">
                <a href="https://www.instagram.com/fincasdesanvicentegolf/" target="_blank" rel="noopener" aria-label="Instagram" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener" aria-label="Facebook" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__line"></div>
            <div className="footer__bottom-content">
              <p>&copy; 2026 Fincas de San Vicente Golf. Todos los derechos reservados.</p>
              <p className="footer__powered">
                Powered by{' '}
                <a
                  href="https://maravillium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__powered-link"
                >
                  Maravillium
                </a>
              </p>
              <p>San Vicente, Provincia de Buenos Aires, Argentina.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// ─── Sub-components ───
const ICONS = {
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  people: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  nature: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
}

function Feature({ icon, title, desc }) {
  return (
    <div className="legado__feature">
      <div className="legado__feature-icon">{ICONS[icon]}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

function AmenityCard({ n, img, title, desc, delay = 0 }) {
  return (
    <div className={`amenity-card reveal${delay ? ` reveal--delay-${delay}` : ''}`}>
      <div className="amenity-card__image-wrapper">
        <img src={img} alt={title} className="amenity-card__image" />
        <div className="amenity-card__image-overlay"></div>
      </div>
      <div className="amenity-card__content">
        <span className="amenity-card__number">{n}</span>
        <h3 className="amenity-card__title">{title}</h3>
        <p className="amenity-card__desc">{desc}</p>
      </div>
    </div>
  )
}

export default App

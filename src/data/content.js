// ─── Fincas de San Vicente Golf Content Data ───

export const HORARIOS_DATA = {
  starteria: {
    title: 'Startería & Campo de Golf',
    badge: '18 Hoyos · Par 71',
    description: 'Control de salidas, reservas de tee time, alquiler de carros y driving range.',
    dias: [
      { dia: 'Martes a Viernes', horario: '07:30 - 18:30 hs', detalle: 'Salidas individuales y líneas libres' },
      { dia: 'Sábados, Domingos y Feriados', horario: '07:00 - 19:00 hs', detalle: 'Torneos oficiales y salidas por tee time' },
      { dia: 'Lunes', horario: 'Cerrado', detalle: 'Mantenimiento integral de greens y fairways' },
    ],
    drivingRange: {
      horario: 'Martes a Domingos de 08:00 a 18:00 hs',
      detalle: 'Pelotas de práctica disponibles en Startería.',
    },
    contacto: {
      telefono: '+54 9 11 5555-4653',
      whatsapp: 'https://wa.me/5491155554653?text=Hola%2C%20quisiera%20consultar%20por%20un%20Tee%20Time%20en%20Fincas%20Golf',
      email: 'starteria@fincasdesanvicente.com.ar',
      ubicacion: 'Junto al Putting Green y Club House',
    },
  },
  administracion: {
    title: 'Administración & Atención al Socio',
    badge: 'Gestión Institucional',
    description: 'Atención a propietarios, trámites administrativos, cobranzas, ingreso de proveedores y obras.',
    dias: [
      { dia: 'Lunes a Viernes', horario: '09:00 - 17:00 hs', detalle: 'Atención presencial y telefónica' },
      { dia: 'Sábados', horario: '09:00 - 13:00 hs', detalle: 'Guardia administrativa y consultas generales' },
      { dia: 'Domingos y Feriados', horario: 'Cerrado', detalle: 'Guardia operativa de guardia permanente 24 hs' },
    ],
    guardiaSeguridad: {
      horario: 'Todos los días, 24 horas',
      detalle: 'Control de acceso principal sobre Ruta 58.',
    },
    contacto: {
      telefono: '+54 11 5263-8800',
      whatsapp: 'https://wa.me/5491152638800?text=Hola%2C%20me%20comunico%20con%20Administraci%C3%B3n%20Fincas',
      email: 'administracion@fincasdesanvicente.com.ar',
      ubicacion: 'Edificio Central de Administración',
    },
  },
}

// Configuración oficial de Instagram — Fincas de San Vicente Golf
// Bajo ninguna circunstancia se usan noticias falsas ni datos inventados.
// Se utilizan los enlaces oficiales y exactos a publicaciones de Instagram con el embebido oficial de Meta.
export const INSTAGRAM_CONFIG = {
  usuario: '@fincasdesanvicentegolf',
  perfilUrl: 'https://www.instagram.com/fincasdesanvicentegolf/',
  // Si utilizas un widget de feed automático (ej. Elfsight / Behold), ingresá el ID aquí.
  widgetId: null,
  // Lista de URLs exactas de publicaciones o reels oficiales para embeber:
  // Ejemplo: { id: 'post-1', url: 'https://www.instagram.com/p/XXXXXXXXX/' }
  posts: [
    // Agregá aquí las URLs exactas de publicaciones o reels que quieras mostrar:
    {
      id: 'post-1',
      url: 'https://www.instagram.com/p/C_sample/', // Se reemplaza por los IDs reales de posteos
      etiqueta: 'Golf & Torneos',
    }
  ]
}


export const BLOG_POSTS = [
  {
    id: 'arquitectura-emilio-serra',
    titulo: 'La Estrategia del Diseño: Cómo Emilio N. Serra Concibió los 18 Hoyos de Fincas',
    subtitulo: 'Un recorrido técnico por los secretos del trazado, el aprovechamiento del relieve pampeano y los desafíos del par 71.',
    categoria: 'Cultura de Golf',
    fecha: '18 de Agosto, 2026',
    tiempoLectura: '5 min de lectura',
    autor: 'Comisión de Golf & Agronomía',
    portada: '/images/hero-golf.jpg',
    extracto: 'Diseñado por uno de los arquitectos más prestigiosos de Argentina, el campo de Fincas de San Vicente Golf combina 6.474 yardas de precisión estratégica con un entorno silvestre incomparable.',
    contenido: [
      'Cuando el maestro Emilio N. Serra caminó por primera vez estas 625 hectáreas de suelo bonaerense, entendió que el viento del sur y las arboledas centenarias serían los verdaderos protagonistas de su diseño. No se trataba simplemente de sembrar fairways, sino de crear una experiencia donde cada golpe demande inteligencia más que potencia desmedida.',
      'El par 71 de Fincas se destaca por su ritmo balanceado: una primera vuelta que invita a la concentración y un retorno donde el agua entra en juego en los hoyos 12, 14 y 16, poniendo a prueba los nervios de los handicaps más bajos.',
      'El emblemático Hoyo 14, un par 4 dogleg con laguna lateral, se ha convertido con los años en la postal indiscutida del club. Quienes eligen cortar por la izquierda enfrentan un tiro de aproximación corto pero exigente, mientras que la vía segura exige un segundo tiro largo a un green con doble desnivel protegido por bunkers de arena blanca.',
      'Cuidar este legado paisajístico y deportivo es la misión diaria de nuestro equipo técnico, permitiendo que tanto golfistas expertos como principiantes disfruten de una cancha de nivel internacional a solo 45 minutos de Buenos Aires.'
    ]
  },
  {
    id: 'vida-en-comunidad-naturaleza',
    titulo: 'El Valor del Silencio: Por Qué las Familias Eligen Crecer en Fincas de San Vicente',
    subtitulo: 'La combinación de seguridad integral, deportes al aire libre y una escala pensada para la tranquilidad intergeneracional.',
    categoria: 'Estilo de Vida',
    fecha: '10 de Agosto, 2026',
    tiempoLectura: '4 min de lectura',
    autor: 'Comisión de Comunicación',
    portada: '/images/legado.jpg',
    extracto: 'En una era dominada por la prisa digital, la verdadera exclusividad reside en recuperar el tiempo con los hijos, las tardes de bicicleta sin preocupaciones y los amigos de toda la vida.',
    contenido: [
      'En San Vicente, el cielo se abre con una amplitud que la ciudad ha olvidado. El aire huele a pasto recién cortado y eucaliptos, y los fines de semana recuperan el ritmo de los almuerzos prolongados y las caminatas al atardecer.',
      'Fincas de San Vicente no fue planeado como un mero desarrollo inmobiliario, sino como un refugio integral. Las familias que aquí habitan valoran la certeza de saber a sus hijos jugando libremente por las calles arboladas, disfrutando de la piscina o entrenando en el gimnasio.',
      'La arquitectura del Club House, con sus techos nobles y ventanales al campo, funciona como un salón familiar extendido donde los vecinos celebran hitos compartidos. Es esta sinergia de valores la que consolida el valor patrimonial del barrio: aquí no solo se adquiere un lote, se adopta un estilo de vida que perdura por generaciones.'
    ]
  },
  {
    id: 'mantenimiento-greens-otono',
    titulo: 'Agronomía de Alta Competencia: Secretos Detrás del Mantenimiento de Nuestros Greens',
    subtitulo: 'Tecnología de riego zonificado, cortes helicoidales y cuidado ambiental del ecosistema natural.',
    categoria: 'Infraestructura',
    fecha: '2 de Agosto, 2026',
    tiempoLectura: '6 min de lectura',
    autor: 'Equipo Técnico de Espacios Verdes',
    portada: '/images/hoyo14.jpg',
    extracto: 'Conocé las tareas técnicas de aireación, control de corte en milímetros y gestión sustentable de recursos hídricos que mantienen el campo en condiciones de campeonato los 365 días del año.',
    contenido: [
      'Detrás de cada swing perfecto existe una labor meticulosa y silenciosa. Cada lunes, cuando la cancha descansa de torneos, el equipo de greenskeepers despliega un plan agronómico preventivo diseñado con tecnología de vanguardia.',
      'Los cortes de green se calibran a milímetros específicos según la temperatura y humedad relativa de la jornada, utilizando maquinaria helicoidal que garantiza un corte neto sin dañar la corona del césped. Esto se traduce en un rodamiento fiel y predecible de la pelota en cada putt.',
      'Asimismo, la gestión de lagunas y drenajes naturales asegura que incluso tras intensas lluvias el campo recupere su jugabilidad en tiempo récord, preservando a su vez la fauna autóctona de patos, garzas y teros que conviven armónicamente con la actividad deportiva.'
    ]
  }
]

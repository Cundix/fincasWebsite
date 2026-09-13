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

export const YOUTUBE_CANAL_URL = 'https://www.youtube.com/@fincassanvicentegolf351'

// Videos oficiales del canal de YouTube de Fincas de San Vicente Golf
// Recorrido aéreo exclusivo de los 18 hoyos (videos oficiales de menos de 1 minuto)
export const HOYOS_CAMPO = [
  {
    numero: 1,
    titulo: 'Hoyo 1',
    descripcion: 'Hoyo 1 de #Fincasdesanvicentegolf ⛳',
    youtubeId: 'G3x45S_e1G0',
    duracion: '0:29',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 1'
  },
  {
    numero: 2,
    titulo: 'Hoyo 2',
    descripcion: 'Hoyo 2 de #fincasdesanvicente',
    youtubeId: 'vznAtBTzZnc',
    duracion: '0:28',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 2'
  },
  {
    numero: 3,
    titulo: 'Hoyo 3',
    descripcion: 'Hoyo 3 de #fincasdesanvicente',
    youtubeId: '4D7G2mc8Ig8',
    duracion: '0:33',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 3'
  },
  {
    numero: 4,
    titulo: 'Hoyo 4',
    descripcion: 'Hoyo 4 de #fincasdesanvicente',
    youtubeId: 'ZmrP4-GUQDo',
    duracion: '0:30',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 4'
  },
  {
    numero: 5,
    titulo: 'Hoyo 5',
    descripcion: 'Hoyo 5 de #fincasdesanvicente',
    youtubeId: 'MXASegqgrg0',
    duracion: '0:33',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 5'
  },
  {
    numero: 6,
    titulo: 'Hoyo 6',
    descripcion: 'Hoyo 6 de #fincasdesanvicente',
    youtubeId: '5CY6wMCWHJE',
    duracion: '0:31',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 6'
  },
  {
    numero: 7,
    titulo: 'Hoyo 7',
    descripcion: 'Hoyo 7 de #fincasdesanvicente',
    youtubeId: 'WfZxTnClu9c',
    duracion: '0:25',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 7'
  },
  {
    numero: 8,
    titulo: 'Hoyo 8',
    descripcion: 'Hoyo 8 de #fincasdesanvicente',
    youtubeId: 'ecsNoEf5744',
    duracion: '0:33',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 8'
  },
  {
    numero: 9,
    titulo: 'Hoyo 9',
    descripcion: 'Hoyo 9 de #fincasdesanvicente',
    youtubeId: '7ZFgCukMyas',
    duracion: '0:34',
    lado: 'ida',
    etiqueta: 'Ida · Hoyo 9'
  },
  {
    numero: 10,
    titulo: 'Hoyo 10',
    descripcion: 'Hoyo 10 de #fincasdesanvicente',
    youtubeId: 'ZReKtXORX-I',
    duracion: '0:37',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 10'
  },
  {
    numero: 11,
    titulo: 'Hoyo 11',
    descripcion: 'Hoyo 11 de #fincasdesanvicente',
    youtubeId: 'y0HIYF1WAIg',
    duracion: '0:35',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 11'
  },
  {
    numero: 12,
    titulo: 'Hoyo 12',
    descripcion: 'Hoyo 12 de #fincasdesanvicente',
    youtubeId: 'rp7wrNwM4jE',
    duracion: '0:32',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 12'
  },
  {
    numero: 13,
    titulo: 'Hoyo 13',
    descripcion: 'Hoyo 13 de #fincasdesanvicente',
    youtubeId: 'nq2UtNrilK8',
    duracion: '0:30',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 13'
  },
  {
    numero: 14,
    titulo: 'Hoyo 14',
    descripcion: 'Hoyo 14 de #fincasdesanvicente',
    youtubeId: 'V18iUMThw24',
    duracion: '0:35',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 14'
  },
  {
    numero: 15,
    titulo: 'Hoyo 15',
    descripcion: 'Hoyo 15 de #fincasdesanvicente',
    youtubeId: '6Yux48GO5Zc',
    duracion: '0:30',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 15'
  },
  {
    numero: 16,
    titulo: 'Hoyo 16',
    descripcion: 'Hoyo 16 de #fincasdesanvicente',
    youtubeId: 'yn2y2nRCyNQ',
    duracion: '0:34',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 16'
  },
  {
    numero: 17,
    titulo: 'Hoyo 17',
    descripcion: 'Hoyo 17 de #fincasdesanvicente',
    youtubeId: 'okS_sJ_3sbw',
    duracion: '0:34',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 17'
  },
  {
    numero: 18,
    titulo: 'Hoyo 18',
    descripcion: 'Hoyo 18 de #fincasdesanvicente',
    youtubeId: 'Q-SVx61Ltzo',
    duracion: '0:30',
    lado: 'vuelta',
    etiqueta: 'Vuelta · Hoyo 18'
  },
]


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

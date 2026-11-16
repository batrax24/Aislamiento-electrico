import type { SourceKey } from './bibliography';

export type StageId = 'amenazas' | 'medio' | 'torre' | 'subestacion';

export type Stage = {
  id: StageId;
  step: number;
  title: string;
  subtitle: string;
  color: 'surge' | 'phase' | 'porcelain' | 'guard';
  topicIds: number[];
};

export const STAGES: Stage[] = [
  {
    id: 'amenazas',
    step: 1,
    title: 'Las amenazas eléctricas',
    subtitle: '¿Qué picos de tensión y rayos atacan a una línea de alta tensión?',
    color: 'surge',
    topicIds: [1, 2, 3],
  },
  {
    id: 'medio',
    step: 2,
    title: 'El aire, el clima y el diagnóstico',
    subtitle: '¿Por qué el aire deja pasar una chispa, cómo influye la montaña y cómo se mide el estado de un equipo?',
    color: 'phase',
    topicIds: [4, 5],
  },
  {
    id: 'torre',
    step: 3,
    title: 'Diseño físico en la torre',
    subtitle: '¿Cuántos discos poner, cuánto separar los cables, dónde ubicar la guarda y cómo aterrizar la torre?',
    color: 'porcelain',
    topicIds: [6, 7, 8, 9],
  },
  {
    id: 'subestacion',
    step: 4,
    title: 'Llegada a subestación y cierre',
    subtitle: '¿Cómo rebotan las ondas, cómo protege el pararrayos al transformador, qué es la corona y cómo encaja todo?',
    color: 'guard',
    topicIds: [10, 11, 12, 13],
  },
];

export type TopicIcon =
  | 'balance'
  | 'wave'
  | 'lightning'
  | 'spark'
  | 'mountain'
  | 'insulator'
  | 'wind'
  | 'shield'
  | 'ground'
  | 'bounce'
  | 'arrester'
  | 'corona'
  | 'check';

export type Topic = {
  id: number;
  stage: StageId;
  icon: TopicIcon;
  title: string;
  question: string;
  whereOnLine: string;
  minutes: string;
  slides: string;
  idea: string;
  realWorld: string;
  keys: string[];
  experiments: string[];
  sources: SourceKey[];
};

export const TOPICS: Topic[] = [
  {
    id: 1,
    stage: 'amenazas',
    icon: 'balance',
    title: 'Introducción y coordinación de aislamiento',
    question: '¿Cómo lograr que un pico de tensión no destruya los equipos sin gastar una fortuna?',
    whereOnLine: 'Todo el sistema: línea + subestación',
    minutes: '0–8 min',
    slides: '1–4',
    idea: 'Coordinar el aislamiento es comparar los picos de tensión que pueden aparecer con lo que resisten el aire y los aisladores, añadiendo pararrayos y distancias para mantener el riesgo de falla muy bajo.',
    realWorld:
      'Es como diseñar el puente de una carretera: calculas el camión más pesado probable (esfuerzo), eliges vigas que lo aguanten con holgura (soporte) y pones un control de peso a la entrada (pararrayos) para que ningún exceso lo rompa.',
    keys: [
      'Esfuerzo dieléctrico: qué tan alto sube el voltaje, qué tan rápido sube, cuánto dura y qué tan frecuente es.',
      'Capacidad soportada: cuánto voltaje aguanta el aire, la porcelana o el aceite antes de que salte un arco.',
      'Nivel de aislamiento: los voltajes de prueba oficiales (como el BIL) que garantizan la resistencia del equipo.',
      'Proceso iterativo: si cambias el pararrayos o subes la línea a Bogotá, debes volver a revisar cadenas y distancias.',
    ],
    experiments: [],
    sources: ['guion', 'slides', 'diana'],
  },
  {
    id: 2,
    stage: 'amenazas',
    icon: 'wave',
    title: 'Sobretensiones y ensayos normalizados',
    question: '¿En qué se diferencian un rayo, una maniobra de interruptor y una falla a tierra?',
    whereOnLine: 'Conductores de fase y laboratorio de AT',
    minutes: '8–18 min',
    slides: '5–9',
    idea: 'No basta saber cuántos kilovoltios alcanza un pico: importa qué tan rápido golpea y cuánto dura. Por eso cada familia de sobretensión tiene su propia onda de prueba en laboratorio.',
    realWorld:
      'Un martillazo seco (rayo, microsegundos), un empujón brusco (abrir/cerrar un interruptor, milisegundos) y un peso sostenido (falla a tierra, segundos) pueden tener la misma fuerza máxima, pero exigen de forma distinta al material.',
    keys: [
      'Temporal (TOV): dura ciclos o segundos (50/60 Hz); ocurre en fallas a tierra o cuando se desconecta una gran carga.',
      'Maniobra: frente lento (~170–250 µs); ocurre al energizar o recerrar líneas largas.',
      'Atmosférica (rayo): frente ultrarrápido (~1,2 µs); viene de descargas directas o cercanas.',
      'Regla de oro de unidades: frecuencia industrial se mide en kV eficaces (RMS); impulsos de rayo y maniobra en kV de cresta (pico).',
      'No confundir 1,2/50 µs (onda de voltaje para probar aislamiento) con 8/20 µs (onda de corriente para probar pararrayos).',
    ],
    experiments: ['e01', 'e02', 'e03'],
    sources: ['guion', 'slides', 'diana', 'iec60060'],
  },
  {
    id: 3,
    stage: 'amenazas',
    icon: 'lightning',
    title: 'El rayo y sus efectos en una línea',
    question: '¿De cuántas formas distintas puede un rayo hacer disparar una línea de transmisión?',
    whereOnLine: 'Nube, cable de guarda, torre y fases',
    minutes: '18–30 min',
    slides: '10–13',
    idea: 'No existe «un rayo típico fijo»: las corrientes de rayo siguen una distribución estadística, y una tormenta puede afectar la línea por tres caminos físicos muy diferentes.',
    realWorld:
      'Un rayo puede caer directo en el cable con energía (falla de apantallamiento), caer en el suelo vecino e inducir un pulso, o caer en la torre y elevar tanto el voltaje del acero que la chispa salta «al revés» desde la torre hacia el cable (flameo inverso).',
    keys: [
      'Formación: baja un canal ionizado (líder escalonado) y sube la corriente de retorno; a menudo caen varios pulsos seguidos.',
      'Importan dos cosas: la corriente máxima I (mediana ~31 kA) y qué tan brusco sube di/dt (kA por microsegundo).',
      'Tres mecanismos: (1) impacto directo en fase, (2) impacto en guarda/torre con flameo inverso y (3) rayo cercano inducido.',
      'El cable de guarda atrapa la mayoría de los rayos, pero si la puesta a tierra es alta aún puede haber flameo inverso.',
    ],
    experiments: ['e04', 'e14'],
    sources: ['guion', 'slides', 'velasco'],
  },
  {
    id: 4,
    stage: 'medio',
    icon: 'spark',
    title: 'Ruptura dieléctrica y probabilidad de disrupción',
    question: '¿Cómo pasa el aire de ser un aislante a convertirse en un arco eléctrico conductor?',
    whereOnLine: 'Espacio de aire entre cables y estructura',
    minutes: '30–43 min',
    slides: '14–19',
    idea: 'El aire falla cuando los electrones acelerados chocan con moléculas y desatan una avalancha en cadena. Como depende de condiciones azarosas, la ruptura es probabilística: U₅₀ significa que falla la mitad de las veces.',
    realWorld:
      'Es como una bola de nieve bajando una ladera: necesita suficiente pendiente (campo eléctrico) y suficiente recorrido (distancia). Si llega a ~100 millones de electrones (10⁸), abre un canal luminoso y salta el arco.',
    keys: [
      'Avalancha de electrones: n(x) = n₀·e^((α−η)x); solo se multiplica si la ionización (α) supera la captura (η).',
      'Contorneo (chispa rodeando por fuera en el aire, recuperable) ≠ perforación (atraviesa y daña el sólido o aceite).',
      'U₅₀ o CFO: el voltaje de pico con el que rompen 5 de cada 10 disparos de prueba — NO es un voltaje seguro.',
      'Para diseñar con bajo riesgo (por ejemplo 10 % o 1 %), el esfuerzo debe quedar varias desviaciones (σ) por debajo de U₅₀.',
    ],
    experiments: ['e05', 'e06'],
    sources: ['guion', 'slides', 'velasco', 'diana'],
  },
  {
    id: 5,
    stage: 'medio',
    icon: 'mountain',
    title: 'Atmósfera, altitud, temperatura y medición',
    question: '¿Por qué un aislador en Bogotá soporta menos voltaje que en la costa y cómo se revisa en campo?',
    whereOnLine: 'Entorno de la línea (0–4.000 m) y pruebas de campo',
    minutes: '43–51 min',
    slides: '20–21',
    idea: 'En la montaña el aire es menos denso (δ < 1) y pierde capacidad aislante externa. Además, la humedad y la temperatura cambian tanto el diseño aéreo como el diagnóstico con megóhmetro en equipos reales.',
    realWorld:
      'A 2.640 m en Bogotá hay cerca de 26 % menos aire por metro cúbico que en Cartagena: las cadenas y distancias en aire necesitan más margen, mientras que el aceite sellado dentro de un transformador no «siente» la altitud.',
    keys: [
      'Densidad relativa del aire: δ = (p/p₀)·(T₀/T), usando temperatura absoluta en kelvin (K = °C + 273,15).',
      'Por encima de 1.000 m s.n.m. en Colombia la corrección por altitud del aislamiento externo es indispensable.',
      'Solo se corrige el aislamiento expuesto al aire ambiente; el aislamiento interno hermético no se reduce igual.',
      'Con megóhmetro se mira cómo sube R(t) en el tiempo (índices DAR = R₆₀/R₃₀ y PI = R₁₀ₘᵢₙ/R₁ₘᵢₙ) para distinguir humedad de daño.',
    ],
    experiments: ['e07', 'e19'],
    sources: ['guion', 'slides', 'diana', 'cardona', 'medicion'],
  },
  {
    id: 6,
    stage: 'torre',
    icon: 'insulator',
    title: 'Longitud y selección de cadenas de aisladores',
    question: '¿Cómo se decide si una torre de 230 kV lleva 14, 17 o 21 discos aisladores?',
    whereOnLine: 'Cadenas de suspensión y amarre en crucetas',
    minutes: '51–61 min',
    slides: '22–27',
    idea: 'Los discos aisladores sostienen el cable sin dejar escapar la corriente a la torre. Se calculan por contaminación húmeda (fuga), por sobretensión de maniobra (CFO) y por rayo; al final se instala el número mayor.',
    realWorld:
      'Los discos tienen faldones ondulados por debajo para alargar el camino que debe recorrer el agua sucia o la sal marina: una cadena de 3 m de largo puede tener más de 6 m de recorrido superficial (línea de fuga).',
    keys: [
      'Tres distancias distintas: línea de fuga (zigzag por la porcelana), arco en seco (recta en aire) y largo mecánico de cadena.',
      'Siempre verificar si el coeficiente k_f (mm/kV) está dado por tensión entre fases (Uₘ) o fase–tierra (Uₘ/√3): cambia en 1,73×.',
      'Discos necesarios: N = ⌈L_f / fuga_por_disco⌉ (siempre redondeado hacia arriba) y longitud L ≈ N · paso.',
      'Por maniobra se calcula el CFO requerido con dispersión σ = 6 % y se compara con el número por contaminación: manda el mayor.',
    ],
    experiments: ['e08', 'e09'],
    sources: ['guion', 'slides', 'cardona', 'iec60815'],
  },
  {
    id: 7,
    stage: 'torre',
    icon: 'wind',
    title: 'Distancias entre fases y a la estructura',
    question: '¿Qué pasa con el espacio de aire aislante cuando el viento mece los cables?',
    whereOnLine: 'Ventana de torre y mitad del vano entre torres',
    minutes: '61–71 min',
    slides: '28–32',
    idea: 'El aire es el aislante gratuito de la línea, pero los conductores no están quietos: el viento inclina las cadenas hacia el acero de la torre y el calor aumenta la flecha en mitad del vano.',
    realWorld:
      'Una cadena de 3 m parece lejana de la torre en un día calmado (3,5 m), pero si un vendaval la inclina 30°, el cable se acerca 1,5 m al acero aterrizado y puede saltar un arco sin que nadie toque nada.',
    keys: [
      'Hay tres distancias diferentes: cable a torre (fase–estructura), cable a cable (fase–fase) y cable al suelo/personas.',
      'Con viento transversal, la cadena gira un ángulo θ y recorta la distancia horizontal: d_h = d₀ − L·sen θ.',
      'En mitad del vano, la separación entre fases depende de la flecha F, la cadena L y el voltaje Vₙ (predimensionamiento).',
      'En altura (δ < 1), el aire aguanta menos y las distancias mínimas normativas deben agrandarse.',
    ],
    experiments: ['e10', 'e11'],
    sources: ['guion', 'slides', 'velasco', 'cardona'],
  },
  {
    id: 8,
    stage: 'torre',
    icon: 'shield',
    title: 'Ubicación del cable de guarda',
    question: '¿Cómo funciona el cable «paraguas» en la punta de la torre y cuándo puede colarse un rayo?',
    whereOnLine: 'Cúpula superior de la torre de transmisión',
    minutes: '71–79 min',
    slides: '33–36',
    idea: 'El cable de guarda va en lo más alto, conectado a la torre, para interceptar los rayos antes de que toquen las fases. Su posición se mide con el ángulo α, pero la protección real se evalúa con el método electrogeométrico.',
    realWorld:
      'Funciona como un paraguas sobre los cables con energía: si lo abres demasiado (ángulo α grande) o si cae un rayo débil con «esfera de atracción» pequeña, la descarga puede colarse de lado y golpear la fase.',
    keys: [
      'Ángulo de apantallamiento α = arctan(Δx / Δh), medido desde la vertical entre el cable de guarda y la fase.',
      'Un ángulo típico de referencia es α ≤ 30°, pero por sí solo es geometría, no una garantía absoluta.',
      'Modelo electrogeométrico (esfera rodante): el radio de captura r_c = 10·I^0,65 crece con la corriente del rayo.',
      'Rayos débiles (r_c pequeño) pueden burlar la guarda; rayos muy fuertes golpean la guarda pero pueden causar flameo inverso.',
    ],
    experiments: ['e12'],
    sources: ['guion', 'slides', 'cardona', 'velasco', 'expo'],
  },
  {
    id: 9,
    stage: 'torre',
    icon: 'ground',
    title: 'Puesta a tierra y efecto de la temporada',
    question: '¿A dónde se va la corriente del rayo cuando baja por la torre y qué pasa en época de sequía?',
    whereOnLine: 'Base de la torre, varillas y contrapesos enterrados',
    minutes: '79–87 min',
    slides: '37–41',
    idea: 'Las varillas y cables enterrados (contrapesos) evacuan la corriente al suelo para que el voltaje de la torre no se dispare. En época seca el terreno pierde humedad y su resistencia puede duplicarse.',
    realWorld:
      'Si el desagüe al pie de la torre es estrecho (resistencia R_t alta), la corriente del rayo «se represa», el voltaje del acero sube cientos de kilovoltios y además crea diferencias de voltaje peligrosas en el piso para quien camine cerca.',
    keys: [
      'Resistividad ρ (Ω·m) es qué tan mal conduce el terreno; resistencia R (Ω) es lo que logras al enterrar varillas o contrapesos.',
      'Poner n varillas no divide R exactamente entre n por interferencia mutua; en suelo rocoso conviene tender contrapesos largos.',
      'Ante un rayo, el voltaje de torre suma dos partes: resistiva (R_t·i) e inductiva por rapidez del pulso (L·di/dt).',
      'Diseñar siempre para la época seca y verificar tensiones de paso y de contacto para proteger a las personas.',
    ],
    experiments: ['e13', 'e14'],
    sources: ['guion', 'slides', 'velasco', 'expo'],
  },
  {
    id: 10,
    stage: 'subestacion',
    icon: 'bounce',
    title: 'Ondas viajeras, reflexión y transmisión',
    question: '¿Por qué un pulso de 100 kV puede convertirse en casi 200 kV al llegar a un interruptor abierto?',
    whereOnLine: 'Unión línea aérea – cable subterráneo – subestación',
    minutes: '87–96 min',
    slides: '42–45',
    idea: 'Los pulsos rápidos viajan por los cables casi a la velocidad de la luz como olas en un canal. Cada vez que cambia el tipo de línea (impedancia Z), una parte rebota y otra sigue, pudiendo casi duplicar el voltaje.',
    realWorld:
      'Igual que una ola del mar que choca contra un muro vertical y salta al doble de altura: cuando un pulso de rayo llega a un extremo abierto (o a un transformador de alta impedancia), rebota en positivo y suma su voltaje.',
    keys: [
      'Impedancia característica Z_c = √(L′/C′) (~300–450 Ω en línea aérea, ~30–80 Ω en cable) y velocidad v = 1/√(L′·C′) < c.',
      'Coeficiente de reflexión Γ = (Z₂ − Z₁)/(Z₂ + Z₁) y de transmisión τ = 1 + Γ; siempre se cumple V_t = V_i + V_r.',
      'Si pasa a cable (Z₂ < Z₁), Γ es negativo y baja el voltaje; si llega a extremo abierto (Z₂ → ∞), Γ → +1 y se duplica (2·V_i).',
      'El diagrama de Bewley sigue los rebotes en distancia y tiempo, y explica por qué alejar el pararrayos sube el voltaje en el equipo.',
    ],
    experiments: ['e15'],
    sources: ['guion', 'slides', 'velasco', 'pararrayos'],
  },
  {
    id: 11,
    stage: 'subestacion',
    icon: 'arrester',
    title: 'Selección y ubicación del pararrayos (ZnO)',
    question: '¿Cómo protege el descargador al transformador y por qué hay que instalarlo pegado a él?',
    whereOnLine: 'Bahía de entrada de la subestación junto al transformador',
    minutes: '96–109 min',
    slides: '46–53',
    idea: 'El pararrayos de óxido de zinc (ZnO) actúa como una válvula de alivio ultrarrápida: en operación normal está cerrada y ante una sobretensión desvía la corriente a tierra recortando el pico a U_res.',
    realWorld:
      'Es como la válvula de seguridad de una olla a presión: debe aguantar cerrada la presión normal (U_c) y los hervores breves (TOV), pero abrirse al instante ante un pico (U_res). Si la pones al final de un tubo largo (distancia d), la olla igual sufre sobrepresión (+L·d·di/dt).',
    keys: [
      '1) Operación continua: U_c ≥ 1,05 · Uₘ/√3 para que no se caliente ni envejezca con el voltaje diario.',
      '2) Sobretensión temporal (TOV): comparar U_eq contra la curva del catálogo para la duración exacta de la falla (1 s, 10 s…).',
      '3) Voltaje real en el transformador: U_equipo ≈ U_res + L_c · d · di/dt (cada metro extra de cable suma kilovoltios).',
      '4) Margen de protección: M = (BIL / U_equipo − 1)·100 %, buscando holgura suficiente (≥ 20 % como referencia).',
    ],
    experiments: ['e16'],
    sources: ['guion', 'slides', 'pararrayos', 'velasco', 'iec60099'],
  },
  {
    id: 12,
    stage: 'subestacion',
    icon: 'corona',
    title: 'Efecto y pérdidas por corona',
    question: '¿Por qué zumban y brillan en violeta algunas líneas de alta tensión y por qué usan varios cables por fase?',
    whereOnLine: 'Superficie del conductor y haces de subconductores',
    minutes: '109–116 min',
    slides: '54–58',
    idea: 'Si el campo eléctrico pegado a la superficie del cable supera la rigidez del aire (~21,1·δ·m kV/cm), el aire vecino se ioniza sin llegar a formar un arco completo: produce zumbido, halo azulado, ozono y pérdida continua de energía.',
    realWorld:
      'Un cable muy delgado concentra el campo eléctrico como una aguja. En líneas de 230 o 500 kV se agrupan 2, 3 o 4 cables separados por espaciadores (haz) para que el campo los «vea» como un solo tubo grueso y desaparezca la corona.',
    keys: [
      'Aparece solo cuando el voltaje fase–tierra U supera el umbral de incepción U₀ (gradiente superficial E > E₀ = 21,1·δ·m kV/cm).',
      'En altura (δ menor), con cables rugosos/sucios (m < 1) o bajo lluvia, la corona empieza a voltajes más bajos.',
      'Fórmula de Peek: las pérdidas en kW/km crecen con (U − U₀)² — duplicar el exceso multiplica por cuatro la energía perdida.',
      'Usar conductores de mayor radio o haces de 2–4 subconductores aumenta el radio equivalente r_eq y eleva U₀.',
    ],
    experiments: ['e17'],
    sources: ['guion', 'slides', 'corona'],
  },
  {
    id: 13,
    stage: 'subestacion',
    icon: 'check',
    title: 'Integración: coordinar la línea completa',
    question: '¿Cómo se comprueba que cadena, altitud, cable de guarda, tierra y pararrayos funcionan juntos?',
    whereOnLine: 'Proyecto integral: línea de 245 kV en montaña + subestación',
    minutes: '116–120 min',
    slides: '59–62',
    idea: 'Una línea eléctrica es tan fuerte como su eslabón más débil: de nada sirve una cadena de 21 discos si la tierra tiene 45 Ω o si el pararrayos está a 15 m del transformador. Coordinar es poner los seis semáforos en verde a la vez.',
    realWorld:
      'En la misión final tomas el rol del ingeniero diseñador de una línea de 245 kV a 2.640 m (Bogotá): ajustas aisladores, guarda, puesta a tierra y pararrayos hasta aprobar las 6 verificaciones simultáneas.',
    keys: [
      'Siempre comparar peras con peras: misma forma de onda, misma unidad (cresta con cresta, eficaz con eficaz) y misma altitud.',
      'Un solo criterio en rojo invalida el diseño aunque los otros cinco tengan margen de sobra.',
      'Equilibrio técnico-económico: riesgo de falla aceptable, continuidad del servicio y costo razonable de estructuras y equipos.',
      'Si cambia una condición del proyecto (altitud, contaminación, resistividad del suelo), se vuelve a correr toda la cadena.',
    ],
    experiments: ['e18'],
    sources: ['guion', 'slides', 'iec60071'],
  },
];

export function stageForTopic(topicId: number): Stage {
  return STAGES.find((s) => s.topicIds.includes(topicId)) ?? STAGES[0];
}

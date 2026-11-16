# AislaLab · Coordinación de aislamiento eléctrico

**Edición concreta v3.0.0.** Una guía visual e interactiva para entender la coordinación de aislamiento sobre **una misma línea real de 245 kV en Bogotá**: nube de tormenta, cable de guarda, cadena de discos, vano con viento, puesta a tierra, ondas viajeras, pararrayos de ZnO y transformador.

En lugar de empezar con fórmulas sueltas, AislaLab nombra primero el objeto físico, permite mover sus variables y muestra después la ecuación con los números del caso.

---

## Contenido

| Bloque | Cantidad | Qué incluye |
| --- | ---: | --- |
| Temas | 13 | Guion de 120 minutos y 62 diapositivas, con ejemplo concreto, analogía, puntos clave y dónde ocurre en la línea. |
| Etapas físicas | 4 | Amenazas eléctricas → aire/clima/diagnóstico → diseño en torre → subestación y cierre. |
| Simuladores | 19 | `e01`–`e19`: escena canvas animada, gráfica SVG, controles, lecturas, ecuaciones, semáforos, reto, guía de aprendizaje y fuentes. |
| Mapa físico | 10 puntos | Hotspots numerados y activables por teclado, con enlace al tema y a los simuladores relacionados. |
| Glosario visual | 23 fichas | Símbolo, explicación en lenguaje llano, ejemplo numérico y enlace al banco donde se mueve. |
| Diagnósticos | 8 casos | Situaciones de campo con explicación y simulador de origen. |
| Banco numérico | Generado | Preguntas desde los presets reales, con tolerancia del 2 % y solución paso a paso. |
| Fuentes | 14 | Guion, slides, documentos del curso, guía de ejercicios y normas IEC 60060/60071/60099/60815. |

---

## Inicio rápido

Requiere **Node ≥ 20.19** (probado con Node 22).

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # 30 pruebas: números, render de los 19 bancos e interacciones DOM
npm run build      # tsc -b + Vite, salida en dist/
npm run preview    # vista previa de producción en :4173
```

El proyecto no depende de fuentes, imágenes, iconos ni APIs externas: todo se dibuja con canvas/SVG y el progreso se guarda en `localStorage`.

---

## Cómo se usa

1. **Inicio:** explora el mapa físico de la línea o entra por el Tema 1, que incluye una balanza «esfuerzo vs. soporte vs. pararrayos».
2. **Catálogo:** busca un fenómeno (`Bogotá`, `viento`, `pararrayos`, `corona`…) o filtra por etapa física.
3. **Tema:** lee el caso real y la analogía; abre los simuladores asociados.
4. **Simulador:** carga un preset, mueve controles, pausa/repite la escena, observa lecturas y gráfica, y cierra el reto. Los «requisitos» deben cumplirse en el estado actual; los «hitos» quedan registrados al alcanzarlos una vez.
5. **Simulacro:** 8 preguntas por ronda (5 cálculos + 3 diagnósticos), con soluciones que enlazan de vuelta al laboratorio.
6. **Fuentes:** consulta la bibliografía y la bitácora de correcciones.

Rutas por hash: `#/`, `#/catalogo`, `#/glosario`, `#/tema/1`…`#/tema/13`, `#/exp/e01`…`#/exp/e19`, `#/practica`, `#/fuentes`.

---

## Arquitectura

```
index.html
vite.config.ts            Vite + Vitest (jsdom), base './', host 0.0.0.0
src/
  main.tsx                Entrada React 19 + StrictMode
  App.tsx                 Rutas por hash, progreso, XP, export/import, topbar
  styles.css              Atlas de ingeniería diurno, responsive, sin recursos externos
  lib/
    num.ts                Modelos numéricos compartidos y anclas del curso
    draw.ts               Toolkit de ilustración física 2D para canvas
    storage.ts            Progreso v2 + copia de seguridad + migración LAB·CA v2
  content/
    topics.ts             13 temas, 4 etapas, mapa tema→experimentos
    bibliography.ts       14 fuentes y claves normativas
    glossary.ts           23 fichas visuales
    lineMap.ts            10 hotspots del panorama físico
    practica.ts           8 diagnósticos + banco numérico sembrado
  experiments/
    types.ts              Contrato de Experiment, Goal, Quiz, ParamDef…
    index.ts              Orden secuencial e01→e19 y vecinos
    common.tsx            Clasificación de frentes de onda
    defs/                 e01–e19 en 6 archivos temáticos
  components/
    Icons.tsx             Iconos vectoriales y emblema
    ui.tsx                Canvas, Plot, BarComparisonPlot, controles, lecturas…
    LineMap.tsx           Panorama SVG interactivo
    Home.tsx              Hero, blueprint, mapa, progreso, currículo
    CatalogView.tsx       Catálogo con búsqueda y filtros
    TopicView.tsx         Ficha de tema + mini-simulador del Tema 1
    ExperimentView.tsx    Bancada completa de cada simulador
    GlossaryView.tsx      Diccionario visual
    PracticeView.tsx      Simulacro de sustentación
    SourcesView.tsx       Fuentes y bitácora de correcciones
    ErrorBoundary.tsx     Pantalla de recuperación
  test/setup.ts           Stub de canvas, rAF y matchMedia para jsdom
  *.test.ts / *.test.tsx  30 pruebas
docs/
  CORRECCIONES_NORMATIVAS.md  Bitácora detallada y convenciones de cálculo
```

---

## Correcciones respecto a la versión 2

AislaLab conserva el currículo, los 19 experimentos, los 8 diagnósticos y las 14 fuentes, pero corrige de forma explícita los problemas detectados en la auditoría:

- `Siguiente` ya no salta `e02`, `e03`, `e06`, `e09`, `e11`, `e14` ni `e19`: el orden es secuencial de `e01` a `e19`.
- La miga de pan vuelve al inicio, no al Tema 1.
- `e02` admite el caso de 500 kV con `Uₘ = 550 kV`.
- `e07` sube la torre con la altitud; `e09` corrige el CFO por `δ` una sola vez.
- `e10` mece la cadena hacia la torre; `e12` dibuja arcos EGM a escala.
- `e15` conserva el signo de `Γ`, permite `Z₂ = 0` y usa Bewley físico.
- `e17` calcula `U₀` y `r_eq` del haz; `e18` usa las seis banderas reales y barras esfuerzo vs. soporte.
- `e19` usa absorción en ley de potencia y escala logarítmica con 30/60/600 s.

Detalle completo, convenciones y anclas numéricas: [`docs/CORRECCIONES_NORMATIVAS.md`](docs/CORRECCIONES_NORMATIVAS.md). La misma bitácora está disponible dentro de la app en **Fuentes**.

---

## Anclas numéricas verificadas

| Caso | Resultado |
| --- | --- |
| `Uₘ = 245 kV` | `U_f = 141,45 kV` RMS · `Û_f = 200,04 kV` cresta |
| Maniobra `2,5 p.u. × 1,15` | `575,12 kV` |
| `τ₁ = 0,41 µs`, `τ₂ = 66 µs` | `1,2/48,5 µs` · `t_p ≈ 2,1 µs` |
| Bogotá 2.640 m, 14 °C | `p = 73,378 kPa` · `δ = 0,7393` · `700·δ^0,75 = 558,11 kV` |
| `245 kV`, `k_f = 25 mm/kV` | `6.125 mm` · 21 discos · `3,066 m` |
| `U₅₀ = 700 kV`, `σ = 6 %`, `P = 10 %` | `646,17 kV` |
| Varilla 3 m, `ρ = 300 Ω·m` | `101,81 Ω` |
| `Z₁ = 400 Ω`, `Z₂ = 100 Ω` | `Γ = −0,60` · `τ = 0,40` |
| `Z₁ = 400 Ω`, `Z₂ = 2.000 Ω` | `Γ = 0,667` · `τ = 1,667` |
| ZnO `U_res = 600 kV`, `BIL = 1.050 kV` | `M = 59,1 %` con 12 m de conexión |
| Peek `U = 150`, `U₀ = 120` | `10,29 kW/km` |

---

## Progreso y despliegue

- Clave actual: `aislalab.progress`; copia: `aislalab.progress.backup`; migración desde `labca.v2.progress`.
- Visitar un simulador nuevo suma 5 XP; cerrar un reto por primera vez suma 20 XP. Las estrellas dependen de intentos fallidos y uso de pista.
- Exportar/importar avance en JSON; reiniciar con confirmación. En modo privado o iframe restringido la app sigue funcionando en memoria.
- `vite.config.ts` usa `base: './'`, `host: 0.0.0.0` y `allowedHosts: true` para previsualizaciones y GitHub Pages.
- `.github/workflows/deploy.yml` ejecuta `npm ci`, `npm test`, `npm run build` y publica `dist/` en Pages.

> Las cifras y modelos son didácticos y están acotados en cada simulador. Para un proyecto real se consultan las normas vigentes, catálogos de fabricante y estudios de coordinación de aislamiento.

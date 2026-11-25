# IRONCLUB — Práctica 3.1 Responsive
Proyecto de maquetación responsive (landing + formulario) con Vite y Sass.

## Inicio
1. Instala Node.js.
2. En la carpeta del proyecto ejecuta `npm install`.
3. `npm run dev` para arrancar Vite.
4. `npm run build` genera el sitio en `docs/`.

## Estructura
```text
IRONCLUB/
├── index.html
├── formulario.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── main.js
│   ├── form.js
│   ├── assets/             # recursos gráficos
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _components.scss
│       ├── _layout.scss
│       ├── _globals.scss
│       └── main.scss
└── docs/                   # salida de build para GitHub Pages
```

Las dos páginas HTML se mantienen en la raíz del proyecto, como entradas de Vite para el sitio multipágina. El formulario es una demostración de interfaz: no guarda ni envía datos. Las imágenes se cargan desde Unsplash y requieren conexión.

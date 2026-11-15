# Portfolio

Sitio personal de un estudiante de Licenciatura en Sistemas: presentación, proyectos, CV, aptitudes, certificaciones y contacto.

HTML, CSS y JavaScript sin frameworks ni dependencias. No necesita `npm install` ni build.

## Cómo editar el contenido

Todo el texto está en **`js/content.js`**. Cambiá nombre, proyectos, materias, certificaciones, etc. ahí; el sitio se arma solo.

- **Proyectos:** se muestran de a 8 por página en desktop (2 filas de 4), con paginación abajo. Cada uno lleva un botón **Código** (GitHub) y opcionalmente **Demo** (sitio publicado). Para la captura, poné la imagen en `assets/proyectos/` y su ruta en `imagen`.
- **CV:** la sección muestra embebido el archivo `assets/cv.pdf` del repo. Para actualizarlo, reemplazá ese PDF por uno nuevo con el mismo nombre; no hay que tocar nada más, así el sitio y el PDF nunca quedan desincronizados. El que viene es de ejemplo.
- **Contacto:** teléfono (abre WhatsApp), email, LinkedIn y GitHub. Teléfono y email tienen botón para copiar.
- Cualquier campo vacío (`""`) o lista vacía (`[]`) se oculta.

Colores y tipografía están como variables al principio de `css/styles.css`. Tiene modo oscuro automático según la configuración del sistema.

## Verlo en tu computadora

Abrí `index.html` en el navegador, o levantá un servidor local:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicarlo en GitHub Pages

1. Creá el repositorio y subí los archivos:
   ```bash
   git init
   git add .
   git commit -m "Primera versión del portfolio"
   git branch -M main
   git remote add origin https://github.com/USUARIO/portfolio.git
   git push -u origin main
   ```
2. En GitHub: **Settings › Pages › Build and deployment › Source: GitHub Actions**.
3. Cada push a `main` publica el sitio en `https://USUARIO.github.io/portfolio/` (el workflow está en `.github/workflows/deploy.yml`).

## Estructura

```
├── index.html
├── css/styles.css
├── js/
│   ├── content.js   ← contenido editable
│   └── main.js      ← arma la página a partir de content.js
├── assets/
│   ├── favicon.svg
│   └── cv.pdf       ← reemplazalo por el CV real
└── .github/workflows/deploy.yml
```

## Licencia

MIT

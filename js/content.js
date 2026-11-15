/*
 * ─────────────────────────────────────────────────────────────
 *  TODO EL CONTENIDO DEL PORTFOLIO VIVE EN ESTE ARCHIVO.
 *  Editá los textos acá; no hace falta tocar el HTML ni el CSS.
 *  Los campos vacíos ("") o las listas vacías ([]) se ocultan solos.
 * ─────────────────────────────────────────────────────────────
 */
const LOREM_CORTO = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

const PORTFOLIO = {
  nombre: "Nombre Apellido",
  rol: "Estudiante de Licenciatura en Sistemas",
  ubicacion: "Ciudad, País",
  resumen:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  disponibilidad: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  sobreMi: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],

  datos: [
    { etiqueta: "Ubicación", valor: "Ciudad, País" },
    { etiqueta: "Modalidad", valor: "Presencial / híbrida / remota" },
    { etiqueta: "Idiomas", valor: "Idioma (nivel), idioma (nivel)" },
  ],

  // Se muestran de a 8 por página en desktop (2 filas de 4).
  // imagen: ruta a una captura (ej. "assets/proyectos/turnero.png"). Si queda vacía, se ve un recuadro de reemplazo.
  // repo: link al código (botón con ícono de GitHub). demo: link al sitio publicado (botón con ícono web).
  proyectos: [
    { nombre: "Proyecto uno", anio: "2026", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "https://ejemplo.com" },
    { nombre: "Proyecto dos", anio: "2026", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "" },
    { nombre: "Proyecto tres", anio: "2026", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "https://ejemplo.com" },
    { nombre: "Proyecto cuatro", anio: "2025", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "" },
    { nombre: "Proyecto cinco", anio: "2025", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "https://ejemplo.com" },
    { nombre: "Proyecto seis", anio: "2025", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "" },
    { nombre: "Proyecto siete", anio: "2025", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "https://ejemplo.com" },
    { nombre: "Proyecto ocho", anio: "2024", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "" },
    { nombre: "Proyecto nueve", anio: "2024", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "https://ejemplo.com" },
    { nombre: "Proyecto diez", anio: "2024", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "" },
    { nombre: "Proyecto once", anio: "2023", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "" },
    { nombre: "Proyecto doce", anio: "2023", descripcion: LOREM_CORTO, stack: ["Tecnología", "Tecnología"], imagen: "", repo: "https://github.com/sebastiannogues99", demo: "https://ejemplo.com" },
  ],

  // El CV se muestra embebido desde este PDF del repo.
  // Para actualizarlo, reemplazá el archivo assets/cv.pdf (mismo nombre).
  cv: {
    archivo: "assets/cv.pdf",
  },

  aptitudes: [
    { grupo: "Lenguajes", items: ["Lenguaje", "Lenguaje", "Lenguaje", "Lenguaje"] },
    { grupo: "Frameworks y librerías", items: ["Framework", "Framework", "Framework"] },
    { grupo: "Bases de datos", items: ["Base de datos", "Base de datos"] },
    { grupo: "Herramientas", items: ["Herramienta", "Herramienta", "Herramienta", "Herramienta"] },
    { grupo: "Habilidades blandas", items: ["Habilidad", "Habilidad", "Habilidad"] },
  ],

  certificaciones: [
    { nombre: "Nombre de la certificación", emisor: "Institución emisora", fecha: "20XX", url: "https://ejemplo.com/credencial" },
    { nombre: "Nombre de la certificación", emisor: "Institución emisora", fecha: "20XX", url: "" },
    { nombre: "Nombre de la certificación", emisor: "Institución emisora", fecha: "20XX", url: "" },
  ],

  contacto: {
    // Se muestra tal cual. El link abre WhatsApp con el número en formato internacional.
    telefono: "+54 9 11 5957 6091",
    whatsapp: "5491159576091",
    email: "sebastiannogues99@gmail.com",
    linkedin: "sebastian-nogues",   // usuario: linkedin.com/in/<usuario>
    github: "sebastiannogues99",    // usuario: github.com/<usuario>
  },

  actualizado: "mes de 20XX",
};

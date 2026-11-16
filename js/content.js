/*
 * ─────────────────────────────────────────────────────────────
 *  TODO EL CONTENIDO DEL PORTFOLIO VIVE EN ESTE ARCHIVO.
 *  Editá los textos acá; no hace falta tocar el HTML ni el CSS.
 *  Los campos vacíos ("") o las listas vacías ([]) se ocultan solos.
 * ─────────────────────────────────────────────────────────────
 */
const PORTFOLIO = {
  nombre: "Sebastián Nogues",
  rol: "Estudiante de Licenciatura en Sistemas",
  ubicacion: "Universidad Nacional de Lanús",
  resumen:
    "Estudiante de Licenciatura en Sistemas, con bases sólidas de programación y bases de datos con experiencia real en administración, atención al cliente y soporte operativo. Listo para aportar compromiso, resolución de problemas y ganas de seguir aprendiendo en un equipo de tecnología.",
  disponibilidad: "",

  sobreMi: [
    "Soy estudiante de Licenciatura en Sistemas y acumulé experiencia en tareas administrativas, atención al cliente y soporte operativo. Me ocupé de la gestión administrativa general y la documentación comercial, la elaboración de presupuestos y remitos, el seguimiento de clientes y proveedores y el control y reposición de stock.",
    "En Ortopedia BM Medicine (marzo 2023 – diciembre 2024) mejoré la organización operativa diaria y reduje las demoras administrativas. Antes, en Doña Alicia Fiambrería (enero 2019 – abril 2020), trabajé en el manejo de caja, la atención al cliente y la reposición de mercadería, colaborando en el orden del local y en la experiencia de atención. Hoy busco seguir creciendo en el área de sistemas, con foco en programación y bases de datos.",
  ],

  datos: [
    { etiqueta: "Ubicación", valor: "Lanús Oeste, Buenos Aires, Argentina" },
    { etiqueta: "Formación", valor: "Licenciatura en Sistemas (en curso)" },
    { etiqueta: "Experiencia", valor: "Administración, atención al cliente y soporte operativo" },
  ],

  // Se muestran de a 8 por página en desktop (2 filas de 4).
  // imagen: ruta a una captura (ej. "assets/proyectos/turnero.png"). Si queda vacía, se ve un recuadro de reemplazo.
  // repo: link al código (botón con ícono de GitHub). demo: link al sitio publicado (botón con ícono web).
  proyectos: [
    {
      nombre: "Portfolio",
      anio: "2026",
      descripcion: "Mi sitio personal: presentación, CV, aptitudes y contacto. Hecho con HTML, CSS y JavaScript sin frameworks.",
      stack: ["HTML", "CSS", "JavaScript"],
      imagen: "",
      repo: "https://github.com/sebastiannogues99/portfolio",
      demo: "https://sebastian-nogues.vercel.app/",
    },
  ],

  // El CV se muestra embebido desde este PDF del repo.
  // Para actualizarlo, reemplazá el archivo assets/cv.pdf (mismo nombre).
  cv: {
    archivo: "assets/cv.pdf",
  },

  aptitudes: [
    { grupo: "Lenguajes", items: ["C", "JavaScript", "Python"] },
    { grupo: "Bases de datos", items: ["MySQL"] },
    { grupo: "Herramientas", items: ["Microsoft Excel", "Microsoft PowerPoint"] },
    {
      grupo: "Habilidades blandas",
      items: [
        "Comunicación efectiva",
        "Trabajo en equipo",
        "Resolución de problemas",
        "Orientación al cliente",
        "Gestión del tiempo",
        "Adaptabilidad",
        "Aprendizaje continuo",
        "Responsabilidad",
        "Autonomía",
        "Capacidad analítica",
      ],
    },
  ],

  certificaciones: [],

  contacto: {
    // Se muestra tal cual. El link abre WhatsApp con el número en formato internacional.
    telefono: "+54 11 5957-6091",
    whatsapp: "5491159576091", // el CV no incluye el 9 de celular; se agrega para que abra WhatsApp
    email: "sebastiannogues99@gmail.com",
    linkedin: "sebastian-nogues",   // usuario: linkedin.com/in/<usuario>
    github: "sebastiannogues99",    // usuario: github.com/<usuario>
  },

  actualizado: "noviembre de 2026",
};

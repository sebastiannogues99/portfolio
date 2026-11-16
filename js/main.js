/* Dibuja el portfolio a partir de PORTFOLIO (js/content.js). */
(function () {
  "use strict";

  // PORTFOLIO se declara en content.js (scope global compartido entre scripts).
  const P = typeof PORTFOLIO !== "undefined" ? PORTFOLIO : null;
  if (!P) return;

  const $ = (sel) => document.querySelector(sel);

  /** Crea un elemento con atributos y contenido (texto o nodos). */
  function el(tag, attrs = {}, ...hijos) {
    const nodo = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === "class") nodo.className = v;
      else nodo.setAttribute(k, v === true ? "" : v);
    }
    for (const h of hijos.flat()) {
      if (h === undefined || h === null || h === "" || h === false) continue;
      nodo.append(h instanceof Node ? h : document.createTextNode(String(h)));
    }
    return nodo;
  }

  /* ── Íconos (SVG inline) ────────────────────────── */
  const ICONOS = {
    github: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    web: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></g></svg>',
    "enlace-externo": '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></g></svg>',
    descarga: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 19h16"/></g></svg>',
    telefono: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    copiar: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></g></svg>',
    ok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };
  function icono(nombre, clase = "icono") {
    const span = el("span", { class: clase });
    span.innerHTML = ICONOS[nombre];
    return span;
  }

  const ocultarSiVacio = (nodo, vacio) => { if (vacio && nodo) nodo.hidden = true; };

  /* ── Campos simples ─────────────────────────────── */
  document.querySelectorAll("[data-campo]").forEach((n) => {
    const v = P[n.dataset.campo];
    if (v) n.textContent = v;
    else n.hidden = true;
  });

  document.title = `${P.nombre} | ${P.rol}`;
  $("#portada-rol").textContent = [P.rol, P.ubicacion].filter(Boolean).join(" en ") + ".";

  /* ── Sobre mí ───────────────────────────────────── */
  const sobre = $("#sobre-texto");
  (P.sobreMi || []).forEach((p) => sobre.append(el("p", {}, p)));
  const datos = $("#sobre-datos");
  (P.datos || []).forEach((d) => {
    datos.append(el("div", {}, el("dt", {}, d.etiqueta), el("dd", {}, d.valor)));
  });
  ocultarSiVacio(datos, !(P.datos || []).length);
  ocultarSiVacio($("#sobre-mi"), !(P.sobreMi || []).length && !(P.datos || []).length);

  /* ── Proyectos con paginación ───────────────────── */
  const proyectos = P.proyectos || [];
  const lista = $("#lista-proyectos");
  const paginacion = $("#paginacion");
  $("#cuenta-proyectos").textContent = proyectos.length ? `(${proyectos.length})` : "";
  // La sección queda siempre visible (con un mensaje) aunque todavía no haya proyectos cargados.
  $("#proyectos-vacio").hidden = proyectos.length > 0;
  ocultarSiVacio(lista, !proyectos.length);
  ocultarSiVacio(paginacion, !proyectos.length);

  // Proyectos por página según el ancho: 2 filas de 4 en desktop.
  const tamanios = [
    { mq: window.matchMedia("(min-width: 1000px)"), porPagina: 8 },
    { mq: window.matchMedia("(min-width: 640px)"), porPagina: 6 },
  ];
  const porPagina = () => (tamanios.find((t) => t.mq.matches) || { porPagina: 4 }).porPagina;
  let primerIndice = 0; // se conserva al cambiar de tamaño de pantalla

  function tarjeta(pr) {
    const imagen = pr.imagen
      ? el("img", { src: pr.imagen, alt: `Captura de ${pr.nombre}`, loading: "lazy" })
      : el("span", {}, "Captura del proyecto");

    const enlaces = el("div", { class: "tarjeta__enlaces" },
      pr.repo && el("a", { class: "boton-chico boton-chico--codigo", href: pr.repo, target: "_blank", rel: "noopener" },
        icono("github"), "Código"),
      pr.demo && el("a", { class: "boton-chico boton-chico--demo", href: pr.demo, target: "_blank", rel: "noopener" },
        icono("web"), "Demo")
    );

    return el("li", { class: "tarjeta" },
      el("div", { class: "tarjeta__imagen" + (pr.imagen ? "" : " tarjeta__imagen--vacia") }, imagen),
      el("div", { class: "tarjeta__cuerpo" },
        el("p", { class: "tarjeta__cabecera" },
          el("span", { class: "tarjeta__nombre" }, pr.nombre),
          el("span", { class: "tarjeta__anio" }, pr.anio)
        ),
        pr.descripcion && el("p", { class: "tarjeta__descripcion" }, pr.descripcion),
        pr.stack && pr.stack.length &&
          el("ul", { class: "etiquetas", "aria-label": "Tecnologías" }, pr.stack.map((t) => el("li", {}, t))),
        enlaces.childNodes.length ? enlaces : null
      )
    );
  }

  function mostrarPagina(pagina, { enfocar = false } = {}) {
    const n = porPagina();
    const totalPaginas = Math.max(1, Math.ceil(proyectos.length / n));
    pagina = Math.min(Math.max(pagina, 1), totalPaginas);
    primerIndice = (pagina - 1) * n;

    lista.replaceChildren(...proyectos.slice(primerIndice, primerIndice + n).map(tarjeta));

    paginacion.replaceChildren();
    paginacion.hidden = totalPaginas <= 1;
    if (totalPaginas <= 1) return;

    const boton = (texto, destino, attrs = {}) =>
      el("button", { type: "button", class: "paginacion__boton", "data-pagina": destino, ...attrs }, texto);

    const items = [
      boton("Anterior", pagina - 1, { class: "paginacion__boton paginacion__boton--texto", disabled: pagina === 1 }),
    ];
    for (let i = 1; i <= totalPaginas; i++) {
      items.push(boton(String(i), i, {
        class: "paginacion__boton paginacion__num",
        "aria-label": `Página ${i}`,
        "aria-current": i === pagina ? "page" : null,
      }));
    }
    items.push(boton("Siguiente", pagina + 1, { class: "paginacion__boton paginacion__boton--texto", disabled: pagina === totalPaginas }));
    paginacion.append(el("ul", {}, items.map((b) => el("li", { class: b.classList.contains("paginacion__num") ? "paginacion__item-num" : null }, b))));
    paginacion.append(el("p", { class: "paginacion__estado", "aria-live": "polite" },
      `Página ${pagina} de ${totalPaginas}`));

    if (enfocar) {
      const seccion = $("#proyectos");
      if (seccion.getBoundingClientRect().top < 0) seccion.scrollIntoView({ block: "start" });
      paginacion.querySelector('[aria-current="page"]').focus({ preventScroll: true });
    }
  }

  paginacion.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-pagina]");
    if (b && !b.disabled) mostrarPagina(Number(b.dataset.pagina), { enfocar: true });
  });
  tamanios.forEach(({ mq }) =>
    mq.addEventListener("change", () => mostrarPagina(Math.floor(primerIndice / porPagina()) + 1)));
  if (proyectos.length) mostrarPagina(1);

  /* ── CV embebido ────────────────────────────────── */
  const archivoCV = P.cv && P.cv.archivo;
  if (archivoCV) {
    // Parámetros de PDF.js/visor nativo: oculta la barra de herramientas del navegador
    // para que el PDF se vea integrado en la tarjeta en lugar del visor crudo de Chrome.
    $("#cv-objeto").data = `${archivoCV}#toolbar=0&navpanes=0&view=FitH`;
    $("#cv-descarga").href = archivoCV;
    $("#cv-descarga").download = (P.cv && P.cv.nombreDescarga) || "";
    $("#cv-descarga-icono").innerHTML = ICONOS.descarga;
    $("#cv-abrir").href = archivoCV;
    $("#cv-abrir").append(icono("enlace-externo"));
    const nombre = (P.cv && P.cv.nombreDescarga) || archivoCV.split("/").pop();
    $("#cv-nombre").textContent = nombre;
  } else {
    $("#cv").hidden = true;
  }

  /* ── Aptitudes y certificaciones ────────────────── */
  const apt = $("#lista-aptitudes");
  (P.aptitudes || []).forEach((g) => {
    apt.append(el("div", { class: "aptitudes__grupo" },
      el("dt", {}, g.grupo),
      el("dd", {}, el("ul", { class: "etiquetas" }, g.items.map((i) => el("li", {}, i))))
    ));
  });

  const certs = P.certificaciones || [];
  const listaCerts = $("#lista-certificaciones");
  certs.forEach((ce) => {
    listaCerts.append(el("li", {},
      el("div", {},
        el("p", { class: "cert__nombre" }, ce.nombre),
        el("p", { class: "cert__emisor" }, [ce.emisor, ce.fecha].filter(Boolean).join(", "))
      ),
      ce.url && el("a", { href: ce.url, target: "_blank", rel: "noopener" }, "Ver credencial")
    ));
  });
  ocultarSiVacio(listaCerts, !certs.length);
  ocultarSiVacio(listaCerts.previousElementSibling, !certs.length);

  /* ── Contacto ───────────────────────────────────── */
  const ct = P.contacto || {};

  // Alternativa para navegadores sin Clipboard API (o sin permiso).
  function copiarViejo(valor) {
    const area = el("textarea", { readonly: true, style: "position:fixed;opacity:0" });
    area.value = valor;
    document.body.append(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    area.remove();
    return ok;
  }

  function botonCopiar(valor, queCopia) {
    const texto = el("span", {}, "Copiar");
    const b = el("button", { type: "button", class: "copiar", "aria-label": `Copiar ${queCopia}` },
      icono("copiar"), texto);
    b.addEventListener("click", async () => {
      let ok = true;
      try { await navigator.clipboard.writeText(valor); } catch { ok = copiarViejo(valor); }
      b.replaceChildren(icono(ok ? "ok" : "copiar"), el("span", {}, ok ? "Copiado" : "No se pudo copiar"));
      b.classList.toggle("copiar--hecho", ok);
      clearTimeout(b._t);
      b._t = setTimeout(() => {
        b.replaceChildren(icono("copiar"), el("span", {}, "Copiar"));
        b.classList.remove("copiar--hecho");
      }, 2000);
    });
    return b;
  }

  const filas = [];
  if (ct.telefono) filas.push({
    icono: "telefono", nombre: "WhatsApp", texto: ct.telefono,
    url: ct.whatsapp ? `https://wa.me/${ct.whatsapp}` : null,
    copiar: ct.telefono.replace(/\s/g, ""), queCopia: "teléfono",
  });
  if (ct.email) filas.push({
    icono: "email", nombre: "Email", texto: ct.email, url: null, copiar: ct.email, queCopia: "email",
  });
  if (ct.linkedin) filas.push({
    icono: "linkedin", nombre: "LinkedIn", texto: `/${ct.linkedin}`, url: `https://www.linkedin.com/in/${ct.linkedin}`,
  });
  if (ct.github) filas.push({
    icono: "github", nombre: "GitHub", texto: `/${ct.github}`, url: `https://github.com/${ct.github}`,
  });

  const listaContacto = $("#lista-contacto");
  filas.forEach((f) => {
    const valor = f.url
      ? el("a", { class: "contacto__valor", href: f.url, target: "_blank", rel: "noopener", "aria-label": `${f.nombre}: ${f.texto}` }, f.texto)
      : el("span", { class: "contacto__valor" },
          // En pantallas angostas el email corta después de la @ y no en cualquier letra.
          ...f.texto.split("@").flatMap((parte, i) => (i ? ["@", el("wbr"), parte] : [parte])));
    listaContacto.append(el("li", { class: "contacto__fila" },
      icono(f.icono, "contacto__icono"),
      valor,
      f.copiar && botonCopiar(f.copiar, f.queCopia)
    ));
  });
  ocultarSiVacio($("#contacto"), !filas.length);

  /* ── Enlaces a secciones ocultas ────────────────── */
  // Si una sección quedó vacía (por ejemplo Proyectos), se oculta su enlace de navegación.
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const destino = document.querySelector(a.getAttribute("href"));
    if (destino && destino.hidden) (a.closest("li") || a).hidden = true;
  });

  /* ── Pie ────────────────────────────────────────── */
  $("#pie-texto").textContent =
    `${P.nombre}, ${new Date().getFullYear()}.` + (P.actualizado ? ` Actualizado en ${P.actualizado}.` : "");
})();

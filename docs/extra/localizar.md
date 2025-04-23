
# 🎨 Localizar Clases CSS de Temas en Docusaurus

## 🧠 ¿Qué es?
Docusaurus usa **temas y estilos modularizados**. Localizar las clases CSS activas te permite **personalizar el diseño**, corregir bugs o extender la funcionalidad visual de tu sitio.

---

## 🔍 ¿Dónde buscar?
```markdown
- Panel "Elements" de DevTools
- Inspeccionar componentes visuales: botones, encabezados, tarjetas…
- Buscar clases como: `.theme-doc-markdown`, `.navbar__item`, `.alert--warning`
```

---

## 🧭 Flujo Rápido para Detectar Clases
```markdown
1. Ctrl+Shift+C para activar el selector de elementos
2. Clic sobre el componente (ej: botón del navbar)
3. En el panel de la derecha (Styles), observar clases aplicadas
4. Revisar si viene de un archivo `.module.css`, `.scss` o tailwind
5. Buscar la clase en los archivos fuente (`src/theme`, `src/css`)
```

---

## 🎯 Herramientas Útiles
```markdown
- Herramienta "Computed" en DevTools → ver cascada final
- Usar Ctrl+F para buscar clases dentro del inspector
- Extensiones como CSS Viewer (muestra estilos en hover)
```

---

## 🧪 Casos de Uso
```markdown
- 💅 Personalizar color de fondo del sidebar
- 🐞 Corregir margin/padding inconsistente
- 🌗 Adaptar estilos para dark/light theme
```

---

## 🧰 Tips Pro
```diff
+ Usa "Ctrl+Click" en VS Code para saltar a definiciones si estás en el CSS
+ Para temas de comunidad, busca overrides en `@theme` o `@docusaurus/theme-classic`
+ Prefiere `:root` y variables CSS si quieres cambiar temas globales
```

---

## Ejemplo Práctico
```html
<!-- HTML inspeccionado -->
<button class="button button--primary margin--sm">

<!-- Archivo fuente -->
.button {
  border-radius: 0.25rem;
}
.button--primary {
  background-color: var(--ifm-color-primary);
}
```

Identificar y modificar estas clases te da **control total sobre el look & feel** de tu sitio en Docusaurus.

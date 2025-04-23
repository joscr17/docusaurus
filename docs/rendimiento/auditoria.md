
# 🌟 Auditoría con Lighthouse

## 🔍 ¿Qué es Lighthouse?
**Lighthouse** es una herramienta automática de auditoría que evalúa el rendimiento, accesibilidad, mejores prácticas, SEO y PWA de un sitio web.

---

## 🚀 Cómo Ejecutarlo
```bash
# 1. Abrir DevTools
F12 o Ctrl+Shift+I (Cmd+Opt+I en Mac)

# 2. Ir a la pestaña "Lighthouse"
Puede estar oculta, haz clic derecho sobre las pestañas para activarla.

# 3. Elegir qué auditar:
- Performance
- Accessibility
- Best Practices
- SEO
- Progressive Web App

# 4. Seleccionar dispositivo:
Mobile / Desktop

# 5. Clic en "Analyze"
```

---

## 📊 Resultados
```markdown
- 🔢 Puntajes del 0 al 100 por categoría
- 🛠️ Diagnóstico detallado por sección
- 📌 Recomendaciones prácticas
- 🧪 Captura de pantalla simulada
```

---

## 🧠 Flujo Profesional de Uso
```markdown
1. Ejecutar Lighthouse en modo incógnito (evita extensiones)
2. Seleccionar modo Mobile para simular usuario real
3. Revisar recomendaciones críticas primero (rojo/naranja)
4. Aplicar cambios → volver a ejecutar
```

---

## 📂 Exportar Reportes
```diff
+ Export como JSON o HTML
+ Compartible con equipo de desarrollo y diseño
+ Usable en CI/CD para testing automático
```

---

## 🧰 Buenas Prácticas Lighthouse
```diff
+ Optimiza imágenes → Usa formatos WebP o AVIF
+ Minimiza JS/CSS → Usa técnicas de minificación y splitting
+ Usa lazy loading → Mejora velocidad de carga inicial
+ Define etiquetas <meta>, lang, y títulos accesibles
```

---

## 🔄 Automatización con Lighthouse CI
Puedes correr Lighthouse en entornos de integración continua (CI):
```bash
npm install -g @lhci/cli
lhci autorun
```

---

## 🧪 Ejemplo Visual
```plaintext
Performance:     78/100
Accessibility:   92/100
Best Practices:  100/100
SEO:             89/100
```

✅ Cada número representa oportunidades claras de mejora en la experiencia del usuario.


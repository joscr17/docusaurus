
# ♿ Análisis de Accesibilidad (Accessibility)

## 🌐 ¿Qué es la Accesibilidad Web?
La accesibilidad busca que sitios y aplicaciones web sean utilizables por personas con discapacidades visuales, auditivas, cognitivas o motrices.

DevTools ofrece herramientas para auditar y mejorar la accesibilidad de los elementos HTML.

---

## 🧭 Cómo Activarlo en DevTools
```bash
# 1. Selecciona un elemento:
Haz clic en el DOM o usa el selector (🔍)

# 2. Pestaña "Accessibility":
Ubicada en el panel derecho (puede estar oculta → click derecho en pestañas y activar)

# 3. Revisión de atributos:
Verás propiedades como:
- Nombre accesible (Accessible name)
- Rol (Role)
- Estado (State)
- Contraste de colores
```

---

## 🧪 Casos Comunes
```markdown
- 💬 Verificar si botones o links tienen texto accesible
- 🎧 Asegurar que los lectores de pantalla detecten el contenido
- 🔁 Evaluar la navegación por teclado (tabindex, aria-hidden)
- 🎨 Revisar contraste de texto para visibilidad
```

---

## 🛠️ Flujo Profesional de Análisis
```markdown
1. 🔍 Inspeccionar un componente visual (botón, input, card)
2. 📑 Revisar el "Accessible name" generado
3. 🛑 Detectar elementos sin etiquetas, roles o con bajo contraste
4. 🧼 Corregir con atributos ARIA, roles semánticos y estilos adecuados
```

---

## 🧰 Buenas Prácticas
```diff
+ aria-label → Provee descripción accesible
+ role="button" → Define comportamiento semántico
+ tabindex="0" → Hace el elemento navegable vía teclado
+ alt="" → Descripción alternativa para imágenes
```

---

## 🧪 Ejemplo Práctico
```html
<!-- ❌ No accesible -->
<button><img src="save-icon.png"></button>

<!-- ✅ Accesible -->
<button aria-label="Guardar">
  <img src="save-icon.png" alt="Icono de Guardar">
</button>
```

---

## 📋 Tip Extra: Usa Lighthouse
Desde DevTools → pestaña "Lighthouse" → Ejecuta auditoría con opción de "Accessibility" para obtener reportes detallados con recomendaciones automáticas.


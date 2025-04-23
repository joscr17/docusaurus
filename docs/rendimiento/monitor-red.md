
# 🌐 Monitor de Red (Network)

## 📡 ¿Qué es?
La pestaña **Network** en DevTools permite monitorear todas las solicitudes HTTP que realiza una página web, incluyendo recursos como HTML, CSS, JS, imágenes, fuentes y APIs.

---

## 🧭 Cómo Usarlo
```bash
# 1. Abre DevTools (F12 o Ctrl+Shift+I)
# 2. Ve a la pestaña "Network"
# 3. Recarga la página (Ctrl+R o click en el ícono 🔄)
```

---

## 🔍 Información Disponible
```markdown
- ⌛ Tiempo de carga de cada recurso
- 🧾 Tipo y tamaño de archivo
- 📬 Estado de la solicitud (200, 404, 500...)
- 🔗 URL de origen
- ⛓️ Cadena de redirecciones
- 🧠 Headers y payload de respuesta/solicitud
```

---

## 🎯 Casos de Uso Comunes
```markdown
- 🧪 Verificar si una API está fallando
- 📉 Analizar tiempo de carga inicial y diferido
- 🐞 Depurar errores CORS, 404, 500
- 📦 Evaluar tamaño de recursos y compresión
```

---

## 🧠 Flujo Profesional de Análisis
```markdown
1. Activar pestaña Network
2. Filtrar por tipo (JS, XHR, Img, Doc…)
3. Ordenar por "Time" o "Size"
4. Analizar cargas lentas o fallidas
5. Revisar detalles en la pestaña "Headers"
```

---

## ⚙️ Herramientas Adicionales en Network
```diff
+ Preserve log → Guarda historial al navegar entre páginas
+ Disable cache → Simula primer acceso
+ Throttling → Simula conexiones lentas
+ Initiator → Muestra qué recurso disparó la solicitud
+ Waterfall → Visualiza el tiempo de carga de cada recurso
```

---

## 🧰 Tips Pro
```markdown
- Activa "Timing" para ver cuándo empieza cada solicitud
- Usa "Copy as cURL" para replicar una petición en terminal
- Usa "Preview" para ver datos de APIs en formato JSON/XML
```

---

## 🧪 Ejemplo Visual
```plaintext
File         Status  Type   Size    Time
index.html   200     html   2.1 KB  15 ms
style.css    200     css    34 KB   25 ms
main.js      200     js     450 KB  120 ms
api/data     500     xhr    -       300 ms ❌
```

🔎 Una herramienta esencial para el debugging moderno y optimización de rendimiento.

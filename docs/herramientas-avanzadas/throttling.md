
# 🐢 Throttling: Simular Conexiones Lentas

## 📡 ¿Qué es?
El **throttling** permite limitar la velocidad de red para simular condiciones reales como conexiones 3G, 4G o incluso desconexiones, y así probar el rendimiento del sitio.

---

## ⚙️ Cómo Activarlo en DevTools
```bash
# 1. Ir a la pestaña "Network"
Abre DevTools (F12 o Ctrl+Shift+I) y haz clic en "Network"

# 2. Buscar la opción "No throttling"
Está en una lista desplegable en la parte superior de la pestaña

# 3. Seleccionar un perfil:
- Fast 3G
- Slow 3G
- Offline (modo sin conexión)
```

---

## 🎯 Casos de Uso Comunes
```markdown
- 🧪 Probar carga de sitios en redes lentas
- 🐞 Identificar cuellos de botella en JS o imágenes
- 📦 Ver comportamiento de carga diferida (lazy load)
- ❌ Probar UX en caso de pérdida de conexión
```

---

## 🧠 Flujo de Trabajo Profesional
```markdown
1. Activar "Slow 3G" desde la pestaña Network
2. Refrescar el sitio (Ctrl+R / Cmd+R)
3. Observar el tiempo de carga y peticiones bloqueantes
4. Optimizar recursos (imágenes, scripts, fuentes)
```

---

## 🧰 Personalización de Perfiles
Puedes crear tus propios perfiles de throttling:
```bash
1. Click en el menú ⚙️ (configuración) → DevTools → Network Conditions
2. Crear perfil con velocidad de subida/bajada personalizada
```

---

## 🧪 Ejemplo Visual
```diff
+ Slow 3G → 400 kbps bajada / 400 kbps subida / 400ms de latencia
+ Fast 3G → 1.6 Mbps bajada / 750 kbps subida / 150ms de latencia
+ Offline → Sin red
```

---

## 🛠️ Consejo Pro
Combina esta herramienta con Lighthouse o Performance para evaluar **tiempos reales de carga** bajo condiciones adversas. Ideal para mejorar Core Web Vitals.


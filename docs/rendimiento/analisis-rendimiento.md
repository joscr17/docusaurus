
# ⚡ Análisis de Rendimiento (Performance)

## 🎯 ¿Para qué sirve?
La pestaña **Performance** de DevTools permite grabar y analizar en profundidad el comportamiento de una página web: carga, ejecución de scripts, repintado (repaint) y uso de recursos del navegador.

---

## 🔍 ¿Cómo se usa?
```bash
# 1. Abrir DevTools (F12 o Ctrl+Shift+I)
# 2. Ir a la pestaña "Performance"
# 3. Clic en el botón "Record" (🔴)
# 4. Realizar una acción en la página (scroll, click, carga, etc.)
# 5. Detener grabación → Análisis automático
```

---

## 📊 Métricas que Muestra
```markdown
- FPS (frames por segundo)
- Tiempo de scripting
- Tiempo de render y layout
- Consumo de CPU
- Eventos del usuario (clicks, inputs)
```

---

## 🧠 Flujo de Análisis Profesional
```markdown
1. Ejecutar una grabación completa
2. Identificar "jank" (saltos o retrasos en la ejecución)
3. Localizar scripts pesados o renderizados lentos
4. Buscar "long tasks" (tareas que superan 50ms)
5. Optimizar o diferir tareas largas
```

---

## 🧪 Casos de Uso Típicos
```markdown
- 🐢 Detectar cuellos de botella en la carga
- 🎯 Validar fluidez de animaciones y transiciones
- 🔄 Ver repaints excesivos por CSS/JS
- 🧰 Identificar scrolls lentos o bloqueos de UI
```

---

## 🔧 Herramientas Clave
```diff
+ Flame Chart → Visualiza pila de funciones en tiempo
+ Call Tree → Ver detalle de funciones ejecutadas
+ Event Log → Lista exacta de interacciones
+ Summary → Resumen de tiempos clave
```

---

## 💡 Tips Avanzados
```markdown
- Ejecuta en modo incógnito para evitar interferencia de extensiones
- Usa throttling para simular entornos reales
- Filtra por categoría: Scripting, Rendering, Painting
```

---

## 📌 Ejemplo Visual
```plaintext
┌──────────────────────────┐
│ 🔴 Grabación en curso... 
└──────────────────────────┘
| Time (ms) | Task Type     | Detail          |
|----------:|---------------|-----------------|
|     0-45  | Loading       | HTML, CSS       |
|   46-180  | Scripting     | JS pesado       |
| 181-250   | Rendering     | Reflow/Layout   |
| 251-310   | Painting      | Repaint scroll  |
```

🔎 Ideal para detectar y resolver problemas de rendimiento real y mejorar la experiencia del usuario.


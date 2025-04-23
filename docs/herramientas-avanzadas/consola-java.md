
# 🖥️ Consola JavaScript (Console)

## 🔧 ¿Qué es?
La consola es una herramienta en DevTools para ejecutar código JavaScript, ver errores, imprimir datos (`console.log`) y depurar comportamientos dinámicos del sitio.

---

## ⚙️ Cómo Acceder
```bash
# Métodos:
1. F12 → Abre DevTools
2. Ctrl+Shift+I (Cmd+Opt+I en Mac)
3. Click en la pestaña "Console"
4. Esc → Abre consola como panel flotante en la parte inferior
```

---

## 🧪 Comandos Básicos
```javascript
console.log("Hola DevTools");  // Mensaje simple
console.warn("¡Advertencia!"); // Mensaje en amarillo
console.error("¡Error!");      // Mensaje en rojo
```

---

## 🧠 Usos Comunes
```markdown
- 🔍 Ver valores de variables
- 🧪 Probar funciones en vivo
- 🐞 Depurar errores en tiempo real
- 📦 Inspeccionar objetos y elementos del DOM
- 📈 Medir tiempos con `console.time()` y `console.timeEnd()`
```

---

## 📚 Comandos Útiles
```javascript
$0        // Último elemento seleccionado en el panel Elements
document  // Acceder al DOM global
window    // Acceder al objeto global del navegador
$$("div") // Selector tipo jQuery (equivale a querySelectorAll)
```

---

## 🧭 Flujo de Trabajo Profesional
```markdown
1. 🧪 Ejecutar `console.log()` dentro de tu código JS
2. 🧩 Ver los resultados en tiempo real al cargar la página
3. 👀 Analizar errores y advertencias para identificar fallos
4. 🔁 Modificar y reintentar directamente en la consola
```

---

## ⌨️ Atajos Relevantes
```diff
+ ↑ / ↓ → Navega por el historial de comandos
+ Ctrl+L → Limpiar consola
+ Tab → Autocompletar comandos
```

---

## 🧑‍🔧 Ejemplo Práctico: Probar Código Rápido
```javascript
// Calcular el cuadrado de un número
function cuadrado(n) {
  return n * n;
}

cuadrado(5);  // Resultado: 25
```

✅ Muy útil para prototipar ideas sin recargar la página o editar el código fuente.


# 🧭 Depuración de Eventos (Event Listeners)

## 🔍 ¿Qué Son?
Los **event listeners** permiten responder a acciones del usuario como clics, teclas, desplazamientos, etc. DevTools permite inspeccionar, pausar y analizar estos eventos para depuración.

---

## ⚙️ Cómo Verlos en DevTools
```bash
# 1. Selecciona un elemento
Haz clic en el DOM o usa el selector 🔍

# 2. Abre la pestaña "Event Listeners"
En el panel derecho (junto a "Styles", "Computed", etc.)

# 3. Expande las categorías
Verás eventos agrupados por tipo: mouse, keyboard, DOM, etc.
```

---

## 🎯 Usos Comunes
```markdown
- 🐞 Ver qué funciones manejan un clic o una tecla
- 🔍 Localizar código JavaScript dinámico
- 🧪 Saber si un evento fue delegado (usando bubbling)
- ⛔ Eliminar eventos no deseados temporalmente
```

---

## 🔬 Análisis Profesional
```markdown
1. 🔍 **Seleccionar** un botón o input
2. 🧭 **Inspeccionar** los listeners activos
3. 📂 **Revisar** el archivo y línea donde está definido
4. 🔴 **Colocar breakpoints** en la función para depurar paso a paso
```

---

## ⌨️ Tips y Trucos
```diff
+ Click en el nombre del handler → Abre el archivo fuente
+ Click en el checkbox "Framework listeners" → Muestra eventos en React/Vue/etc.
+ Click en "Remove" → Elimina el event listener temporalmente
```

---

## 🧪 Ejemplo Práctico
```html
<!-- HTML -->
<button id="saludar">Saluda</button>

<!-- JS -->
document.getElementById("saludar").addEventListener("click", () => {
  alert("¡Hola mundo!");
});
```

🔍 Al inspeccionar el botón `#saludar`, verás el evento `click` registrado y podrás depurarlo fácilmente.

---

## 🛠️ Integración con Breakpoints
Puedes pausar la ejecución del JS cuando se dispare un evento:

```bash
1. Ir a pestaña "Sources"
2. Expandir "Event Listener Breakpoints"
3. Marcar eventos como 'click', 'input', etc.
4. Al dispararse → pausa automática del código
```

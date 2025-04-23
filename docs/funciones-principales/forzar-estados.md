# 🧪 Forzar Estados CSS (:hover, :active, etc.)

## 🔍 ¿Qué son los Estados Forzados?
Permiten simular interacciones del usuario como `:hover`, `:active`, `:focus`, sin necesidad de mover el mouse o hacer clic. Muy útil para depurar y ajustar estilos condicionales.

---

## ⚙️ Cómo Activarlos en DevTools
```bash
# 1. Selecciona un elemento:
Haz clic en el elemento desde el DOM o con el cursor (🔍)

# 2. Abre el menú de estados:
En la pestaña "Styles" haz clic en ":hov" (parte superior)

# 3. Marca los estados deseados:
Activa cualquiera de los siguientes:
☑ :hover
☑ :active
☑ :focus
☑ :visited (enlaces)
```

---

## 🎯 Casos Comunes
```css
.button:hover {
  background-color: #0057e7;
}

.button:active {
  transform: scale(0.96);
}

.input:focus {
  outline: 2px solid #00bfa6;
}
```

---

## 🧭 Flujo de Trabajo Profesional
```markdown
1. 🔍 **Seleccionar** un botón, enlace u input
2. ⚙️ **Activar** el estado deseado desde el panel ":hov"
3. 👁️ **Observar** el estilo aplicado en tiempo real
4. 🎨 **Ajustar** estilos desde la pestaña "Styles"
```

---

## 🧰 Tips y Buenas Prácticas
- 👀 Útil para elementos ocultos que solo aparecen en `:hover`
- 🛠️ Ideal para diseñar efectos sin mover el cursor
- 🚫 Se desactiva al cambiar de elemento (reaplica si es necesario)

---

## ⌨️ Atajos Relevantes
```diff
+ Click en ":hov" → Muestra los estados disponibles
+ Shift+Click → Mantiene varios estados activos al mismo tiempo
+ Ctrl+Z → Deshacer cambios aplicados durante la edición
```

---

## 🧑‍🔧 Ejemplo Práctico
```html
<!-- HTML -->
<button class="btn">Guardar</button>

<!-- CSS -->
.btn:hover {
  background-color: limegreen;
  color: white;
}
.btn:active {
  transform: scale(0.95);
}
```

➡️ Con el estado `:hover` forzado, puedes previsualizar el estilo sin pasar el mouse.

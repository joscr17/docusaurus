
# 📱 Modo Dispositivo Móvil (Responsive Mode)

## 🔍 ¿Qué es?
El modo responsive de DevTools permite simular distintos tamaños de pantalla y dispositivos móviles para verificar el comportamiento adaptativo del sitio web.

---

## ⚙️ Cómo Activarlo
```bash
# 1. Abrir DevTools
F12 o Ctrl+Shift+I (Cmd+Opt+I en Mac)

# 2. Hacer clic en el ícono del dispositivo (📱) en la barra superior

# 3. Seleccionar un dispositivo:
Desplegable con dispositivos como iPhone, Pixel, Galaxy, etc.
```

---

## 🎯 Funcionalidades Clave
```markdown
- 📏 Cambiar resolución manualmente
- 🔄 Rotar el dispositivo (horizontal/vertical)
- 🧪 Simular touch events
- 🕹️ Habilitar geolocalización simulada
- 💡 Ajustar zoom, DPR (device pixel ratio), y más
```

---

## 🧭 Flujo Profesional de Prueba
```markdown
1. Activar el modo responsive (📱)
2. Probar en múltiples dispositivos y tamaños
3. Verificar legibilidad, espaciado y usabilidad
4. Usar herramientas de red (Network) para simular conexiones móviles
```

---

## 🧰 Buenas Prácticas
```diff
+ Probar desde 320px hasta 1920px
+ Validar que botones no estén demasiado pequeños
+ Asegurar que elementos no se salgan del viewport
+ Comprobar scroll vertical y horizontal
```

---

## 🧪 Ejemplo de CSS Adaptativo
```css
/* Estilo general */
.card {
  padding: 2rem;
  font-size: 18px;
}

/* Breakpoint móvil */
@media (max-width: 480px) {
  .card {
    padding: 1rem;
    font-size: 16px;
  }
}
```

---

## ⌨️ Atajos Útiles
```diff
+ Ctrl+Shift+M (Cmd+Shift+M Mac) → Activar/desactivar vista responsive
+ Esc → Consola secundaria (útil para depurar mientras se ve en móvil)
```

---

## 🧑‍🔬 Consejo Extra
Activa el modo "Add media query breakpoint" desde la regla `@media` en el panel "Styles" para crear reglas directamente desde el inspector visual.


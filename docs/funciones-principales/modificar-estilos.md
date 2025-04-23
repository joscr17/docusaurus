
# 🎨 Modificar Estilos CSS 
## ⚙️ Métodos de Activación
```bash
# 1. Panel "Styles":
Selecciona un elemento → Pestaña "Styles" a la derecha

# 2. Edición rápida:
Haz clic en cualquier propiedad CSS → Edita el valor directamente

# 3. Añadir nuevas reglas:
Haz clic en el botón [+] o escribe una nueva propiedad en el área de estilos
```

---

## 🧪 Tipos de Modificación Permitidos
```css
/* Estilos que puedes editar en vivo desde DevTools */
.elemento {
  color: red;            /* 🎯 Cambio de color */
  margin: 20px;          /* 📏 Ajuste de espaciado */
  display: flex;         /* ⚙️ Layout flexible */
  font-family: 'Arial';  /* ✍️ Tipografía */
}
```

---

### ⚠️ Limitaciones
- 🔁 Los cambios son **temporales** y se pierden al recargar la página.
- 🚫 No se pueden editar directamente los archivos CSS externos desde DevTools.

---

## 🧭 Flujo de Trabajo Profesional
```markdown
1. 🔍 **Seleccionar** un elemento (desde DOM o con la herramienta de selección)
2. 🎨 **Editar** la propiedad que deseas modificar
3. 👀 **Visualizar** los cambios reflejados en tiempo real
4. 💾 **Reproducir** cambios en los archivos del proyecto (`theme.css`, `custom.css`, etc.)
```

---

## 💼 Casos de Uso Comunes
```scss
// ✅ Ajuste rápido de diseño:
.hero-title {
  font-size: 2.5rem;
}

// 🎨 Personalización de tema en Docusaurus:
.navbar {
  background-color: var(--ifm-color-primary);
}

// 🧪 Depuración visual:
.debug-box {
  border: 2px dashed red;
}
```

---

## ⌨️ Atajos Avanzados
```diff
+ Tab → Autocompletar propiedad o valor CSS
+ Shift+↑/↓ → Aumentar/disminuir valor numérico
+ Ctrl+Z / Ctrl+Y → Deshacer / Rehacer cambios
```

---

## 🧑‍🔧 Ejemplo Práctico: Ajuste Visual Rápido
````css
/* Antes */
.footer {
  padding: 4rem;
  background: #000;
}

/* Modificación temporal en DevTools */
.footer {
  background: #f5f5f5; /* 🌤️ Fondo claro para mejor contraste */
}
````

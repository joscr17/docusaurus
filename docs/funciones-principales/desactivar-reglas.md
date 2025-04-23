# 🚫 Desactivar Reglas CSS Temporalmente

## ⚙️ Métodos de Activación
```bash
# 1. Panel "Styles":
Selecciona un elemento → Revisa las reglas en la pestaña "Styles"

# 2. Marcar/Desmarcar reglas:
Haz clic en la casilla a la izquierda de cada propiedad CSS para desactivarla
```

---

## 🧪 Qué se Puede Desactivar
```css
.elemento {
  color: red;            /* ✅ Se puede desactivar */
  display: flex;         /* ✅ Se puede desactivar */
  transition: all 0.3s;  /* ✅ Se puede desactivar */
}
```

⚠️ **No se puede desactivar** una regla completa desde una hoja externa, pero sí sus propiedades individualmente.

---

### 🎯 Propósito y Beneficios
- 🧪 **Test A/B visual**: compara con y sin un estilo aplicado
- 🔍 **Depuración rápida**: detecta qué propiedad está causando un problema visual
- 🧰 **Experimentación**: prueba combinaciones sin necesidad de editar el código fuente

---

## 🧭 Flujo de Trabajo Profesional
```markdown
1. 🔍 **Seleccionar** un elemento en el DOM
2. 🧵 **Identificar** la propiedad que quieres desactivar
3. ☑️ **Desmarcar** la casilla a la izquierda
4. 👁️ **Observar** los cambios reflejados en el diseño
5. 📝 **Apuntar** qué cambios funcionaron y trasladarlos al archivo CSS si aplica
```

---

## 🧑‍🔧 Ejemplo Práctico: Ajuste de Layout
```css
/* Antes */
.card {
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border: 1px solid #ccc;
}

/* Después de desactivar temporalmente */
.card {
  /* margin: 2rem auto; */
  /* box-shadow: 0 4px 8px rgba(0,0,0,0.1); */
  border: 1px solid #ccc;
}
```

📝 En DevTools, no necesitas comentar, solo desmarcar las propiedades y observar el efecto.

---

## ⌨️ Atajos Útiles
```diff
+ Alt+Click en el checkbox → Desactiva múltiples propiedades a la vez (Chrome DevTools)
+ Ctrl+Z → Deshacer cambio
+ Ctrl+Y → Rehacer cambio
```

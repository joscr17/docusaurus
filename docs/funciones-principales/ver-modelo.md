# 📦 Ver Modelo de Caja (Box Model)

## 🔍 ¿Qué es el Box Model?
El modelo de caja representa visualmente cómo se estructura cada elemento HTML en términos de:

- **Content** (contenido)
- **Padding** (relleno interno)
- **Border** (borde)
- **Margin** (margen externo)

DevTools permite inspeccionar y modificar estos valores fácilmente.

---

## 🛠️ Cómo Activarlo en DevTools
```bash
# 1. Selecciona un elemento
Haz clic derecho sobre un elemento → "Inspeccionar"

# 2. Ubica el modelo de caja
Ve a la pestaña "Styles" y localiza el diagrama al final (Box Model)
```

---

## 🧪 Qué Puedes Ver
```plaintext
+---------------------------+
|         margin           |
|   +-------------------+  |
|   |     border        |  |
|   |  +-------------+  |  |
|   |  |   padding   |  |  |
|   |  | +--------+  |  |  |
|   |  | | content |  |  |  |
|   |  | +--------+  |  |  |
|   |  +-------------+  |  |
|   +-------------------+  |
+---------------------------+
```

---

## 👨‍🔧 Flujo de Inspección Profesional
```markdown
1. 🔍 **Seleccionar** un elemento en la vista DOM
2. 📦 **Visualizar** el modelo de caja en la sección inferior derecha
3. ✏️ **Modificar** valores directamente desde la visualización (clic en margin/padding/etc.)
4. 👁️ **Evaluar** el impacto visual de los cambios
```

---

## 🧪 Casos Comunes
```css
/* 1. Ajuste de espaciado interno */
.card {
  padding: 1rem 2rem;
}

/* 2. Corrección de márgenes */
.section {
  margin-top: 4rem;
}

/* 3. Debug visual con bordes */
.box {
  border: 2px dashed red;
}
```

---

## ⌨️ Tips Rápidos
```diff
+ Click en cada sección del Box Model → Edita directamente
+ Hover sobre Content/Padding/Margin → Se resalta en pantalla
+ Usa Shift+↑/↓ en valores para modificar en pasos de 10px
```
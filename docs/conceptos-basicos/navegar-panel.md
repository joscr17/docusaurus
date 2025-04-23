# Navegar por el panel de Elementos

## Estructura básica del panel
```html
<!-- Jerarquía típica -->
<html>
  ├── <head> (metadatos ocultos)
  └── <body> (contenido visible)
       ├── <header>
       ├── <main>
       └── <footer>
```

## Métodos de navegación

### 1. Exploración manual
```diff
+ Click en ▶ para expandir nodos
+ Click en ▼ para colapsar nodos
+ Doble click en cualquier elemento para editarlo (modo temporal)
```

### 2. Atajos esenciales
```bash
# Windows/Linux/Mac:
↑/↓ : Navegar entre elementos
→   : Expandir nodo
←   : Colapsar nodo
Enter: Editar elemento (HTML)
```

### 3. Búsqueda rápida
```javascript
// Presiona Ctrl+F (Cmd+F en Mac) dentro del panel
// Busca por:
- Etiquetas (div, span)
- Clases (.navbar, .container)
- IDs (#main-content)
```

## Funciones avanzadas
```markdown
1. **Highlight en página**: 
   - Al posicionarte sobre un elemento, se resalta en la página

2. **Scroll into view**: 
   - Click derecho → "Scroll into view" para ubicar el elemento

3. **Referencia rápida**: 
   - Click derecho → "Copy" → Copiar selector CSS/XPath
```

## Ejemplo práctico
```html
<!-- Para localizar un botón específico -->
<button class="btn-primary" id="submit-btn">
  Enviar formulario
</button>

# Usa el panel para:
1. Verificar sus clases CSS
2. Inspeccionar eventos click
3. Modificar el texto temporalmente
```

## Consejos de productividad
```markdown
> 💡 Usa **Alt+Click** (Windows) u **Option+Click** (Mac) en ▶ para 
expandir/colapsar TODOS los nodos hijos recursivamente

> 🔍 Mantén pulsado **H** para ocultar elementos temporalmente 
(ideal para ver capas ocultas)
```

## Captura ilustrativa
![Panel de elementos](https://example.com/elements-panel.png) *(Áreas clave numeradas)*
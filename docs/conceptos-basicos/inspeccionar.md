# Inspeccionar estructura HTML/DOM

## Conceptos clave
```html
<!-- Ejemplo de estructura DOM típica -->
<html>
└── <head>
│   ├── <title>Mi Página</title>
│   └── <meta charset="utf-8">
└── <body>
    ├── <header id="main-header"></header>
    ├── <main class="content"></main>
    └── <footer data-role="footer"></footer>
```

## Métodos de inspección

### 1. Navegación básica
```bash
# Atajos esenciales:
▶/▼ : Expandir nodo (Tab → Avanza por focusable elements)
◀/▲ : Colapsar nodo (Shift+Tab → Retrocede)
Home/End : Ir al inicio/final del documento
```

### 2. Búsqueda avanzada
```javascript
// En el panel Elements:
Ctrl+F (Cmd+F Mac) → Busca por:
- Selectores CSS (.clase, #id)
- Atributos ([href], [data-*])
- Texto (contenteditable="true")
```

### 3. Filtrado por tipo
```diff
+ Componentes: Filtra elementos Vue/React/Angular
+ Shadow DOM: Activa "Show user agent shadow DOM"
+ iframes: Cambia contexto en dropdown superior
```

## Operaciones comunes
```markdown
1. **Edición rápida**: 
   - Doble-click en cualquier etiqueta/atributo/texto

2. **Reordenamiento**:
   - Arrastrar elementos para cambiar jerarquía

3. **Eliminación**:
   - Suprimir/Delete para remover nodos temporalmente
```

## Pro Tips
```html
<!-- Acceso rápido a padres/children -->
<div parent> <!-- Alt+Click (Win) / Option+Click (Mac) -->
  <ul>
    <li child>Item 1</li> <!-- $0 en Consola para referencia -->
  </ul>
</div>
```

## Debugging de estructura
````javascript
// Comandos útiles en Consola:
console.log($0) // Elemento seleccionado
$0.closest('selector') // Encuentra ancestros
$0.matches('selector') // Verifica patrón
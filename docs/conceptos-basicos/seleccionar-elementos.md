# Seleccionar elementos con el cursor 

## Activación del modo selección
```bash
# Atajos directos:
Windows/Linux: Ctrl + Shift + C
MacOS: Cmd + Shift + C

# Alternativas:
1. Click en el icono de cursor (🔍) en la barra de herramientas
2. Menú → More Tools → Select Element
```

## Funcionamiento básico
```html
<!-- Ejemplo visual -->
<div class="target-element"> ← Elemento resaltado al pasar el cursor
   <p>Contenido interactivo</p>
</div>
```

### Características del resaltado:
- 🟦 **Azul**: Elemento actualmente seleccionado
- 🟪 **Morado**: Espacio ocupado (padding/margin)
- 📏 **Medidas**: Tamaños en píxeles que aparecen al costado

## Modos especiales
```markdown
1. **Persistente**: 
   - Activa el "pin" (📌) para mantener el elemento seleccionado

2. **Mobile Preview**:
   - Combínalo con el modo dispositivo (📱) para selección responsive

3. **Shadow DOM**:
   - Click derecho → "Expand recursively" para inspeccionar web components
```

## Flujo de trabajo recomendado
```javascript
1. Activar modo selección (🔍)
2. Posicionar sobre el elemento
3. Click para fijarlo en el panel Elements
4. Analizar:
   - Estructura HTML
   - Estilos CSS aplicados
   - Box model
```

## Troubleshooting
```diff
- Si no aparece el resaltado:
+ Verificar si hay iframes (cambia al contexto correcto)
+ Desactivar extensiones que interfieran
+ Comprobar que no haya elementos superpuestos (z-index)
```

## Pro Tip: Selección avanzada
```markdown
> 🎯 **Shift+Click** en el cursor (🔍) permite:
> - Ver el contraste de color (WCAG)
> - Copiar estilos CSS completos
> - Forzar estado :hover/:focus

> 🖱️ **Click+Arrastre** desde el panel hasta la página:
> Selecciona el elemento más profundo en esa posición
```

## Ejemplo práctico
````html
<!-- Para seleccionar un menú desplegable -->
<nav class="dropdown">
  <button class="trigger">Menú</button> <!-- Paso 1: Seleccionar -->
  <ul class="dropdown-content">         <!-- Paso 2: Forzar :hover -->
    <li>Opción 1</li>                  <!-- Paso 3: Depurar estilos -->
  </ul>
</nav>
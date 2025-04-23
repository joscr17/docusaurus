# Editar HTML en Tiempo Real 🛠️

## Métodos de Activación
```bash
# 1. Doble-click directo:
Doble-click en cualquier etiqueta/texto/atributo en el panel Elements

# 2. Menú contextual:
Click derecho → "Edit as HTML" (edición completa de nodo)

# 3. Atajos:
Enter → Editar elemento seleccionado
Ctrl+Enter (Mac: Cmd+Return) → Guardar cambios
```

## Tipos de Edición Permitidos
```html
<!-- Ejemplo práctico -->
<div class="container" contenteditable="true">
  <p>Texto editable</p>  <!-- ✏️ Texto -->
  <style>.new-rule {}</style> <!-- 🎨 CSS embebido -->
  <script>console.log()</script> <!-- ⚙️ JS (solo sintaxis) -->
</div>
```

### Limitaciones:
- � Cambios son **temporales** (se pierden al recargar)
- ⚠️ No ejecuta JS insertado (solo verificación sintáctica)

## Flujo de Trabajo Profesional
```markdown
1. **Seleccionar** elemento (🔍 o en árbol DOM)
2. **Editar** (doble-click o menú contextual)
3. **Validar** cambios visuales al instante
4. **Revertir** con Ctrl+Z (Cmd+Z en Mac)
```

## Casos de Uso Comunes
```javascript
// 1. Prototipado rápido:
   - Cambiar texto de botones "Enviar" → "Guardar"
   
// 2. Debugging:
   - Añadir atributos temporales (data-debug="true")
   
// 3. Testing responsive:
   - Modificar valores de @media queries directamente
```

## Atajos Avanzados
```diff
+ Shift+Tab → Indenta código automáticamente
+ Alt+↑/↓ (Option+↑/↓ Mac) → Mover líneas
+ Ctrl+D (Cmd+D Mac) → Seleccionar próxima coincidencia
```

## Ejemplo Práctico: Debugging
````html
<!-- Antes -->
<form id="login-form" action="/old-endpoint">
  <input type="text" name="username">
</form>

<!-- Después de editar -->
<form id="login-form" action="/new-debug-endpoint" data-testenv="true">
  <input type="text" name="username" autocomplete="off">
  <!-- Añadido para testing -->
</form>
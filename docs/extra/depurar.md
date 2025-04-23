
# 🐞 Depurar Errores de Compilación en Docusaurus

## 🔍 Tipos de Errores Comunes
- **Errores de sintaxis** en JavaScript/JSX (`Unexpected token`)
- **Módulos no encontrados** (`Module not found`)
- **Errores de dependencias** incompatibles
- **Problemas de configuración** en `docusaurus.config.js`
- **Errores de Webpack** al procesar CSS/MDX

---

## ⚙️ Flujo de Depuración en Dev Server
```bash
# 1. Iniciar servidor de desarrollo
npm start

# 2. Observa la consola del navegador (error overlay):
- Se muestra un overlay rojo con detalles del error
- Click en la ruta de archivo para abrir Sources panel con el código fuente

# 3. Usa Sourcemaps:
- Asegúrate de que `devtool` esté en modo source-map
- Navega a la pestaña "Sources" → Encuentra tu archivo original (.jsx, .mdx)

# 4. Inspecciona stack trace:
- Ubica la línea exacta del error
- Verifica importaciones y sintaxis
```

---

## 📟 Depuración en Terminal
```bash
# 1. Ejecutar build en modo verbose
npm run build -- --verbose

# 2. Leer mensajes de Webpack:
- Examina errores detallados
- Revisa rutas de módulos y loaders

# 3. Comprobar configuración:
- Valida `docusaurus.config.js` y archivos de plugins
- Asegura versiones compatibles de dependencias
```

---

## 🧰 Herramientas Útiles
```markdown
- **VSCode Problems**: Ver errores de compilación integrados
- **React Error Overlay**: Permite edición en caliente y recarga instantánea
- **Extensión ESLint**: Detecta errores de sintaxis antes de compilar
- **`DEBUG=true`**: Mode log extendido para Docusaurus
```

---

## 🧭 Mejores Prácticas
```markdown
1. Actualiza dependencias a versiones compatibles
2. Usa importaciones relativas correctas (`./` vs `/`)
3. Mantén `docusaurus.config.js` limpio y validado
4. Limpia cachés: elimina `node_modules` y `.docusaurus` si es necesario
5. Ejecuta `npm ci` para instalar paquetes exactos del `package-lock.json`
```

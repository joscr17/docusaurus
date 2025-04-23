
# 🧲 Atajo: Esc – Consola Secundaria (Drawer)

## 🧠 ¿Qué Es?
Al presionar **Esc** dentro de DevTools, se abre (o cierra) el panel inferior llamado **Drawer**, donde puedes ver herramientas adicionales sin salir de la vista principal.

---

## ⌨️ Cómo Usarlo
```bash
# Windows / Linux / Mac:
Esc → Mostrar u ocultar consola secundaria
```

---

## 📦 Herramientas Disponibles en el Drawer
```markdown
- 🖥️ Console → Ver logs mientras editas HTML/CSS
- 📦 Network Conditions → Cambiar user-agent o throttling
- 🐛 Changes → Ver modificaciones al código en tiempo real
- 📜 Sources → Debug en paralelo
- 🧪 Performance Monitor, Issues, Coverage…
```

---

## 🧪 Casos de Uso Comunes
```markdown
- Depurar scripts sin perder de vista el DOM
- Ver logs mientras se modifica el CSS
- Simular condiciones de red mientras se observa rendimiento
```

---

## 🧰 Tips Pro
```diff
+ Puedes anclar el panel para que siempre esté visible
+ Ideal para pantallas grandes o flujos multitarea
+ Usa "Customize Drawer" (⋮) para elegir herramientas frecuentes
```

---

## 🎯 Flujo de Trabajo
```markdown
1. Abrir "Elements"
2. Presionar Esc → Aparece Console abajo
3. Ver logs o ejecutar JS sin perder de vista el código HTML
```

---

## Ejemplo Visual
```plaintext
┌───────────── DevTools (Elements) ─────────────┐
│ <div class="card">…                          │
│                                              │
│  …                                           │
├────────────────── [Esc] ─────────────────────┤
│ Console | Changes | Network Conditions…      │
│ > console.log("Debug")                       │
└──────────────────────────────────────────────┘
```

Una funcionalidad oculta pero poderosísima para multitarea en DevTools.

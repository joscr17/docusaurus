
# 🧠 Análisis de Memoria y CPU (Memory & Profiler)

## 🧩 ¿Qué es?
La pestaña **Memory** en DevTools permite identificar problemas relacionados con el uso excesivo de memoria, *leaks* (fugas) y comportamiento del *garbage collector*.  
El **Profiler** ayuda a medir el consumo de CPU por funciones JavaScript.

---

## 🧪 ¿Cuándo usarlo?
```markdown
- La página se vuelve lenta después de un tiempo
- Animaciones con pausas o stuttering
- Sospecha de *memory leaks* (uso de memoria que no baja)
```

---

## 🔬 Herramientas Disponibles
### Memory Tab:
```markdown
- Heap Snapshot → Toma una "foto" del uso de memoria
- Allocation instrumentation → Monitorea asignaciones en tiempo real
- Allocation timeline → Línea de tiempo del uso de memoria
```

### Performance Profiler (desde "Performance"):
```markdown
- Flame chart → Muestra qué funciones usan más CPU
- Call tree / Bottom-up → Desglose detallado de ejecución
```

---

## 🎯 Flujo Profesional de Memoria
```markdown
1. Abrir pestaña "Memory"
2. Realizar una acción sospechosa (clicks, navegación, etc.)
3. Tomar snapshot antes y después
4. Comparar uso de memoria entre capturas
5. Detectar objetos que no se liberan
```

---

## 🛠️ Optimización de CPU
```markdown
1. Abrir pestaña "Performance"
2. Iniciar grabación con acción en página
3. Detener y analizar Flame Chart
4. Identificar funciones que consumen más recursos
5. Refactorizar funciones pesadas o dividir en tareas pequeñas
```

---

## 🧰 Tips Avanzados
```diff
+ Usa "Retainers" para ver qué mantiene objetos vivos
+ Filtra por tipo de objeto (DOM, closures, arrays…)
+ Repite acciones varias veces → observa crecimiento sostenido
+ Usa "Clear Garbage Collector" para testear limpieza manual
```

---

## 🧪 Ejemplo de Crecimiento de Memoria
```plaintext
[Click #1] Memoria usada: 10 MB
[Click #5] Memoria usada: 25 MB
[Click #10] Memoria usada: 45 MB ❌

🔺 Indica posible memory leak en cada click.
```

---

🔎 Esencial para sitios con carga intensiva, SPAs y aplicaciones React/Vue con ciclos complejos.


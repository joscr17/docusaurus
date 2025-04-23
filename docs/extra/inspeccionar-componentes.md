
# ⚛️ Inspeccionar Componentes React

## 🧠 ¿Qué es?
Cuando trabajas con React, puedes **inspeccionar la estructura de componentes**, ver sus props y estado directamente desde el navegador usando la extensión React Developer Tools.

---

## 🧩 Requisitos Previos
```markdown
- Tener instalada la extensión "React Developer Tools" (Chrome o Firefox)
- DevTools debe estar abierto en una página que usa React
```

---

## 📦 Funcionalidades Clave
```markdown
- Ver jerarquía de componentes como en el árbol DOM
- Inspeccionar props y estado (state) en tiempo real
- Editar valores para pruebas rápidas
- Identificar qué componentes se renderizan al cambiar datos
```

---

## 🔍 Flujo de Inspección
```markdown
1. Abre DevTools
2. Dirígete a la pestaña "⚛️ Components"
3. Navega por el árbol de componentes
4. Haz clic en uno para ver props y estado en el panel lateral
5. Usa el icono 🔍 para seleccionar un componente directamente en la página
```

---

## 🧪 Casos de Uso
```markdown
- Ver qué datos recibe un componente
- Verificar si un componente se está re-renderizando innecesariamente
- Modificar props o estado para testear comportamiento
```

---

## 🧰 Tips Avanzados
```diff
+ Usa "Highlight updates" para ver qué componentes se renderizan
+ Haz clic derecho en un componente → "Show in elements panel"
+ Puedes copiar la ruta del componente al portapapeles
```

---

## Ejemplo Visual
```plaintext
<App>
  <Header />
  <Main>
    <UserProfile name="Ana" age={32} />
    <Posts />
  </Main>
</App>

🔍 Seleccionas <UserProfile> y ves:
props: { name: "Ana", age: 32 }
state: { editing: false }
```

Una herramienta vital para depurar y optimizar tus apps React. ¡No desarrolles sin ella! 🚀

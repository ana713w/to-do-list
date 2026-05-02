# Mis Tareas

## 📋 Descripción de la Aplicación

**Mis Tareas** es una aplicación web moderna de gestión de tareas construida con las últimas tecnologías de React. Permite a los usuarios organizar su trabajo de forma eficiente con una interfaz intuitiva y responsiva.

### Funcionalidades principales

- ✅ **Agregar tareas** con título y descripción opcional
- ✅ **Marcar tareas como completadas** con un clic
- ✅ **Eliminar tareas** cuando ya no las necesites
- ✅ **Filtrar tareas** por estado: todas / pendientes / completadas
- ✅ **Persistencia de datos** usando localStorage
- ✅ **Interfaz responsiva** optimizada para móvil y escritorio

---

## 🛠️ Tecnologías

- **React 19** - Librería de UI con React Hooks
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS v4** - Framework de estilos utilitarios
- **Vite** - Bundler y servidor de desarrollo ultra rápido
- **Vitest + Testing Library** - Testing moderno y enfocado en la UX
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS

---

## 📦 Requisitos Previos

Asegúrate de tener instalados:
- **Node.js** (v16 o superior)
- **npm** (v7 o superior) o **yarn**

Para verificar las versiones:
```bash
node --version
npm --version
```

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_del_repositorio>
cd to-do-list
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Build para producción

```bash
npm run build
```

Esto genera los archivos optimizados en la carpeta `dist/`

### 5. Vista previa del build

```bash
npm run preview
```

---

## 🧪 Ejecutar Tests

### Ejecutar todos los tests

```bash
npm test
```

### Ejecutar tests en modo watch

```bash
npm test -- --watch
```

### Ejecutar tests con coverage

```bash
npm test -- --coverage
```

Los tests están localizados en la carpeta `src/test/` y usan **Vitest** con **Testing Library** para pruebas enfocadas en el comportamiento del usuario.

---

## 📁 Estructura del Proyecto

```
to-do-list/
├── public/                    # Archivos estáticos públicos
│
├── src/
│   ├── main.tsx              # Punto de entrada de la aplicación
│   ├── App.tsx               # Componente raíz principal
│   ├── App.css               # Estilos del componente App
│   ├── index.css             # Estilos globales
│   │
│   ├── components/           # Componentes reutilizables
│   │   ├── header.tsx        # Encabezado de la aplicación
│   │   ├── taskForm.tsx      # Formulario para agregar tareas
│   │   ├── TaskList.tsx      # Contenedor de la lista de tareas
│   │   ├── TaskItem.tsx      # Componente individual de tarea
│   │   └── filterButtons.tsx # Botones de filtrado
│   │
│   ├── contexts/             # Context API para estado global
│   │   └── taskContext.tsx   # Proveedor de contexto de tareas
│   │
│   ├── hooks/                # Custom Hooks
│   │   └── useTasks.ts       # Hook para usar contexto de tareas
│   │
│   ├── types/                # Definiciones de tipos TypeScript
│   │   └── task.ts           # Tipo Task (interfaz)
│   │
│   └── test/                 # Configuración de tests
│       └── setup.ts          # Setup de Vitest
│
├── eslint.config.js          # Configuración de ESLint
├── tailwind.config.js        # Configuración de Tailwind CSS
├── postcss.config.js         # Configuración de PostCSS
├── vite.config.ts            # Configuración de Vite
├── tsconfig.json             # Configuración de TypeScript
├── package.json              # Dependencias del proyecto
└── README.md                 # Este archivo
```

### Descripción de directorios clave

- **`components/`** - Componentes React reutilizables. Cada componente es responsable de una parte específica de la UI.
- **`contexts/`** - Gestión del estado global usando React Context API para compartir datos entre componentes.
- **`hooks/`** - Custom Hooks que encapsulan lógica reutilizable y acceso al contexto.
- **`types/`** - Definiciones centralizadas de tipos TypeScript para mayor mantenibilidad.
- **`test/`** - Configuración y archivos de prueba unitarias e integración.

---

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Genera build optimizado para producción |
| `npm run preview` | Vista previa local del build de producción |
| `npm test` | Ejecuta suite de tests |
| `npm run lint` | Verifica código con ESLint |

---

## 🎯 Flujo de Arquitectura

La aplicación sigue una arquitectura basada en **Context API** para manejar el estado global:

1. **taskContext.tsx** - Proveedor central de estado
2. **useTasks.ts** - Hook para acceder al contexto
3. **Componentes** - Consumen el hook para obtener datos y funciones

Esto permite una separación clara entre lógica y presentación, facilitando el testing y mantenimiento.

---

## 🚀 Deployment

La aplicación puede desplegarse fácilmente en:
- **Vercel** - Recomendado para máximo rendimiento
- **Netlify** - Alternativa confiable
- Cualquier servicio que soporte hosting estático

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.

# 🧘‍♀️ Yoga & Pilates - Centro de Bienestar

## 📋 Descripción del Proyecto

Yoga & Pilates es una aplicación web moderna diseñada para un centro de bienestar que ofrece clases de yoga y pilates. La aplicación proporciona información sobre las actividades, horarios, y permite a los usuarios inscribirse en las clases a través de un formulario interactivo.

## ✨ Características Principales

### 🎨 **Diseño y Experiencia de Usuario**
- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y computadoras
- **Paleta de Colores Rosa**: Utiliza una paleta de colores suaves y relajantes
- **Animaciones Suaves**: Efectos de transición y animaciones CSS para una experiencia fluida
- **Navegación Intuitiva**: Menú de navegación sticky con efectos hover
- **Tipografía Moderna**: Uso de la fuente Poppins para mejor legibilidad

### 🏠 **Páginas Principales**
- **Página de Inicio**: Presentación del centro con descripción y horarios
- **Página de Yoga**: Información detallada sobre clases de yoga
- **Página de Pilates**: Información sobre diferentes tipos de pilates
- **Formulario de Inscripción**: Sistema de registro para las clases

### 📅 **Sistema de Horarios**
- **Tabla Interactiva**: Muestra horarios semanales de todas las actividades
- **Múltiples Grupos**: Organización en grupos (G1, G2, G3, etc.)
- **Horarios Variados**: Desde 08:00 hasta 19:30 para diferentes necesidades
- **Actividades Diversas**: Yoga Vital, Hatha Yoga, Pilates Clásico, Pilates Aéreo, Taller Ayurveda

### 📝 **Formulario de Inscripción**
- **Validación de Campos**: Campos obligatorios con validación HTML5
- **Sistema CAPTCHA**: Verificación de seguridad con código numérico
- **Mensajes de Estado**: 
  - ✅ Mensaje verde cuando el CAPTCHA es correcto
  - ❌ Mensaje rojo cuando el CAPTCHA es incorrecto
  - 🎉 Mensaje de éxito cuando el formulario se envía correctamente
- **Limpieza Automática**: El formulario se limpia después del envío exitoso
- **Campos Incluidos**:
  - Nombre y Apellido
  - Número de teléfono
  - Día de la semana
  - Horario preferido
  - Comentarios opcionales

### 🔧 **Panel de Administración**
- **Gestión de Inscripciones**: Vista de todas las inscripciones recibidas
- **Funciones CRUD**:
  - **Crear**: Nuevas inscripciones a través del formulario
  - **Leer**: Visualización en tabla dinámica
  - **Actualizar**: Edición de registros existentes
  - **Eliminar**: Eliminación de registros
- **Interfaz Intuitiva**: Botones de editar y eliminar con iconos SVG
- **Actualización en Tiempo Real**: La tabla se actualiza automáticamente

### 🌐 **Integración con API**
- **API REST**: Conexión con MockAPI para persistencia de datos
- **Operaciones Asíncronas**: Uso de async/await para mejor rendimiento
- **Manejo de Errores**: Gestión robusta de errores de conexión
- **Carga Dinámica**: Indicador de carga durante las operaciones

### 🎯 **Funcionalidades Técnicas**
- **JavaScript Modular**: Código organizado en archivos separados
- **Event Listeners**: Manejo de eventos del usuario
- **DOM Manipulation**: Actualización dinámica del contenido
- **Local Storage**: Persistencia de datos en el navegador
- **Responsive Design**: CSS Grid y Flexbox para layouts adaptables

### 📱 **Compatibilidad**
- **Navegadores Modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos Móviles**: Optimizado para smartphones y tablets
- **Accesibilidad**: Estructura semántica HTML5
- **SEO Friendly**: Meta tags y estructura optimizada

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con variables CSS, animaciones y responsive design
- **JavaScript ES6+**: Funcionalidades interactivas y asíncronas

### **APIs y Servicios**
- **MockAPI**: Base de datos simulada para desarrollo
- **Fetch API**: Comunicación con el servidor

### **Herramientas de Desarrollo**
- **Git**: Control de versiones
- **VS Code**: Editor de código (recomendado)

## 📁 Estructura del Proyecto

```
yoga/
├── index.html          # Página principal
├── yoga.html           # Página de yoga
├── pilates.html        # Página de pilates
├── style.css           # Estilos principales
├── css/                # Archivos CSS adicionales
├── js/
│   ├── main.js         # Lógica del CAPTCHA
│   ├── menu.js         # Navegación y menú
│   └── tablaDinamica.js # Gestión de datos y formularios
├── img/                # Imágenes y recursos visuales
└── README.md           # Documentación del proyecto
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone [url-del-repositorio]
   cd yoga
   ```

2. **Abrir en el navegador**:
   - Abrir `index.html` en cualquier navegador moderno
   - O usar un servidor local para desarrollo

3. **Funcionalidades disponibles**:
   - Navegar por las páginas del sitio
   - Ver horarios de clases
   - Completar el formulario de inscripción
   - Gestionar inscripciones desde el panel de administración

## 🎨 Características de Diseño

### **Paleta de Colores**
- **Rosa Principal**: #e94b8a
- **Rosa Medio**: #f47cb4
- **Rosa Claro**: #f9b6d2
- **Verde Secundario**: #699c86
- **Fondo Degradado**: #d4e2de a #fff9f0

### **Animaciones**
- **Fade In**: Aparición suave de elementos
- **Scale Button**: Efecto de escala en botones
- **Blink**: Parpadeo para el CAPTCHA
- **Hover Effects**: Efectos al pasar el mouse

## 📞 Información de Contacto

- **Dirección**: Av. España 1234 - Tandil - Bs.As - Argentina
- **Teléfono**: (+54)249 15 41234
- **Email**: yoga_pilates@gmail.com

## 🤝 Contribuciones y agradecimientos

Este proyecto fue realizado en la materia WEB 1 de la carrera Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas junto a mi compañera Sofía Ormazabal.
Luego lo he refactorizado par mejorar el aspecto estético.

**Desarrollado con ❤️ para promover el bienestar y la salud a través del yoga y pilates.**

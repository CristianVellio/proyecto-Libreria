# Proyecto Librería 📚

## **Introducción**

El proyecto **Librería** es una plataforma web moderna para la gestión y venta de libros. Diseñada tanto para usuarios finales como administradores, esta aplicación permite explorar libros, agregarlos al carrito, realizar compras, y para administradores, gestionar la biblioteca con funciones CRUD completas.

El sistema está desarrollado utilizando tecnologías modernas como **Node.js**, **Express**, **React**, **MongoDB**, y varias bibliotecas adicionales para optimizar la experiencia del usuario y las funcionalidades.

Puedes visitar el proyecto en vivo [aquí](https://proyecto-libreria.vercel.app/).

---

## **Backend**

El backend del proyecto está construido con **Node.js** y **Express**, proporcionando un servidor rápido y eficiente. Se conecta a una base de datos **MongoDB** para almacenar toda la información relacionada con los libros, usuarios, pedidos, y más.

### **Funcionalidades**

1. **Autenticación y Autorización:**
   - Implementada con **jsonwebtoken** para proteger rutas sensibles.
   - Los usuarios pueden registrarse e iniciar sesión de manera segura gracias al uso de **bcrypt** para encriptar contraseñas.

2. **Gestión de Libros (CRUD):**
   - Los administradores tienen acceso completo a crear, leer, actualizar y eliminar libros de la colección.

3. **Control de Pedidos:**
   - Procesamiento de pedidos y gestión de carritos.

4. **Middleware de Seguridad:**
   - Uso de **cors** para permitir el acceso desde diferentes dominios.
   - Variables de entorno manejadas con **dotenv**.

5. **Desarrollo Simplificado:**
   - Uso de **nodemon** para reinicio automático del servidor en desarrollo.

### **Dependencias del Backend**
- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/):** Framework para construir el servidor.
- **[Mongoose](https://mongoosejs.com/):** ODM para gestionar MongoDB.
- **[dotenv](https://github.com/motdotla/dotenv):** Para gestionar variables de entorno.
- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken):** Para autenticación basada en tokens.
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js):** Para encriptar contraseñas.
- **[cors](https://github.com/expressjs/cors):** Para manejo de políticas de acceso cruzado.
  

---

## **Uso de Postman**

Durante el desarrollo del backend, se utilizó **Postman** para probar y verificar el correcto funcionamiento de las rutas de la API antes de integrarlas con el frontend. Postman es una herramienta que facilita el envío de solicitudes HTTP y la visualización de respuestas, lo que permite asegurarse de que la API está funcionando como se espera.

### **Pruebas en Postman**

1. **Rutas de Autenticación:**
   - Se probaron las rutas de inicio de sesión (`POST /login`) y registro (`POST /register`) enviando solicitudes con credenciales de usuario válidas e inválidas.

2. **Rutas CRUD de Libros:**
   - Se probaron las rutas para crear, leer, actualizar y eliminar libros (`GET /api/libros`, `POST /api/libros`, `PUT /api/libros/:id`, `DELETE /api/libros/:id`) con datos válidos e inválidos.

3. **Rutas de Carrito y Pedidos:**
   - Se verificaron las rutas relacionadas con el carrito de compras (`POST /api/carrito`) y los pedidos (`POST /api/pedidos`), asegurando que las interacciones con el carrito y las órdenes se manejan correctamente.

### **Cómo Usar Postman**

Si deseas probar la API utilizando Postman, sigue estos pasos:

1. **Importar Colección de Postman:**
   - Puedes importar una colección preconfigurada de las rutas de la API desde el siguiente enlace [aquí](https://www.postman.com/), si está disponible, o puedes crear una propia basada en las rutas proporcionadas en la documentación.

2. **Configurar el Entorno:**
   - Asegúrate de configurar las variables de entorno necesarias, como la URL base del backend y las credenciales de autenticación.

3. **Realizar Solicitudes:**
   - En Postman, realiza solicitudes **GET**, **POST**, **PUT**, o **DELETE** a las rutas de la API, y verifica que las respuestas sean las esperadas.

4. **Verificar Respuestas:**
   - Revisa los códigos de estado HTTP (por ejemplo, 200 OK, 400 Bad Request, etc.) y los cuerpos de las respuestas para asegurar que la API esté funcionando correctamente.

---

Este enfoque ayuda a detallar el proceso de pruebas, asegurando que el backend esté completamente verificado antes de integrar el frontend.

---

## **Frontend**

El frontend está desarrollado con **React**, utilizando herramientas modernas para una interfaz dinámica y responsiva. Implementa un diseño atractivo con componentes reutilizables y ofrece una experiencia de usuario fluida.

### **Funcionalidades**

1. **Vista Principal:**
   - Navegación intuitiva para explorar libros disponibles.
   - Presentación de libros destacados y recomendaciones.

2. **Carrito de Compras:**
   - Permite agregar y eliminar productos del carrito.
   - Calcula automáticamente los precios totales.

3. **Gestión de Libros para Administradores:**
   - Panel de control para realizar operaciones CRUD en los libros.

4. **Autenticación de Usuarios:**
   - Formulario de inicio de sesión y registro utilizando **react-hook-form**.

5. **Interfaz Dinámica y Gráficos:**
   - Uso de **react-chartjs-2** y **chart.js** para visualizar datos relevantes en el panel de administración.

6. **Notificaciones y Alertas:**
   - Implementación de alertas amigables con **sweetalert2**.

7. **Diseño Moderno:**
   - Slider interactivo para presentar libros destacados con **swiper**.

### **Dependencias del Frontend**
- **[React](https://reactjs.org/):** Biblioteca principal para construir la interfaz.
- **[React Router DOM](https://reactrouter.com/):** Para manejo de rutas.
- **[Redux Toolkit](https://redux-toolkit.js.org/):** Para gestionar el estado global.
- **[Axios](https://axios-http.com/):** Para realizar solicitudes al backend.
- **[React Hook Form](https://react-hook-form.com/):** Para gestionar formularios.
- **[React Icons](https://react-icons.github.io/react-icons/):** Para agregar íconos en la interfaz.
- **[SweetAlert2](https://sweetalert2.github.io/):** Para notificaciones elegantes.
- **[Swiper](https://swiperjs.com/):** Para sliders interactivos.
- **[Chart.js](https://www.chartjs.org/):** Para gráficos dinámicos.

---

## **Arquitectura del Proyecto**

1. **Frontend:**
   - Carpeta: `/src`
   - Estructura modular que incluye componentes, hooks, páginas y estilos.
   - Gestión de rutas con **React Router DOM**.

2. **Backend:**
   - Carpeta: `/server`
   - Controladores, rutas, y modelos claramente separados.
   - Conexión a MongoDB usando **Mongoose**.

3. **Base de Datos:**
   - MongoDB almacena documentos para:
     - Libros
     - Usuarios
     - Pedidos

4. **Despliegue:**
   - Backend: [Vercel](https://vercel.com/) 
   - Frontend: [Vercel](https://vercel.com/)

---

## **Cómo Ejecutar el Proyecto Localmente**

### **Prerrequisitos**
- Node.js instalado.
- MongoDB configurado localmente o usar MongoDB Atlas.

### **Clonar el Repositorio**
```bash
git clone https://github.com/CristianVellio/proyecto-Libreria.git
cd proyecto-Libreria
```

### **Backend**
1. Navega a la carpeta del servidor:
   ```bash
   cd server
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` con las siguientes variables:
   ```env
   MONGO_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

### **Frontend**
1. Navega a la carpeta del cliente:
   ```bash
   cd client
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el cliente:
   ```bash
   npm start
   ```

---


Este README proporciona una visión completa del proyecto Librería y guía para contribuir o ejecutarlo localmente. ¡Disfrútalo! 🚀

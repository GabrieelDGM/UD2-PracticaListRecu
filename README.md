📝 Lista de Anime — Proyecto React Native (Expo)
🎯 Objetivo del Proyecto

Este proyecto tiene como objetivo crear una aplicación móvil en React Native (Expo) que permita visualizar una lista de animes con su nombre, categoría y precio aproximado.
El diseño sigue la estructura de una lista tipo “cards” con una pantalla de inicio (portada) y una pantalla de listado.

📱 Diseño General de la Aplicación
🏠 Pantalla de Inicio (index.tsx)

Muestra el título principal “Lista de Anime”.

Fondo con imagen usando ImageBackground.

Un botón “Ver Animes” que sirve como transición hacia la lista.

Se ha cuidado la estética, con colores personalizados, sombras y tipografía clara.

📋 Pantalla de Lista (list.tsx)

Muestra un listado de animes con:

🖋️ Nombre del anime

🎭 Categoría o género japonés principal

💰 Costo aproximado de producción

El listado se genera con un FlatList.

Cada anime se muestra dentro de una tarjeta (card) con estilo individual.

🧩 Estructura del Proyecto

![Estructura del Proyecto](./assets/images/estrucutra1.png)

📂 Enlaces a los archivos principales
![Codigo index](./app/index.tsx)
![Codigo list](./app/list.tsx)

⚙️ Tecnologías Utilizadas

React Native con Expo

TypeScript

Expo Router (para navegación entre pantallas)

FlatList para renderizar la lista de animes

ImageBackground para fondo en portada

Hooks (useState) para el manejo del estado local
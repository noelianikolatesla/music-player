# 🎵 Music Player

<p align="center">
  <img src="https://raw.githubusercontent.com/noelianikolatesla/music-player/main/banner.png" alt="Music Player Banner" width="800">
</p>


<!-- Puedes cambiar esta imagen por la tuya o usar tu banner personalizado -->

> Reproductor musical simple hecho con **JavaScript** y **TailwindCSS**, que carga automáticamente canciones desde un repositorio público en GitHub.

---

## 🚀 Demo

👉 **[Abrir Music Player](https://noelianikolatesla.github.io/music-player/)**  
*(Asegúrate de activar GitHub Pages desde Settings → Pages → “Deploy from branch”)*

---

## 💡 Descripción

Este proyecto es una pequeña aplicación web que permite **escuchar música directamente desde el navegador**.  
Los archivos `.mp3` se almacenan en un repositorio separado y el reproductor los **carga automáticamente usando la API pública de GitHub**.  

Ideal para practicar:
- Peticiones `fetch()` en JavaScript  
- Manipulación del DOM  
- Estilos con **TailwindCSS**  
- Reproductor `<audio>` nativo de HTML5  

---

## 🧱 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|--------------|
| 🟦 **JavaScript** | Lógica del reproductor y carga dinámica de canciones |
| 🎨 **TailwindCSS** | Estilos rápidos y modernos |
| 💾 **GitHub API** | Obtención automática de la lista de canciones |
| 🌐 **GitHub Pages** | Publicación gratuita del proyecto |

---

## 📁 Estructura del proyecto

```
music-player/
│
├── index.html   # Estructura principal del reproductor
├── script.js    # Lógica para listar y reproducir canciones
└── README.md    # Este archivo
```

---

## 🎧 Cómo funciona

1. Al cargar la página, `script.js` hace una petición `fetch()` al repositorio:  
   [`https://api.github.com/repos/noelianikolatesla/music/contents/`](https://github.com/noelianikolatesla/music)
2. Filtra los archivos `.mp3`.  
3. Muestra la lista automáticamente en pantalla.  
4. Al hacer clic en una canción, se reproduce usando el elemento `<audio>`.  

---

## 🖼️ Vista previa

> *(Puedes reemplazar esta imagen con una captura real de tu reproductor)*

<p align="center">
  <img src="https://raw.githubusercontent.com/noelianikolatesla/music-player/main/banner.png" alt="Music Player Banner" width="800">
</p>


---

## 🔧 Instalación local

Si deseas ejecutarlo en tu PC:

```bash
git clone https://github.com/noelianikolatesla/music-player.git
cd music-player
```

Luego abre `index.html` con **Live Server** desde Visual Studio Code.

---

## 💫 Características

- 🎶 Reproduce canciones directamente desde GitHub  
- ⚡ Carga automática de archivos con `fetch()`  
- 💎 Diseño limpio y responsive con TailwindCSS  
- 🧩 Sin dependencias externas, 100% HTML + JS puro  
- 🌈 Ideal para portfolios o proyectos educativos  

---

## ✨ Autor

👩‍💻 **Noelia Nikola Tesla**  
📦 [GitHub](https://github.com/noelianikolatesla)  

🪄 *Proyecto educativo desarrollado con pasión, creatividad y mucho ritmo.*  
© 2025 Noelia Nikola Tesla – Todos los derechos reservados.

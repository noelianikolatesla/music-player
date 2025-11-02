// 🔹 Nombre de usuario en GitHub (tu cuenta)
const username = "noelianikolatesla";

// 🔹 Nombre del repositorio donde tienes las canciones
const repo = "music";

// 🔹 Rama principal del repositorio (normalmente "main")
const branch = "main";

// 🔹 URL de la API de GitHub para obtener los archivos del repositorio
// Esta URL devuelve un JSON con todos los archivos del repo
const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/`;

// 🔹 URL base para acceder directamente a los archivos en formato "raw"
// (esto es lo que se usa para reproducir el audio)
const baseRawUrl = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/`;

// 🔹 Referencias a los elementos del HTML
const audio = document.getElementById("audio");         // <audio> donde se reproduce la música
const songTitle = document.getElementById("song-title"); // <h2> donde se muestra el nombre de la canción
const songList = document.getElementById("song-list");   // <ul> donde se listan las canciones

// 🎵 Función principal que carga las canciones desde GitHub
async function loadSongs() {
  try {
    // 🔸 Pedimos a GitHub la lista de archivos del repositorio
    const response = await fetch(apiUrl);

    // 🔸 Convertimos la respuesta en un objeto JSON
    const files = await response.json();

    // 🔸 Filtramos solo los archivos que terminan en ".mp3"
    // Así evitamos mostrar archivos que no sean canciones
    const songs = files.filter(file => file.name.endsWith(".mp3"));

    // 🔸 Limpiamos la lista del HTML por si ya tenía algo
    songList.innerHTML = "";

    // 🔸 Recorremos cada canción encontrada
    songs.forEach((song) => {
      // 🔸 Creamos un nuevo elemento <li> (cada fila de la lista)
      const li = document.createElement("li");

      // 🔸 Mostramos el nombre del archivo (sin codificación rara de espacios)
      li.textContent = song.name.replaceAll("%20", " ");

      // 🔸 Le damos estilos usando clases de Tailwind (color, hover, bordes redondeados…)
      li.className =
        "cursor-pointer bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition";

      // 🔸 Cuando se hace clic en una canción, se llama a la función playSong()
      li.addEventListener("click", () => playSong(song));

      // 🔸 Finalmente, agregamos este <li> a la lista del HTML
      songList.appendChild(li);
    });

    // 🔸 Cambiamos el texto del título para decir que ya puede elegir canción
    songTitle.textContent = "Selecciona una canción 🎶";

  } catch (error) {
    // ⚠️ Si ocurre un error (por ejemplo, no se puede conectar con GitHub)
    // mostramos un mensaje de error en la página y en la consola
    console.error("Error al cargar canciones:", error);
    songTitle.textContent = "Error al cargar canciones 😞";
  }
}

// 🎶 Función para reproducir una canción cuando se hace clic
function playSong(song) {
  // 🔸 Creamos la URL completa del archivo en formato RAW (directo para reproducir)
  const src = baseRawUrl + encodeURIComponent(song.name);

  // 🔸 Cambiamos el atributo "src" del <audio> para que cargue la nueva canción
  audio.src = src;

  // 🔸 Mostramos el nombre de la canción en pantalla
  songTitle.textContent = song.name.replaceAll("%20", " ");

  // 🔸 Reproducimos automáticamente el audio
  audio.play();
}

// 🚀 Llamamos a la función principal para que cargue las canciones al abrir la página
loadSongs();

const playlists = {
  happy: {
    title: "Happy Vibes ",
    link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" // Pharrell - Happy
  },
  sad: {
    title: "Sad Songs ",
    link: "https://www.youtube.com/watch?v=J3UjJ4wKLkg" // Adele - Someone Like You
  },
  energetic: {
    title: "Energy Boost ⚡",
    link: "https://www.youtube.com/watch?v=BoEKWtgJQAU" // Kanye - Power
  },
  relaxed: {
    title: "Chill & Relax ",
    link: "https://www.youtube.com/watch?v=5qap5aO4i9A" // Lofi hip hop
  }
};

function getPlaylist(mood) {
  const playlistDiv = document.getElementById("playlist");
  const selected = playlists[mood];
  playlistDiv.innerHTML = `
    <h2>${selected.title}</h2>
    <a href="${selected.link}" target="_blank">Listen on YouTube</a>
  `;
}

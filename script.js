const items = document.querySelectorAll('.song-item');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const title = item.getAttribute('data-title');
    const artist = item.getAttribute('data-artist');
    const cover = item.getAttribute('data-cover');

    songTitle.textContent = title;
    songArtist.textContent = artist;
    albumArt.src = cover;
  });
});
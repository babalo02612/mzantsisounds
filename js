function showNotification(message) {
  const note = document.getElementById('notification');
  note.textContent = message;
  note.classList.remove('hidden');
  setTimeout(() => {
    note.classList.add('hidden');
  }, 3000);
}
function liveSearch(query) {
    fetch(`search.php?q=${query}`)
      .then(res => res.json())
      .then(data => {
        const suggestions = document.getElementById('suggestions');
        suggestions.innerHTML = '';
        data.forEach(song => {
          const div = document.createElement('div');
          div.textContent = song.title;
          suggestions.appendChild(div);
        });
      });
  }
  
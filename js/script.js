function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar la página');
            return response.text();
        })
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
            localStorage.setItem('lastPage', page);
        })
        .catch(error => console.error('Error al cargar contenido:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    const lastPage = localStorage.getItem('lastPage') || 'home.html'; 
    loadPage(lastPage);
});

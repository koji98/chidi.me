document.querySelector('#toggle').addEventListener('click', function() {
    let wasDarkMode = localStorage.getItem('theme') === 'darkmode';

    localStorage.setItem('theme', wasDarkMode ? 'lightmode' : 'darkmode');
    document.documentElement.style = "";
    document.documentElement.className = (wasDarkMode ? 'lightmode' : 'darkmode')
});
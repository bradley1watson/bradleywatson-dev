window.addEventListener('load', function() {
    const loadingBarContainer = document.getElementById('loading-bar-container');
    setTimeout(function() {
        loadingBarContainer.style.display = 'none';
    }, 1000); // Minimum delay of 1 second
});

document.addEventListener('DOMContentLoaded', function() {
    var sidebarBtn = document.querySelector('.sidebarbtn');
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');

    sidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            content.style.marginLeft = '50px';
        } else {
            content.style.marginLeft = '50px';
        }
    });
});

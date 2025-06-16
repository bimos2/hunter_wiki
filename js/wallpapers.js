// Dados dos wallpapers
const wallpapers = [
    {
        id: "gon-wall",
        title: "Gon Freecss",
        image: "assets/images/wallpapers/gon.png",
        category: "characters",
        resolution: "1920x1080",
        download: "assets/images/wallpapers/gon.png"
    },
    {
        id: "killua-wall",
        title: "Killua Zoldyck",
        image: "assets/images/wallpapers/killua.png",
        category: "characters",
        resolution: "1920x1080",
        download: "assets/images/wallpapers/killua.png"
    },
        {
        id: "gon-wall",
        title: "Equipe",
        image: "assets/images/wallpapers/time.jpg",
        category: "groups",
        resolution: "1920x1080",
        download: "assets/images/wallpapers/time.jpg"
    },
    {
        id: "killua-wall",
        title: "Kurapika",
        image: "assets/images/wallpapers/kurapika.jpg",
        category: "art",
        resolution: "1920x1080",
        download: "assets/images/wallpapers/kurapika.jpg"
    },
    // Adicione mais wallpapers
];

// Carregar wallpapers na galeria
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('wallpapers-grid');
    
    wallpapers.forEach(wall => {
        const wallCard = document.createElement('div');
        wallCard.className = 'col-md-4 col-lg-3';
        wallCard.innerHTML = `
            <div class="wallpaper-card" data-category="${wall.category}" data-title="${wall.title.toLowerCase()}">
                <a href="${wall.image}" data-lightbox="wallpapers" data-title="${wall.title} - ${wall.resolution}">
                    <img src="${wall.image}" alt="${wall.title}" class="wallpaper-img">
                </a>
                <div class="wallpaper-overlay">
                    <h5 class="wallpaper-title">${wall.title}</h5>
                    <span class="wallpaper-badge">${wall.resolution}</span>
                    <a href="${wall.download}" download class="btn btn-sm btn-download" title="Download">
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(wallCard);
    });
    
    // Filtros
    document.getElementById('wallpaper-search').addEventListener('input', filterWallpapers);
    document.getElementById('category-filter').addEventListener('change', filterWallpapers);
    
    // Configurar lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 100,
        'showImageNumberLabel': false,
        'alwaysShowNavOnTouchDevices': true
    });
});

// Filtrar wallpapers
function filterWallpapers() {
    const searchTerm = document.getElementById('wallpaper-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    
    document.querySelectorAll('.wallpaper-card').forEach(card => {
        const wallTitle = card.getAttribute('data-title');
        const wallCategory = card.getAttribute('data-category');
        
        const titleMatch = wallTitle.includes(searchTerm);
        const categoryMatch = categoryFilter === 'all' || wallCategory === categoryFilter;
        
        if (titleMatch && categoryMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
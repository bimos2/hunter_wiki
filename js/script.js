// Efeito de scroll na navegação
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inicializar tooltips do Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Carregar personagens favoritos do LocalStorage
document.addEventListener('DOMContentLoaded', function() {
    const favChars = JSON.parse(localStorage.getItem('hxhFavoriteChars')) || [];
    
    // Atualizar ícones de favoritos se estiver na página de personagens
    if (document.querySelector('.character-card')) {
        favChars.forEach(charId => {
            const favBtn = document.querySelector(`.fav-btn[data-char-id="${charId}"]`);
            if (favBtn) {
                favBtn.classList.add('active');
                favBtn.innerHTML = '<i class="fas fa-heart"></i>';
            }
        });
    }
});

// Função para alternar favoritos (usada na página de personagens)
function toggleFavorite(btn) {
    const charId = btn.getAttribute('data-char-id');
    let favChars = JSON.parse(localStorage.getItem('hxhFavoriteChars')) || [];
    
    if (btn.classList.contains('active')) {
        // Remover dos favoritos
        favChars = favChars.filter(id => id !== charId);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        // Adicionar aos favoritos
        favChars.push(charId);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    
    localStorage.setItem('hxhFavoriteChars', JSON.stringify(favChars));
}

// Efeito de hover nos cards de personagem
if (document.querySelector('.character-card')) {
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(249, 202, 36, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}
function adjustBackground() {
    const video = document.getElementById('bg-video');
    const mobileBg = document.querySelector('.mobile-background');
    
    if (window.innerWidth <= 768) {
        // Modo mobile - usar imagem
        if (video) video.style.display = 'none';
        if (mobileBg) mobileBg.style.display = 'block';
        
        // Pausar o vídeo para economizar recursos
        if (video) video.pause();
    } else {
        // Modo desktop - usar vídeo
        if (video) {
            video.style.display = 'block';
            video.play();
        }
        if (mobileBg) mobileBg.style.display = 'none';
    }
}

// Executar ao carregar e ao redimensionar
document.addEventListener('DOMContentLoaded', function() {
    adjustBackground();
    
    // Adicionar outros event listeners existentes...
});

window.addEventListener('resize', function() {
    adjustBackground();
});
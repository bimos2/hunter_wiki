document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const muteToggle = document.getElementById('mute-toggle');
    const volumeSlider = document.getElementById('volume-slider');
    
    // Tenta iniciar o áudio automaticamente
    function startAudio() {
        audio.play().catch(e => {
            console.log('Autoplay prevented:', e);
            // Mostra um botão para ativar o áudio se o autoplay for bloqueado
            muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            muteToggle.style.display = 'flex';
        });
    }
    
    // Carrega estado salvo
    const savedVolume = localStorage.getItem('audioVolume');
    const savedMuted = localStorage.getItem('audioMuted');
    const savedTime = localStorage.getItem('audioTime');
    
    if (savedVolume !== null) {
        audio.volume = parseFloat(savedVolume);
        volumeSlider.value = savedVolume;
    }
    
    if (savedMuted === 'true') {
        audio.muted = true;
        muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    
    if (savedTime !== null) {
        audio.currentTime = parseFloat(savedTime);
    }
    
    // Inicia o áudio
    startAudio();
    
    // Controles
    muteToggle.addEventListener('click', function() {
        audio.muted = !audio.muted;
        localStorage.setItem('audioMuted', audio.muted);
        
        if (audio.muted) {
            muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            muteToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });
    
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
        localStorage.setItem('audioVolume', this.value);
        
        if (this.value == 0) {
            muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            audio.muted = true;
        } else {
            muteToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            audio.muted = false;
        }
    });
    
    // Salva o tempo periodicamente
    setInterval(() => {
        localStorage.setItem('audioTime', audio.currentTime);
    }, 1000);
    
    // Transfere o estado entre páginas
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('audioTransferTime', audio.currentTime);
        localStorage.setItem('audioTransferVolume', audio.volume);
        localStorage.setItem('audioTransferMuted', audio.muted);
    });
    
    // Recupera o estado transferido
    const transferTime = localStorage.getItem('audioTransferTime');
    const transferVolume = localStorage.getItem('audioTransferVolume');
    const transferMuted = localStorage.getItem('audioTransferMuted');
    
    if (transferTime !== null) {
        audio.currentTime = parseFloat(transferTime);
        localStorage.removeItem('audioTransferTime');
    }
    
    if (transferVolume !== null) {
        audio.volume = parseFloat(transferVolume);
        volumeSlider.value = transferVolume;
        localStorage.removeItem('audioTransferVolume');
    }
    
    if (transferMuted !== null) {
        audio.muted = transferMuted === 'true';
        muteToggle.innerHTML = audio.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        localStorage.removeItem('audioTransferMuted');
    }
});
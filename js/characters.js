// Dados dos personagens com wallpapers específicos
const characters = [
    {
        id: "gon",
        name: "Gon Freecss",
        bgImage: "assets/images/characters/gon-bg.jpg",
        charImage: "assets/images/characters/gon.png",
        nenType: "enhancer",
        description: "Um jovem e determinado Hunter em busca de seu pai, Ging Freecss. Gon é um Enhancer com uma incrível capacidade de crescimento e uma personalidade otimista e teimosa.",
        abilities: ["Jajanken", "Ataque de Pedra", "Ataque de Tesoura", "Ataque de Papel", "Força Aprimorada"],
        stats: {
            power: 85,
            intelligence: 70,
            speed: 80,
            endurance: 90,
            nen: 75,
            potential: 95
        },
        bio: "Gon Freecss é o protagonista de Hunter x Hunter. Ele deixa sua ilha natal para se tornar um Hunter e encontrar seu pai, que também é um Hunter lendário. Apesar de sua natureza gentil, Gon pode ser incrivelmente feroz quando seus amigos estão em perigo."
    },
    {
        id: "killua",
        name: "Killua Zoldyck",
        bgImage: "assets/images/characters/killua.gif",
        charImage: "assets/images/characters/killua.png",
        nenType: "transmuter",
        description: "Ex-assassino da família Zoldyck e melhor amigo de Gon. Killua é um prodígio com habilidades excepcionais e velocidade relâmpago.",
        abilities: ["Garra Elétrica", "Velocidade Relâmpago", "Kanmuru", "Assassinato Silencioso", "Resistência a Venenos"],
        stats: {
            power: 80,
            intelligence: 90,
            speed: 95,
            endurance: 85,
            nen: 80,
            potential: 90
        },
        bio: "Killua Zoldyck é o terceiro filho da famosa família de assassinos Zoldyck. Apesar de seu treinamento brutal, ele desenvolve uma personalidade mais gentil após conhecer Gon. Sua habilidade de transformar sua aura em eletricidade o torna um dos personagens mais poderosos da série."
    },
    {
        id: "kurapika",
        name: "Kurapika",
        bgImage: "assets/images/characters/kurapika.gif",
        charImage: "assets/images/characters/kurapika-bg.jpg",
        nenType: "conjurer",
        description: "O último sobrevivente do clã Kurta, Kurapika jurou vingança contra a Trupe Fantasma pelos olhos escarlates de seu povo.",
        abilities: ["Correntes do Juramento", "Olhos Escarlates", "Cura Restritiva", "Detecção de Mentiras", "Cadeias de Ferro"],
        stats: {
            power: 75,
            intelligence: 95,
            speed: 80,
            endurance: 75,
            nen: 85,
            potential: 85
        },
        bio: "Kurapika é um membro do clã Kurta, conhecido por seus olhos escarlates que ficam mais poderosos quando ele experimenta emoções fortes. Ele desenvolveu um sistema Nen único com restrições específicas para combater a Trupe Fantasma."
    },
    {
        id: "hisoka",
        name: "Hisoka",
        bgImage: "assets/images/characters/hisoka.gif",
        charImage: "assets/images/characters/hisoka.png",
        nenType: "transmuter",
        description: "Um lutador sádico e imprevisível que busca oponentes fortes para satisfazer seus desejos de batalha.",
        abilities: ["Bungee Gum", "Texture Surprise", "Aura Assassina", "Extrema Flexibilidade", "Estratégia de Combate"],
        stats: {
            power: 90,
            intelligence: 85,
            speed: 90,
            endurance: 80,
            nen: 95,
            potential: 85
        },
        bio: "Hisoka é um dos personagens mais imprevisíveis e perigosos de Hunter x Hunter. Ele é obcecado por encontrar oponentes fortes e muitas vezes poupa inimigos promissores para lutar contra eles quando estiverem mais poderosos. Sua habilidade Bungee Gum tem as propriedades de borracha e chiclete."
    }
    // Adicione mais personagens conforme necessário
];

// Carregar personagens na página
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('characters-grid');
    
    characters.forEach(char => {
        const charCard = document.createElement('div');
        charCard.className = 'col-md-6 col-lg-4 col-xl-3 mb-4';
        charCard.innerHTML = `
            <div class="character-card" data-char-id="${char.id}" data-nen-type="${char.nenType}" data-name="${char.name.toLowerCase()}">
                <img src="${char.bgImage}" alt="${char.name}" class="character-bg">
                <div class="character-overlay"></div>
                <button class="fav-btn" data-char-id="${char.id}" onclick="toggleFavorite(this)">
                    <i class="far fa-heart"></i>
                </button>
                <div class="character-content">
                    <h2 class="character-name">${char.name}</h2>
                    <span class="character-nen-type ${char.nenType}">${char.nenType.toUpperCase()}</span>
                    <p class="character-desc">${char.description.substring(0, 100)}...</p>
                    <div class="character-abilities">
                        ${char.abilities.slice(0, 3).map(ability => `
                            <span class="ability-tag">${ability}</span>
                        `).join('')}
                        ${char.abilities.length > 3 ? `<span class="ability-tag">+${char.abilities.length - 3}</span>` : ''}
                    </div>
                    <button class="btn btn-sm btn-details mt-2" data-bs-toggle="modal" data-bs-target="#characterModal" 
                            onclick="loadCharacterDetails('${char.id}')">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(charCard);
    });
    
    // Carregar favoritos do LocalStorage
    const favChars = JSON.parse(localStorage.getItem('hxhFavoriteChars')) || [];
    favChars.forEach(charId => {
        const favBtn = document.querySelector(`.fav-btn[data-char-id="${charId}"]`);
        if (favBtn) {
            favBtn.classList.add('active');
            favBtn.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
    
    // Filtros
    document.getElementById('char-search').addEventListener('input', filterCharacters);
    document.getElementById('nen-filter').addEventListener('change', filterCharacters);
});

// Filtrar personagens
function filterCharacters() {
    const searchTerm = document.getElementById('char-search').value.toLowerCase();
    const nenFilter = document.getElementById('nen-filter').value;
    
    document.querySelectorAll('.character-card').forEach(card => {
        const charName = card.getAttribute('data-name');
        const charNenType = card.getAttribute('data-nen-type');
        
        const nameMatch = charName.includes(searchTerm);
        const nenMatch = nenFilter === 'all' || charNenType === nenFilter;
        
        if (nameMatch && nenMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Alternar favoritos
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

// Carregar detalhes do personagem no modal
function loadCharacterDetails(charId) {
    const char = characters.find(c => c.id === charId);
    if (!char) return;
    
    document.getElementById('charModalTitle').textContent = char.name;
    
    const modalBody = document.getElementById('charModalBody');
    modalBody.innerHTML = `
        <div class="character-detail-container">
            <div class="character-detail-left">
                <img src="${char.bgImage}" alt="${char.name}" class="character-detail-bg">
                <img src="${char.charImage}" alt="${char.name}" class="character-detail-image">
            </div>
            <div class="character-detail-right">
                <h2 class="character-detail-title">${char.name}</h2>
                <span class="character-detail-nen ${char.nenType}">${char.nenType.toUpperCase()}</span>
                
                <div class="character-detail-section">
                    <h4>Biografia</h4>
                    <p>${char.bio}</p>
                </div>
                
                <div class="character-detail-section">
                    <h4>Habilidades de Nen</h4>
                    <div class="character-abilities">
                        ${char.abilities.map(ability => `
                            <span class="ability-tag">${ability}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="character-detail-section">
                    <h4>Estatísticas</h4>
                    <div class="nen-stats">
                        ${Object.entries(char.stats).map(([stat, value]) => `
                            <div class="stat-item">
                                <span class="stat-name">${stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
                                <div class="stat-bar">
                                    <div class="stat-progress bg-${char.nenType}" style="width: ${value}%"></div>
                                </div>
                                <small class="stat-value">${value}/100</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}
// Dados dos personagens (pode ser movido para um JSON externo)
const characters = [
    {
        id: "gon",
        name: "Gon Freecss",
        image: "assets/images/chars/gon.jpg",
        nenType: "enhancer",
        description: "Um jovem e determinado Hunter em busca de seu pai, Ging Freecss.",
        abilities: ["Jajanken", "Ataque de Pedra", "Ataque de Tesoura", "Ataque de Papel"],
        stats: {
            power: 85,
            intelligence: 70,
            speed: 80,
            endurance: 90,
            nen: 75
        }
    },
    {
        id: "killua",
        name: "Killua Zoldyck",
        image: "assets/images/chars/killua.jpg",
        nenType: "transmuter",
        description: "Ex-assassino da família Zoldyck e melhor amigo de Gon.",
        abilities: ["Garra Elétrica", "Velocidade Relâmpago", "Kanmuru", "Assassinato Silencioso"],
        stats: {
            power: 80,
            intelligence: 90,
            speed: 95,
            endurance: 85,
            nen: 80
        }
    },
    // Adicione mais personagens conforme necessário
];

// Carregar personagens na página
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('characters-grid');
    
    characters.forEach(char => {
        const charCard = document.createElement('div');
        charCard.className = 'col-md-4 mb-4';
        charCard.innerHTML = `
            <div class="character-card" data-char-id="${char.id}" data-nen-type="${char.nenType}">
                <div class="char-image-container">
                    <img src="${char.image}" alt="${char.name}" class="char-image">
                    <button class="fav-btn" data-char-id="${char.id}" onclick="toggleFavorite(this)">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="char-info">
                    <h3>${char.name}</h3>
                    <span class="badge bg-${char.nenType}">${char.nenType.toUpperCase()}</span>
                    <p>${char.description.substring(0, 100)}...</p>
                    <button class="btn btn-sm btn-details" data-bs-toggle="modal" data-bs-target="#characterModal" 
                            onclick="loadCharacterDetails('${char.id}')">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(charCard);
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
        const charName = card.querySelector('h3').textContent.toLowerCase();
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

// Carregar detalhes do personagem no modal
function loadCharacterDetails(charId) {
    const char = characters.find(c => c.id === charId);
    if (!char) return;
    
    document.getElementById('charModalTitle').textContent = char.name;
    
    const modalBody = document.getElementById('charModalBody');
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${char.image}" alt="${char.name}" class="img-fluid mb-3">
                <div class="char-stats">
                    <h4>Estatísticas</h4>
                    ${Object.entries(char.stats).map(([stat, value]) => `
                        <div class="stat-row">
                            <span class="stat-name">${stat.charAt(0).toUpperCase() + stat.slice(1)}:</span>
                            <div class="progress">
                                <div class="progress-bar bg-${char.nenType}" role="progressbar" style="width: ${value}%"></div>
                            </div>
                            <span class="stat-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="col-md-8">
                <h4>Biografia</h4>
                <p>${char.description}</p>
                
                <h4 class="mt-4">Habilidades de Nen</h4>
                <ul>
                    ${char.abilities.map(ability => `<li>${ability}</li>`).join('')}
                </ul>
                
                <h4 class="mt-4">Tipo de Nen</h4>
                <p>${getNenTypeDescription(char.nenType)}</p>
            </div>
        </div>
    `;
}

// Descrições dos tipos de Nen
function getNenTypeDescription(nenType) {
    const descriptions = {
        enhancer: "Enhancers fortalecem e aumentam as propriedades naturais de objetos ou seu próprio corpo. São diretos e simples.",
        transmuter: "Transmuters alteram as propriedades de sua aura para imitar algo mais. São caprichosos e propensos a mentir.",
        conjurer: "Conjurers materializam sua aura em objetos reais. São normalmente altamente metódicos e controlados.",
        emitter: "Emitters separam sua aura de seu corpo para atacar à distância. São impacientes e não detalhistas.",
        manipulator: "Manipulators controlam objetos vivos ou não-vivos com sua aura. São argumentativos e lógicos.",
        specialist: "Specialists têm habilidades únicas que não se encaixam nas outras categorias. São individualistas e carismáticos."
    };
    
    return descriptions[nenType] || "Tipo de Nen desconhecido.";
}
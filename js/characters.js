// Dados dos personagens (atualizado com URLs de GIFs)
const characters = [
    {
        id: "gon",
        name: "Gon Freecss",
        bgImage: "assets/images/characters/gon-bg.jpg",
        gif: "assets/images/characters/gon.gif",
        nenType: "enhancer",
        description: "Um jovem e determinado Hunter em busca de seu pai, Ging Freecss.",
        abilities: ["Jajanken", "Ataque de Pedra", "Ataque de Tesoura", "Ataque de Papel"],
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
        bgImage: "assets/images/characters/killua-bg.jpg",
        gif: "assets/images/characters/killua.gif",
        nenType: "transmuter",
        description: "Ex-assassino da família Zoldyck e melhor amigo de Gon.",
        abilities: ["Garra Elétrica", "Velocidade Relâmpago", "Kanmuru", "Assassinato Silencioso"],
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
        bgImage: "assets/images/characters/kurapika-bg.jpg",
        gif: "assets/images/characters/kurapika.gif",
        nenType: "conjurer",
        description: "O último sobrevivente do clã Kurta, em busca de vingança contra a Trupe Fantasma.",
        abilities: ["Correntes do Juramento", "Olhos Escarlates", "Cura Restritiva", "Detecção de Mentiras"],
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
        id: "leorio",
        name: "Leorio Paradinight",
        bgImage: "assets/images/characters/leorio.jpg",
        gif: "assets/images/characters/leorio.gif",
        nenType: "emitter",
        description: "Amigo de Gon e Killua que deseja se tornar médico para ajudar os necessitados.",
        abilities: ["Ultra Punch", "Remote Punch", "Medical Knowledge", "Emission"],
        stats: {
            power: 75,
            intelligence: 80,
            speed: 70,
            endurance: 75,
            nen: 70,
            potential: 80
        },
        bio: "Leorio é um dos personagens mais humanos da série, com objetivos nobres e um grande coração. Inicialmente parece estar apenas atrás de dinheiro, mas seu verdadeiro objetivo é se tornar médico para ajudar pessoas carentes."
    },
    {
        id: "hisoka",
        name: "Hisoka",
        bgImage: "assets/images/characters/hisoka.jpg",
        gif: "assets/images/characters/hisoka.gif",
        nenType: "transmuter",
        description: "Um lutador sádico e imprevisível que busca oponentes fortes.",
        abilities: ["Bungee Gum", "Texture Surprise", "Aura Assassina", "Extrema Flexibilidade"],
        stats: {
            power: 90,
            intelligence: 85,
            speed: 90,
            endurance: 80,
            nen: 95,
            potential: 85
        },
        bio: "Hisoka é um dos personagens mais imprevisíveis e perigosos de Hunter x Hunter. Ele é obcecado por encontrar oponentes fortes e muitas vezes poupa inimigos promissores para lutar contra eles quando estiverem mais poderosos. Sua habilidade Bungee Gum tem as propriedades de borracha e chiclete."
    },
    {
        id: "chrollo",
        name: "Chrollo Lucilfer",
        bgImage: "assets/images/characters/chrollo.jpg",
        gif: "assets/images/characters/chrollo.gif",
        nenType: "specialist",
        description: "Líder da Trupe Fantasma e um dos personagens mais misteriosos da série.",
        abilities: ["Bandit's Secret", "Skill Hunter", "Double Face", "Order Stamp"],
        stats: {
            power: 85,
            intelligence: 95,
            speed: 85,
            endurance: 80,
            nen: 95,
            potential: 90
        },
        bio: "Chrollo Lucilfer é o carismático e enigmático líder da Trupe Fantasma. Sua habilidade Nen permite-lhe roubar as habilidades de outros usuários de Nen, desde que cumpra condições específicas. Ele é extremamente inteligente e um estrategista brilhante."
    },
    {
        id: "meruem",
        name: "Rei Meruem",
        bgImage: "assets/images/characters/meruem.jpg",
        gif: "assets/images/characters/rei.gif",
        nenType: "specialist",
        description: "O Rei dos Quimera Ants e um dos seres mais poderosos do universo Hunter x Hunter.",
        abilities: ["Aura Synthesis", "En", "Ultimate Defense", "Photon"],
        stats: {
            power: 100,
            intelligence: 100,
            speed: 95,
            endurance: 100,
            nen: 100,
            potential: 100
        },
        bio: "Meruem é o produto final da evolução das Formigas Quimera. Ele nasce com habilidades extraordinárias e uma inteligência que se desenvolve rapidamente. Ao longo do arco, ele passa por uma notável evolução emocional e filosófica."
    },
    {
        id: "neferpitou",
        name: "Neferpitou",
        bgImage: "assets/images/characters/neferpitou.jpg",
        gif: "assets/images/characters/neferpitou.gif",
        nenType: "specialist",
        description: "Um dos Guardas Reais das Formigas Quimera, extremamente leal ao Rei Meruem.",
        abilities: ["Doctor Blythe", "Terpsichora", "En", "Enhanced Agility"],
        stats: {
            power: 95,
            intelligence: 85,
            speed: 95,
            endurance: 90,
            nen: 90,
            potential: 95
        },
        bio: "Neferpitou é o primeiro dos Guardas Reais a nascer. Sua habilidade Nen se manifesta principalmente em técnicas médicas e combate corporal. Ele é extremamente leal ao Rei Meruem e possui instintos assassinos extremamente apurados."
    },
    {
        id: "zeno",
        name: "Zeno Zoldyck",
        bgImage: "assets/images/characters/zeno.jpg",
        gif: "assets/images/characters/zeno.gif",
        nenType: "emitter",
        description: "Avô de Killua e lendário assassino.",
        abilities: ["Dragon Head", "Dragon Lance", "Assassin Techniques"],
        stats: { power: 95, intelligence: 90, speed: 90, endurance: 85, nen: 95 },
        bio: "Zeno Zoldyck é o ex-líder da família Zoldyck e avô de Killua. Apesar de sua idade avançada, continua sendo um dos assassinos mais perigosos do mundo."
    }
];

// Função para carregar os detalhes do personagem no modal (atualizada com GIF)
function loadCharacterDetails(charId) {
    const char = characters.find(c => c.id === charId);
    if (!char) return;
    
    document.getElementById('charModalTitle').textContent = char.name;
    
    const modalBody = document.getElementById('charModalBody');
    modalBody.innerHTML = `
        <div class="character-detail-container">
            <div class="character-detail-left">
                <img src="${char.gif}" alt="${char.name}" class="character-detail-gif" onerror="this.src='${char.image}'">
                <div class="character-detail-overlay"></div>
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
    
    // Mostra o modal
    const modal = new bootstrap.Modal(document.getElementById('characterModal'));
    modal.show();
}

// Função para pausar/retomar GIF
function toggleGif(button) {
    const gif = button.closest('.character-detail-left').querySelector('.character-detail-image');
    const currentSrc = gif.src;
    
    if (currentSrc.includes('.gif')) {
        // Se for GIF, troca para imagem estática
        gif.src = currentSrc.replace('.gif', '.jpg');
        button.textContent = 'Retomar GIF';
        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary');
    } else {
        // Se for imagem estática, troca para GIF
        gif.src = currentSrc.replace('.jpg', '.gif');
        button.textContent = 'Pausar GIF';
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
    }
}

// Carregar personagens no layout vertical
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('characters-vertical');
    
    characters.forEach(char => {
        const charItem = document.createElement('div');
        charItem.className = 'character-vertical-item';
        charItem.style.backgroundImage = `url('${char.bgImage}')`;
        charItem.setAttribute('data-char-id', char.id);
        
        charItem.innerHTML = `
            <div class="character-vertical-overlay">
                <h2 class="character-vertical-name">${char.name}</h2>
            </div>
        `;
        
        charItem.addEventListener('click', function() {
            loadCharacterDetails(char.id);
        });
        
        container.appendChild(charItem);
    });
});

// Função para detectar dispositivos móveis
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Carregar personagens com layout responsivo
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('characters-vertical');
    
    // Limpar container
    container.innerHTML = '';
    
    // Verificar se é mobile
    const mobileLayout = isMobileDevice() || window.innerWidth < 768;
    
    if (mobileLayout) {
        // Layout para mobile - lista vertical
        container.classList.add('mobile-layout');
        characters.forEach(char => {
            const charItem = document.createElement('div');
            charItem.className = 'character-mobile-item';
            charItem.style.backgroundImage = `url('${char.bgImage}')`;
            charItem.setAttribute('data-char-id', char.id);
            
            charItem.innerHTML = `
                <div class="character-mobile-overlay">
                    <h2 class="character-mobile-name">${char.name}</h2>
                    <span class="character-mobile-nen ${char.nenType}">${char.nenType.toUpperCase()}</span>
                </div>
            `;
            
            charItem.addEventListener('click', function() {
                loadCharacterDetails(char.id);
            });
            
            container.appendChild(charItem);
        });
    } else {
        // Layout para desktop - colunas horizontais
        container.classList.remove('mobile-layout');
        characters.forEach(char => {
            const charItem = document.createElement('div');
            charItem.className = 'character-vertical-item';
            charItem.style.backgroundImage = `url('${char.bgImage}')`;
            charItem.setAttribute('data-char-id', char.id);
            
            charItem.innerHTML = `
                <div class="character-vertical-overlay">
                    <h2 class="character-vertical-name">${char.name}</h2>
                </div>
            `;
            
            charItem.addEventListener('click', function() {
                loadCharacterDetails(char.id);
            });
            
            container.appendChild(charItem);
        });
    }
});

// Redimensionar ao mudar tamanho da tela
window.addEventListener('resize', function() {
    document.dispatchEvent(new Event('DOMContentLoaded'));
});
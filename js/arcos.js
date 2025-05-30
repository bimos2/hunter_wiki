// Dados dos arcos da história
const arcs = [
    {
        id: "hunter-exam",
        title: "Arco do Exame Hunter",
        episodes: "1-21",
        description: "O Exame Hunter é um teste rigoroso que avalia as habilidades dos participantes em várias áreas. Gon conhece Killua, Kurapika e Leorio durante esta jornada.",
        keyEvents: [
            "Primeira Fase: Corrida de longa distância",
            "Segunda Fase: Culinária e caça",
            "Terceira Fase: Torre dos Truques",
            "Quarta Fase: Caça às tags",
            "Fase Final: Duelos de um contra um"
        ],
        characters: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio", "Hisoka", "Illumi"],
        image: "assets/images/arcs/hunter-exam.jpg"
    },
    {
        id: "zoldyck",
        title: "Arco da Família Zoldyck",
        episodes: "22-26",
        description: "Após o exame, Killua é levado de volta para sua família. Gon, Kurapika e Leorio viajam para a Mansão Zoldyck para resgatá-lo.",
        keyEvents: [
            "Viagem para a Montanha Kukuroo",
            "Testes dos portões da mansão",
            "Encontro com a família Zoldyck",
            "Canary e os servos da mansão",
            "Fuga de Killua"
        ],
        characters: ["Killua Zoldyck", "Gon Freecss", "Silva Zoldyck", "Zeno Zoldyck", "Milluki Zoldyck", "Canary"],
        image: "assets/images/arcs/zoldyck-family.jpg"
    }
    // Adicione mais arcos conforme necessário
];

// Carregar detalhes do arco no modal
document.addEventListener('DOMContentLoaded', function() {
    const arcModal = document.getElementById('arcModal');
    
    arcModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        const arcId = button.getAttribute('data-arc');
        const arc = arcs.find(a => a.id === arcId);
        
        if (!arc) return;
        
        document.getElementById('arcModalTitle').textContent = arc.title;
        
        const modalBody = document.getElementById('arcModalBody');
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${arc.image}" alt="${arc.title}" class="img-fluid mb-3 rounded">
                    <div class="arc-info">
                        <p><strong>Episódios:</strong> ${arc.episodes}</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <h4>Sinopse</h4>
                    <p>${arc.description}</p>
                    
                    <h4 class="mt-4">Eventos Principais</h4>
                    <ul>
                        ${arc.keyEvents.map(event => `<li>${event}</li>`).join('')}
                    </ul>
                    
                    <h4 class="mt-4">Personagens Relevantes</h4>
                    <div class="arc-characters">
                        ${arc.characters.map(char => `
                            <span class="badge bg-primary me-1 mb-1">${char}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });
});
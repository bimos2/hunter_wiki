// Dados dos tipos de Nen
const nenTypes = [
    {
        type: "enhancer",
        name: "Enhancer",
        description: "Enhancers fortalecem e aumentam as propriedades naturais de objetos ou seu próprio corpo. São diretos e simples.",
        examples: ["Gon Freecss", "Uvogin"],
        percentage: "100%",
        abilities: ["Aumento de força física", "Regeneração acelerada", "Reforço de objetos"]
    },
    {
        type: "transmuter",
        name: "Transmuter",
        description: "Transmuters alteram as propriedades de sua aura para imitar algo mais. São caprichosos e propensos a mentir.",
        examples: ["Killua Zoldyck", "Hisoka"],
        percentage: "80%",
        abilities: ["Mudança de propriedades da aura", "Criação de substâncias", "Imitação de elementos"]
    }
    // Adicione os outros tipos
];

// Dados do quiz
const nenQuiz = [
    {
        question: "Como você descreveria sua personalidade?",
        options: [
            { text: "Direto e simples", type: "enhancer" },
            { text: "Caprichoso e imprevisível", type: "transmuter" },
            { text: "Lógico e analítico", type: "manipulator" },
            { text: "Criativo e detalhista", type: "conjurer" },
            { text: "Enérgico e impulsivo", type: "emitter" },
            { text: "Individualista e único", type: "specialist" }
        ]
    }
    // Adicione mais perguntas
];

// Carregar tipos de Nen na página
document.addEventListener('DOMContentLoaded', function() {
    const nenTypesContainer = document.getElementById('nen-types');
    
    nenTypes.forEach(nenType => {
        const typeCard = document.createElement('div');
        typeCard.className = `col-md-6 nen-type-card ${nenType.type}-card`;
        typeCard.innerHTML = `
            <div class="nen-type-header">
                <h4>${nenType.name}</h4>
            </div>
            <div class="nen-type-body">
                <p>${nenType.description}</p>
                <p><strong>Exemplos:</strong> ${nenType.examples.join(', ')}</p>
                <p><strong>Afinidade:</strong> ${nenType.percentage}</p>
                <p><strong>Habilidades comuns:</strong></p>
                <ul>
                    ${nenType.abilities.map(ability => `<li>${ability}</li>`).join('')}
                </ul>
            </div>
        `;
        nenTypesContainer.appendChild(typeCard);
    });
    
    // Configurar o quiz
    const quizModal = document.getElementById('nenQuizModal');
    
    quizModal.addEventListener('show.bs.modal', function() {
        const quizBody = document.getElementById('quizQuestions');
        quizBody.innerHTML = '';
        
        nenQuiz.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'mb-3';
            questionDiv.innerHTML = `
                <h6>${index + 1}. ${question.question}</h6>
                <div class="quiz-options">
                    ${question.options.map(option => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q${index}" id="q${index}-${option.type}" value="${option.type}">
                            <label class="form-check-label" for="q${index}-${option.type}">
                                ${option.text}
                            </label>
                        </div>
                    `).join('')}
                </div>
            `;
            quizBody.appendChild(questionDiv);
        });
    });
    
    // Submissão do quiz
    document.getElementById('submitQuiz').addEventListener('click', function() {
        const results = {};
        
        nenQuiz.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption) {
                const type = selectedOption.value;
                results[type] = (results[type] || 0) + 1;
            }
        });
        
        // Determinar o tipo com mais votos
        let maxType = 'enhancer';
        let maxCount = 0;
        
        for (const [type, count] of Object.entries(results)) {
            if (count > maxCount) {
                maxType = type;
                maxCount = count;
            }
        }
        
        // Mostrar resultado
        const resultNen = nenTypes.find(t => t.type === maxType);
        if (resultNen) {
            const quizBody = document.getElementById('quizQuestions');
            quizBody.innerHTML = `
                <div class="text-center">
                    <h4>Seu tipo de Nen é: ${resultNen.name}</h4>
                    <p>${resultNen.description}</p>
                    <p><strong>Personagens similares:</strong> ${resultNen.examples.join(', ')}</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                </div>
            `;
        }
    });
});
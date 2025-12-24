import { quizData } from './questions.js';

document.addEventListener('DOMContentLoaded', () => {
    const setupForm = document.getElementById('quiz-config');
    const setupSection = document.getElementById('setup-quiz');
    const quizContainer = document.getElementById('quiz-container');

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;

    console.log("Sistema de Quiz iniciado...");

    if (setupForm) {
        setupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const level = document.getElementById('level').value;
            const quantity = parseInt(document.getElementById('quantity').value);

            console.log(`Configurando: Nível ${level}, Quantidade ${quantity}`);

            // Validar dados
            if (!quizData[level]) {
                console.error("Nível não encontrado no questions.js");
                return;
            }

            // Selecionar e embaralhar
            const filtered = [...quizData[level]];
            currentQuestions = filtered.sort(() => Math.random() - 0.5).slice(0, quantity);

            // Trocar telas
            setupSection.classList.add('hidden');
            quizContainer.classList.remove('hidden');

            renderQuestion();
        });
    }

    function renderQuestion() {
        quizContainer.innerHTML = ''; 

        if (currentIndex >= currentQuestions.length) {
            showResults();
            return;
        }

        const data = currentQuestions[currentIndex];

        // Criar Elementos
        const qTitle = document.createElement('h2');
        qTitle.textContent = `Questão ${currentIndex + 1} de ${currentQuestions.length}`;
        
        const qText = document.createElement('p');
        qText.style.margin = "15px 0";
        qText.textContent = data.question;

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-grid';

        data.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => checkAnswer(btn, option, data.answer);
            optionsDiv.appendChild(btn);
        });

        quizContainer.append(qTitle, qText, optionsDiv);
    }

    function checkAnswer(selectedBtn, selectedText, correctAnswer) {
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true); 

        if (selectedText === correctAnswer) {
            score++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('wrong');
            allBtns.forEach(b => {
                if (b.textContent === correctAnswer) b.classList.add('correct');
            });
        }

        setTimeout(() => {
            currentIndex++;
            renderQuestion();
        }, 1500);
    }

    function showResults() {
        quizContainer.innerHTML = `
            <div id="result-section">
                <h2>Quiz Finalizado!</h2>
                <p>Tua pontuação foi: <strong>${score} de ${currentQuestions.length}</strong></p>
                <button onclick="window.location.reload()">Tentar Novamente</button>
            </div>
        `;
        
        // Mostrar seção de comunidade (Supabase)
        const community = document.getElementById('community-section');
        if (community) community.classList.remove('hidden');
    }
});
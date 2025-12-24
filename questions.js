// js/questions.js
export const quizData = {
    easy: [
        {
            question: "Sobre o hardware no Linux, qual o componente recomendado para prevenir problemas com RAM defeituosa?",
            options: ["Memória genérica", "Memória de marca (Quality RAM)", "Apenas memória DDR2", "Linux não exige RAM de qualidade"],
            answer: "Memória de marca (Quality RAM)"
        },
        {
            question: "O programa 'screen' no Linux é usado principalmente para quê?",
            options: ["Gerenciar interfaces gráficas", "Gerenciar janelas de terminal em uma única sessão", "Aumentar a resolução", "Capturar prints"],
            answer: "Gerenciar janelas de terminal em uma única sessão"
        }
    ],
    medium: [
        {
            question: "Quais softwares são comuns para configurar um servidor DNS no Linux?",
            options: ["Apache e Nginx", "SMTP e MTA", "BIND e djbdns", "PostgreSQL e MySQL"],
            answer: "BIND e djbdns"
        }
    ],
    hard: [
        {
            question: "A gestão de e-mails no Linux pode ser feita usando quais protocolos e agentes?",
            options: ["HTTP e Browsers", "SMTP e MTAs (ex: Postfix)", "FTP e Clientes", "SSH e chaves"],
            answer: "SMTP e MTAs (ex: Postfix)"
        }
    ]
};
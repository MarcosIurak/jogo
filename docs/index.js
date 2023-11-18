const questions = [
    {
        question: "Qual é o nome do herói principal em Ben 10?",
        options: ["Ben Tennyson", "Max Tennyson", "Gwen Tennyson"],
        correctAnswer: 0,
        message: "Parabéns, você acertou!",
    },
    {
        question: "Qual é o dispositivo que Ben usa para se transformar em diferentes alienígenas?",
        options: ["Omnitrix", "Ultramatrix", "Transformix"],
        correctAnswer: 0,
        message: "Excelente! Você acertou de novo!",
    },
    {
        question: "Qual é o nome do arqui-inimigo de Ben Tennyson?",
        options: ["Vilgax", "Kevin 11", "Hex"],
        correctAnswer: 0,
        message: "Você é um verdadeiro fã do Ben 10! Parabéns!",
    },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result");
const messageElement = document.getElementById("message");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        resultContainer.style.display = "block";
        messageElement.textContent = currentQuestion.message;
        setTimeout(() => {
            resultContainer.style.display = "none";
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                questionElement.textContent = "Parabéns! Você concluiu o Quiz do Ben 10.";
                optionsContainer.style.display = "none";
                resultContainer.style.display = "block";
                messageElement.textContent = "Você é um verdadeiro fã do Ben 10!";
                const ben10Image = document.getElementById("ben10-image");
                ben10Image.style.display = "block";
            }
        }, 1500);
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}

displayQuestion();



$(document).ready(function () {
    $('#ben10-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});

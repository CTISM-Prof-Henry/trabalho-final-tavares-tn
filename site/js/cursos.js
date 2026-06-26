// Seleciona todos os cards de curso
var cards = document.querySelectorAll(".curso-card");

// Percorre cada card
for (var i = 0; i < cards.length; i++) {
    var card = cards[i];

    // Quando o mouse entra no card, aumenta o tamanho
    card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
    });

    // Quando o mouse sai do card, volta ao tamanho normal
    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
}

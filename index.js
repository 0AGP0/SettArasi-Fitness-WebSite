document.addEventListener("DOMContentLoaded", function () {
    var cardElements = document.querySelectorAll(".card");

    cardElements.forEach(function (card) {
        card.dataset.originalImage = card.querySelector("img").src;
        card.dataset.originalText = card.querySelector("p").textContent;
        card.dataset.additionalText = getAdditionalText(card.id); 

        card.addEventListener("mouseover", function () {
            card.querySelector("img").src = ""; 
            card.querySelector("p").innerHTML = card.dataset.additionalText;
            card.style.backgroundColor = "rgba(0, 0, 0, 0.626)";
            card.querySelector("p").style.backgroundColor = "rgba(177, 11, 44, 0.222)"
            card.querySelector("p").style.fontSize = "25px";
            card.querySelector("p").style.marginTop = "40px";
            card.querySelector("p").style.color = "wheat";
        });

        card.addEventListener("mouseout", function () {
            card.querySelector("img").src = card.dataset.originalImage;
            card.querySelector("p").textContent = card.dataset.originalText;
            card.style.backgroundColor = "";
            card.querySelector("p").style.backgroundColor = "";
            card.querySelector("p").style.fontSize = "";
            card.querySelector("p").style.marginTop = "";
            card.querySelector("p").style.color = "";
        });

        
        card.addEventListener("click", function () {
            var cardId = card.id;
            handleCardClick(cardId);
        });
    });

    function getAdditionalText(cardId) {
        switch (cardId) {
            case "hammer-curl-card":
                return "Hedef Bölge : Biceps ve Forearms"; 
            case "shoulder-press-card":
                return "Hedef Bölge : Omuz ve Triceps";
            case "reverse-curl-card":
                return "Hedef Bölge : Forearm ve Biceps"; 
            case "dumbbell-shrug-card":
                return "Hedef Bölge : Trapezler ve Üst Sırt";
            case "cable-curl-card":
                return "Hedef Bölge : Biceps"; 
            case "over-head-card":
                return "Hedef Bölge : Omuz ve Triceps"; 
            case "Whey":
                return "MuscleCloth Ağırlık Kemeri Siyah<br> 1700TL"
            case "Gold":
                return "Gold Stanart Protein <br> 800TL"
            case "Reflex":
                return "Reflex BCAA İntra Fusion<br> 450TL"
            case "HardLine":
                return "HardLine ProGainer<br> 390TL"
            case "KingSize1":
                return "KingSize Nutrition BCAA Glutamine Powder<br> 678TL"
            case "KingSize2":
                return "KingSize Nutrition ZMA Complex<br> 700TL"
            default:
                return "";
        }
    }
});
function handleCardClick(cardId) {
    switch (cardId) {
        case "hammer-curl-card":
            window.location.href = "biceps.html";
            break;
        case "shoulder-press-card":
            window.location.href = "omuz.html";
            break;
        case "reverse-curl-card":
            window.location.href = "forearm.html";
            break;
        case "dumbbell-shrug-card":
            window.location.href = "trapez.html";
            break;
        case "cable-curl-card":
            window.location.href = "biceps.html";
            break;
        case "over-head-card":
            window.location.href = "omuz.html";
            break;
        case "Whey":
            window.location.href = "aksesuar.html";
            break;
        case "Gold":
            window.location.href = "protein.html";
            break;
        case "Reflex":
            window.location.href = "amino.html";
            break;
        case "HardLine":
            window.location.href = "kilohacim.html";
            break;
        case "KingSize1":
            window.location.href = "amino.html";
            break;
        case "KingSize2":
            window.location.href = "amino.html";
            break;
        default:
            break;
    }
}

// тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэнэ.
var activePlayer = 0;

// тоглогчин цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// Програм эхлэхэд бэлдэнэ
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";


// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function(){
    // Санамсаргүй 1-6 тоо гаргаж өгдөг
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    
    // Шооны зургийг сольдог
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber +'.png';

    // Тоогоо нэмээд харуулна
    if(diceNumber === 1){
        // Раунд дуусмагц оноог тэглэх
        roundScore = 0;
        // Раунд оноог дэлгэц дээр тэглэх
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        // идэвхтэй тоглогчийг байрын солино
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // идэвхтэй тоглогчийн  тодруулж харуулна
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
    } else {
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    

});
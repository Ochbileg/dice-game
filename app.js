// тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэнэ.
var activePlayer = 1;

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

document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber +'.png';
});
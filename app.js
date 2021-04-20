// тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэнэ.
var activePlayer = 0;

// тоглогчин цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// Програм эхлэхэд бэлдэнэ
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Roll Dice button - start
document.body.addEventListener("keyup", (event) => {
  if (event.key === " ") {
    rollDicer();
  }
});

// document.body.onkeyup = function (e) {
//   if (e.keyCode == 32) {
//     rollDicer();
//   }
// };
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  rollDicer();
});

function rollDicer() {
  // Санамсаргүй 1-6 тоо гаргаж өгдөг
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг сольдог
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  // Тоогоо нэмээд харуулна
  if (diceNumber === 1) {
    switchToNextPlayer();
  } else {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
}

// Roll Dice button - end

// Hold button - start
// document.body.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//
//   }
// });

// Anonymous function ashiglaj event listener nemeh
document.querySelector(".btn-hold").addEventListener("click", function () {
  // актив тоглогчийн оноог глобал оноо дээр нэмнэ
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 15) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // ээлжийн солих ба оноог тэглэнэ
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  // Раунд дуусмагц оноог тэглэх
  roundScore = 0;
  // Раунд оноог дэлгэц дээр тэглэх
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  // идэвхтэй тоглогчийг байрын солино
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // идэвхтэй тоглогчийн  тодруулж харуулна
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

// шинэ тоглоом эхлүүлэх эвэнт

document.querySelector(".btn-new").addEventListener("click", function () {});

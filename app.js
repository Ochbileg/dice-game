// тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэнэ.
var activePlayer = 0;

// тоглогчин цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
var roundScore = 0;

// Шоог хувьсагч болгож үүсгэх
var diceDom = document.querySelector(".dice");

var isGameRunning;

initGame();

function initGame() {
  isGameRunning = true;
  // Идэвхтэй тоглогчиг Player 1 болгоно
  activePlayer = 0;

  // тоглогчин цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
  roundScore = 0;
  // Бүх оноог тэглэнэ
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  //  Хожсон гэсэн бичгийг арилгана
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // Ялагчийн стайл  арилгана
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  // тухайн тоглогчийг идэвхтэй гэсэн стайл арилгах
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  // Шоог арилгана
  diceDom.style.display = "none";
}

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

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
function rollDicer() {
  if (isGameRunning) {
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    }
  } else {
    alert("Please restart the game");
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
  if (isGameRunning) {
    // актив тоглогчийн оноог глобал оноо дээр нэмнэ
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      isGameRunning = false;
      // тухайн идэвхтэй тоглогчийг хожсон гэж зарлана
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      // тухайн идэвхтэй тоглогчийг ялагч стайл нэмэх
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      // тухайн тоглогчийг идэвхтэй гэсэн стайл арилгах
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // ээлжийн солих ба оноог тэглэнэ
      switchToNextPlayer();
    }
  } else {
    alert("Please restart the game");
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

document.querySelector(".btn-new").addEventListener("click", initGame);

let endless = true;
let q1 = {
  title: "what did sam have on day one?",
  alternatives: ["ice cream","a roll","garlic bread","tuna"],
  correctAnswer: 1
};
let q2 = {
  title: "what did sam have on day two?",
  alternatives: ["a cookie","tater tots","waffle fries","meatballs"],
  correctAnswer: 3
};
let q3 = {
  title: "what did sam have on day three?",
  alternatives: ["fries","ice cream","a roll","chicken tenders"],
  correctAnswer: 1
};
let q4 = {
  title: "what did sam have on day four?",
  alternatives: ["a cookie","chicken tenders","pasta","garlic bread"],
  correctAnswer: 1
};
let q5 = {
  title: "what food was the most common",
  alternatives: ["pizza","any type of fries","ice cream","any type of bread"],
  correctAnswer: 0
};

const questions = [q1,q2,q3,q4,q5]

let qnum = -1;
let dice = {
  side:5,
  roll:function(){
    let randomnumber = Math.floor(Math.random() * this.side)
    return randomnumber
  }
}
function showQuestion() {
  let q = questions;
  if (endless == false){    
    q = questions[qnum];
  }
  if (endless == true){
    qnum = dice.roll();
    q = questions[qnum];
  }
  let titleDiv = document.getElementById('title');
  titleDiv.textContent = q.title;

  let alts = document.querySelectorAll('.alternative');
  console.log(alts);
  alts.forEach(function(element, index){
    element.textContent = q.alternatives[index];

      element.addEventListener('click', function(){
          if (q.correctAnswer == index) {
            console.log('Correct Answer!');
            let checker = document.getElementById("checker");
            checker.textContent = "correct!"
            document.getElementById("checker").style.color = "green";
          } else {
            console.log('Wrong Answer!');
            let checker = document.getElementById("checker");
            checker.textContent = "incorrect"
            document.getElementById("checker").style.color = "red";
            console.log(qnum);
          } 
        }, {once: true});
    });
}

let next = document.getElementById("next");

next.addEventListener('click', function (){
    console.log('pressed next!');
    nextQ(qnum);
});

let mode = document.getElementById("mode");

mode.addEventListener('click', function (){
  console.log('pressed mode!');
  modef();
});
function nextQ() {
  qnum++;
  checker.textContent = ""
  showQuestion();
}
function modef() {
if (endless == true){
  endless = false;
  mode.textContent = "endless mode: off"
} else {
  endless = true
  mode.textContent = "endless mode: on"
}
}
let qnum = 1;
let question = {
    title: 'what did sam have on day one?',
    alternatives: ['ice cream', 'a roll', 'garlic bread', 'tuna'],
    correctAnswer: 1
  };
function showQuestion(q) {
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
        } 
    });
  });
  }
  
showQuestion(question);

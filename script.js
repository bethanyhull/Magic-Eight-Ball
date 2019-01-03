  var userName = document.getElementById("name").value;
  var userQuestion = document.getElementById("question").value;

//CODE FOR THE SUBMIT BUTTON ON THE NAME SCREEN
  function getName() {
    var userName = document.getElementById("name").value;
    document.querySelector(".page2 p").innerHTML = `Hello ${userName}. Please type a yes or no question.`;
    if (userName) {
      document.querySelector('.page1').classList.add('fadeoutpage');
      document.querySelector('.page1').style.zIndex = 4;
      document.querySelector('.whitePage').style.zIndex = 8;
      document.querySelector('.page2').classList.add('fadeinpage');
    } else {
      document.querySelector('.tryAgain').classList.add('errorpage');
      document.querySelector('.tryAgain').style.zIndex = 0;
    }
  };

//REMOVE CLASS ON ERROR PAGE SO IT CAN PLAY AGAIN
  function removeErrorPage() {
    document.querySelector('.tryAgain').classList.remove('errorpage');
  };

  document.querySelector('.tryAgain').addEventListener("webkitAnimationEnd", removeErrorPage);

//CODE FOR SUBMIT BUTTON ON THE QUESTION PAGE
  function getQuestion() {
    var userQuestion = document.getElementById("question").value;
    var userName = document.getElementById("name").value;
    document.querySelector(".page3 p").innerHTML = `${userQuestion} That is an excellent question ${userName}.`;
    if (userQuestion) {
      document.querySelector('.page1').classList.remove('fadeoutpage');
      document.querySelector('.page2').classList.remove('fadeinpage');
      document.querySelector('.page2').classList.add('fadeoutpage');
      document.querySelector('.page2').style.zIndex = 3;
      document.querySelector('.whitePage').style.zIndex = 5;
      document.querySelector('.page3').classList.add('fadeinpage');
      magic8();
    } else {
      document.querySelector('.tryAgain').classList.add('errorpage');
      document.querySelector('.tryAgain').style.zIndex = 0;
    }
  };

  function magic8() {
    document.querySelector('.ball').classList.add('shake');
    document.querySelector('.whiteCirc').style.opacity = 0;

  };

  //REMOVE SHAKE CLASS ON BALL SO IT CAN PLAY AGAIN
    function removeShake() {
      document.querySelector('.ball').classList.remove('shake');
    };

    document.querySelector('.ball').addEventListener("webkitAnimationEnd", removeShake);

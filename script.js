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

  //REMOVE SHAKE CLASS ON BALL SO IT CAN PLAY AGAIN
  function removeShake() {
    document.querySelector('.ball').classList.remove('shake');
  };

  document.querySelector('.ball').addEventListener("webkitAnimationEnd", removeShake);



  function fortune() {
    //magic 8 ball fortune
    var randomNumber = Math.floor(Math.random() * 13);
    var fortuneText = document.querySelector('.fortune');

    switch (randomNumber) {
      case 0:
        fortuneText.innerHTML = `seek professional help`;
        break;
      case 1:
        fortuneText.innerHTML = `that's a stupid question`;
        break;
      case 2:
        fortuneText.innerHTML = `ask your father`;
        break;
      case 3:
        fortuneText.innerHTML = `signs point to yes`;
        break;
      case 4:
        fortuneText.innerHTML = 'it is certain';
        break;
      case 5:
        fortuneText.innerHTML = 'very doubtful';
        break;
      case 6:
        fortuneText.innerHTML = 'outlook good';
        break;
      case 7:
        fortuneText.innerHTML = 'my sources say no';
        break;
      case 8:
        fortuneText.innerHTML = 'outlook not so good';
        break;
      case 9:
        fortuneText.innerHTML = `That's a stupid question`;
        break;
        case 10:
          fortuneText.innerHTML = `better not tell you now`;
          break;
          case 11:
            fortuneText.innerHTML = `don't count on it`;
            case 12:
              fortuneText.innerHTML = `definitely`;
            break;
      default:
        fortuneText.innerHTML = `try again later`;
    }
  };

  function magic8() {
    document.querySelector('.ball').classList.add('shake');
    document.querySelector('.whiteCirc').style.opacity = 0;
    fortune();
  };

function whiteCircFade () {
  document.querySelector('.whiteCirc').style.transition = 'opacity 1s linear';
  document.querySelector('.whiteCirc').style.opacity = 0;
  fortune();
};

  function shakeAgain() {
    document.querySelector(".page3 p").innerHTML = `Not a fan of your answer? Let's try again...`;
    document.querySelector('.whiteCirc').style.transition = 'opacity 1s linear';
    document.querySelector('.whiteCirc').style.opacity = 1;
    document.querySelector('.ball').classList.add('shake');
    document.querySelector('.ball').addEventListener("webkitAnimationEnd", whiteCircFade);
  };

  function startOver () {
    window.location.reload(true);
  };

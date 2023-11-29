// JavaScript Document

var id = null;

let links3 = document.getElementById("links3");
links3.style.display = "none";

function moveLinks3() {
  var elem = document.getElementById("gemTimeCardsCont3");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos + 244;

  links3.disabled = true;

  clearInterval(id);
  id = setInterval(frame, 1);

  function frame() {
    if (currentpos >= targetpos) {
      clearInterval(id);
      links3.disabled = false;
      var posleft = document.getElementById('gemTimeCardsCont3').style.left;
      var posleftnum = parseInt(posleft, 10);

      var element = document.getElementById("gemTimeCardsCont3");
      var numberOfChildren = element.getElementsByClassName('gemcard').length


      if (posleftnum >= 0) {
        document.getElementById("links3").style.display = "none";
      }

      if (posleftnum <= 0) {
        document.getElementById("rechts3").style.display = "block";


      }

    } else {
      currentpos += 4;
      elem.style.left = currentpos + 'px';
    }
  }


}


let rechts3 = document.getElementById("rechts3");


function moveRechts3() {
  var elem = document.getElementById("gemTimeCardsCont3");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos - 244;


  rechts3.disabled = true;


  clearInterval(id);
  id = setInterval(frame, 1);


  function frame() {
    document.getElementById("links3").style.display = "block";


    if (currentpos <= targetpos) {
      clearInterval(id);
      rechts3.disabled = false;


      let viewportWidth = window.innerWidth;
      let gemtimecont2 = document.getElementById("gemtimecont2").offsetWidth;


      var element = document.getElementById("gemTimeCardsCont3");
      var numberOfChildren = element.getElementsByClassName('gemcard').length
      var numbchildcal = "-" + ((244 * numberOfChildren) - gemtimecont2);


      var posleft = document.getElementById('gemTimeCardsCont3').style.left;
      var posleftnum = parseInt(posleft, 10);
      if (posleftnum < 260) {
        document.getElementById("links3").style.display = "block";


      }

      if (posleftnum < numbchildcal) {
        document.getElementById("rechts3").style.display = "none";


      }
    } else {
      currentpos -= 4;
      elem.style.left = currentpos + 'px';

    }


  }


}

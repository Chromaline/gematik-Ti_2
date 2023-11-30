// JavaScript Document

var id = null;

let links2 = document.getElementById("links2");
links2.style.display = "none";

function moveLinks2() {
  var elem = document.getElementById("gemTimeCardsCont2");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos + 244;

  links2.disabled = true;

  clearInterval(id);
  id = setInterval(frame, 1);

  function frame() {
    if (currentpos >= targetpos) {
      clearInterval(id);
      links2.disabled = false;
      var posleft = document.getElementById('gemTimeCardsCont2').style.left;
      var posleftnum = parseInt(posleft, 10);

      var element = document.getElementById("gemTimeCardsCont2");
      var numberOfChildren = element.getElementsByClassName('gemcard').length


      if (posleftnum >= 0) {
        document.getElementById("links2").style.display = "none";
      }

      if (posleftnum <= 0) {
        document.getElementById("rechts2").style.display = "block";


      }

    } else {
      currentpos += 4;
      elem.style.left = currentpos + 'px';
    }
  }


}


let rechts2 = document.getElementById("rechts2");


function moveRechts2() {
  var elem = document.getElementById("gemTimeCardsCont2");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos - 244;


  rechts2.disabled = true;


  clearInterval(id);
  id = setInterval(frame, 1);


  function frame() {
    document.getElementById("links2").style.display = "block";


    if (currentpos <= targetpos) {
      clearInterval(id);
      rechts2.disabled = false;


      let viewportWidth = window.innerWidth;
      let gemtimecont2 = document.getElementById("gemtimecont2").offsetWidth;


      var element = document.getElementById("gemTimeCardsCont2");
      var numberOfChildren = element.getElementsByClassName('gemcard').length
      var numbchildcal = "-" + ((244 * numberOfChildren) - gemtimecont2);


      var posleft = document.getElementById('gemTimeCardsCont2').style.left;
      var posleftnum = parseInt(posleft, 10);
      if (posleftnum < 260) {
        document.getElementById("links2").style.display = "block";


      }

      if (posleftnum < numbchildcal) {
        document.getElementById("rechts2").style.display = "none";


      }
    } else {
      currentpos -= 4;
      elem.style.left = currentpos + 'px';

    }


  }


}

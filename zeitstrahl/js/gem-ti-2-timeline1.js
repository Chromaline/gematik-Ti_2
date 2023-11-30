// JavaScript Document

var id = null;

let links1 = document.getElementById("links1");
links1.style.display = "none";

function moveLinks1() {
  var elem = document.getElementById("gemTimeCardsCont1");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos + 244;

  links1.disabled = true;

  clearInterval(id);
  id = setInterval(frame, 1);

  function frame() {
    if (currentpos >= targetpos) {
      clearInterval(id);
      links1.disabled = false;
      var posleft = document.getElementById('gemTimeCardsCont1').style.left;
      var posleftnum = parseInt(posleft, 10);

      var element = document.getElementById("gemTimeCardsCont1");
      var numberOfChildren = element.getElementsByClassName('gemcard').length


      if (posleftnum >= 0) {
        document.getElementById("links1").style.display = "none";
      }

      if (posleftnum <= 0) {
        document.getElementById("rechts1").style.display = "block";


      }

    } else {
      currentpos += 4;
      elem.style.left = currentpos + 'px';
    }
  }


}


let rechts1 = document.getElementById("rechts1");


function moveRechts1() {
  var elem = document.getElementById("gemTimeCardsCont1");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos - 244;


  rechts1.disabled = true;


  clearInterval(id);
  id = setInterval(frame, 1);


  function frame() {
    document.getElementById("links1").style.display = "block";


    if (currentpos <= targetpos) {
      clearInterval(id);
      rechts1.disabled = false;


      let viewportWidth = window.innerWidth;
      let gemtimecont1 = document.getElementById("gemtimecont1").offsetWidth;


      var element = document.getElementById("gemTimeCardsCont1");
      var numberOfChildren = element.getElementsByClassName('gemcard').length
      var numbchildcal = "-" + ((244 * numberOfChildren) - gemtimecont1);


      var posleft = document.getElementById('gemTimeCardsCont1').style.left;
      var posleftnum = parseInt(posleft, 10);
      if (posleftnum < 260) {
        document.getElementById("links1").style.display = "block";


      }

      if (posleftnum < numbchildcal) {
        document.getElementById("rechts1").style.display = "none";


      }
    } else {
      currentpos -= 4;
      elem.style.left = currentpos + 'px';

    }


  }


}

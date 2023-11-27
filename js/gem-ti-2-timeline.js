// JavaScript Document

var id = null;
	
let links = document.getElementById("links");
links.style.display = "none";

function moveLinks() {
  var elem = document.getElementById("myDiv");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos + 264;

	links.disabled = true;
	
  clearInterval(id);
  id = setInterval(frame, 1);

  function frame() {
    if (currentpos >= targetpos) {
      clearInterval(id);
	links.disabled = false;	
      var posleft = document.getElementById('myDiv').style.left;
      var posleftnum = parseInt(posleft, 10);

      var element = document.getElementById("myDiv");
      var numberOfChildren = element.getElementsByClassName('gemkard').length


      if (posleftnum >= 0) {
        document.getElementById("links").style.display = "none";
      }

      if (posleftnum <= 0) {
        document.getElementById("rechts").style.display = "block";


      }

    } else {
      currentpos += 4;
      elem.style.left = currentpos + 'px';
    }
  }



}

	
	

let rechts = document.getElementById("rechts");
	

function moveRechts() {
  var elem = document.getElementById("myDiv");
  var currentpos = elem.offsetLeft;
  var targetpos = currentpos - 264;

	


		rechts.disabled = true;


	

  clearInterval(id);
  id = setInterval(frame, 1);

	
	
	
  function frame() {
	 document.getElementById("links").style.display = "block";
	  

	 
	  
    if (currentpos <= targetpos) {
      clearInterval(id);
	 	 rechts.disabled = false;


	let viewportWidth = window.innerWidth;
	let gemtimecont = document.getElementById("gemtimecont").offsetWidth;
		
	
      var element = document.getElementById("myDiv");
      var numberOfChildren = element.getElementsByClassName('gemkard').length
      var numbchildcal = "-" + ((264 * numberOfChildren) - gemtimecont);


		
      var posleft = document.getElementById('myDiv').style.left;
      var posleftnum = parseInt(posleft, 10);
      if (posleftnum < 260) {
        document.getElementById("links").style.display = "block";


      }

      if (posleftnum < numbchildcal) {
        document.getElementById("rechts").style.display = "none";
		 


      }
    } else {
      currentpos -= 4;
      elem.style.left = currentpos + 'px';
		
    }
	  
	
  }
		
	

}
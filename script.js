const egg = document.getElementById("egg")

function eggFreeze() {
	
	
		setTimeout(function wait () {
  	egg.src="egg3.gif";
    }, 6000);
}

function intro() {
	var element = document.getElementById("main");
	var element2 = document.getElementById("intro");
	element.classList.remove("hidden");
	element.classList.add("vis");
	element2.classList.add("hidden");
	element2.classList.remove("vis");
	setTimeout(function wait () {
    element.classList.remove('visuallyhidden');
    }, 30);

}


/* On Main: Click on Head */

	function clickBrain() {
  	var element = document.getElementById("main");
  	element.classList.remove("vis");

  	var element = document.getElementById("main");
	element.classList.add("hidden");
	element.classList.add("visuallyhidden");


	var element = document.getElementById("head");
	element.classList.add("glitch");

	var element = document.getElementById("brain");
	element.classList.add("vis");

	var element = document.getElementById("brain");
  	element.classList.remove("hidden");

  	box = document.getElementById('brain');
	
    
	box.classList.remove('hidden');
	//setTimeout(function wait2 () {
	//	wrap = document.getElementById("wrapper");
	//	wrap.setAttribute("style", "background: url(static.gif);");
    //}, 0);
    //setTimeout(function wait2 () {
	//	wrap = document.getElementById("wrapper");
	//	wrap.setAttribute("style", "background: url();");
   // }, 200);
	setTimeout(function wait () {
    box.classList.remove('visuallyhidden');
    }, 30);

    
}


/* On Head: Click on Back */


	function clickBrainBack() {
  	var element = document.getElementById("brain");
  	element.classList.remove("vis");

  	var element = document.getElementById("brain");
	element.classList.add("hidden");
	element.classList.add("visuallyhidden");

	var element = document.getElementById("main");
	element.classList.add("vis");

	var element = document.getElementById("main");
  	element.classList.remove("hidden");


  	
	box2 = document.getElementById('main');
   
	 box2.classList.remove('hidden');
	 setTimeout(function () {
     box2.classList.remove('visuallyhidden');
    }, 20);
	 box2.classList.add('vis')

  
}


/* On Main: Click on Ankle */

	function clickAnkle() {
  	var element = document.getElementById("main");
  	element.classList.remove("vis");

  	var element = document.getElementById("main");
	element.classList.add("hidden");
	element.classList.add('visuallyhidden');


	var element = document.getElementById("toe");
	element.classList.add("glitch");

	var element = document.getElementById("ankle");
	element.classList.add("vis");

	var element = document.getElementById("ankle");
  	element.classList.remove("hidden");

	box = document.getElementById('ankle');
	
    
	box.classList.remove('hidden');
	setTimeout(function wait () {
    box.classList.remove('visuallyhidden');
    }, 20);


}


/* On Ankle: Click on Back */


	function clickAnkleBack() {
  	var element = document.getElementById("ankle");
  	element.classList.remove("vis");

  	var element = document.getElementById("ankle");
	element.classList.add("hidden");
	element.classList.add('visuallyhidden');

	var element = document.getElementById("main");
	element.classList.add("vis");

	var element = document.getElementById("main");
  	element.classList.remove("hidden");

  	box2 = document.getElementById('main');
   
	 box2.classList.remove('hidden');
	 setTimeout(function () {
     box2.classList.remove('visuallyhidden');
    }, 20);
	 box2.classList.add('vis')
  }


  /* On Main: Click on Dick */

	function clickDick() {
  	var element = document.getElementById("main");
  	element.classList.remove("vis");

  	var element = document.getElementById("main");
	element.classList.add("hidden");
	element.classList.add('visuallyhidden');


	var element = document.getElementById("peen");
	element.classList.add("glitch");

	var element = document.getElementById("dick");
	element.classList.add("vis");

	var element = document.getElementById("dick");
  	element.classList.remove("hidden");


  	box = document.getElementById('dick');
	
    
	box.classList.remove('hidden');
	setTimeout(function wait () {
    box.classList.remove('visuallyhidden');
    }, 20);

}



/* On Dick: Click on Back */


	function clickDickBack() {
  	var element = document.getElementById("dick");
  	element.classList.remove("vis");

  	var element = document.getElementById("dick");
	element.classList.add("hidden");
	element.classList.add('visuallyhidden');

	var element = document.getElementById("main");
	element.classList.add("vis");

	var element = document.getElementById("main");
  	element.classList.remove("hidden");


  	box2 = document.getElementById('main');
   
	 box2.classList.remove('hidden');
	 setTimeout(function () {
     box2.classList.remove('visuallyhidden');
    }, 20);
	 box2.classList.add('vis')
  }

// controls content //

var lock1 = false
var lock2 = false
var lock3 = false
var num = 0

var set11 = "As it stood, it was a table of additions, much like certain schizophrenics’ drawings, described as 'overstuffed,’ and if finished it was only in so far as there was no way of adding anything more to it..."
var set12 = "the table having become more and more an accumulation, less and less a table... It was not intended for any specific purpose, for anything one expects of a table."

var set21 = "Heavy, cumbersome, it was virtually immovable. One didn\’t know how to handle it (mentally or physically). Its top surface, the useful part of the table, having been gradually reduced, was disappearing, with so little relation to the clumsy framework that the thing did not strike one as a table, but as some freak piece of furniture... "
var set22 = "an unfamiliar instrument for which there was no purpose..."

var set31 = "A dehumanized table, nothing cozy about it, nothing ‘middle-class ,’ nothing rustic, nothing countrified , not a kitchen table or a work table."
var set32 = "A table which lent itself to no function, self-protective, denying itself to service and communication alike. <br><br> There was something stunned about it, something petrified. <br><br>Perhaps it suggested a stalled engine."


function clickTop() {
	if (lock1 === false) {
		if (num === 0) {
		document.getElementById("p1p1").innerHTML = set11
		document.getElementById("p1p2").innerHTML = set12
		num++;
		lock1 = true;
		} else if (num === 1) {
		document.getElementById("p1p1").innerHTML = set21
		document.getElementById("p1p2").innerHTML = set22
		num++;
		lock1 = true;
		} else if (num === 2) {
		document.getElementById("p1p1").innerHTML = set31
		document.getElementById("p1p2").innerHTML = set32
		num++;
		lock1 = true;
		 endButton()
		}
	
	}
}


function clickPenis() {
	if (lock2 === false) {
		if (num === 0) {
		document.getElementById("p2p1").innerHTML = set11
		document.getElementById("p2p2").innerHTML = set12
		num++;
		lock2 = true;
		} else if (num === 1) {
		document.getElementById("p2p1").innerHTML = set21
		document.getElementById("p2p2").innerHTML = set22
		num++;
		lock2 = true;
		} else if (num === 2) {
		document.getElementById("p2p1").innerHTML = set31
		document.getElementById("p2p2").innerHTML = set32
		num++;
		lock2 = true;
		 endButton()
		}
	
	}
}



function clickFoot() {
	if (lock3 === false) {
		if (num === 0) {
		document.getElementById("p3p1").innerHTML = set11
		document.getElementById("p3p2").innerHTML = set12
		num++;
		lock3 = true;
		} else if (num === 1) {
		document.getElementById("p3p1").innerHTML = set21
		document.getElementById("p3p2").innerHTML = set22
		num++;
		lock3 = true;
		} else if (num === 2) {
		document.getElementById("p3p1").innerHTML = set31
		document.getElementById("p3p2").innerHTML = set32
		num++;
		lock3 = true;
		 endButton()
		}
	
	}
}


// misc //

function sound(){
		 var myadido = document.getElementById("myautoload");
		 myadido.play();
	}
   

 function end(){
   

	let element = document.getElementById("main");
   	let end = document.getElementById("e1");
  	element.classList.remove("vis");
  	element.classList.add("hidden");
  	element.classList.add("visuallyhidden");
  	end.classList.remove('hidden');
	 setTimeout(function () {
     end.classList.remove('visuallyhidden');
    }, 20);
	 end.classList.add('vis')
	}
   	


function end2() {

	let element = document.getElementById("e1");
   	let end = document.getElementById("e2");
  	element.classList.remove("vis");
  	element.classList.add("hidden");
  	element.classList.add("visuallyhidden");
  	end.classList.remove('hidden');
	 setTimeout(function () {
     end.classList.remove('visuallyhidden');
    }, 20);
	 end.classList.add('vis')
   	}

   function end3() {

	let element = document.getElementById("e2");
   	let end = document.getElementById("e3");
  	element.classList.remove("vis");
  	element.classList.add("hidden");
  	element.classList.add("visuallyhidden");
  	end.classList.remove('hidden');
	 setTimeout(function () {
     end.classList.remove('visuallyhidden');
    }, 20);
	 end.classList.add('vis')
   	}



   		
function end4() {

   	var element = document.getElementById("e3");
   	var end = document.getElementById("end");
  	element.classList.remove("vis");
  	element.classList.add("hidden");
  	element.classList.add("visuallyhidden");
  	
  	end.classList.remove('hidden');
	 setTimeout(function () {
     end.classList.remove('visuallyhidden');
    }, 20);
	 end.classList.add('vis')
   	}

   		






  	

  


   function endButton(){
   	if (num === 3) {
   		var butbut = document.getElementById("butbut");
   		butbut.classList.remove("hidden");


   	}
   }


var lock1 = false
var lock2 = false
var lock3 = false
var num = 0

var set11 = "As it stood, it was a table of additions, much like certain schizophrenics’ drawings, described as 'overstuffed,’ and if finished it was only in so far as there was no way of adding anything more to it..."
var set12 = "the table having become more and more an accumulation, less and less a table …. It was not intended for any specific purpose, for anything one expects of a table."

var set21 = "Heavy, cumbersome, it was virtually immovable. One didn’t know how to handle it (mentally or physically). Its top surface, the useful part of the table, having been gradually reduced, was disappearing, with so little relation to the clumsy framework that the thing did not strike one as a table, but as some freak piece of furniture , an unfamiliar instrument"
var set22 = "for which there was no purpose."

var set31 = "A dehumanized table, nothing cozy about it, nothing ‘middle-class ,’ nothing rustic, nothing countrified , not a kitchen table or a work table."
var set32 = "A table which lent itself to no function, self-protective, denying itself to service and communication alike. There was something stunned about it, something petrified. Perhaps it suggested a stalled engine."


function clickHead() {
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
		}
	
	}
}
var flag = 0;
var pinkFlag = 0;
var lawNorder = 0;
var comical = 0;
var whiteFlag = 0;

function setFlag(){
    flag = 1;
    pinkFlag = 1;
    lawNorder = 1;
    comical = 1;
    whiteFlag = 1;
    rideFlag = 1;
}
function moveMenu(){
    if (flag == 1){
        openMenu();
        flag = 2;
        d = document.getElementById("open-button").style.display = "none";
    }else if (flag == 2){
        closeMenu();
        flag = 1;
        d = document.getElementById("open-button").style.display = "block";
    }
}
function closeMenu(){
    items = document.getElementsByClassName("box-wrapper");
    for(var i = 0; i < items.length; i++){
        items[i].classList.add('loading');
    }
}
function openMenu(){
    items = document.getElementsByClassName("box-wrapper");
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove('loading');
    }
}
function hotPink(){
	if (pinkFlag == 1){
		document.body.style.backgroundColor = "#FF1493"; 
		pinkFlag = 2;
	}else if (pinkFlag == 2){
		document.body.style.backgroundColor = "white";
		pinkFlag = 1;
	}
}

function copSteve(){
	if (lawNorder < 3){
		lawNorder = lawNorder + 1;
	}else if (lawNorder == 3){
		document.getElementById("scorn").src = "images/biopictures/copsteve.png";
		document.getElementById("stevename").innerHTML = "Cop Steve";
		document.getElementById("sinfo").innerHTML = "Major: The Law<br/>Class Year: Indefinite<br/>Hometown: The Criminal Justice System<br/><br/>Member Since: 1908<br/>Position: Freakin' Narc<br/>Other Activities: Bringing Criminal Scum to Justice";
		var x = document.getElementById("dundun");
		x.play();
	}
}

function fontFail(){
	if (comical<50){
		comical+=1;
	}else if (comical==50){
		var x = document.getElementsByTagName("p");
		var y = document.getElementsByTagName("h2");
		var z = document.getElementsByTagName("h5");
		var w = document.getElementsByTagName("h1");
		var i;
		for(i=0; i<x.length; i++){
			x[i].style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		}
		for(i=0; i<y.length; i++){
			y[i].style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		}
		for(i=0; i<z.length; i++){
			z[i].style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		}
		for(i=0; i<w.length; i++){
			w[i].style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		}
	}
}

function whiteOut(){
	if(whiteFlag==1){
		whiteFlag=2;
		document.getElementById("jackInABox").style.backgroundColor = "white";
	}
}




window.onload = setFlag();
/*function showSubOne(){

}
function showSubTwo(){

}*/
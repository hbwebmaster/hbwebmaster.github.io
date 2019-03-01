let index = 1;
let prev = 0;

show();

function show(){
	let cnt;
	let slides = document.getElementsByClassName("slide");
	
	let tmp = slides[index];
	let tmpTwo = slides[prev];
	
	if(tmp == undefined) {
		console.log("tmp is undef");
	}else {
		//select slide
		tmp.style.display = "block";
		
		//set prev to none
		tmpTwo.style.display = "none";
		
		prev = index;
		index = index + 1;
		if(index >= slides.length) {
			index = 0;
		}
	}
	
	setTimeout(show, 5000);//change slide every 5 seconds
}
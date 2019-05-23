let time = 0;
let running = 0;

function startPause(){
	if(running == 0){
		running = 1;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
	}else{
		running = 0;
		document.getElementById("startPause").innerHTML = "Start";
		}
}

function reset(){
	running = 0;
	time = 0;
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById("output").innerHTML = "00:00:0";
}

function increment(){
	if(running == 1){
		setTimeout(function(){
			time++;
			let mins = Math.floor(time/10/60)%60;
			let secs = Math.floor(time/10)%60;
			let msecs = time%10;
			
			if(mins<10){

				mins= "0" + mins;
			}
			if(secs<10){
				secs = "0" + secs;
			}
			
			document.getElementById("output").innerHTML = mins+ ":" +secs+ ":" + msecs;
		
			increment(); 
		},100);
	}
}
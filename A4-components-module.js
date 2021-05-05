var JourneysNS = (function () {

	
	function displayTime(){
		//LOGIC GOES HERE
	var now = new Date();
	var hoursValue = now.getHours();
	var minutesValue= now.getMinutes();
	var secondsValue = now.getSeconds();
		hours= hoursValue +":";
		if (hoursValue<=9){
			minutes="0"+ minutesValue+":";
		}else{
			minutes= minutesValue+":";
		}
		if (minutesValue<=9){
			minutes= "0" + minutesValue+":";
		}else{
			minutes= minutesValue+":";
		}
		if (secondsValue<=9){
			seconds= "0"+ secondsValue;
		}else{
		seconds= secondsValue;
		}
		var time = hours+minutes+seconds;
		//var time = "test";
		//YOU NEED TO RETURN SOMETHING TO BE RETURNED
		return time 
	}

        var module = {
        SendFunction : displayTime // THIS IS WHAT IS BEING SENT
    };
    return module;
})(); 
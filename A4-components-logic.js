window.onload = function() {

    
     class HumberClock extends HTMLElement{
        constructor(){
            super();
            let template = document.getElementById("HumberClockTemplate")
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode:'open'}).appendChild(templateContent.cloneNode(true));
        }
    }
        customElements.define('humber-clock',HumberClock)


    var currentTime= document.getElementById("time");
	//setInterval((currentTime.innerHTML= JourneysNS.SendFunction()),1000)
   
    setInterval(showtime,1000)
    function showtime(){
    currentTime.innerHTML= JourneysNS.SendFunction()
}
    //setInterval((currentTime.innerHTML= JourneysNS.SendFunction()),1000)
}
    

    
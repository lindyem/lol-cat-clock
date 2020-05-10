var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var imageText = document.getElementById("timeEvent");
var image = document.getElementById("lolcat");


var getCatPic = function (){

if (time == partyTime){
	image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
	
} else if (time == napTime) {
	image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
} else {
	image.src ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
}
imageText.innerHTML = messageText;

};

getCatPic();

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

setInterval( showCurrentTime, 1000);

var isPartyTime = false;
var partyEvent = function(){
   //check isPartyTime
   if (isPartyTime === false){ 
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "teal";
        isPartyTime = true; 
        // set time to partyTime so the lolCat clock 
        //image and message update to the partyTime image and message
        time = partyTime; 
    } else { 
        partyTimeButton.innerText = "PARTY OVER!";
        isPartyTime = false; 
        partyTimeButton.style.backgroundColor="pink";
        time = new Date().getHours(); 
    }
 
};
var partyTimeButton = document.getElementById("partyTimeButton");

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function(){
    wakeupTime = wakeUpTimeSelector.value;
    getCatPic();
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchTimeEvent = function(){
    lunchTime = lunchTimeSelector.value;
    getCatPic();
};

lunchTimeSelector.addEventListener("change", lunchTimeEvent);

var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeEvent = function(){
    napTime = napTimeSelector.value;
    getCatPic();
};

napTimeSelector.addEventListener("change", napTimeEvent);

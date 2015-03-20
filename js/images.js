function changeColourFunction(frm) {
	document.body.style.backgroundImage = "none";
	var changeColourString = document.getElementById("changeColour").selectedIndex;	
	if (changeColourString==1)
	{
		document.body.style.backgroundColor = "#444";
	}
	else if(changeColourString==2)
	{
		document.body.style.backgroundColor = "red";
	}
	else if(changeColourString==3)
	{
		document.body.style.backgroundColor = "green";
	}
	else if(changeColourString==4)
	{
		document.body.style.backgroundColor = "#000";
	}
}
function textColourFunction(frm) {
	var textColourString = document.getElementById("textColour").selectedIndex;
	if (textColourString==1)
	{
		document.body.style.color="#000";
	}
	else if (textColourString==2)
	{
		document.body.style.color="grey";
	}
	else if (textColourString==3)
	{
		document.body.style.color="green";
	}
	else if (textColourString==4)
	{
		document.body.style.color="white";
	}
}
function mainImageFunction(imageChoice) {
	var image = document.getElementById('displayim');
	image.src = imageChoice;
}
function guitarFunction() {
	document.getElementById("title").innerHTML = 'Guitar';
	document.getElementById("desc").innerHTML = "The guitar is a popular musical instrument classified as a string instrument with anywhere from 4 to 18 strings, usually having 6.";
}
function drumsFunction() {
	document.getElementById("title").innerHTML = "Drums";
	document.getElementById("desc").innerHTML ="A drum kit, drum set or trap set is a collection of drums and other percussion instruments set up to be played/struck by a single player.";
}
function pianoFunction() {
	document.getElementById("title").innerHTML = "Piano";
	document.getElementById("desc").innerHTML = "The piano (an abbreviation of pianoforte) is a musical instrument played using a keyboard.";
}
function bassFunction() {
	document.getElementById("title").innerHTML = "Bass Guitar";
	document.getElementById("desc").innerHTML = "The bass guitar (also called electric bass, or simply bass) is a stringed instrument played primarily with the fingers or thumb, by plucking, slapping, popping, (rarely) strumming, tapping, thumping, or picking with a plectrum, often known as a pick.";
}
function micFunction() {
	document.getElementById("title").innerHTML = "Microphone";
	document.getElementById("desc").innerHTML = "A microphone, colloquially mic or mike is an acoustic-to-electric transducer or sensor that converts sound in air into an electrical signal.";
}
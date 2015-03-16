// on click the form will check against this function
function submitAndCheck(frm) {

	 // take user defined title 
	var e = document.getElementById('title');
	var userTitle = e.options[e.selectedIndex].value;

	// take user defined name
	var fname = document.getElementById('forename').value;
	var sname = document.getElementById('surname').value;

	// take user defined comments
	var note = document.getElementById('comments').value;

	// take user defined rating
	var rating = yourRating(frm.rate);

	// take user defined email
	var em = document.getElementById('email').value;

	/* if offers is checked then perform the following instructions 
	   concatenation string to combine user inputs with defined strings
	*/
	if (document.getElementById('offers').checked ) {
		alert("Your selected title " + userTitle + ", " + "Your name is " 
			+ fname + " " + sname + ".\n" + "Your email: " + em + "\n" + "Your comments: " + note + ".\n" + "You rated us as " + rating + " out of 5.\n");
	} else {

	}

}

// function to find the values of the radio buttons
function yourRating (rateArray) {
	for (i = 0; i < rateArray.length; i++) {
		if (rateArray[i].checked) return rateArray[i].value;
	}
	return "";
}
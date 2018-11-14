document.addEventListener("deviceready",onready,false);

function onready()
{
	window.alert("PageLoaded");
	document.getElementById("saveInfo").style.display = "inline-block";
}

function saveContact()
{
	var contact = navigator.contacts.create({"displayName": "New Contact"});
	var numbers = [];
	numbers[0] = new ContactField('work',document.getElementById("workNumber").value,false);
	numbers[1] = new ContactField('mobile',document.getElementById("mobileNumber").value,true);
	numbers[2] = new ContactField('home',document.getElementById("homeNumber").value,false);
	contact.phoneNumbers = numbers;
	var name = new ContactName();
	name.givenName = document.getElementById("firstName").value;
	name.familyName = document.getElementById("lastName").value;
	contact.name = name;
	contact.displayName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	contact.save(successMsg,failMsg);
	this.innerHTML = "Pushed";
}

function successMsg(contact)
{
	window.alert("Success");
}
function failMsg()
{
	window.alert("Fail");
}
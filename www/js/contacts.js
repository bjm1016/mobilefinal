document.addEventListener("deviceready",onready,false);

function onready
{
	document.getElementById("saveInfo").onclick = saveContact;
}

function saveContact()
{
	var contact = navigator.contacts.create();
	var numbers = [];
	numbers[0] = new ContactField('work',document.getElementById("workNumber").value,false);
	numbers[1] = new ContactField('mobile',document.getElementById("mobileNumber").value,true);
	numbers[2] = new ContactField('home',document.getElementById("homeNumber").value,false);
	contact.phoneNumbers = numbers;
	contact.name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	contact.displayName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	contact.save();
	alert("Save button pushed");
}
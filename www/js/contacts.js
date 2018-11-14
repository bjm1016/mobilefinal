document.addEventListener("deviceready",onready,false);

function onready
{
	
}

function saveContact()
{
	contact = navigator.contacts.create();
	contact.name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	contact.save();
}
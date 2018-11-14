document.addEventListener("deviceready",onready,false);

function onready
{
	
}

function saveContact()
{
	contact.name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	contact.save();
}
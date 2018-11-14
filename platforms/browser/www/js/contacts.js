document.addEventListener("deviceready",onready,false);

function onready()
{
	window.alert("PageLoaded");
	document.getElementById("saveInfo").style.display = "inline-block";
//	var contact = navigator.contacts.create();
}

function saveContact()
{
	var contact = navigator.contacts.create();
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

function search()
{
	var contact = navigator.contacts.create();
	var options = new ContactFindOptions();
	options.filter = document.getElementById("searchBox").value;
	options.multiple = true;
	var filter = ["name"];
	navigator.contacts.find(filter, function(){
		var endString = "";
		for (var i = 0; i < contacts.length; i++)
		{
			endString += contacts[i].displayName;
		}
		window.alert("End of foundContacts()");
		document.getElementById("searchResults").innerHTML = endString;
	}, failMsg, options);
}

function foundContacts()
{
	var endString = "";
	for (var i = 0; i < contacts.length; i++)
	{
		endString += contacts[i].displayName;
	}
	window.alert("End of foundContacts()");
	document.getElementById("searchResults").innerHTML = endString;
}

function successMsg(contact)
{
	window.alert("Success");
}
function failMsg()
{
	window.alert("Fail");
}
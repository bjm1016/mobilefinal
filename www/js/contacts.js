document.addEventListener("deviceready",onready,false);

function onready()
{
	window.alert("PageLoaded");
	document.getElementById("saveInfo").style.display = "inline-block";
	var contact = navigator.contacts.create({"displayName": "New Contact"});
}

function saveContact()
{
	window.alert("0");
	window.alert("1");
	var numbers = [];
/*	window.alert("2");
	numbers[0] = new ContactField('work',document.getElementById("workNumber").value,false);
	window.alert("3");
	numbers[1] = new ContactField('mobile',document.getElementById("mobileNumber").value,true);
	window.alert("4");
	numbers[2] = new ContactField('home',document.getElementById("homeNumber").value,false);
	window.alert("5");
	contact.phoneNumbers = numbers;
	window.alert("6"); */
	var name = new ContactName();
	window.alert("7");
	name.givenName = document.getElementById("firstName").value;
	window.alert("8");
	name.familyName = document.getElementById("lastName").value;
	window.alert("9");
	contact.name = name;
	window.alert("10");
	contact.displayName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	window.alert("11");
	contact.save(successMsg,failMsg);
	window.alert("12");
	this.innerHTML = "Pushed";
	window.alert("13");
}

function search()
{
	window.alert("0");
	var options = new ContactFindOptions();
	window.alert("1");
	options.filter = document.getElementById("searchBox").value;
	window.alert("2");
	options.multiple = true;
	window.alert("3");
	var filter = ["displayName"];
	window.alert("4");
	navigator.contacts.find(filter, foundContacts, failMsg, options);
	window.alert("5");
}

function foundContacts()
{
	var endString = "";
	for (var i = 0; i < contacts.length; i++)
	{
		endString += contacts[i].displayName;
	}
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
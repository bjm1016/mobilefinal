document.addEventListener("deviceready",function(){
	
	var elementArray = document.getElementsByClassName("navButton");
	for (i = 0; i < elementArray.length; i++)
	{
		elementArray[i].onclick = changePage;
	}
	
	document.getElementById("closeMenu").onclick = closeMenu;
	document.getElementById("openMenu").onclick = openMenu;
	
	elementArray = document.getElementsByClassName("page");
	for (i = 0; i < elementArray.length; i++)
	{
		elementArray[i].style.display = "none";
	}
	document.getElementById("main").style.display = "block"
	
},false);
document.addEventListener("deviceready",function(){
	
	var elementArray = document.getElementsByClassName("navButton");
	for (var i = 0; i < elementArray.length; i++)
	{
		elementArray[i].onclick = changePage;
	}
	
	document.getElementById("closeMenu").onclick = closeMenu;
	document.getElementById("openMenu").onclick = openMenu;
	
	elementArray = document.getElementsByClassName("moreInfoButton");
	for (var i = 0; i < elementArray.length; i++)
	{
		elementArray[i].onclick = loadMoreInfo;
	}
	
	elementArray = document.getElementsByClassName("page");
	for (var i = 0; i < elementArray.length; i++)
	{
		elementArray[i].style.display = "none";
	}
	document.getElementById("main").style.display = "block"
	
},false);
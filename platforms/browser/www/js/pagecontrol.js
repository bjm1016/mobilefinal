function changePage()
{
	var elementArray = document.getElementsByClassName("page");
	for (i = 0; i < elementArray.length; i++)
	{
		if (this.innerHTML.toLowerCase() == elementArray[i].id)
		{
			elementArray[i].style.display = "block";
		}
		else
		{
			elementArray[i].style.display = "none";
		}
	}
	closeMenu();
}

function openMenu()
{
	document.getElementById("navMenu").style.display = "block";
}

function closeMenu()
{
	document.getElementById("navMenu").style.display = "none";
}

function loadMoreInfo()
{
	
}
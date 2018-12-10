function changePage()
{
	var elementArray = document.getElementsByClassName("page");
	for (i = 0; i < elementArray.length; i++)
	{
		if (this.innerHTML.toLowerCase() == elementArray[i].id)
		{
			elementArray[i].style.display= "block";
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
//    document.getElementById("navMenu").style.display = "block";
    var elementArray = document.getElementsByClassName("navMenu navList");
    for (var i = 0; i < elementArray.length; i++)
    {
        elementArray[i].style.display = "block";
    }
    document.getElementById("navMenu").style.height = "50%";

}

function closeMenu()
{
//    document.getElementById("navMenu").style.display = "none";
	document.getElementById("navMenu").style.height = "0";
}

function loadMoreInfo()
{
	
}
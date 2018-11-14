	var currFullDate = new Date();
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	//Page Setup For Current Date
	var currMonth = currFullDate.getMonth();		//Month in 0-11
	var currYear = currFullDate.getFullYear();		//Year in 0000
	var currDate = currFullDate.getDate();			//Current date of the month
	var currDay = currFullDate.getDay();			//Day of the week in 0-6
	
	function updateCalendar()
	{
		document.getElementById("month").innerHTML = monthNames[currMonth];
		document.getElementById("year").innerHTML = currYear;
		
		var setDate = currDate;
		var setDay = currDay;
		var i;
		for(i = currDate; i > 1; i--)
		{
			setDay--;
			if(setDay < 0)
			{							//day  = 4
				setDay = 6;				//date = 6
			}
		}
		for (i = 0; i <= monthDays[currMonth]; i++)
		{
			document.getElementById("dayDay"+(setDay+1)).innerHTML = i+1; //1 is added here because the index for days of week are 0-6 and the display is 1 off
			setDay++;
		}
			document.getElementById("debug").innerHTML = String(setDay);
	}
	
	function nextMonth()
	{
		currMonth++;
		currDate=
		updateCalendar();
	}
	
	updateCalendar();
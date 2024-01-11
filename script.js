var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const parsedate1 = new Date(date1);
	const parsedate2 = new Date(date2);

	const diffinsec = parsedate2 - parsedate1;
	const diffindays = Math.round(diffinsec/(1000*60*60*24));

	return diffindays;
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let result = date2 - date1 ;
	return result/(1000 * 60 * 24);
};

// Do not change the code below.
//const dateOne = prompt("Enter Start Date.");
//const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

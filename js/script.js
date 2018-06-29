var week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

for (let i=0; i<7; i++) {
	let day = week[i];

	if ( i === 5 || i === 6){
		day = '<strong>' + day + '</strong>';
	};

	let date = new Date();
	let currentDay = date.getDay();
	if ( i === currentDay - 1) {
		day = '<i>' + day + '</i>';
	}; 
	document.writeln(day + '<br>');
}

let arr = ['23423452', '34534534', '456456', '56757567', '767678', '3345235345','67676878'];
for(let i = 0; i < 7; i++) {
	if( arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7 ) {
		console.log(arr[i]);
	}
}

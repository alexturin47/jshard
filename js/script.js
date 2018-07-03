// var week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// for (let i=0; i<7; i++) {
// 	let day = week[i];

// 	if ( i === 5 || i === 6){
// 		day = '<strong>' + day + '</strong>';
// 	};

// 	let date = new Date();
// 	let currentDay = date.getDay();
// 	if ( i === currentDay - 1) {
// 		day = '<i>' + day + '</i>';
// 	}; 
// 	document.writeln(day + '<br>');
// }

// let arr = ['23423452', '34534534', '456456', '56757567', '767678', '3345235345','67676878'];
// for(let i = 0; i < 7; i++) {
// 	if( arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7 ) {
// 		console.log(arr[i]);
// 	}
// }

// var str = "урок-3-был слишком легким";

// str = str[0].toUpperCase() + str.substring(1)
// let tag = "-";
// let pos = 0;
// while (true) {
// 	let foundPos = str.indexOf(tag, pos);
// 		if (foundPos == -1) break;

// 	str = str.substring(0, foundPos) + " " + str.substring(foundPos + 1);
// 	pos = foundPos + 1;
// }

// substr = "легким";
// foundPos = str.indexOf(substr, pos);
// substr = substr.substring(0, substr.length - 2 ) + "оо";
// str = str.substring(0, foundPos ) + substr;

// console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3];
let summ = 0;
for (var i = 0; i <= arr.length; i++) {
	if (typeof(arr[i]) === 'number') {
		let a = Math.pow(arr[i], 3 );
		summ = summ + +a;	
		console.log(summ);
	}
	
}

summ = Math.sqrt(summ);
console.log(summ);
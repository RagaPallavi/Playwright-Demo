// const cookDinner = () => {
// 	let isDinnerReady = false;
// 	console.log('Starting to cook dinner.');

// 	setTimeout(() => {
// 		console.log('Dinner is ready.');
// 		isDinnerReady = true;
// 	}, 3000);
// 	return isDinnerReady;
// };

// const isDone = cookDinner();
// if (isDone) {
// 	console.log('It is ready!');
// } else {
// 	console.log('still waiting');
// }
// function giveFullName(firstName, lastName, callThisFn) {
// 	// firstName = Ram, lastName = M, callThisFn = addExclamation
// 	const fullName = firstName + lastName;
// 	return callThisFn(fullName);
// }

// function addExclamation(input) {
// 	return input + '!';
// }

// console.log(giveFullName('Ram', 'M', addExclamation));
// const bigValue = (
// 	num: number,
// 	arr: number[],
//arrprint: (a: number[], n: number, r: number[]) => void
//   ) => {
// 	let res: number[] = [];
// 	for (let i = 0; i < arr.length; i++) {
// 	  if (arr[i] > num) {
// 		res.push(arr[i]);
// 	  }
// 	}
// 	arrprint(arr, num, res);
//   };
   
//   const arprint = (ar: number[], nu: number, re: number[]): void => {
// 	console.log(`Array is ${ar} and numbers greater than ${nu} is ${re}`);
//   };
   
//   bigValue(5, [2, 3, 7, 8, 5], arprint);
 const add =(num: number, sprint:(n:number)=>void) =>{
    let sum:number =0;
    for (let i=1; i<=num; i++){
        sum = sum + i;
    };
    sprint(sum);
}
const prints = (n:number):void =>{
    console.log(`Sum upto given number is ${n}`);
};
add(5,prints);
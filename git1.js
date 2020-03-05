class Rectangle {
	constructor(width, height) {
	  this.height = height;
	  this.width = width;
	}
	get area() {
	  return this.calcArea();
	}
	calcArea() {
	  return this.height * this.width;
	}
  }
  const r = new Rectangle(10, 20);
  console.log(r.width);       
  console.log(r.height);
  console.log(r.area);
  

  let n = [ 1, 3, 4, 5 ];
  function getTail(arr, n) {
    return arr.splice(2);
}
console.log(getTail(n)); 


let v = [ 'a', 'b', 'c', 'd' ];
  function getLetter(arr, n) {
    return arr.splice(1);
}
console.log(getLetter(v)); 


let arr2 =  [ 1, 3, 4, 5 ];
 
Array.prototype.insert = function (index,item){
	this.splice(index,0,item);
}
arr2.insert(1,"2");

let arr4 =  [1, 'b', 'c'];
 
Array.prototype.insert = function (index,item){
	this.splice(index,0,item);
}
arr4.insert(0,"x");

let MyArray = [0, 1, 2, 3, 4, 5];
function getArrayOfPositives(arr) {
	return arr.filter( function(MyArray) { return MyArray > 0; } );;
  }
  console.log(getArrayOfPositives(MyArray)); 


  let Positives = [-1, 2, -5, -4, 0];
  function getArrayOfPositives(arr) {
	  return arr.filter( function(MyArray) { return MyArray > 0; } );;
	}
	console.log(getArrayOfPositives(Positives)); 
 
	const arr = [];
	console.log(arr);

	let numbers = [ 1, 2, 3, 3, 2, 1 ];
	let string = ['a', 'a', 'a', 'a'];
	let numb = [1, 1, 2, 2, 3, 3, 4, 4];
	function unique(arr) {
		let result = [];
	  
		for (let num of arr) {
		  if (!result.includes(num)) {
			result.push(num);
		  }
		}
	  
		return result;
	  }

	  console.log(unique(numbers));
	  console.log(unique(string));
	  console.log(unique(numb));
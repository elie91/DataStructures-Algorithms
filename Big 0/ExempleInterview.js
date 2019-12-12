//Given 2 arrays, create a function that return true or false wheter these two array contain any commons
//items

//1- Write points
/**
 * const array1= ['a','b','c','x']
 * const array2= ['z','y','i']
 * return false
 * const array3= ['a','b','c','x']
 * const array4= ['z','y','x']
 * return true
 */
// 2- Input = 2 array , Output = boolean
// 3- Ask what is the big of the arrays ? What is the most important, time or space complexity ? Is the goal is to be the most efficient as possible ?
// 4- Dont be Annoying
// 5- Force brute approche, just speak not write(here nested loops)
// 6- Tell why its is a bad solution(n^2), not efficient, not readable
// 7- Here, we have 0(a*b), but if the array are the same, will be the same O(n^2)
// 8- Write down step by step

function containsCommonItem2(arr1, arr2){
  //loop through firsr array and create object with properties === items of array
 // loop through second array and check if item in second array exists on created object
}

// 9- Modularize your code in small pieces of code

/**
 * array1 => obj {
 *  a:true,
 *  b:true,
 *  c:true,
 *  x:true
 * }
 * 
 * array2[index] === obj.properties
 */

// 10- Start actually writing your code now. Never start a whiteboardinterview not being sure of how things           are going to work out
function containsCommonItem2(arr1, arr2){
  
	let map  = {};
	
	for(let i=0; i < arr1.length; i++){
	  if(!map[arr1[i]]){
	    const item = arr1[i];
	    map[item] = true;
	  }
	}
  
	for(let i=0; i<arr2.length; i++){
	  if(map[array2[i]]){
	  	return true
	  }
	}
	return false;
  }
  //Time : O(a+b) , Space: 0(a)
  
  const array1= ['a','b','c','x'];
  const array2= ['z','y','a'];
  containsCommonItem2(array1, array2);


//11- Think about error, how can i break this function
//    Can we assume always 2 parameters
//12- Dont use confusing names in variables, try to be readable
//    Let them know that you think about this
//13- Test your code, let know you thinking about
//14- How you can improve this code ? How you google to improve
//    If method exist with this language ?

function containsCommonItem3(arr1,arr2)
{
  return arr1.some(item => arr2.includes(item))
}
containsCommonItem3(array1, array2);

//15-- The interviewer ask if the array coms big and big
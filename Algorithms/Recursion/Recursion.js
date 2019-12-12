/**

*** Introduction
    Function that refere to himself inside the function
    Good for tasks that have repeated subtasks to do
    Used in Searching and Sorting algorithms
    Stack Overflow => When recursion no end and keeps running

*** Anatomy of recursion
    Every recursive function needs a base case , or stop point
    So 2 cases : Recursive case , and Base case
    3 rules
    1 - Identify the base case
    2-  Identify the recursive case
    3 - Get closer and closer and return when needed. Usually you have 2 return
*/

let counter = 0;
function inception() {
	if (counter > 3) {
		return "done";
	}
	counter++;
	inception();
}

/**
    If we run this function , we get undefined
    The function has effectively end when the counter = 4 , but we dont see the 'done'
    The reason is that we call inception here 5 times
    So each function get stack on the call stack
    When the counter is > 3 , the last function return done , and delete from the call stack
    But after this, the other functions also pops one by one , but this function dont return anything
    So we need to make sur that we return a value
    In our case, just say a the end , return inception()
*/


//********************** Factorial *****************************/


// Write two functions that finds the factorial of any number. 
//One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) { // O(n)
	if (number < 1) {
		return 1;
	}
	if (number === 2) {
		return 2;
	}
	return number * findFactorialRecursive(number - 1);
}
// f(5*f(4*f(3*f(2))))

function findFactorialIterative(number) { //O(n)
	let answer = 1;
	if (number === 2) {
		answer = 2;
	}
	//Factorial de 2 = 2*1 === 2 , donc on peut raccourcir et commencer a 2
	for (let i = 2; i <= number; i++) {
		answer = answer * i;
	}
	return answer;
}


//********************** Fibonnacci ****************************/
// Given a index N return the  value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ //O(n)
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++){
	  arr.push(arr[i - 2] + arr[i -1]);
	}
   return arr[n];
  }
fibonacciIterative(3);

function fibonacciRecursive(n) { //Exponential O(2^N) - Really bad for performance 
	if (n < 2) {
		return n;
	}
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(6)


/**

*** Recursion VS Iterative
	Anything that you can do with recursion, you cab do it iteratively
	So, why we want to use recursion ?

	Recursion:
		- Can keep our code DRY, more readble
		- Useful when you dont know how much deep the data structure is, you dont know how many loops to do
		- See in ressouce tail-call-optimization to see how perfoms recursion algorithms


*** When to use recursion
	Traversing or searching trough tree or graphs , recursion better than iterative
	Also in sorting in some cases
	Divide and Conquer using Recursion
	Every time we're using a tree or converting something into a tree, consider recursion with few rules:
		- a problem can be divided into a number of subproblems that are smaller instances
		- each of these instances of problem is in identical in nature.
		- The solutions of each subproblem can be combined to solve the problem at the end
	

*/
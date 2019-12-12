/**
 * What is a good code ?
 * Readable
 * Scalable (Speed, Memory)
 * Big O notation 
 * => permet de mesurer cette notion d'un code scalable
 * => How long a algorithm takes to run , without computers differences
 * => explains the algorithmic efficiency
 * => for some elements, how many operations the code does
 */

/**
 * SOMMAIRE:
 * 1 - O(n) LINEAR TIME
 * 2 - O(1) CONSTANT TIME
 * 3 - O(n^2) Quadratic Time
 * 4 - O(n!) Factorial Time
 * 5 - O(log N)
 * 6 - O(2^N)  Exponential Time
 * 7 - O(n log(n))
 */

//************** 1 : O(n) LINEAR TIME ********************************************* */ 

const large = new Array(100).fill('nemo');
function findNemo(array){
    let t0 = performance.now();
    for(let i = 0; i<array.length ; i++){
        if(array[i] === 'nemo'){
        console.log('Found NEMO');
        }
    }
    let t1 = performance.now();
    console.log('Call takes : ' + (t1-t0) + 'millisecondes');
}
findNemo(large);

//************** 2 : O(1)  CONSTANT TIME********************************************* */ 

/**
* Cette function réprésente la notion de
* O(1) ou Constant Time
* Peu importe la taille de l'input le meme nombres d'opération seront effectué
* La ligne du graphe est donc constante
* Statut : Excellent
*/
function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}
logFirstTwoBoxes(boxes); //O(2)

//************** 3 : O(n^2) Quadratic Time ********************************************* */ 
//Log all pairs of array
const boxes = [1,2,3,4,5];
function logAllPaires(boxes){ 
  for(let i=0; i < boxes.length ; i++){
    for(let j= 0; j< boxes.length; j++){
      console.log(`${boxes[i]} - ${boxes[j]}`)
    }
  }
}
 //************** 4: O(n!) Factorial Time ********************************************* */ 

 //The most expensive...
 //Adding a nested loop for every input that we have


//************** 5: O(log N)  Time ********************************************* */

/**
  
    With perfect binary tree, we encounter the Big 0 notation O(log N)
    We can calculate easily the n of nodes on each level
    Level 0 : 2^0 = 1
    Level 1 : 2^1 = 2
    Level 2 : 2^2 = 4
    Level 3 : 2^3 = 8
    So number of nodes = (2^steps)-1 of the BT
    1000 = 10 × 10 × 10 so log(1000) by 10 = 3
    O(log N) = The choice of the next element is one of several possibilities and only one needs to be chosen
    Exemple = looking seomone on the phone book (you looking alphabetically)
    Better than O(n) , because we dont check every element

 */

 //************** 6: O(2^N)  Exponential Time  ********************************************* */

/**
	Recursive algorithms that solve a problem of size N
	For every element, we expand the function call
*/

 //************** 7: O(n log(n) )  ********************************************* */

/**
  Efficient algorithm for sorting 
  Use the technique of Divide & Conquer
  Time Complexity = 0(n log(n) ) 
  Space Complexity = O(n)
*/

/**
 * Array
 * Organizes item sequentially
 * Access => O(1)
 * Push   => O(1)
 * Insert => 0(n) 
 * Delete => 0(n)
 */

const strings = ['a', 'b', 'c', 'd'];
//With 32 bits = 4 elements * 4 bits = 16 bytes of storage

strings[2]; //0(1)
strings.push('e'); //O(1)
strings.pop(); //0(1)
strings.unshift('x'); //O(n), car tous les index sont décalés a cause de l'insertion du nouveau element
strings.splice(2, 0, 'alien'); //O(n)


/*****************************************************
*************      Differents Types of Arrays ********
*****************************************************/

/**
 * 1- Static Array -> Need to specifie the size of the array
 * 2- Dynamic Array -> Copy and rebuild a an array at a new location
 *                     with more memory if we want
 * In Javascript, array are dynamic
 * They automactically allocate memory 
 */

/*****************************************************
************* How to build an array *****************
*****************************************************/

class MyArray {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

}

const newArray = new MyArray();

newArray.push('sfd');
newArray.push('you');
newArray.push('are');
newArray.push('!');
newArray.push('nice');
console.log(newArray);
newArray.delete(3)
console.log(newArray);
newArray.delete(0)
console.log(newArray);

/*****************************************************
************* Reverse a string **********************
*****************************************************/

//Solution 1
function reverseString(str) {
  if (typeof string !== 'string') {
    throw new Error('bad input type');
  }

  const reverseArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArray.push(str[i]);
  }
  return reverseArray.join('');
}

//Solution 2
function reverseString2(str) {
  return str.split('').reverse().join('');
}

//Solution 3
const reverseString3 = str => str.split('').reverse().join('');
//ou
const reverseString3 = str => [...str].reverse().join('');



/*****************************************************
************* Merge Sorted Array **********************
*****************************************************/

function mergeSortedArrays(arr1, arr2) {

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Bad Input Type'
  }
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

//Autre solution
function mergeSortedArrays(arr1, arr2) {

  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Bad Input Type'
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++
    }
    else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;

}


/*****************************************************
************* Big O Notation****************
*****************************************************/

/**
 * Search => O(n)
 * Access => O(1)
 * Insert => O(n)
 * Delete => O(n)
 */
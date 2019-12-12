
//Differents algorithms on sorting

//********************** Bubble Sort ****************************/

/**
 * O(n^2) => Comparing elements on a nested loop
 * Time Complexity = 0(n^2)
 * Space Complexity = O(1)
 * Teaching purpose
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //Swap the numbers
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}


//********************** Selection Sort ****************************/
/**
 * O(n^2) => Comparing elements on a nested loop
 * Time Complexity = 0(n^2)
 * Space Complexity = O(1)
 * Teaching purpose
 */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                //update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

//********************** Insertion Sort ****************************/
/**
 * O(n) in the best case, when the list is almost sorted
 * Time Complexity = 0(n) in best case, 
 * Space Complexity = O(1)
 * Use it  with small input almost sorted
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. 
            //This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                        break;
                    }
                }
            }
        }
    }
}

//********************** Merge Sort ****************************/
/**
 * Time Complexity = 0(n log n ) 
 * Space Complexity = O(n)
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length &&
        rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);


//********************** Quick Sort ****************************/
/**
 * Time Complexity = 0(n log n ) BUT O(n^2) with worst case
 * Space Complexity = O(n log n)
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
    const len = array.length;
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);


//********************** WHICH SORT USE ****************************/
/**
 * Fews items, almost sorted = Insertion sort
 * Otherwise:
 * If you worry about space complexity, use QuickSort
 * If you worry about worst case scenario, use MergeSort
 * HeapSort = Good space and time complexity, but quicksort better ?
 * 
 * We have also Non-Comparison Sort algorithms, better than a O(n log n)
 * Couting Sort
 * Radix Sort
 * But they work only with integers, in a small range
 */


//********************** EXEMPLES ****************************/
/**
 * #1 - Sort 10 schools around your house by distance:
 * InsertionSort, because few inputs
 * 
 * #2 - eBay sorts listings by the current Bid amount:
 * Radix or Couting sort, because bid is integer in a smallest range
 * 
 * #3 - Sport scores on ESPN
 * QuickSort, because we worry about memory
 * 
 * #4 - Massive database (can't fit all into memory) needs to sort through past year's user data
 * MergeSort, because we worry about the performance, and quicksort has a bad worst case
 * 
 * #5 - Almost sorted Udemy review data needs to update and add 2 new reviews
 * InsertionSort, assuming that the previous reviews are sorted
 * 
 * #6 - Temperature Records for the past 50 years in Canada
 * if decimal, radix or counting, else QuickSort for memory
 * 
 * #7 - Large user name database needs to be sorted. Data is very random.
 * MergeSort if we have enough memory, else quickSort
 * 
 *  #8 - You want to teach sorting for the first time
 * BubbleSort
 */


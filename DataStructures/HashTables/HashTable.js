
/*****************************************************
*************Introduction  **********************
*****************************************************/

/**
 * Hash tables = Hash Map = Maps = Dictionnary = Object
 * In JS, object are in type hash tables
 * Key Value paire
 * 
 * Hash Function
 * generate a value of fixed lenght for each input that gets
 * We send the key to the hash function , hash , and store it like a adress randomly in the memory with the value associated
 * Usually assume 0(1) because we have a key that related directly in memory where the value is
 * 
 * Insert => O(1) 
 * lookup => 0(1) 
 * delete => 0(1)
 * search => 0(1)
 */

let user = {
    age: 54,
    name: 'Elie',
    magic: true,
    scream : function(){
        console.log('RAHHHH');
    }
}

/**
 * All the properties of this object are going
 * to get placed in memory different adresses
 * lookup = user.age => O(1)
 * insert = user.spell = 'emporio' => O(1)
 */

 /**
  * MAIN problems with hash tables
  * Collision !!!
  * Where two or more key  are stored in the same memory space (bucket)
  * In this case, reading and writing the hash table becomes 0(n)
  * Differents solutions exists, like linked list 
  * or separate chaining: => each bucket is independent, and has some sort of list of entries with the same index. 
  * The time for hash table operations is the time to find the bucket (which is constant) plus the time for the list operation.
  * 
  */

  /**
   * In javascript, the type of the key its automatically stringify
   * Only allow sring keys
   * But with ES6, we have Map and Set
   * const a = new Map()
   * Allow to save any datatype as a key, and MAINTAINS insertion order
   * const a = new Sets();
   * similar to Map, but store only the keys, not the value
   */

/*****************************************************
************* Implement a Hash Table  ****************
*****************************************************/

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    //Standard to put_ to a private property in vanilla javascript
    //In real life, hashing functions whould be a lot faster than looping one by one by character
    //hash function is usually considered O(1)
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    //O(1)
    set(key, value){
      const adress = this._hash(key);
      if(!this.data[adress]){
          this.data[adress] = [];
      }
      this.data[adress].push([key, value]);
      
    }
  
    //If no collisions , its 0(1) , else O(n)
    //Hash Tables internally are implemented in a way that makes this get() operation really fast
    //here, its just to keep it simple that we build like that
    get(key){
      const adress = this._hash(key);
      const currentBucket = this.data[adress];
      if(!currentBucket){
        return 'undefined';
      }
      for(let i=0; i<currentBucket.length; i++){
          if(currentBucket[i][0] === key){
              return currentBucket[i][1];
          }
      }
      return currentBucket;
    }

    //Le problème ici avec les hash tables est que l'on doit parcourir tout la hashtable
    //Si celle ci a une taille de 500 mais ne contient que 3 éléments, on devra parcourir les 500
    //Désavantage par rapport aux array
    keys(){
        const keyArrays = [];
        for(let i=0; i<this.data.length; i++){
            if(this.data[i]){
                //Ne gére pas les collisions
                keyArrays.push(this.data[i][0][0])
                //Pour les gérer, il faut une nested loop
                //Ce qui est 0(n^2), donc pas intéressant
                // for(let j = 0; j < this.data[i].length; j++){
                //     keysArr.push(this.data[i][j][0])
                // }
            }
        }
        return keyArrays;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  myHashTable.get('grapes');
  myHashTable.set('apples', 9);
  myHashTable.get('apples');
  console.log(myHashTable);

/*****************************************************
************* Big O Notation****************
*****************************************************/

/**
 * Search => O(1) , Collision => O(n)
 * Access => O(1) ? 
 * Insert => O(1),  Collision => O(n)
 * Delete => O(1) , Collision => O(n)
 */

 /*****************************************************
************* First Recurring Character ****************
*****************************************************/
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}

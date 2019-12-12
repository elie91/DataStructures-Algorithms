function booo(n){
    for(let i=0; i<n.length; i++){
      console.log("boooooo")
    }
  }
  
  booo([1,2,3,4,5])

  /**
   * What is the SpaceComplexity of this function 
   * Avec le SpaceComplexity, on ne s'occupe que du additional space
   * We dont include space taken up by the inputs
   * We only have control of what happens inside of this function
   * So in this function, we create only the variable i
   * So the Big O is 0(1)
   */

   function arrayOfHiNTimes(n){
       let hiArray = [];
       for(let i=0; i<n; i++){
        hiArray[i]= 'hi';
      }
      return hiArray
   }

   arrayOfHiNTimes(6)

   /**
    * What is the SpaceComplexity of this function 
    * Remenber what cause Space Complexity
    * Variables, Data Structures,Functions Call ,Allocations
    * So here
    * let i = 0(1), array fill with loops, each item = additionnale memory
    * Rules 2, drop the constants = 0(n)
    */
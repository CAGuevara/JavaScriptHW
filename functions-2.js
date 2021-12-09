/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a,b) => {
  // ADD YOUR CODE HERE

  if(a>b){
    return a;
  }
  else if(a<b){
    return b;
  }
  else
    return 'The Numbers ARE the same'
}
console.log('Question # 1: Max of two Number: ' + maxOfTwoNumbers(6,3));

// maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1,num2,num3) => {
  // ADD YOUR CODE HERE
  if(num3>num2 && num1>num3)
    return( num1 + 'Is the largest off all')
  else if (num2>num3 && num2>num1)
    return (num2 + ' Is the largest off all')
    else 
    return (num3 + ' Is the largest off all')
  };

console.log('Question # 2: Max of Three '+ maxOfThree(15,17,32));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (letter1) => {
  // ADD YOUR CODE HERE

   let letter = letter1.toLowerCase();
 if (letter.length == 1 ){
   if (letter == "a" || letter =="e" || letter =="i"|| letter == "o"|| letter =="u") 


    return ('TRUE --> The letter is a vowel')
  else 
    return ('FALSE --> The letter is NOT a vowel')
 }
 else 
    return ('FALSE --> The letter is NOT a vowel')
};

console.log('Question # 3: Is Character a Vowel: ' + isCharacterAVowel('a'));
/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

// var array = [6,5,7,2]
sumArray = (array) => {
  // ADD YOUR CODE HERE
  
  var sum=0;

  for(let i=0; i<array.length; i++){
    sum = sum + array[i];
  }
  return (sum)
};
console.log('Question # 4: Sum Array ' + sumArray(array =[1,2,3,4,]));


multiplyArray = (array) => {
  // ADD YOUR CODE HERE
  
  var mult=1;

  for(let i=0; i<array.length; i++){
    mult = mult * array[i];
  }
  return (mult)
};
console.log('Question # 4: Mult Array ' + multiplyArray(array =[1,2,3,4,]));


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
numArguments = (a,b) =>{  
  return (numArguments.length)
}
console.log('Question # 5: Arguments # ' + numArguments([1,2,1],6));

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

Bonus : Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

*/

 reverseString = (string) => {
  // ADD YOUR CODE HERE
  var string1 = " ";
  for (let i = string.length -1; i >=0; i--){
    string1 +=string[i];
  }
  return string1
};

console.log('Question # 6: String Reverse => ' + reverseString('jag testar'))
/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
 findLongestWord = (array) => {
  // ADD YOUR CODE HERE
  let longWord =0;
  for(let i=0; i<array.length; i++){
    if(array[i].length>longWord){
      longWord = array[i].length;
      
    }
  }
  return longWord;
};

console.log ('Question #7: Longest Word Length => ' + findLongestWord(['hello','Beautiful','hey']))

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (array, number) => {
  // ADD YOUR CODE HERE
let finalArray = [];
for(let i=0;i<array.length;i++){
  if(array[i].length > number){
      finalArray.push(array[i]);
  }
}
return finalArray
};
console.log ('Question # 8: Filter Long Words => ' + filterLongWords(['hello','cameron','Esperanzita'],5))


// object for bonus question : Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().


class Schools{
  constructor(students, course){
    this.students = students;
    this.course = course;
  }
  reverseString(){
  var string1 = " ";
  for (let i = this.students.length -1; i >=0; i--){
    string1 +=this.students[i];
  }
  return string1
  }
}

const perScholas = new Schools('Carmen', 'Software Engineer')

console.log('Bonus Question : ' + perScholas.reverseString())

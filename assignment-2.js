
// Challenge 1

var hashes = '#';

for (var i = 0; i < 7; i++) {
    console.log(hashes += hashes[i]);
  }  

  
  /*
  Currently begins with two hashes and grows to 8, instead of 1 through 7.

  The above code establishes the hash as a string within a variable.
  The loop then runs, outputting an added hash every time it runs.
  */
  

  // Challenge 2

  function isEven(number) {

     if (number % 2 == 0) {
       console.log('The number is even');
     } else if (number % 2 != 0) {
         console.log('The number is odd');
     } else {
         console.log('This is not even a number!');
     }
  }

  isEven(22);
  
  /* The above code first checks if the number is even by looking at the remainder when divided by 2
     If it's 0, indicating an even number it will output the corresponding text. 
     If not, it looks to see if the output is something other than 0. If it is, then it outputs the "is odd" verbiage. 
     Finally, as a catch all - if the function is passed in a value that is potentially not a number at all, it will output some verbiage as well. */
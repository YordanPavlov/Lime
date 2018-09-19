/*
* If i is a multiple of both 3 and 5, print FizzBuzz.
* If i is a multiple of 3 (but not 5), print Fizz.
* If i is a multiple of 5 (but not 3), print Buzz.
* For all others, print the value of i.
*
*/

function fizzBuzz(argArray) {
  for(let index = 0; index < argArray.length; ++index) {
    let arg = argArray[index]
    let result = arg;
    let div3 = (arg % 3 == 0)
    let div5 = (arg % 5 == 0)

    if(div3) {
      if(div5) {
        result = "FizzBuzz"
      } else {
        result = "Fizz"
      }
    } else {
      if(div5) {
        result = "Buzz"
      }
    }

    console.log(result)
  }

}

// Test
//fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

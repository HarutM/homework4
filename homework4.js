// 2. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4), we should see:



//  *******
//   *****
//    ***
//     *

// (10 points)

  const a = function(number, str){
  let v = " "
  while(number>0){
  v = v + str;
  number = number - 1;
  }
  return v;
  }
  
  
  const triangleStars = function(n){
    let temp = n*2 - 1;
    let temp2 = 0;
  
    while(temp > 0 && temp2 < n){
       console.log(a(temp2,' ') + a(temp, "*"))
      temp = temp - 2;
      temp2 = temp2 + 1;
    }
  }
 triangleStars(4);

// 3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.

// Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]);  // will return [1, 2, 3, 4, 5, 6]



// (10 points)

 const multiToSingle = function (array) {
    let result = [];
    let i = 0;
    while (array.length>i) {
        let j = 0;
        while (array[i].length > j) {
            result[result.length] = array[i][j];
            j = j +1;
        }
        i = i+1;
    }
    return result;
}
const result1 = [[1, 2], [3, 4, 5]]
console.log(multiToSingle(result1));


// 4. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.

// Example: findMinMax([4, 2, 66, -44, 8], true); // should return 66
// Example: findMinMax([4, 2, 66, -44, 8], false); // should return -44



// (10 points)

const findMinMx = function(array, a){
    let result = array[0];
    let i = 0;
    if(a === true){
        while(array.length > i){
            if(array[i] > result)
                result = array[i];
            i =i+1;
        }
    }
    else if(a === false){
        while(array.length > i){
            if(array[i] < result)
                result = array[i];
            i =i+1;
        }
    }
    return result;
}
result1=findMinMx([0, 16, 4, 32], true);
console.log(result1);

//this will also work I think.......................
//const findMinMax = function(D, L){
	//if(L === true){
		//return Math.max.apply(null, D)
	//} else if(L === false){
    //return Math.min.apply(null, D)
  //}
//}
//findMinMax([9, 55, 10], false)


// 5. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.



// Example: forEach([4, 3, 2], function(val) {

//   console.log(val);

// }); // doing this should result in this in the console:

// 4
// 3
// 2



// (10 points)

const forEach = function(array, func){
let num = 0;
while(num<array.length){
  func(array[num]);
num = num +1
} ;
}
const result = [5, 8, 3, 1]
const result1 = function(val) {
    console.log(val);
}
forEach(result, result1);

// 6. Create a function 'sum' that takes an array of numbers and returns their sum.

// Example: sum([4, 3, 2]); // should return 9



// (10 points)
  const sum = function(arrayofnumbers){
let number = 0;
let sumofarray = 0;
while(arrayofnumbers.length>number){
sumofarray+= arrayofnumbers[number];
number = number + 1;
}
return sumofarray;
}
const result = sum([1, 2, 3, 0]);
console.log(result);


// 7. Write a function 'reverse' that reverses the given string.  

//    Example:  reverse('abcd') should return 'dcba'.  

//    Some things to know about strings:  

//    	.length will give you the length of the string.  Example: 'abc'.length returns 3

//    	You can access any character of a string using brackets: 'abcde'[2] returns 'c'.

//    Note that indexes begin with 0.  So 'abcde'[0] will return 'a'

// Hint: 

//     const str = 'abcd';

//     reverse(str) is the same thing as:

//     str[3] + str[2] + str[1] + str[0];  // which will result in 'dcba'



// (10 points)

  const reverse = function(a){
  let b = a.length
  while(b>0){
    console.log(a[b-1])
    b=b-1;
  }
    return "";
  }
  console.log(reverse("abcd"))

  //another way

      //const reverse = function(string){
  //let result = ""
  //let a = string.length-1
	//while(a>=0){
//result=result + string[a];
//a = a-1
//	}
  //return result;
//}
//console.log(reverse("abcd"))


// 8. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)

// * * * * *
//  * * * * *
// * * * * *
//  * * * * *
// * * * * *



// (10 points)

  const checkerboard = function (board) {
    let num1 = 0;
    while (num1 < board) {
        let num2 = 0;
        while (num2 < board) {
          if (num1 % 2 === num2 % 2 || num1 === num2){
            document.write("*")
          }
            else
            {
              document.write(".")
            }
            num2 = num2 + 1;
        }
        document.write("<br>");
        num1 = num1 + 1;
    }
}

checkerboard(8);
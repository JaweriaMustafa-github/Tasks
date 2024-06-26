// Q1. Write a function checkEvenOdd that accepts a number and prints whether it is even or odd.

function checkEvenOdd(num : number) {
    if(num % 2 === 0) {
        console.log(`${num} is even.`);        
    }
    else {
        console.log(`${num} is odd.`);
    }
}
console.log("Q1. Write a function checkEvenOdd that accepts a number and prints whether it is even or odd.");

checkEvenOdd(3);
checkEvenOdd(16);

// Q2.Write a function arrayOperations that creates an array of numbers, adds a number to the end of the
//  array, removes the first number, and prints the modified array.

function arrayOperations() {
    let numbers : number[] = [0,2,4,6,8];

    console.log("Original Array of numbers: " , numbers);

    numbers.push(10);
    console.log("After adding a number at the end of the array: " , numbers);
    
    numbers.shift();
    console.log("After removing first number from an array: " , numbers);
    
}
console.log
("Q2.Write a function arrayOperations that creates an array of numbers, adds a number to the end of the array, removes the first number, and prints the modified array.");

arrayOperations();

// Q3. Write a function multiplies the elements of an array by 2 and returns the modified array

function multiplyBy2 (numArr : number[]) : number[] {
    return numArr.map (item => item*2);

}

const nums : number[] = [1,3,5,7];

console.log("Q3. Write a function multiplies the elements of an array by 2 and returns the modified array");

console.log("Original array: " , nums);

let doubledNumbers = multiplyBy2(nums);

console.log("Array of doubled numbers" , doubledNumbers);

// Q4. Write a function findLargest that accepts an array of numbers and returns the largest number.

function findLargest(numbs:number[]): number {
    
    if (numbs.length === 0) {
        throw new Error("The array can not be empty! It must contain a number")
    }

    let largest = numbs[0];
    for (let i = 1; i < numbs.length; i++) {
        if (numbs[i] > largest) {
            largest = numbs[i]
        }
    }

    return largest;
}

// Example 

console.log("Q4. Write a function findLargest that accepts an array of numbers and returns the largest number.");
    
let numbers : number[] = [5,4,3,2,1];
console.log("The array is:" , numbers);

console.log("The largest number from above array is:" , findLargest(numbers));



// Q5. Write a function reverseString that accepts a string and returns the reversed string.
function reverseString(str : string):string {
    return str.split('').reverse().join('');
}

// Example 
console.log(" Q5. Write a function reverseString that accepts a string and returns the reversed string.");


let Originalstring = "Hello";
console.log("The original string:" , Originalstring );

let reversedString = reverseString(Originalstring)
console.log("Here is the reversed string:", reversedString);

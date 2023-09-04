// 1. write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (first, second, third) => first * second * third;
const result = multiply(10, 5, 10);
console.log(result);

// 2. write the following sentence in three Lines and print the result. i am web developer. I Love to code. I love to eat biryani
const developer = `i am a web developer.
I Love to Code.
I love eat Biryani.
`;
console.log(developer);

// 3.write an arrow function that will take 2 parameters. one parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add = (num1, num2 = 10) => num1 + num2;
const addition = add(10);
console.log(addition);

/* 4. write an arrow function where it will do the following:
 a) It will take an array where the array elements will be the name of your friends. 
b) Check if the length of each element is even, push elements with even length to a new array and return the result.
*/
const friends = ['najiya', 'arif', 'mahatab', 'romio', 'samim', 'nayon', 'robi', 'romi', 'najiru'];

const friendsName = friends => {
    let newFriend = [];
    for(const friend of friends){
       if(friend.length % 2 === 0){
        newFriend.push(friend);
    }
}
return newFriend;
}

const newFriendsArray = friendsName(friends);
console.log(newFriendsArray);


/* 5.problem
write an arrow function where it will do the following:
a) Square each array element.
b) calculate the sum of the squared elements.
c) Return the average of the sum of the squared elements.
*/

const numbers = [2, 3, 5, 6, 25];
const square = numbers => {
     let sumOf = 0;
for(const element of numbers){
    const sum = element * element;
    sumOf += sum;
 }
 return sumOf;
} ;
const squared = square(numbers);
console.log(squared);


/* 6. problem
Write an arrow function where it will do the following:
a) It will take two array inputs.
b) combine the two arrays and assign them in a new array.
c) Find the maximum number from the new array and return the result.
*/

const num1 = [48, 86, 112, 56, 26, 111, 110];
const num2 = [66, 89, 26, 1, 963, 89, 1111];

const newArray = (num1, num2) => {
    const newOne = [...num1, ...num2];
    const maxNumber = Math.max(...newOne);
    return maxNumber;
}

const output = newArray(num1, num2);
console.log(output);
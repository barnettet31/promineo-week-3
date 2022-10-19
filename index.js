const ages  = [3, 9, 23, 64, 2, 8, 28, 93];

const subtractFirstFromLast = function(array){
    return array[array.length - 1] - array[0];
    //takes in an array and then returns the first number in the array from the last number in the array 
}
console.log(subtractFirstFromLast(ages));
ages.push(105); //add new element to end of array

console.log('ages with new element pushed ',ages);
console.log('new last element minus first element ',subtractFirstFromLast(ages));


let totalOfAges = 0; 

for(age of ages){
    totalOfAges += age;
}//used for loop to demonstrate compentency
const averageAge = totalOfAges/(ages.length);
console.log('average of ages ', averageAge);
//this is the average including my added element 


const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLengthOfNames = 0;
for(person of names){
    totalLengthOfNames += person.length
}
const averageLengthOfNames = totalLengthOfNames / names.length;
console.log('average length of names', averageLengthOfNames);

//want to use a reduce method on the string (I can do the same as I did above with a placeholder string and using += for each iteration)

const concatenatedStrings = names.reduce((acc, nextEl) =>`${acc} ${nextEl}`,'');
///names.join(' ');
console.log('concatenated strings', concatenatedStrings);

const nameLengths = names.map(element=>element.length);
console.log('array containing name lengths',nameLengths); //can do the same with a for loop and pushing each length into a placeholder array

const totalOfNameLengths = names.reduce((accumulator, currentValue)=>accumulator + currentValue.length, 0);
console.log('totalofNameLengths',totalLengthOfNames);


const repeatWords =  (word, n) => word.repeat(n);

console.log(repeatWords('Hello',3));//prints hello hello hello

const returnFullName = (firstName, lastName)=> `${firstName} ${lastName}`;

console.log(returnFullName('Travis', 'Barnette'));

const returnSumOfNumberArray = (array)=>array.reduce((acc, nextEl)=>acc+nextEl,0) > 100;
console.log('example with sum over 100',returnSumOfNumberArray([102,101,99,98,97])); // should be true
console.log('example with sum under 100',returnSumOfNumberArray([1,2,3])); //should be false

const returnAverageOfArray = (array)=> array.reduce((acc, nextEl)=>acc+nextEl,0) / array.length;

console.log('average array function', returnAverageOfArray([1,2,3,4,5,6,7,8,9,10])); // should be 5.5

const isOneAverageGreaterThanOther = (arr1, arr2)=> returnAverageOfArray(arr1) > returnAverageOfArray(arr2);

console.log(isOneAverageGreaterThanOther([1,2,3], [4,5,6])); //should be false
console.log(isOneAverageGreaterThanOther([4,5,6], [1,2,3])); //should be true

//reused function above for ease

const willBuyDrink =  (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;

console.log(willBuyDrink(false, 10.50)); // should be false
console.log(willBuyDrink(true, 10.51)); // should be true


const filterArrayOfObjectsBasedOnGivenValue = (arrayOfObjects, idIDoNotWant)=>arrayOfObjects.filter(element=>element.id !== idIDoNotWant);

//returns a new array of objects that do not have the given id

const exampleArray = [
    {
    data:'1234',
    id:1
},   {
    data:'1234',
    id:2
},   {
    data:'1234',
    id:3
},   {
    data:'1234',
    id:4
},   {
    data:'1234',
    id:5
},   {
    data:'1234',
    id:6
},   {
    data:'1234',
    id:7
},   {
    data:'1234',
    id:8
},   {
    data:'1234',
    id:9
},   {
    data:'1234',
    id:10
}, ];

console.log(filterArrayOfObjectsBasedOnGivenValue(exampleArray, 1)); // returns the example array excluding the one object with the id:1
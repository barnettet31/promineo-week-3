const ages  = [3, 9, 23, 64, 2, 8, 28, 93];

const subtractFirstFromLast = function(array){
    return array[array.length - 1] - array[0]
    //takes in an array and then returns the first number in the array from the last number in the array 
}
console.log(subtractFirstFromLast(ages));
ages.push(105);

console.log(ages);
console.log(subtractFirstFromLast(ages));


let totalOfAges = 0; 

for(age of ages){
    totalOfAges += age;
}
const averageAge = totalOfAges/(ages.length)
console.log('average of ages', averageAge);
//this is the average including my added element 



const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLengthOfNames = 0;
for(person of names){
    totalLengthOfNames += person.length
}
const averageLengthOfNames = totalLengthOfNames / names.length;
console.log('average length of names', averageLengthOfNames);


const nameLengths = names.map(element=>element.length);
console.log(nameLengths);


const totalOfNameLengths = names.reduce((accumulator, currentValue)=>accumulator + currentValue, 0);
console.log(totalLengthOfNames);


const repeatWords=  (word, n)=>word.repeat(n);

console.log(repeatWords('Hello',3));//prints hello hello hello

const returnFullName = (firstName, lastName)=> `${firstName} ${lastName}`;

console.log(returnFullName('Travis', 'Barnette'));

const returnSumOfNumberArray = (array)=>array.reduce((acc, nextEl)=>acc+nextEl) > 100;
console.log(returnSumOfNumberArray([102,101,99,98,97])); // should be true
console.log(returnSumOfNumberArray([1,2,3])); //should be false

const returnAverageOfArray = (array)=> array.reduce((acc, nextEl)=>acc+nextEl) / array.length;

console.log(returnAverageOfArray([1,2,3,4,5,6,7,8,9,10])); // should be 5.5

const isOneAverageGreaterThanOther = (arr1, arr2)=> returnAverageOfArray(arr1) > returnAverageOfArray(arr2);

console.log(isOneAverageGreaterThanOther([1,2,3], [4,5,6])); //should be false
console.log(isOneAverageGreaterThanOther([4,5,6], [1,2,3])); //should be true

//reused function above for ease

const willBuyDrink =  (isHotOutside, moneyInPocket)=> isHotOutside && moneyInPocket > 10.50;

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
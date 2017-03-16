// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//Push first and last name into an empty array
var nameArray = [];
nameArray.push('Colin', 'Sygiel');

//All the missing numbers up to and including 10 to genericNumberArray.
genericNumberArray.push(6,7,8,9,10);

//var colors - 'removes the last element of an array'
//`popResult` is storing the return value'
var popResult = colors.pop();

//var scrambledWords - 'the array named `scrambledWords`'
scrambledWords.reverse();

//var phoneNumber - 'the array named `phoneNumber`'
phoneNumber.reverse();

//'removes the first element of an array'
// '`nextOrder` is storing the return value'
var nextOrder = orderQueue.shift();

//var mixedNums - sort the `mixedNums` array'
mixedNums.sort();

//var mixedWords - sort the `mixedWords` array'
mixedWords.sort();

//var fruitCollection - 'removing elements'
//`notFruit` variable is storing the items removed from `fruitCollection`'
var notFruit = fruitCollection.splice(1,3);

//'`gemBox` has only gems inside of it'
gemBox.splice(5,2);
gemBox.splice(6,4);

//var upToTen - Splice '`brownOnly` has only the word "brown" in it and a length of 5'
brownOnly.splice(1,5, 'brown', 'brown', 'brown');
console.log(brownOnly);

//'`orderedValuesNewLength` is storing the length of `orderedValues`'
upToTen.splice(2, 0, 3,4,5,6,7,8);

//orderedValuesNewLength` is storing the length of `orderedValues`'
var orderedValuesNewLength = orderedValues.unshift(1,2,3);

//'`randomThingsArray` is the result of joining the variables `genericNumberArray` and `colors`'
var randomThingsArray = genericNumberArray.concat(colors);

//'`updatedOrders` is the result of joining the array `orderQueue` and two custom orders that you define'
var updatedOrders = orderQueue.concat({ takeOut: 'Peyote' }, { takeOut: 'San Pedro'});

//join() scrambledWords
var sentence = scrambledWords.join(" ");

//join() myFruits
var myFruits = fruitCollection.join(" + ");

//slice() on friends
var favoriteFriends = friends.slice(1,3);

//slice() owesMoney
var owesMoney = friends.slice(3);

//toString() on monthNames
var monthNameString = monthNames.toString();

//indexOf() on colors
var favoriteColor = colors.indexOf('Red');

//indexOf() on mixedNums
var favoriteEvenNumber = mixedNums.indexOf(76);

//lastIndexOf() on bulkNumbers
var lastNine = bulkNumbers.lastIndexOf(9);

//lastIndexOf() on bulkNumbers
var lastFive = bulkNumbers.lastIndexOf(5);
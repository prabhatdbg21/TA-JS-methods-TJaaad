Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: separator - Optional - Specifies a string to separate each pair of adjacent elements of the array. The 
                separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(); // '1,2,3'
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.join("-"); // "A quick- brown fox -jumped over a lazy"
     let colors = ['red', 'green', 'blue'];
     colors.join("") // 'redgreenblue'
     ```
   - `join` all elements are joined with or without any characters in between them.
   - yes it does mutate the original array

3. `flat`

   - Parameter: depth - Optional - The depth level specifying how deep a nested array structure should be flattened.
                 Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
     let numbers = [0, 1, 2, [[[3, 4]]]];
     numbers.flat(); // (4) [0, 1, 2, Array(1)]
     numbers = [0, 1, 2, [[[3, 4]]]];
     numbers.flat(Infinity); // (5) [0, 1, 2, 3, 4]
     let colors = ['red',[ 'green',[ 'blue']]];
     colors.flat() // (3) ['red', 'green', Array(1)]
     ```
   - `flat` The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the
           specified depth.
   - No it does not mutate the original array


4. `push`

   - Parameter: elementN - The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let numbers = [1, 2];
     numbers.push("4"); // 3
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.push("prabhat"); // 4
     let colors = ['red', 'green', 'blue'];
     colors.push("pink") // 4
     ```
   - `push` The push() method adds one or more elements to the end of an array and returns the new length of the array.
   - yes it does mutate the original array

5. `indexOf`

   - Parameter: searchElement - Element to locate in the array.
                fromIndex - Optional - The index to start the search at. If the provided index is 0, then the whole array will be searched. Default: 0
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5];
     numbers.indexOf(1); // 0
     numbers = [1, 2 , 3 , 4 , 5];
     numbers.indexOf(7); // -1
     let colors = ['red', 'green', 'blue'];
     colors.index0f("green") // 1
     ```
   - `indexOf` The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter: searchElement - Element to locate in the array.
                fromIndex - Optional - The position in the array at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1)
   - Return: The last index of the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     numbers.lastIndexOf(1); // 5
     numbers = [1, 2 , 3 , 4 , 5 , 1];
     numbers.lastIndexOf(7); // -1
     let colors = ['red', 'green', 'blue' ,'red', 'green', 'blue' ];
     colors.lastIndexOf("green") // 4
     ```
   - `lastindexOf` The lastIndexOf() method returns the last index at which a given element can be found in the array, or 
      -1 if it is not present. The array is searched backwards, starting at fromIndex.
   - No it does not mutate the original array

7. `includes`

   - Parameter: searchElement - The value to search for.
                fromIndex - Optional - The position in this array at which to begin searching for searchElement. Defaults to 0.
   - Return: A boolean value which is true if the value searchElement is found within the array
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5];
     numbers.includes(3); // true
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.includes("prabhat"); // false
     let colors = ['red', 'green', 'blue'];
     colors.includes("green") // true
     colors.includes("green" , 1) // true
     colors.includes("green" , 2) // false
     ```
   - `includes` The includes() method determines whether an array includes a certain value among its entries, returning 
                true or false as appropriate.
   - No it does not mutate the original array

8. `reverse`

   - Parameter: ()
   - Return: The reversed array.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5];
     numbers.reverse(); // (5) [5, 4, 3, 2, 1]
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.reverse(); // (3) ['jumped over a lazy', ' brown fox ', 'A quick']
     let colors = ['red', 'green', 'blue'];
     colors.reverse() // (3) ['blue', 'green', 'red']
     ```
   - `reverse` The reverse() method reverses an array in place. The first array element becomes the last, and the last
                 array element becomes the first.
   - Yes it does mutate the original array


9. `every`

   - Parameter: callbackFn - A function to test for each element, taking three arguments:
                element - The current element being processed in the array.
                index Optional -The index of the current element being processed in the array.
                array Optional - The array every was called upon.
                thisArg Optional - A value to use as this when executing callbackFn.
   - Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 0 ;
     }
     let numGreat = numbers.every(greater);
     console.log (numGreat)  // true

    numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 5 ;
     }
     let numGreat1 = numbers.every(greater);
     console.log (numGreat1)  // false
      ```
   - `every` The every() method tests whether all elements in the array pass the test implemented by the provided
             function. It returns a Boolean value.
   - No it does not mutate the original array


10. `shift`

   - Parameter: ()
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     let numbers = [1, 2];
     numbers.shift(); // 1
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.shift(); // "A quick"
     let colors = ['red', 'green', 'blue'];
     colors.shift() // "red"
     ```
   - `shift` The shift() method removes the first element from an array and returns that removed element. This method 
            changes the length of the array.
   - yes it does mutate the original array

11. `splice`

   - Parameter: start - The index at which to start changing the array.
                deleteCount - Optional - An integer indicating the number of elements in the array to remove from start.
                item1, item2, ... -  Optional - The elements to add to the array, beginning from start.
   - Return: An array containing the deleted elements. If only one element is removed, an array of one element is
             returned.If no elements are removed, an empty array is returned.
   - Example:
     ```js
     let numbers = [1, 2];
     numbers.splice(); // []
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.splice(2); // ['jumped over a lazy']
     let colors = ['red', 'green', 'pink' , 'blue'];
     colors.splice(1, 2 , "White") // (2) ['green', 'pink']
     ```
   - `splice` The splice() method changes the contents of an array by removing or replacing existing elements and/or 
             adding new elements 
   - yes it does mutate the original array

12. `find`

   - Parameter: callbackFn - A function to test for each element, taking three arguments:
                element - The current element in the array.
                index - Optional -The index (position) of the current element in the array.
                array - Optional - The array that find was called on. 
                The callback must return a truthy value to indicate a matching element has been found.
                thisArg - Optional - Object to use as this inside callbackFn.
   - Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is 
             returned.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 0 ;
     }
     let numGreat2 = numbers.find(greater);
     console.log (numGreat2)  // 1

    numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 3 ;
     }
     let numGreat3 = numbers.find(greater);
     console.log (numGreat3)  // 4
      ```
   - `find` The find() method returns the first element in the provided array that satisfies t
            function. If no values satisfy the testing function, undefined is returned.
   - No it does not mutate the original array


13. `unshift`

   - Parameter: elementN - The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let numbers = [1, 2];
     numbers.unshift("pink"); // 3
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.unshift("prabhat" , "kumar"); // 5
     let colors = ['red', 'green', 'blue'];
     colors.unshift("Pink") // 4
     ```
   - `unshift` The unshift() method adds one or more elements to the beginning of an array and returns the new length of 
             the array.
   - yes it does mutate the original array

14. `findIndex`

   - Parameter: A function to execute on each value in the array until the function returns true, indicating that the
                 satisfying element was found.
                 It takes three arguments:
                 element - The current element being processed in the array.
                 index - Optional - The index of the current element being processed in the array.
                 array - Optional - The array findIndex() was called upon.
                 thisArg - Optional - Optional object to use as this when executing callbackFn.
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 0 ;
     }
     let numGreat2 = numbers.findIndex(greater);
     console.log (numGreat2)  // 0

    numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 3 ;
     }
     let numGreat3 = numbers.findIndex(greater);
     console.log (numGreat3)  // 3
      ```
   - `findIndex` The findIndex() method returns the index of the first element in the array that satisfies the provided 
            testing function. Otherwise, it returns -1, indicating that no element passed the test.
   - No it does not mutate the original array

15. `filter`

  - Parameter: callbackFn - Function is a predicate, to test each element of the array. Return a value that coerces to
               true to keep the element, or to false otherwise.
               It accepts three arguments:
               element - The current element being processed in the array.
               index - Optional - The index of the current element being processed in the array.
               array - Optional - The array on which filter() was called.
               thisArg - Optional - Value to use as this when executing callbackFn.
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be
             returned.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 3 ;
     }
     let numGreat2 = numbers.filter(greater);
     console.log (numGreat2)  // (2) [4, 5]

    numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num % 2 === 0 ;
     }
     let numGreat3 = numbers.filter(greater);
     console.log (numGreat3)  // (2) [2, 4]
      ```
   - `filter` The filter() method creates a new array with all elements that pass the test implemented by the provided 
           function.
   - Yes it does mutate the original array

16. `flat`

   - Parameter: depth - Optional - The depth level specifying how deep a nested array structure should be flattened.
                 Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
     let numbers = [0, 1, 2, [[[3, 4]]]];
     numbers.flat(); // (4) [0, 1, 2, Array(1)]
     numbers = [0, 1, 2, [[[3, 4]]]];
     numbers.flat(Infinity); // (5) [0, 1, 2, 3, 4]
     let colors = ['red',[ 'green',[ 'blue']]];
     colors.flat() // (3) ['red', 'green', Array(1)]
     ```
   - `flat` The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the
           specified depth.
   - No it does not mutate the original array


17. `forEach`

   - Parameter: callbackFn - Function to execute on each element. It accepts between one and three arguments:
                element - The current element being processed in the array.
                index - Optional - The index of element in the array.
                array - Optional - The array forEach() was called upon.
                thisArg - Optional - Value to use as this when executing callbackFn.
   - Return: undefined.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     let numb = " " ;
     function greater (num){
      numb = numb + num + " " ;
     }
     numbers.forEach(greater);
     console.log (numb)  //  1 2 3 4 5 1 

     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     let numb = " " ;
     function greater (num){
      numb = numb + num + "" ;
     }
     numbers.forEach(greater);
     console.log (numb)  //   123451
      ```
   - `forEach` The forEach() method executes a provided function once for each array element.
   - No it does not mutate the original array


18. `map`

   - Parameter: callbackFn - Function that is called for every element of arr. Each time callbackFn executes, the 
                returned value is added to newArray.
                The callbackFn function accepts the following arguments:
                element - The current element being processed in the array.
                index - Optional - The index of the current element being processed in the array.
                array - Optional - The array map was called upon.
                thisArg - Optional - Value to use as this when executing callbackFn.
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num * 2 ;
     }
     let numGreat2 = numbers.map(greater);
     console.log (numGreat2)  // (6) [2, 4, 6, 8, 10, 2]

    numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num * 3 ;
     }
     let numGreat3 = numbers.map(greater);
     console.log (numGreat3)  // (6) [3, 6, 9, 12, 15, 3]
      ```
   - `map` The map() method creates a new array populated with the results of calling a provided function on every 
            element in the calling array.
   - Yes it does mutate the original array


19. `pop`

   - Parameter: ()
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     let numbers = [1, 2];
     numbers.pop(); // 2
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.pop(); // "jumped over a lazy"
     let colors = ['red', 'green', 'blue'];
     colors.pop() // "blue"
     ```
   - `pop` The pop() method removes the last element from an array and returns that element. This method changes the
           length of the array.
   - yes it does mutate the original array

20. `reduce`

   - Parameter: callbackFn - A "reducer" function that takes four arguments:
   - Return: The value that results from running the "reducer" callback function to completion over the entire array.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (acc , num){
      return acc + num;
     }
     let numGreat2 = numbers.reduce(greater , 0);
     console.log (numGreat2)  // 16

     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (acc , num){
      return acc * num;
     }
     let numGreat2 = numbers.reduce(greater , 1);
     console.log (numGreat2)  // 120

      ```
   - `reduce` Reduce is used for reducing a collection of value into a different shape of value or we can say it to be a 
              single value . 
   - Yes it does mutate the original array


21. `slice`

   - Parameter: start Optional - Zero-based index at which to start extraction.
                end Optional - Zero-based index before which to end extraction.
   - Return: A new array containing the extracted elements.
   - Example:
     ```js
     let numbers = [1, 2];
     numbers.slice(); // (2) [1, 2]
     let sentanceArray = ['A quick', ' brown fox ' , 'jumped over a lazy'];
     sentanceArray.slice(0 , 1); // ['A quick']
     let colors = ['red', 'green', 'blue'];
     colors.slice(1) // (2) ['green', 'blue']
     ```
   - `unshift` The slice() method returns a shallow copy of a portion of an array into a new array object selected from
               start to end  where start and end represent the index of items in that array.
   - NO it does not mutate the original array

22. `some`

   - Parameter: callbackFn - A function to test for each element, taking three arguments:
                element - The current element being processed in the array.
                index Optional -The index of the current element being processed in the array.
                array Optional - The array some() was called upon.
                thisArg Optional - A value to use as this when executing callbackFn.
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
     let numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 0 ;
     }
     let numGreat2 = numbers.some(greater);
     console.log (numGreat2)  // true

    numbers = [1, 2 , 3 , 4 , 5 , 1];
     function greater (num){
      return num > 5 ;
     }
     let numGreat3 = numbers.some(greater);
     console.log (numGreat3)  // true
      ```
   - `some` The some() method tests whether at least one element in the array passes the test
   - No it does not mutate the original array

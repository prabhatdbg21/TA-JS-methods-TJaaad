Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: No value in parameter it will remain empty () .
   - Return: A new string representing the calling string converted to upper case.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); // "ARYA STARK"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS"
     ```
   -  `toUpperCase` have no parameter () and return a new string representing the calling string converted to upper case.

3. `toLowerCase`

   - Parameter: No value in parameter it will remain empty () .
   - Return: A new string representing the calling string converted to lower case.
   - Example:
     ```js
     let name = 'ARYA Starks';
     name.toLowerCase(); // "arya stark"
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.toLowerCase(); // "a quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.toLowerCase(); // "starks"
     ```
   -  `toLowerCase` have no parameter () and return a new string representing the calling string converted to lower case.

4. `trim`

   - Parameter: No value in parameter it will remain empty () .
   - Return: No white spaces in the start and in the end .
   - Example:
     ```js
     let name = '                   Arya Stark                      ';
     name.trim(); //"Arya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog                       ';
     sentance.trim(); // "A quick brown fox jumped over a lazy dog"
     let houseName = '                               Starks';
     houseName.trim(); // "Starks"
     ```
   -  `trim` It will remove all the white spaces in the start and in the end .

5. `trimEnd`

   - Parameter: No value in parameter it will remain empty () .
   - Return: No white spaces in the end .
   - Example:
     ```js
     let name = '                   Arya Stark                      ';
     name.trimEnd(); //"                  Arya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog                       ';
     sentance.trimEnd(); // "A quick brown fox jumped over a lazy dog"
     let houseName = '                               Starks';
     houseName.trimEnd(); // "                       Starks"
     ```
   -  `trimEnd` It will remove all the white spaces in the end .


6. `trimStart`

   - Parameter: No value in parameter it will remain empty () .
   - Return: No white spaces in the start .
   - Example:
     ```js
     let name = '                   Arya Stark                      ';
     name.trimStart(); //"Arya Stark                        "
     let sentance = 'A quick brown fox jumped over a lazy dog                       ';
     sentance.trimStart(); // "A quick brown fox jumped over a lazy dog                     "
     let houseName = '                               Starks';
     houseName.trimStart(); // "Starks"
     ```
   -  `trimStart` It will remove all the white spaces in the start .


7. `concat`

   - Parameter: One or more strings to concatenate .
   - Return: A new string containing the combined text of the strings provided.
   - Example:
     ```js
     let name = 'Arya ';
     name.concat("Stark"); //"Arya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.concat( " is " , name) ; // "A quick brown fox jumped over a lazy dog is Arya"
     let houseName = 'Starks';
     houseName.concat( " and " , name) ; // "Starks and Arya"
     ```
   - `concat` concatenates the string arguments to the calling string and returns a new string.

8. `endsWith`

   - Parameter: The characters to be searched for at the end of string.
   - Return: true if the given characters are found at the end of the string otherwise false.
   - Example:
     ```js
    let name = 'Arya Stark';
     name.endsWith("k"); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith("dog"); // true
     let houseName = 'Starks';
     houseName.endsWith("S"); // false    S != s
     ```
   - `endWith` endsWith returns true or false value based on whether that string end with that specific character or value or not .

9. `includes`

   - Parameter: searchString - A string to be searched for within string.
                position - Optional - The position within the string at which to begin searching for searchString. (Defaults to 0.)
   - Return: true if the search string is found anywhere within the given string; otherwise, false if not.
   - Example:
     ```js
    let name = 'Arya Stark';
     name.includes("A"); // true
     name.includes("A" , 1); // false   it will start search from 1 but (A) is on 0 position so result is false
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes("fox"); // true
     let houseName = 'Starks';
     houseName.includes("b"); // false  
     ```
   - `includes` includes returns true or false value based on whether the value or the character is present inside that string or not .

10. `indexOf`

   - Parameter: searchString - Substring to search for.
                position - Optional - The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0.
   - Return: The index of the first occurrence of searchString found, or -1 if not found.
   - Example:
     ```js
    let name = 'Arya Stark';
     name.indexOf("r"); // 1
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf("fox"); // 14
     sentance.indexOf("fox", 15); // -1   it will start serch from 15
     let houseName = 'Starks';
     houseName.indexOf("A"); // -1
     ```
   - `indexOf` indexOf returns the first index of specific character that we are looking for .

11. `lastIndexOf`

   - Parameter: searchString - Substring to search for.
                position - Optional - The method returns the index of the last occurrence of the specified substring at a position less than or equal to position, which defaults to +Infinity.
   - Return: The index of the last occurrence of searchString found, or -1 if not found.
   - Example:
     ```js
    let name = 'Arya Stark';
     name.lastIndexOf("r"); // 8
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf("fox"); // 14
     sentance.lastIndexOf("fox", 15); // 14   it will start serch from 15
     sentance.lastIndexOf("fox", 13); // -1   it will start serch from 13
     let houseName = 'Starks';
     houseName.lastIndexOf("A"); // -1
     ```
   - `lastIndexOf` lastIndexOf returns the last index of specific character that we are looking for .

12. `padEnd`

   - Parameter: targetLength - The length of the resulting string once the current str has been padded.
                padString - Optional - The string to pad the current str with. If padString is too long to stay within targetLength. The default value for this parameter is " " 
   - Return: A String of the specified targetLength with the padString applied at the end of the current string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padEnd("30") // "Arya Stark                    "
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.length // 40
     sentance.padEnd("38" , "0") // "A quick brown fox jumped over a lazy dog"
     sentance.padEnd("42" , "0") // "A quick brown fox jumped over a lazy dog00"
     let houseName = 'Starks';
     houseName.padEnd("30" , "A")  // "StarksAAAAAAAAAAAAAAAAAAAAAAAA"
     ```
   - `padEnd` padEnd return a String of the specified targetLength with the padString applied at the end of the current string.

13. `padStart`

   - Parameter: targetLength - The length of the resulting string once the current str has been padded.
                padString - Optional - The string to pad the current str with. If padString is too long to stay within targetLength. The default value for this parameter is " " 
   - Return: A String of the specified targetLength with the padString applied at the start of the current string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padStart("30") // "                    Arya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.length // 40
     sentance.padStart("38" , "0") // "A quick brown fox jumped over a lazy dog"
     sentance.padStart("42" , "0") // "00A quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.padStart("30" , "A")  // "AAAAAAAAAAAAAAAAAAAAAAAAStarks"
     ```
   - `padStart` padStart return a String of the specified targetLength with the padString applied at the start of the current string.

14. `repeat`

   - Parameter: count - An integer between 0 and +Infinity, indicating the number of times to repeat the string.
   - Return: A new string containing the specified number of copies of the given string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.repeat(2); //"Arya StarkArya StarkArya StarkArya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.repeat(2); // "A quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.repeat(0); // ""
     ```
   - `repeat`  repeat is used for repeating the same string multiple times

15. `replace`

   - Parameter: substr - A string that is to be replaced by newSubstr.
                newSubstr (replacement) - The string that replaces the substring
   - Return: A new string, with some or all matches of a pattern replaced by a replacement.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.replace("a" , "b") //"Aryb Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.replace("fox" , "is") // "A quick brown is jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.replace("Starks" , "Prabhat") // "Prabhat"
     ```
   - `replace` some or all matches of a pattern replaced by a replacement.

16. `slice`

   - Parameter: beginIndex - The zero-based index at which to begin extraction.
                endIndex - Optional - The zero-based index before which to end extraction.
   - Return: A new string containing the extracted section of the string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.slice(0); //"Arya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.slice(10 , 30); // "own fox jumped over "
     sentance.slice(30 , 10); // " "
     let houseName = 'Starks';
     houseName.slice(3 , 4); // "r"
     ```
   - `slice` A new string containing the extracted section of the string.


17. `split`

   - Parameter: separator - Optional - The pattern describing where each split should occur.
                limit - Optional - A non-negative integer specifying a limit on the number of substrings to be included in the array.
   - Return: An Array of strings, split at each point where the separator occurs in the given string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.split("a"); // (3) ['Ary', ' St', 'rk']
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.split(" "); // (9) ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', 'dog']
     let houseName = 'Starks';
     houseName.split(""); // (6) ['S', 't', 'a', 'r', 'k', 's']
     ```
   - `split` return an Array of strings, split at each point where the separator occurs in the given string.


18. `substring`

   - Parameter: indexStart - The index of the first character to include in the returned substring.
                indexEnd - Optional - The index of the first character to exclude from the returned substring.
   - Return: A new string containing the specified part of the given string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.substring(0); //"Arya Stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.substring(10 , 30); // "own fox jumped over "
     sentance.substring(30 , 10); // " own fox jumped over "
     let houseName = 'Starks';
     houseName.substring(3 , 4); // "r"
     ```
   - `substring` substring extracts characters from indexStart up to but not including indexEnd.
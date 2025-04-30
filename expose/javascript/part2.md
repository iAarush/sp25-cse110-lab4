1: The code prints `3`. This is because the variable `i` used in the loop now has value 3 at this point, and hasn't been deleted (i.e. exists outside the scope). 

2: The code prints `150`. This is the latest value of `discountedPrice`, which is 300 / 2. There is no error.  

3: The code prints `150`. This is the latest value of `finalPrice`, which is 300 / 2. There is no error.  

4: The function will return `[ 50, 100, 150 ]`. This is a Javascript list. This is because the loop calculates half the price of each element in the input, (`prices`) and adds it to a list named `discounted`. Then, this list is returned. 

5: There is an error: 
```javascript
/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q5.js:10
        console.log(i); 
                    ^

ReferenceError: i is not defined
    at discountPrices (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q5.js:10:21)
    at Object.<anonymous> (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q5.js:18:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```
This error happens because with a `let` declaration, the variable `i` no longer exists at this point of the code runtime. 

6: There is an error: 
```javascript
/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q5.js:11
        console.log(discountedPrice); 
                    ^

ReferenceError: discountedPrice is not defined
    at discountPrices (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q5.js:11:21)
    at Object.<anonymous> (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q5.js:18:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```
The reason for this error is the same as the previous question: The variable is not defined at this scope/point in the runtime. 

7: The code prints `150`. This is not an error because `finalPrice` was defined within the same scope (inside the function, but outside the for loop), so it is accessible at this point of the runtime. 

8: Just like the previous set of functions, this code returns `[ 50, 100, 150 ]`.  This is because when we return a variable, the returned variable should be accessible within the same scope. 

9: There is an error: 
```javascript 
/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q9.js:12
        console.log(i); 
                    ^

ReferenceError: i is not defined
    at discountPrices (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q9.js:12:21)
    at Object.<anonymous> (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/pt2-q9.js:20:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```

This error happens because of the scope of i, declared with a `let` declaration. It cannot be accessed outside the for loop. 

10: The code prints `3`. This is because it can access the variable without an error, and it is simple to print after that. 

11: The code returns `[ 50, 100, 150 ]`.  This is the final list created by discounting every given price by 50%. 

12: A: `student.name` B: `student["Grad year"]` C: `student.greeting()` D: `student["Favorite Teacher"].name` E: `student.courseload[0]` 

13: A: `32` because it concatenates the strings 3 and 2. B: `1` because it converts the string 3 to the integer and subtracts, giving the integer 1. C: `3` because null maps to 0 for addition. D: `3null` because it concatenates the strings for 3 and null. E: `4` because true maps to 1 and that is added to 3. F: `0` because false and null are both mapped to 0 and added as integers. G: `3undefined` because the strings 3 and undefined are concatenated. H: `NaN` because 3 gets mapped to an integer, but this is not a valid subtraction. So, the output is `NaN`. 

14: Outputs: 
```javascript
true
false
true
false
false
true
```
A: This is because 2 gets converted to an integer first. 2 is greater than 1. 
B: In this case there is no conversion and strings are compared alphabetically. 2 is greater than 1 alphabetically, so this is false. 
C: The string 2 gets converted to integer 2 and this comparison is true. 
D: === checks for type equality as well, so this is false. 
E: true is converted to the integer 1, which is not equal to 2. So, the output is false. 
F: 2 is not 0, so Boolean(2) converts to true, and then the strict equality is checked. true is true, so the output is true. 

15: `==` is a simple equality operator. Javascript will convert types as relevant, and then compare the value. `===` is a strict equality operator. It requires the type to be the same, along with the value. There is no type conversion in this case. 

16: See file.

17: The output is [2,4,6] because the array [1,2,3] is passed in, and each element in the array is sent to `doSomething` which doubles each element. The doubled element is pushed into a new array that gets returned, so the final answer is the same array but with each individual value doubled. 

18: See file. 

19: The output is: ```javascript
1
4
3
2
```
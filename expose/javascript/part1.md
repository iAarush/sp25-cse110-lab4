1: It prints `values added:  20` 

2: It prints `final result:  20` 

3: You should not use var because it has a very large scope and can be accessed anywhere in the function it is defined in, so it's not a good fit for temporary or many other types of variables. 

4: It prints: `values added:  20` 

5: It has the error 
```javascript
/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/let.js:8
    console.log('final result: ', result); 
                                  ^

ReferenceError: result is not defined
    at sumvalues (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/let.js:8:35)
    at Object.<anonymous> (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/let.js:11:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```

This error happens because result is not defined outside the scope of the if/else block, so the next log statement can't call it. 

6: There is an error: 
```javascript
/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/const.js:4
        result = num1 + num2; 
               ^

TypeError: Assignment to constant variable.
    at sumvalues (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/const.js:4:16)
    at Object.<anonymous> (/Users/aarushmehrotra/Downloads/Coding/Coding_UCSD/CSE_110/sp25-cse110-lab4/expose/javascript/const.js:11:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```
This erorr happens because we are trying to assign a value to the immutable constant named `result`, which is not allowed. 

7: Due to the error above, this part of the code never executes.

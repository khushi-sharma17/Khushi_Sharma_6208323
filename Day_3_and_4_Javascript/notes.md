var let const 

1. On the basis of Declaration
| Feature  | `var`                                | `let`                | `const`              |
| -------- | ------------------------------------ | -------------------- | -------------------- |
| Scope    | Function-scoped                      | Block-scoped         | Block-scoped         |
| Hoisting | Hoisted (initialized as `undefined`) | Hoisted (but in TDZ) | Hoisted (but in TDZ) |

2. On the basis of Initialization
| Feature                           | `var` | `let` | `const` |
| --------------------------------- | ----- | ----- | ------- |
| Can declare without initializing? | ✅ Yes | ✅ Yes | ❌ No    |


3. On the basis of re-declaration
| Feature                      | `var` | `let` | `const` |
| ---------------------------- | ----- | ----- | ------- |
| Can redeclare in same scope? | ✅ Yes | ❌ No  | ❌ No    |




declaration
initialization
re-declaration
re initialization
dec + init in same line
dec + init diff line
redec + reinit in same line
redec + reinit in diff line


var 
int 
const


'''
var a;
a = 5;
var a = 10;
var a = 10;
var b = a;
console.log(b);
'''








a tree like structure which contains nodes...

element is also one type of node...
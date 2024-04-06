//Optional chaining ? is a relatively new operator that was introduced in ES2020.
 //It allows you to call object properties safely, without throwing an error. 
 //When calling properties without this operator, you many crash your applcation with the error Cannot read property 'foo' of undefined.

 const obj  = undefined

 obj?.hello // Cannot read property 'hello' of undefined
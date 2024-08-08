const userId=12345
let userEmail="anishkumarpandey123@gmail.com";
var userPassword="12345";
city="Patna";
// userId=5 not allowed changes in constant.
userEmail="manish123@gmail.com";
userPassword="08511";
city="Ranchi";
console.table([userId,userEmail,userPassword,city]);
/*
 Not use var because of issue in block scope and functional scope.
    variables:
    1.const
    2.let
    3.var->not recommended to use.
*/ 
let state;
console.log(state);

// number=20
// console.log(number)
// function message(){
//     console.log('message')
// }
// setTimeout(message,3000)
// console.log("new")


//callback function
//------------------------------------------------------------------------------------
// function info (title,price,cb){
//     const result=title+" "+price
//     cb(result)
// }
// info("book",123,function(res){
//     console.log(res)
// })



//--------------------------------------------------------------------------------------
function sayGoodbye() {
  console.log('Goodbye!');
}
function greet(name, callback) {
  console.log('Hello,' + name);
  callback(); // The callback is executed right after the log
}

greet('Alice', sayGoodbye);
greet('rahman',sayGoodbye)
//---------------------------------------------------------------------------------------
console.log('Start');

setTimeout(function() {
  // This anonymous function is the callback
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End');
// Output:
// Start
// End
// This runs after 2 seconds
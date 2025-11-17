function factorial(number){
    // let result=1
    // for (let i=0;i<number;i++)
    // {
    //     result=result*(number-i)
    // }
    // return result
    // if(number===0){
    //     return 1
    // }
    // return number * factorial(number-1)
    return number ===0 ? 1 :  number * factorial(number-1 )
}
console.log(factorial(3))
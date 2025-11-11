 'use strict';
// console.log("hello")
// let uri = "https://www.google.com"
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);


    // calling x after definition
    // var x = 5;
    // console.log(x, "\n");
    //
    // // calling y after definition
    // let y = 10;
    //  console.log(y, "\n");
    //
    // // calling var z before definition will return undefined
    // console.log(z, "\n");
    // var z = 2;
    //
    // // calling let a before definition will give error
    //  console.log(a);
    // let a = 3;


// const job=10;
// console.log(job)


// var job1="programmer"
// job1="teacher"
// console.log(job1)
//
// const now=2025
// console.log(now-1999)
// console.log(now-1999)
// console.log(2**3)
// const firstname='jones'
// const lastname='schemedtheman'
// console.log(firstname+'    '+lastname)
// let x=15
// x+=10
// x*=4
// x++;
// x--;
// x--;
// x--;
//
//
// console.log(3 + 4 * 5); // 3 + 20
// // Expected output: 23
//
// console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36
//
// let a;
// let b;
//
// console.log((a = b = 5));

// const firstname="jones";
// const job="programmer";
// const birthyear=1999;
// const year=2037;


// const  joans="I m" + firstname +',a'+(year-birthyear)+'years old'+(year-birthyear)+'years'+job+'!'
// console.log(joans)
// const newjonas=`Im ${firstname}, a${year-birthyear} year old ${job}`
// console.log((newjonas))
// console.log('rahman \n abbaspour')
// //Taking decisions

// const age=15;
// const  isoldenough=age>=18
// if(isoldenough){
//     console.log("starting is  car  driving license")
// }else{
//     const yearsleft=18-age
//     console.log(`sarah is too young  wait another ${yearsleft}`)
// }

// birthyear=2011;
// let century;
// if (birthyear>2000){
//     century=20
// }else
// {
//    century=21
// }
// console.log(century);

// const  inputyear='1990'
// console.log(Number(inputyear)+18)
// console.log(inputyear+18)
// console.log(typeof  NaN)
// console.log(Number('jonas'))
// console.log(String(23))
// console.log('I am '+21+'years of ')
// console.log('I am '+23+'yeras old')
// console.log('23'-'10'-3)
// console.log('23'/'2')
// let n='1'+1;
// console.log(n)
// n=n-1
// console.log(n)
// console.log(Boolean(''))
// const age=18
// if (age==='18'){
//     console.log("a")
// }else{
//     console.log("f")
// }

// const favorite=prompt('whats your  favorite number');
// console.log(favorite);

// const h=false
// const b=false
// const i=false
// console.log(h||b||i)
//switch statement
// const day="monday"
// switch(day){
//     case 'monday':
//         console.log('plan course structure');
//         break;
//         case 'tuesday':
//             console.log('go to swiming ')
//             break;
//             default:
//                 console.log('not valid day')
// }
// const me='joans'
// console.log(`I m ${2037-1991} ${me}`)

// const age=23;
// const drink=age>=18 ? 'win':'water'
// console.log(drink)

// //ternary
// const  bill=275
// const tip=bill<=300 && bill > 50 ?bill * 0.5 :bill *0.2
// console.log(`${tip } ${bill}`)
//------------------------------------------------------

// let hasDriverLicense=false;
// const passtest=true;
// if(passtest) hasDriverLicense=true;
// if (hasDriverLicense) console.log('I can  drive :D')

//----------------------------------------------------------
//
//-----------------------------------------------------------
// const num=Number('23')
// console.log(num)

// const ag1=calcag1(1991)
// function calcag1(birthyeah){
//     return 2037-birthyeah
// }

// const calcag2=function(birthyeah){
//     return 2037-birthyeah
// }
// const age2=calcag2(1991);
// console.log(ag1,age2)
//-------------------------------Arrow function------------------------------------------

// const calcag3=birthyear=>2037-birthyear;
// const age3=calcag3(1991)
// console.log(age3)

// const yearsuntilRetirement=(birthyaeh,firstname) =>{
//     const age=2037-birthyaeh
//     const retirement=65-age
//     return `${firstname} retires in ${retirement}`
// }
// console.log(yearsuntilRetirement(1984,'jonas'))

// function cutfruitpieces(fruit){
//    return fruit * 4
// }

//-----------------------------------------------------------------------------------------
// const calcAge=function(birthyeah){
//     return 2037-birthyeah
// }
// const yearsuntilRetirement=function(birthyeah,firstname){
//     const age=calcAge(birthyeah);
//     const retirement=65-age;
//     if(retirement>0){
//         console.log(`${firstname} retires  in ${retirement} years`);

//     }else{
//         return -1
//         console.log(`${firstname} has already `);
        
//     }
// }
// console.log(yearsuntilRetirement(1991,'ali'))
//------------------------------------------------------------------------------------
// const calcAverage=(a,b,c)=>(a+b+c)/3;
// console.log(calcAverage(2,3,3))
// const years=new Array(1999,1984,2008,2020)
// console.log(years[3])
// console.log(years.length)

// const calctip=function(bill){
//     return bill>=50 && bill<=300 ? bill * 0.15 : bill *0.2
// }
// // const calctip=bill=>bill >=50 && bill <=300 ?  bill *0.15 : bill * 0.2;
// const bills=[125,55,44,66,77]
//  const tip=[calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]
//  console.log(bills,tip)
//  const jonas={
//     firstname:'jonas',lastname:'schemadethon',age:2037-1991,job:'teacher',friends:['michael','peter','steven']

//     ,hasdriverlicence:true,
//     calcAge:function(birthyaeh){
       
//         return 2037-this.age
//     },
//     getsummary:function(){
//         return `${this.firstname} ${this.calcAge()} -year old ${jonas.job} ${this.hasdriverlicence ? 'a':'no'} drivers license`
//     }


//  };

// console.log(jonas.calcAge())
// console.log(jonas.getsummary())

// const mark={

//     fullname:'Mark miller',
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi=this.mass/this.height**2;
//         return this.bmi
//     }
// }
const john={
    fullname:'john smith',
    mass:92,
    height:1.95
};
const j=[
    'jonaes',
    'schemedient'
]

// mark.calcBMI();
// console.log(mark.bmi)
// john.calcBMI()

// for (let rep=1;rep<=10;rep++){
//      console.log(`sdsds ${rep}`)

// }
  
// for (let i=0;i<j.length;i++){
//     console.log(j[i],typeof j[i])
// }

 // let str = "";
 //
 // for (let i = 0; i < 9; i++) {
 //     str += i;
 // }
 //
 // console.log(str);
//  let rep=1;
//  while (rep<=40){
//      console.log(`${rep}`)
//      rep ++
//  }
//  let dic=Math.trunc(Math.random()*6)+1
//  console.log(dic)
//  //----------------------------------------------------------------
//  const measurekelvin=function(){
//     const measurement={
//         type:'temp',
//         unit:'celsius',
//         value:prompt('degree celecius')

//     };
//     console.log(measurement.value)
//     console.warn(measurement.value)
//     console.error(measurement.value)
//  }
// debugger;
// //-------------------------------------------------------------------
// document.querySelector('.check').addEventListener('click',function(){console.log(document.querySelector('.guess').value)})

// const number=Math.trunc(Math.random()*20)+1
// document.querySelector('.check').addEventListener('click',function(){const guess=Number(document.querySelector('.guess').value);
// console.log(guess,typeof guess)
//
// });
// const ps=document.querySelector('p')
//  ps.forEach(function (item){
//      item.remove()
//  })

 // const cartitem=[1,2,3,4,5]
 // console.log(cartitem)
 // cartitem.splice(0,2)
 // console.log(cartitem)

 const number=Math.random()
 document.querySelector('.check').addEventListener('click',function (){
     const guess=Number
 })


// let firtsPromise = new Promise((resolve, reject) => {
//   let number = 10;
//   number > 10 ? resolve("yes") : reject("no");
// });

// firtsPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// function asFunction(number) {
//   return new Promise((resolve, reject) => {
//     number > 10  ? resolve("yes") : reject("no");
//   });
// };

// asFunction(15).then((res) => {console.log(res);})
// .catch((rej) => {console.log(rej);})



// function secondPromise (number) {
//     return new Promise ((resolve , reject)=>{
//     let random = Math.round(Math.random()*11);
//     console.log(random);
//     random == number && 1<=number<=10 ? resolve (`${number} nice work`)  : reject ("you lost try again") ;
//     })
// }
// let input = document.getElementById("input")
// let btn = document.getElementById("btn");

// let counter = 0 ;
// btn.onclick = () => {
// secondPromise(input.value).then((res)=>{document.getElementById("firtsDiv").innerText = `${res}`})
// .catch((rej) => {document.getElementById("firtsDiv").innerText = `${rej}`})
// .finally (()=>{console.log(`counter : ${counter++}`);})
// };




// async function asyncFunction () {
//   try {
//   return await secondPromise ();
//   }
//   catch (error) {
//   return error ;
//   }
// };

// asyncFunction().then((res) => {console.log(res);})
// .catch((rej) => {console.log(rej);})


// exe.1
// function checkIfSame (name) {
//   return new Promise ((resolve , reject) => {
//     name == "shimon" ? resolve ("same name") : reject ("diffrent same")
//   })
// };

// async function getAnswer () {
//   try {
//     return await checkIfSame ("shimon")
//   }
//   catch (mistake) {
//     return mistake ;
//   }
// };
// getAnswer()
// .then((res) => {console.log(res);})
// .catch ((rej) => {console.log(rej);})


// exe.2
// function checkTwoNumbers (num1 , num2) {
//   return new Promise ((resolve , reject) => {
//     num1 == num2 ? resolve ("same numbers") : reject ("not same")
//   })
// };


// async function getNumbersAnswer () {
//   try {
//     return await checkTwoNumbers (1 , 11)
//   }
//   catch (err) {
//    return err ;
//   }
// }
// getNumbersAnswer()
// .then((res) => {console.log(res);})
// .catch((rej) => {console.log(rej);})


// exe.3
// function showLoading () {
//   mainDiv.innerHTML = `<img id="img" src="./loading-icegif-1.gif">`
// };

// function clearLoading () {
// mainDiv.style.display = "none" ;
// }

// function checkStrLength (str) {
//   return new Promise ((resolve , reject) => {
//     setTimeout(() => {
//       str.length > 6 ? resolve ("longer than 6") : reject ("shorter than 6") 
//     } ,4000)
//   })
// };

// async function CheckStr () {
//   try {
//     showLoading () ;
//     return await checkStrLength ("shjkjkimon");
//   }
//   catch (err) {
//   return err ;
//   }
// }

// CheckStr()
// .then( (res) => {answer.innerHTML+=res})
// .catch((rej) => {answer.innerHTML+=rej})
// .finally (() => {clearLoading()});


// exe.4
// class Dog {
//   Name ;
//   Age ;
//   Type ;
//   constructor (name , age , type){
//     this.Name = name ;
//     this.Age = age ;
//     this.Type = type ;
//   }
// };

// function checkOldestDog (dogsArray) {
// return new Promise ((resolve , reject) => {
//   setTimeout(() => {
//     let max = dogsArray [0] ;
//     for (let Dog of dogsArray ) {
//     Dog.Age > max.Age ? max = Dog : "" ;
//     }
//     console.log(max);
//      max.Age < 100 ? resolve (`${max.Name} ${max.Age} ${max.Type}`) : reject (" Your Oldest dog Age is less than 10") 
//   },5000)
// })
// };

// let dog1 = new Dog ("jeff" , 1 , "boldog");
// let dog2 = new Dog ("chris" , 2 , "pincher");
// let dog3 = new Dog ("jack" , 3 , "amstaf");

// function dogLoading () {
// dogDiv.innerHTML = `<img id="img" src="./dogload.gif">`
// img.style.width = "500px" ;
// img.style.heigth = "500px" ;
// }

// function clearDogLoading () {
// dogDiv.style.display = "none" ;
// }

// async function getOlderDog () {
//   try {
//     dogLoading ();
//     return await checkOldestDog ([dog1 , dog2 , dog3])
//   }
//   catch(error){
//   return error 
//   }
// }
// getOlderDog()
// .then((res) => {dogans.innerHTML +=res})
// .catch((rej) => {dogans.innerHTML+=rej;})
// .finally (() => {clearDogLoading()});


// exe.3 - 2.0
// let dog4 = new Dog ("ros" , 7 , "boldog");
// let dog5 = new Dog ("chester" , 9 , "amstaf");
// let dog6 = new Dog ("navy" , 4 , "pincher");

// function findtOldestDogAgain (secondDogsArray) {
//   return new Promise ((resolve , reject) => {
//     setTimeout(() => {
//       let oldestDog = secondDogsArray[0];
//       secondDogsArray.forEach((dog) => {
//       if(dog.Age > oldestDog.Age)oldestDog = dog ;
//       });
//       console.log(oldestDog);
//       oldestDog.Age > 10 ? resolve (`${oldestDog.Name} ${oldestDog.Age} ${oldestDog.Type}`) : reject (" Your oldest Dog Age is less than 10") ;
//     },5000);
//   });
// };

// function secondDogLoading () {
//  secondDog.innerHTML = `<img id="dogrun" src="./secondDog.gif">`
//  dogrun.style.width = "300px" ;
//  dogrun.style.heigth = "300px" ;
// };

// function clearSecondLoading () {
//  secondDog.style.display = "none";
// };

// async function getOldestDogAgain () {
// try {
//    secondDogLoading () ;
//   return await findtOldestDogAgain ([dog4 , dog5 , dog6]);
// }
// catch (err) {
//   return err 
// }
// };

// getOldestDogAgain()
// .then((res) => {secondAnswer.innerText += res})
// .catch((rej) => {secondAnswer.innerText += rej})
// .finally(() => {clearSecondLoading()});


// exe.3
// let child = new Map ();
// child.set("oshri" , 24);
// child.set("eli" , 24);
// child.set("amir" , 58);
// child.set("yakov" , 23);
// child.set("yonatan" , 26);
// child.set("avi" , 26);
// child.set("shai" , 22);
// child.set("shimon" , 22);
// console.log(child.get("shimon"));

// for (let age of child.values()){
//   console.log(age);
// }

// for (let name of child.keys()){
//   console.log(name);
// }

// for (let name of child.keys()){
//  if(name.length > 4)console.log(name);
// }


// let Appartment = new Map () ;
// Appartment.set(1,4);
// Appartment.set(2,5);
// Appartment.set(3,6);
// Appartment.set(4,7);

// function appartmentPromise (array) {
//   return new Promise ((resolve , reject) => { 
//     setTimeout (() => {
//       let max = 0
//       for (let app of array.keys()){
//       Appartment.get(app) > max ? max = app : ""
//       }
//       return max ? resolve (max) : reject ("not")
//     } , 3000)
//   })
// }

// function showGif () {
//  appDiv.innerHTML = `<img src="https://media4.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif">`
// }

// function clearGiff () {
//  appDiv.style.display = "none";
// }

// async function printAppartment () {
//   try {
//     showGif () ;
//     return await appartmentPromise (Appartment);
//   }
//    catch (error) {
//    return error ;
//   }
// }
// printAppartment()
// .then((res) => {mesg.innerHTML = res})
// .catch((rej) => {mesg.innerHTML = rej})
// .finally(() => {clearGiff()})

// for (let item of Appartment.keys()){
//   keyRow.innerHTML +=`<td>Peopele at Appartment ${item}</td>`
//   valueRow.innerHTML +=`<td>${Appartment.get(item)}</td>`
// }
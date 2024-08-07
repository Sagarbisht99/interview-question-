// q1 array reverse // 


// let arr = [1,2,3,4,5];

// for(let i= arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }


// let str = "sagar is the programmer as well as trader";

// let saved = str.split(" ").map((word) => {
//      return word.split("").reverse().join("")
// })

// console.log(saved.join(" "));



// function checkArray(type){
//      return  Array.isArray(type)
// }
//   console.log(checkArray([])); 
//   console.log(checkArray({})); 




 
// function isInteger(num){
//     return num%1 == 0? true : false;
// }
 
// console.log(isInteger(6));  
  






// let arr = [1,2,3,4,5];

// console.log(arr.concat(arr));

// number reverse// 



// function stringpalchecker(str){
 

//    if(  str === str.split("").reverse().join("")){
//     return "it is pal string"
//    }
//    else{
//     return "it is not pal String"
//    }

// }
// let result = stringpalchecker("coop")

// console.log(result);

 

// function stringAlphabetic(word){
//     return  word.split("").sort();
// }
// let result = stringAlphabetic("sagar");
// console.log(result.join(""));




// function capitilization(str){
//   let allwors = str.split(" ").map((word) => {
//        return word.charAt(0).toUpperCase() + word.substring(1)
//     })

//     return allwors.join(" ");
// }
// let result = capitilization("sagar bhai kaisa ho");

// console.log(result);



// function numberOfLetter(str){
//     let occurance = {};
//     str.split("").forEach((elem) => {
//           if(occurance.hasOwnProperty(elem) === false){
//                     occurance[elem]= 1;
//           }
//           else{
//             occurance[elem]++;
//           }
//     })
//     return occurance;
// }

// let result = numberOfLetter("apple")
// console.log(result);


// function countVowels(str){
//    let vowels = {a:0 ,e:0 ,i:0 ,o:0 ,u:0 }
//    str.split("").forEach((char) => {
//        if(vowels.hasOwnProperty(char) === true){
//              vowels[char]++;
//        }
//    })
//    return vowels;
// }

// let result = countVowels("apple");
// console.log(result);


// function sumNum(arr){
//     let sum =0;
//     for(let i=0; i<arr.length; i++){
//           sum += arr[i]; 
//       }
//       return sum;
// }
// let result = sumNum([1,2,3,4,5,6,7,8,9]);
// console.log(result);


// function addNumberOnly(arr){
//     let sum = 0;
//      arr.forEach((elem) => {
//         if(typeof(elem) === "number"){
//             sum+= elem;
//         }
//      })
//      return sum;
// }
// let result = addNumberOnly([1, "sagar" , 2,3,"muscles" , "protien shake" , 4, 5])
// console.log(result);



// let arr= [
//     {name:"sagar" , gender:"male"} , 
//     {name:"sapna" , gender:"female"} , 
//     {name:"abcd" , gender:"unsupported"} , 
//     {name:"sumita" , gender:"female"} 
// ];

// let count=0;

// arr.forEach((elem) => {
//      if(elem.gender !== "male"){
//         count++;
//      }
// })
// for(let i=1; i<=count; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j].gender !== "male"){
//                arr.splice(j, 1);
//         }
//   }
// }

// console.log(arr);


// function clone(arr){
//      return [...arr]
// }
// let save = clone([1,2,3,4]);
// console.log(save);


// function clone(arr){
//     let newArr = [];
//      arr.forEach((e) => {
//            newArr.push(e);
//      })
//      return newArr;
//     }
    
//     let abcd = [1,2,3,4]

//     newArr = clone(abcd)
//    newArr.splice(3,1)


// function clone(arr){
//     let newArr = [];
//     arr.forEach((e) => {
//         newArr.push(e);
//     })
//     return newArr
// }
//  newArr = clone([1,2,3,4])   


// function typeteller(elem){
//    return typeof(elem);
// }

// console.log(typeteller([]));
// console.log(typeteller(12));
// console.log(typeteller("sagar"));
// console.log(typeteller(false));
// console.log(typeteller());
// console.log(typeteller(() => {

// }));



// function reetrive(arr, n=1){
//     if(n<=arr.length){

//     for(var i=0; i<n; i++){

//        console.log(arr[arr.length-1-i]);

//              }
//     }
//     else{
//         console.log("it is more than array length");
//     }
    
// }
//  reetrive([1,2,3,4,5] , 5)



// function reterive(arr , n=1){
//     if(n<=arr.length){
//         for(let i=0; i<n; i++){
//             console.log(arr[i]);    
//      }
//     }
//     else{
//         console.log("it ne toh element hi nhi hai");
//     }
   
// }

// reterive([1,2,3,4,5] , 12)




// function frequent(arr){
//     let freq = {};
//   arr.forEach((elem) => {
//         if(freq.hasOwnProperty(elem) === false){
//                  freq[elem] = 1;
//         }  
//         else {
//             freq[elem]++;
//         }
// })
//  console.log(Object.keys(freq).reduce((prev , curr) => {
//        return freq[prev]>freq[curr] ? prev : num;
//  }));

// }

// frequent([1,2,3,,2,5,90,,1,2,7,55,2]);


// function frequent(arr){
//        let freq = {};
//    arr.forEach((elem) => {
//     if (freq.hasOwnProperty(elem) === false)
//         {
//             freq[elem] = 1;
//         }
//         else{
//             freq[elem]++;
//         }
//     })
    
//    let result =   Object.keys(freq).reduce((prev , curr) => {
//        return freq[prev ]> freq[curr] ? prev : curr;
//     })
//      return result;
   

// }
// let saved = frequent([1,3,4,3,4,2,4,65,4,9,4])
// console.log(saved);



// function union(arr1 , arr2){
//     return [...new Set(arr1.concat(arr2))] 
// }
// let saved = union([1,2,3,4] , [3,1,6,76,9])
// console.log(saved);

// ----------------------------------------------------------------------------------------------


// function countUniqueNum(arr){
//     let obj = {}
//     arr.forEach((num) => {
//               if (obj.hasOwnProperty(num) === false){
//                        obj[num] = 1;
//               }
//               else{
//                     obj[num]++;
//               }
            
//       })
//         return obj;
      
// }

// let result = countUniqueNum([1,1,2,2,3,4,4,5,6,7,8,8])
// console.log(result);

// for(let keys in result){
//       if(result[keys] == 2){
//             console.log(keys);
//       }
// }


// jis keys ki value 2 hai numbers ko print karo ka code 


 
// function countUniqueNum(arr){
//       let obj = {};
//    for(let val of arr){
//         if(obj.hasOwnProperty(val) == false){
//              obj[val]=1;
//         }
//         else{
//              obj[val]++;
//         }
//    }
   
//    let count =0;

//    for(let key in obj ){
//          if(obj[key] == 2){
//              count++;
//          }
//    }
//    return count;
// }

// let result = countUniqueNum([1,1,2,2,3,4,4,5,6,7,8,8])
// console.log(result);



function uniqueNumber(num){
     let obj = {};
    num.forEach((e) => {
       if(obj.hasOwnProperty(e) === false){
            obj[e] = 1;
       }
       else{
           obj[e]++;
       }
    })
    let keysWithValueTwo = Object.keys(obj).filter(key => obj[key] === 2);
    return keysWithValueTwo;
  
}

let result = uniqueNumber([1,1,2,2,3,4,5,5,6,7,8,8]);
console.log(result);








//-------------------------------------------------------------------------------------------------------




 













    

























 







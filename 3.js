function reverseString(str){
    let arr;
    arr=str.split("")
    arr.reverse();
     let newStr;
     newStr=arr.join("")
     console.log(newStr);
     return newStr;
}
reverseString("Hello");
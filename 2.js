let x ='кот'
if (Number (x)){
    console.log ("x-число")
} else {
    if (String (x)){
    console.log ("x-строка")
    }
   else if (Boolean(x)){
    console.log ("x-логический тип")
   }
   else {
    console.log ("тип x не определён")
   }

} 


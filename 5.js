var arr = ['shoes', 'shirts', 'socks', 'sweaters'];
arr.length;
console.log (arr.length)
arr.forEach(function(item, i, arr) {
   console.log( i + ": " + item + " (массив:" + arr + ")" );
  });
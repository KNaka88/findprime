// var array = [];
// var x;
// var z;
//
// var findPrime = function(number){
//
//   for(var n=2; n<number+1; n++){
//     array[n] = n;
//   }
//   alert(array);
//
//
//
//   for(var x=2; x<number; x++){
//     for(var y=2; y<number; y++){
//
//
//       z= array.indexOf(x * y);
//       if(z != -1){
//         array.splice(z, 1);
//       }
//     }
//   }
//
//
//
//   alert("Final" + array);
//
// }
// findPrime(30);
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

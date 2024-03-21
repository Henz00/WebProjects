function counter() {
   let count = 0;
   return function () {
    count++;
    console.log(count);
   };
}

let c = counter();
c();
c();
c();
c();
c();
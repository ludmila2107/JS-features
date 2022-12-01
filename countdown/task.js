let a = new Date();
a = a.getSeconds();

function minus () {
   if(a > 0) {
    a--;
} else {
     return alert("Вы победили в конкурсе!");
}
    console.log(a);
}
minus();
setInterval(minus, 1000);


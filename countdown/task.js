const current = document.querySelector("#timer");

let a = new Date();
a = a.getSeconds();
current.textContent = a;
let b = setInterval(minus, 1000);

function minus () {
   if(a > 0) {
    a--;
    current.textContent = a;
} else {
     alert("Вы победили в конкурсе!");
     clearInterval(b);
}

}

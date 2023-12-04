
let count = 0;

function increment(){
    count = count + 1;
    console.log(count);
    document.getElementById("count-el").innerText = count;
}

function reset(){
    document.getElementById("count-el").innerText = "0";
    count = 0;
}
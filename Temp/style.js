console.log("THis is temp js");
let n=document.createTextNode("this is new node");
let na=document.createTextNode("this is new node");
let e=document.querySelector('#heading').innerHTML;
let m=document.createElement('div');
// m.appendChild(n);
// e.insertBefore(m);
// m.innerHTML=" you";
m.appendChild(n);
m.appendChild(na);
document.body.appendChild(m);
localStorage.setItem("name","amit");
console.log(e);
// let put=document.querySelector("#in").innerText;
// console.log(put);
function newf(){
    let put=document.getElementById("in").value;
console.log(put);
};

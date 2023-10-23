// let username = window.prompt("Enter name");
// console.log(username);
let username;
document.getElementById("button").onclick=function(){
    username=document.getElementById("text").value;
    console.log(username);
    document.getElementById("title").innerHTML="Hello " + username;
}
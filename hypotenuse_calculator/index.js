document.getElementById("button").onclick=function(){
    let a = document.getElementById("base").value;
    let b = document.getElementById("perpendicular").value;
    let hypo;

    hypo=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById("output").innerHTML="The Hypotenuse is "+ hypo;
    
}
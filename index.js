// console.log("Hello worlfd");
//     document.write("af");
//     console.warn("this is dangerous");

// a="da";
// var b=4;
// console.log(a,b);
// let myDate=new Date();
// console.log(myDate.getHours());

// let ele=document.getElementById("click");
// console.log(ele);
// let ele1=document.getElementsByClassName("container");
// console.log(ele1);
// ele1[0].classList.add("bg");


function clicked(){
    console.log("Mouse");
}
// window.onload=function load(){
//     console.log("Loaded");
// }
// FirstC.addEventListener('mouseover',function(){
//     console.log("Click hua");
// })

obj = {name:"harry",length:1,a: {this:"that"} }
jso=JSON.stringify(obj);
console.log(typeof jso);
parsed = JSON.parse(jso);
console.log(parsed);
document.getElementsByTagName
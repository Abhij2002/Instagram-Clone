const div = document.createElement("div");
let element = document.getElementById("post");
let btn = document.getElementById("button");
btn.addEventListener("click",()=>
{
    element.appendChild(div);
    let text = document.createElement("img");
    text.src="Instagram1.png";
    text.style.width="10rem";
    text.style.height="3rem";
    text.style.marginLeft="5rem";
    text.id="insta";
    let br = document.createElement("br");
    let remove = document.createElement("img");
    remove.src="plus.png";
    remove.style.height="2.5rem";
    remove.style.width="2.5rem";
    remove.id="remove";
    remove.style.cursor="pointer"
    element.appendChild(text);
    element.appendChild(remove);
    element.appendChild(br);
})
const btn1 = document.getElementById("remove");
var element1 = document.getElementById("insta");
btn1.addEventListener("click",()=>
{
    element.removeChild(element1);
})
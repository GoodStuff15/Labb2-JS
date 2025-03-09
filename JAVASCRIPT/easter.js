
// EASTER EGG 1


const body = document.querySelector("body");


const testbtn = document.getElementById("easteregg");

testbtn.addEventListener("click", BgChange);



let color = 999999;

function BgChange(event)
{
     color -= Math.ceil(Math.random() * 11111);
    
    body.style.background = "#" + color.toString();



}

// EASTER EGG 2


document.addEventListener("keydown", registerKeys)

let keys = "";

function registerKeys(event)
{
    keys += event.key;

    if(keys === "gustav")
    {
        console.log("GURRA G")
        pop();
        keys = "";
    }
    else if(keys.length > 6)
    {
        keys = "";
    }
}



function pop() {
    console.log("pop");
    const parent = document.querySelector("header");
    const face = document.createElement("div");
    
        face.style.zIndex = "1";     
        face.style.position = "relative"; 
        face.style.left = "1%";
        face.style.marginTop = "10px";
        // face.style.opacity: 0.2;  
        face.style.background = "url(../IMAGES/gus.png";
        face.style.borderRadius = "50%";
        face.style.width = "250px";
        face.style.height = "250px";
        face.id = "modalPop";
        
        parent.insertBefore(face, null);
    
    const close = document.createElement("div");


    close.style.position = "absolute";
    close.style.top = "12%";
    close.style.left = "85%";
    close.style.width = "10%";
    close.style.height = "10%";

    close.innerHTML = `<a class = "modal_close" href="#" id="modalX">X</a>`;

    face.insertBefore(close, null);

}


window.onclick = function(event) {

    const popup = document.getElementById("modalPop");
    const popupX = document.getElementById("modalX");
    if (event.target == popupX) {
      popup.style.display = "none";
    }
  }
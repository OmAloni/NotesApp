const btn= document.querySelector("#btn");
const div= document.querySelector(".edit")
let task=1;

showData();
btn.addEventListener("click",()=>{
    let p= document.createElement("p");
    p.setAttribute("class","box");
    p.innerText=`Task ${task}`;
    p.setAttribute("contenteditable","true");
    let img= document.createElement("img");
    img.src="images/delete.png";
    div.appendChild(p);
    p.appendChild(img);    
    task++;
});


div.addEventListener("click",(e)=>{

    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName==="P"){
        node=document.querySelectorAll(".box");
        node.forEach(element => {
                element.onkeyup= function(){
                    saveData();
                }
        });
    }
});




function saveData(){
    localStorage.setItem("data",div.innerHTML);
}

function showData(){
    div.innerHTML=localStorage.getItem("data");
}





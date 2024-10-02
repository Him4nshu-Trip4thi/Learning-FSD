let ol=document.querySelector("ol");
let inp=document.querySelector("input");
let btn=document.querySelector("button");

btn.addEventListener("click", function(){

    let item=document.createElement("li");
    item.innerText=inp.value;
    ol.appendChild(item);
    console.log(`${inp.value} added to the list.`);
    inp.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    delbtn.addEventListener("click", function () {
        console.log("Item Deleted.");
        ol.removeChild(item);
    });
});


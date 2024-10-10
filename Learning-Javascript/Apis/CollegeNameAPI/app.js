let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    
    let country=document.querySelector("input").value;
    console.log(country);

    let colleges= await getData(country);
    show(colleges);
    // console.log(colleges);
})

async function show(colleges){
    let list=document.querySelector("#list");
    let ul=document.querySelector("ul");
    ul.style.paddingTop="10px";
    ul.style.paddingBottom="10px";
    ul.style.paddingRight="10px";
    list.innerText="";
    for(college of colleges){
        // console.log(college.name);
        let li=document.createElement("li");
        li.innerText=college.name;
        list.appendChild(li);
    }
}

async function getData(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log("Error: " +err);
        return [];

    }
}
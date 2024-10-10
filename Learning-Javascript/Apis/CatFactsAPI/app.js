let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact= await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
})

let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact

    } 
    catch(e){
        console.log("Error: " + e);
        return "No fact found !!";
    }
}
// getFacts();
// console.log("Hello World !"); //prints asynchronously and doesnt wait for the API calls to log...

// fetch(url)
// .then((res)=>{
//     // console.log(res);  returns a Promise...
//     return res.json();
// })
// .then((data1)=>{
//     console.log("Fact 1 : "+data1.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Fact 2 : "+data2.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data3)=>{
//     console.log("Fact 3 : "+data3.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data4)=>{
//     console.log("Fact 4 : "+data4.fact);
//     return fetch(url);
// })
// .catch((err)=>{
//     console.log("Error : "+err);
// })
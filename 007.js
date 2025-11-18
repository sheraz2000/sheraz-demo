// let button = document.querySelector("button");

// button.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//   console.log("color updated");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }

//  let form= document.querySelector("form")
// form.addEventListener("submit ",function(event ){
// console.log("")
// })
// async function getAllData(){
// console.log("one");
// await getData (1);
// console.log("two");
// await getData (2);
// console.log("three");
// await getData (3);
// }


// fetch(url)
// .then((response)=>{
//     console.log(response);

// })
// .catch((error)=>{
//     console.log(error)
// })

let button = document.querySelector("button");

button.addEventListener("click",async()=>{
  let fact  = await getFacts();
  console.log(fact);
  let p= document.querySelector("#result");
//   p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
try{
  let res = await axios.get(url);
  return res.data.fact;
}catch(e){
    console.log("error-",e);
    return "No fact found"; 

}
}

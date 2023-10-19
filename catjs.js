const url = 'https://api.thecatapi.com/v1/images/search?limit=20';
const api_key = "live_TRmuQ9mw4J21t778VVALEpwqJCevmiVd7ABN6u0p2aGanwxzjGWsxfUYY0KM0z5y"

let imging = document.getElementById("cat_image")
let btn = document.querySelector("#new_photo");
let cat_quote = document.querySelector(".cat_words")
let next_fact = document.querySelector("#next_quote")
let data1;
next_fact.addEventListener("click",function(){
  fetch("https://meowfacts.herokuapp.com/")
          .then((response) => response.json())
          .then((data) =>{
            const quote = data.data;
            
            cat_quote.innerHTML = quote;
          
          }  );
})
// fetch("https://meowfacts.herokuapp.com/")
//           .then((response) => response.json())
//           .then((data) =>{
//             const quote = data.data;
            
//             cat_quote.innerHTML = quote;
          
//           }  );

fetch(url,{headers: {
  'x-api-key': api_key
}})
.then((response) => {
return response.json();
})
.then((data) => {
  let counter =1
  imging.src=data[0].url;
  btn.addEventListener("click",function(){
    imging.src=data[counter].url;
    counter++;
  })
 
})



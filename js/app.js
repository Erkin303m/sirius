//Movement Animation to happen
let card2 = document.getElementById("birCard");
let container2 = document.getElementById("birContainer");
//Items
let title = document.querySelector(".title");
let sneaker = document.querySelector(".sneaker img");
let purchase = document.querySelector(".purchase");
let description = document.querySelector(".info h3");
let sizes = document.querySelector(".sizes");

//Moving Animation Event
container2.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container2.addEventListener("mouseenter", (e) => {
  card2.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-15deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container2.addEventListener("mouseleave", (e) => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});



//Movement Animation to happen
let card3 = document.getElementById("ikkiCard");
let container3 = document.getElementById("ikkiContainer");
//Items
let title3 = document.getElementById("ikkiTitle");
let sneaker3 = document.getElementById("mentor");
let purchase3 = document.getElementById("ikkiPurchase");
let description3 = document.getElementById("h3");
let sizes3 = document.getElementById("ikkiSizes");

//Moving Animation Event
container3.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container3.addEventListener("mouseenter", (e) => {
  card3.style.transition = "none";
  //Popout
  title3.style.transform = "translateZ(150px)";
  sneaker3.style.transform = "translateZ(200px) rotateZ(-15deg)";
  description3.style.transform = "translateZ(125px)";
  sizes3.style.transform = "translateZ(100px)";
  purchase3.style.transform = "translateZ(75px)";
});
//Animate Out
container3.addEventListener("mouseleave", (e) => {
  card3.style.transition = "all 0.5s ease";
  card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title3.style.transform = "translateZ(0px)";
  sneaker3.style.transform = "translateZ(0px) rotateZ(0deg)";
  description3.style.transform = "translateZ(0px)";
  sizes3.style.transform = "translateZ(0px)";
  purchase3.style.transform = "translateZ(0px)";
});






//Movement Animation to happen
let card4 = document.getElementById("uchCard");
let container4 = document.getElementById("uchContainer");
//Items
let title4 = document.getElementById("uchTitle");
let sneaker4 = document.getElementById("uchMentor");
let purchase4 = document.getElementById("uchPurchase");
let description4 = document.getElementById("uchh3");
let sizes4 = document.getElementById("uchSizes");

//Moving Animation Event
container4.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container4.addEventListener("mouseenter", (e) => {
  card4.style.transition = "none";
  //Popout
  title4.style.transform = "translateZ(150px)";
  sneaker4.style.transform = "translateZ(200px) rotateZ(-15deg)";
  description4.style.transform = "translateZ(125px)";
  sizes4.style.transform = "translateZ(100px)";
  purchase4.style.transform = "translateZ(75px)";
});
//Animate Out
container4.addEventListener("mouseleave", (e) => {
  card4.style.transition = "all 0.5s ease";
  card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title4.style.transform = "translateZ(0px)";
  sneaker4.style.transform = "translateZ(0px) rotateZ(0deg)";
  description4.style.transform = "translateZ(0px)";
  sizes4.style.transform = "translateZ(0px)";
  purchase4.style.transform = "translateZ(0px)";
});






//Movement Animation to happen
let cardT = document.getElementById("tortCard");
let containerT = document.getElementById("tortContainer");
//Items
let titleT = document.getElementById("tortTitle");
let sneakerT = document.getElementById("tortMentor");
let purchaseT = document.getElementById("tortPurchase");
let descriptionT = document.getElementById("torth3");
let sizesT = document.getElementById("tortSizes");

//Moving Animation Event
containerT.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  cardT.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
containerT.addEventListener("mouseenter", (e) => {
  cardT.style.transition = "none";
  //Popout
  titleT.style.transform = "translateZ(150px)";
  sneakerT.style.transform = "translateZ(200px) rotateZ(-15deg)";
  descriptionT.style.transform = "translateZ(125px)";
  sizesT.style.transform = "translateZ(100px)";
  purchaseT.style.transform = "translateZ(75px)";
});
//Animate Out
containerT.addEventListener("mouseleave", (e) => {
  cardT.style.transition = "all 0.5s ease";
  cardT.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  titleT.style.transform = "translateZ(0px)";
  sneakerT.style.transform = "translateZ(0px) rotateZ(0deg)";
  descriptionT.style.transform = "translateZ(0px)";
  sizesT.style.transform = "translateZ(0px)";
  purchaseT.style.transform = "translateZ(0px)";
});





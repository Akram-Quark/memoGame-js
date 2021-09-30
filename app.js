// invoking DOM elements
const section = document.querySelector("section");
const label = document.querySelector("h1");
//set the dommy data ---------------------------------------------------
const getcards = () => [
  { src: "./img/bear.jpg", id: 1, name: "bear" },
  { src: "./img/bird.jpg", id: 2, name: "bird" },
  { src: "./img/cat.jpg", id: 3, name: "cat" },
  { src: "./img/dog.jpg", id: 4, name: "dog" },
  { src: "./img/eagle.jpg", id: 5, name: "eagle" },
  { src: "./img/koala.jpg", id: 6, name: "koala" },
  { src: "./img/panda.jpg", id: 7, name: "panda" },
  { src: "./img/rabbit.jpg", id: 8, name: "rabbit" },
  { src: "./img/wolf.jpg", id: 9, name: "wolf" },
  { src: "./img/wolf.jpg", id: 10, name: "wolf" },
  { src: "./img/rabbit.jpg", id: 11, name: "rabbit" },
  { src: "./img/panda.jpg", id: 12, name: "panda" },
  { src: "./img/koala.jpg", id: 13, name: "koala" },
  { src: "./img/dog.jpg", id: 14, name: "dog" },
  { src: "./img/eagle.jpg", id: 15, name: "eagle" },
  { src: "./img/bear.jpg", id: 16, name: "bear" },
];
//mixing the dummy data ---------------------------------------------
const mixe = () => {
  data = getcards();
  var mixedData = data.sort(() => Math.random() - 0.5);
  return mixedData;
};
//get the randomized data ----------------------------------------------
let randomCards = mixe();
//check logic -------------------------------------------------
const maches = (ev) => {
  var choice = ev.target;
  choice.classList.add("clicked");
  var flippedCards = document.querySelectorAll(".clicked");
  choice.classList.add("clicked");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      label.innerHTML = "good job nice memo";
      flippedCards.forEach((item) => {
        item.classList.remove("clicked");
        item.style.pointerEvents = "none";
      });
    } else {
      label.innerHTML = "oh no try again";
      flippedCards.forEach((item) => {
        item.classList.remove("clicked");
        setTimeout(() => {
          item.classList.remove("toggleCardBackw");
        }, 1000);
      });
    }
  }
};
//create the HTML elements ---------------------------------------------
randomCards.forEach((el) => {
  let cards = document.createElement("div");
  cards.classList = "card";
  cards.setAttribute("id", el.id);
  cards.setAttribute("name", el.name);
  let front = document.createElement("img");
  front.src = el.src;
  front.classList = "face";
  let back = document.createElement("div");
  back.classList = "cover";
  section.appendChild(cards);
  cards.appendChild(front);
  cards.appendChild(back);
  //click management-------------------------------------------------------
  cards.addEventListener("click", (e) => {
    cards.classList.toggle("toggleCardBackw");
    maches(e);
  });
});

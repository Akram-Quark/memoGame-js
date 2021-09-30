// invoking DOM elements
const section = document.querySelector("section");
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
  cards.addEventListener("click", (e) => {
    cards.classList.toggle("toggleCardBackw");
  });
});

//Database to give heights to the bars.
const data = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

let bars = document.getElementsByClassName("bar");
let graph = document.getElementsByClassName("graph");

//setting the height of the bars
let i = 0;
while (i < 7) {
  bars[i].style.height = `${1.5 * data[i]}%`;
  i++;
}

Array.from(bars).forEach((e) => {
  e.addEventListener("mouseover", () => {
    let div = document.createElement("p");
    div.classList.add("show");
    let text = document.createTextNode(`$${data[e.id - 1]}`);
    div.appendChild(text);
    graph[e.id - 1].appendChild(div);
    div.style.position = 'absolute';
    div.style.top =  `0px`
    
  });
  e.addEventListener("mouseout", () => {
    let rem = document.querySelector(".show");
    rem.remove();
  });
});

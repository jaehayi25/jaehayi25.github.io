const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var titles = ["Jump to 100","Encompass","Conway's Game of Life","Chatbot","Glass Detector","Virus Simulation","Coming Soon","Coming Soon"];
var images = ["images/walljump.png","images/encompass.png","images/gameoflife.png","images/chatbot.png","images/glass.png","images/virus.png"];
var links = ["https://jaehayi.com/JumpTo100/","https://jaehayi.com/Encompass/","https://jaehayi.com/GameOfLife/","https://jaehayi.com/chatbot/","https://github.com/jaehayi25/Glass-Detector","https://jaehayi.com/virus/"];

for (var i = 0; i < titles.length; i++) {
    const cell = document.createElement('a');
    cell.setAttribute('class', 'cell');
    if (i < links.length) cell.href = links[i];
    cell.target = "_blank";

    const h2 = document.createElement('h2');
    h2.textContent = titles[i];

    const thumbnail = document.createElement('img');
    if (i < images.length) thumbnail.src = images[i]; 

    cell.appendChild(h2);
    cell.appendChild(thumbnail);

    container.appendChild(cell); 
}


import sportEventsData from "./data/sportEventsData.json" assert { type: "json" };

import {createTableRow} from './templates.js';

const eventsData = sportEventsData.data;




const eventData = eventsData.map((element) => {
   const tableRow = createTableRow({
    date: element.dateVenue, 
    season: element.season,
    event: element.originCompetitionName,
    homeTeam: element.homeTeam?.officialName ?? "-",
    awayTeam: element.awayTeam.officialName,
    status: element.status,
    
});
  return tableRow;


})

    let tableBody = document.getElementById('tbody');
    tableBody.innerHTML = eventData;
    


// function renderDataInTheTable(events) {
//  let tableBody = document.getElementById('tbody');   
//  events.forEach(event => {
//     let newRow = document.createElement('tr');
//     Object.values(event).forEach((value) => {
//         let cell = document.createElement('td');
//         cell.innerText = value;
//         newRow.appendChild(cell);
//     })
//     tableBody.appendChild(newRow);
//  })
// }
// renderDataInTheTable(eventData);

// console.log(tableBody);
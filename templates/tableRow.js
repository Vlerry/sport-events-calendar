const createEl = (element) => document.createElement(element);


export const createTableRow = ({ season, dateVenue, originCompetitionName, homeTeam, awayTeam, status, index }) => {

    const tr = createEl("tr");
    tr.setAttribute("data-id", index);

    const tdSeason = createEl("td");
    tdSeason.innerText = season;

    const tdDate = createEl("td");
    tdDate.innerText = dateVenue;

    const tdEvent = createEl("td");
    tdEvent.innerText = originCompetitionName;


    const tdTeams = createEl("td");


    const pHomeTeam = createEl("p");
    pHomeTeam.innerText = homeTeam;

    const pAwayTeam = createEl("p");
    pAwayTeam.innerText = awayTeam;

    tdTeams.appendChild(pHomeTeam);
    tdTeams.appendChild(pAwayTeam);

    const tdStatus = createEl("td");
    tdStatus.innerText = status;


    tr.appendChild(tdSeason);
    tr.appendChild(tdDate);
    tr.appendChild(tdEvent);
    tr.appendChild(tdTeams);
    tr.appendChild(tdStatus);

    return tr;

}
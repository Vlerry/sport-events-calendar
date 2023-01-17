import sportEventsData from "../data/sportEventsData.json" assert { type: "json" };
import { createTableRow } from "../templates/tableRow.js";


const eventsData = sportEventsData.data;

export const eventData = eventsData.reduce((acc, element, index) => {
    const tableRow = createTableRow({
        date: element.dateVenue,
        season: element.season,
        event: element.originCompetitionName,
        homeTeam: element.homeTeam?.officialName ?? "-",
        awayTeam: element.awayTeam.officialName,
        status: element.status,
        index

    });
    acc += tableRow;
    return acc;


}, "")




import { createTableRow } from "../templates/tableRow.js";
import { eventState } from "../state.js";


export const tableRowEvents = eventState.map((element, index) => createTableRow({
    date: element.dateVenue,
    season: element.season,
    event: element.originCompetitionName,
    homeTeam: element.homeTeam?.officialName ?? "-",
    awayTeam: element.awayTeam.officialName,
    status: element.status,
    index

}))




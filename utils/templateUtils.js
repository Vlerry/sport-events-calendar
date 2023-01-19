import { createTableRow } from "../templates/tableRow.js";
import { eventState } from "../state.js";


export const tableRowEvents = eventState.map((element, index) => createTableRow({
    dateVenue: element.dateVenue,
    season: element.season,
    originCompetitionName: element.originCompetitionName,
    homeTeam: element.homeTeam?.officialName ?? "-",
    awayTeam: element.awayTeam.officialName,
    status: element.status,
    index

}))




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

export const mapResultFromSubmitToObject = (elements) => {
  return {
    season: elements.season.value,
    status: elements.status.value,
    timeVenueUTC: elements.timeVenueUTC.value,
    dateVenue: elements.dateVenue.value,
    homeTeam: {
      officialName: elements.homeTeamName.value,
      slug: elements.homeTeamSlug.value,
      abbreviation: elements.homeTeamNameAbbreviation.value,
      teamCountryCode: elements.homeTeamCountryCode.value,
    },

    awayTeam: {
      officialName: elements.awayTeamName.value,
      slug: elements.awayTeamSlug.value,
      abbreviation: elements.awayTeamNameAbbreviation.value,
      teamCountryCode: elements.awayTeamCountryCode.value,
    },
    result: {
      homeGoals: elements.homeTeamGoals.value,
      awayGoals: elements.awayTeamGoals.value,
      winner: elements.winner.value,
      yellowCards: elements.yellowCards.value,
      secondYellowCards: elements.secondYellowCards.value,
      directRedCards: elements.directRedCards.value,
    },
    stage: {
      name: elements.stageName.value,
      ordering: elements.stageOrdering.value,
    },

    originCompetitionName: elements.originCompetitionName.value,
  };
};




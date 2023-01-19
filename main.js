import { eventState, addSportEvent } from './state.js';
import { createDetailsModal } from './templates/detailsModal.js';
import { tableRowEvents } from "./utils/templateUtils.js";
import { createTableRow } from './templates/tableRow.js';

const tableBody = document.getElementById('tbody');
const detailsContainer = document.getElementById('details-container');
const content = document.getElementById('content');

tableBody.append(...tableRowEvents);


const onTableBodyClick = (event) => {
    const selectedIndex = event.target.closest('tr[data-id]').getAttribute('data-id');
    const eventModal = createDetailsModal(eventState[selectedIndex]);

    content.innerHTML = eventModal;

    detailsContainer.classList.add("show");

    detailsContainer.querySelector(".back-drop").addEventListener("click", () => {
        detailsContainer.classList.remove("show");
        content.innerHTML = "";
    });

}

tableBody.addEventListener('click', onTableBodyClick);


// Dialog window

const addEventButton = document.getElementById('add-new-event-btn');
const addEventDialog = document.getElementById('add-new-event');


addEventButton.addEventListener('click', () => {
    addEventDialog.showModal();
});

const mapResultFromSubmitToObject = (elements) => {
    return {

        season: elements.season.value,
        status: elements.status.value,
        timeVenueUTC: elements.timeVenueUTC.value,
        dateVenue: elements.dateVenue.value,
        homeTeam: {
            officialName: elements.homeTeamName.value,
            slug: elements.homeTeamSlug.value,
            abbreviation: elements.homeTeamNameAbbreviation.value,
            teamCountryCode: elements.homeTeamCountryCode.value
        },

        awayTeam: {
            officialName: elements.awayTeamName.value,
            slug: elements.awayTeamSlug.value,
            abbreviation: elements.awayTeamNameAbbreviation.value,
            teamCountryCode: elements.awayTeamCountryCode.value
        },
        result: {
            homeGoals: elements.homeTeamGoals.value,
            awayGoals: elements.awayTeamGoals.value,
            winner: elements.winner.value,
            yellowCards: elements.yellowCards.value,
            secondYellowCards: elements.secondYellowCards.value,
            directRedCards: elements.directRedCards.value
        },
        stage: {
            name: elements.stageName.value,
            ordering: elements.stageOrdering.value
        },

        originCompetitionName: elements.originCompetitionName.value
    }
}

const onSubmitNewEvent = (event) => {

    const newSportDataEvent = mapResultFromSubmitToObject(event.target.elements);

    const { season, dateVenue, originCompetitionName, homeTeam, awayTeam, status } = newSportDataEvent;
    const newSportEventTableRow = createTableRow({
        season, dateVenue, originCompetitionName, homeTeam: homeTeam.officialName, awayTeam: awayTeam.officialName, status
    });

    addSportEvent(newSportDataEvent);
}


// TODO reuse createTableRow to contruct new tr




const addEventForm = document.getElementById('add-event-form');
addEventForm.addEventListener("submit", () => {
    onSubmitNewEvent,
        addEventForm.reset()
});

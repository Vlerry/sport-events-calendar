import { eventState } from './state.js';
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



const onSubmitNewEvent = (event) => {
    const { season, date, originCompetitionName, homeTeamName, awayTeamName, status } = event.target.elements
    const newSportEventTableRow = createTableRow({
        season: season.value, date: date.value, event: originCompetitionName.value, homeTeam: homeTeamName.value, awayTeam: awayTeamName.value, status: status.value, index: eventState.length
    });

    tableBody.appendChild(newSportEventTableRow);

}

// TODO reuse createTableRow to contruct new tr




const addEventForm = document.getElementById('add-event-form');
addEventForm.addEventListener("submit", onSubmitNewEvent);

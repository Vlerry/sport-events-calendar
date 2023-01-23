import { eventState, addSportEvent } from "./state.js";
import { createDetailsModal } from "./templates/detailsModal.js";
import {
  tableRowEvents,
  mapResultFromSubmitToObject,
} from "./utils/templateUtils.js";
import { createTableRow } from "./templates/tableRow.js";

const tableBody = document.getElementById("tbody");
const detailsContainer = document.getElementById("details-container");
const content = document.getElementById("content");

const addEventButton = document.getElementById("add-new-event-btn");
const addEventDialog = document.getElementById("add-new-event");

const addEventForm = document.getElementById("add-event-form");

tableBody.append(...tableRowEvents);

const closeModal = () => {
  detailsContainer.classList.remove("show");

};

const onTableBodyClick = (event) => {
  const selectedIndex = event.target
    .closest("tr[data-id]")
    .getAttribute("data-id");
  const eventModal = createDetailsModal(eventState[selectedIndex]);
  content.innerHTML = eventModal;

  detailsContainer.classList.add("show");

  detailsContainer
    .querySelector(".back-drop")
    .addEventListener("click", closeModal);

  detailsContainer
    .querySelector(".close-btn")
    .addEventListener("click", closeModal);
};

tableBody.addEventListener("click", onTableBodyClick);

// Dialog window
addEventButton.addEventListener("click", () => {
  addEventDialog.showModal();

  addEventDialog.querySelector(".close-btn").addEventListener("click", () => {
    addEventDialog.close();
  });
});

addEventForm.addEventListener("submit", onSubmitNewEvent);

function onSubmitNewEvent(event) {
  const newSportDataEvent = mapResultFromSubmitToObject(event.target.elements);

  const {
    season,
    dateVenue,
    originCompetitionName,
    homeTeam,
    awayTeam,
    status,
  } = newSportDataEvent;
  const newSportEventTableRow = createTableRow({
    season,
    dateVenue,
    originCompetitionName,
    homeTeam: homeTeam.officialName,
    awayTeam: awayTeam.officialName,
    status,
    index: eventState.length,
  });

  tableBody.appendChild(newSportEventTableRow);
  addSportEvent(newSportDataEvent);
  addEventForm.reset();
}

import sportEventsData from "./data/sportEventsData.json" assert { type: "json" };
import { createDetailsModal } from './templates/detailsModal.js';
import { eventData } from "./utils/templateUtils.js";
import { getInputValues } from "./templates/newEventDialog.js";

const eventsData = sportEventsData.data;
const tableBody = document.getElementById('tbody');
const detailsContainer = document.getElementById('details-container');
const content = document.getElementById('content');
tableBody.innerHTML = eventData;

const onTableBodyClick = (event) => {
    const selectedIndex = event.target.closest('tr[data-id]').getAttribute('data-id');
    const eventModal = createDetailsModal(eventsData[selectedIndex]);

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
const submitBtn = addEventDialog.querySelector('.submit-btn');

addEventButton.addEventListener('click', () => {
    addEventDialog.showModal();
});

submitBtn.addEventListener('click', getInputValues);

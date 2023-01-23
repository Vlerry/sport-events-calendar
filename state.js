import sportEventsData from "../data/sportEventsData.json" assert { type: "json" };

export const eventState = [...sportEventsData.data];

export const addSportEvent = (sportEvent) => {
    eventState.push(sportEvent)
}

export const getSportEvent = (index) => {
    return eventState[index]
}

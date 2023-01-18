
export function getInputValues(){
   
const table = document.getElementById('tbody');
const row = table.insertRow(-1);
const season = row.insertCell(0); 
const date = row.insertCell(1);
const originCompetitionName = row.insertCell(2);
const teams = row.insertCell(3);
const status = row.insertCell(4);


 season.innerHTML = document.getElementById('season').value;
 date.innerHTML = document.getElementById('date').value;
 originCompetitionName.innerHTML = document.getElementById('origin-competition-name').value;
 teams.innerHTML = document.getElementById('home-team-name').value;
 status.innerHTML = document.getElementById('status').value;


}



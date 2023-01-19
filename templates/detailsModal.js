export const createDetailsModal = ({ originCompetitionName, season, dateVenue, timeVenueUTC, stage, homeTeam, result, awayTeam }) => {
    return `
    <div>
    <h2>${originCompetitionName}</h2>
    <div>
         <span>
            <h4>Season ${season}</h4>
            <h4>Date ${dateVenue}</h4>
            <h4>Time ${timeVenueUTC}</h4>
         </span>
         <span>
            <h4>Stage ${stage.name}</h4>
            <h4>Ordering ${stage.ordering}</h4>
            
         </span>
        
    </div>
    <div>
        <span>
            <h3>Home team</h3>
            <p>${homeTeam?.officialName ?? "-"}  ${homeTeam?.abbreviation ?? "-"}  ${homeTeam?.teamCountryCode ?? "-"}</p>
            
        </span>
        <span>
            <h3>Away team</h3>
            <p>${awayTeam.officialName}  ${awayTeam.abbreviation}  ${awayTeam.teamCountryCode}</p>
         </span>
    
        <span>
            <h3>${result.homeGoals} : ${result.awayGoals}</h3>
            <p>Yellow cards:${result.yellowCards} </p>
            <p>Second yellow cards: ${result.secondYellowCards}</p>
            <p>Direct red cards: ${result.directRedCards}</p>
        </span>
     </div>   
</div>`
}
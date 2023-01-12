
export const createTableRow = ({season, date, event, homeTeam, awayTeam, status }) => {
    return `
    <tr>
    <td>${season}</td>
    <td>${date}</td>
    <td>${event}</td>
    <td>
        <table>
            <tr>
                <td>${homeTeam}</td>
            </tr>
            <tr>
                <td>${awayTeam}</td>
            </tr>
        </table>
    </td>
    <td>${status}</td>
</tr>`
}


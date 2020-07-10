export function fillSearchMenu(teams) {
const selectTeam = document.querySelector('#select-team');
fillTeamSelect(selectTeam, teams);
}

function fillTeamSelect(selectMenu, teams) {
    teams.forEach((team) => {
        const teamOption = document.createElement('option');
        teamOption.innerHTML = team.name;

        selectMenu.appendChild(teamOption);
    })

}
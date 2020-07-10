export function fillPlayerSelect(players) {
    const playerSelect = document.querySelector('#player-select');

    players.forEach((player) => {
        const playerRow = document.createElement('tr');
        createPlayerRow(player, playerRow);

        console.log(playerRow);

        playerSelect.append(playerRow);
    });
};

function createPlayerRow(player, row) {
    const selectionButtonContainer = document.createElement('td');
    selectionButtonContainer.setAttribute('class', 'px-2 py-2');
    const selectionButton = document.createElement('i');
    selectionButton.setAttribute('class', 'fa fa-arrow-circle-right');
    selectionButtonContainer.appendChild(selectionButton);
    row.appendChild(selectionButtonContainer);

    const nameContainer = document.createElement('td');
    nameContainer.setAttribute('class', 'px-4 py-2');
    nameContainer.innerText = player.name;
    row.appendChild(nameContainer);

    const teamContainer = document.createElement('td');
    teamContainer.setAttribute('class', 'px-2 py-2');
    teamContainer.innerText = player.team;
    row.appendChild(teamContainer);

    const positionContainer = document.createElement('td');
    positionContainer.setAttribute('class', 'px-2 py-2');
    let position = '';
    for(let i = 0; i < player.position.length; i++){
        if(player.position.charAt(i) === player.position.charAt(i).toUpperCase() && player.position.charAt(i) !== ' ') {
            position = position + player.position.charAt(i);
        };
    };
    positionContainer.innerText = position;
    positionContainer.classList.add(`${position}`);
    row.appendChild(positionContainer);

    const valueContainer = document.createElement('td');
    valueContainer.setAttribute('class', 'px-2 py-2');
    valueContainer.innerText = `$${player.price}`;
    row.appendChild(valueContainer);

    const foulContainer = document.createElement('td');
    foulContainer.setAttribute('class', 'px-2 py-2');
    foulContainer.innerText = player.foul;
    row.appendChild(foulContainer);

    const pointsContainer = document.createElement('td');
    pointsContainer.setAttribute('class', 'px-2 py-2');
    pointsContainer.innerText = player.points;
    row.appendChild(pointsContainer);

};
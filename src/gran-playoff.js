import {getInfo} from './services/service.js';
import {fillSearchMenu} from './ui/search-menu.js';
import {fillPlayerSelect} from './ui/player-select.js';

export async function initialize() {
    const teams = await getInfo('realteams');
    fillSearchMenu(teams.results);

    const players = await getInfo('players');
    console.log(players.results);
    fillPlayerSelect(players.results);
};


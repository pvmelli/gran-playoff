import {getInfo} from './services/service.js';
import {fillSearchMenu} from './ui/search-menu.js';

export async function initialize() {
    const teams = await getInfo('realteams');
    fillSearchMenu(teams.results);

    //const players = getInfo('players');
    //fillPlayerInformation;
};
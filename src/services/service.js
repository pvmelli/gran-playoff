import {loadInfoFromLocalStorage, saveInfoToLocalStorage} from '../storage/storage.js';
import {loadInfoFromApi} from '../api/api.js';

export async function getInfo(indication) {
    try {
        let information = loadInfoFromLocalStorage(indication);

        return information;

    }catch (e){
        const information = await loadInfoFromApi(indication);

        saveInfoToLocalStorage(indication, information); 

        return information;
    };
};
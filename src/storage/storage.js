export function loadInfoFromLocalStorage(indication) {
    const result = JSON.parse(localStorage.getItem(`${indication}`));

    if(result === null){
        throw new Error('There is no information');
    } else {
        return result;
    };
};

export function saveInfoToLocalStorage (indication, data) {
    localStorage.setItem(`${indication}`, JSON.stringify(data));
};
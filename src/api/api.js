export async function loadInfoFromApi (indication) {
    const response = await fetch (`./src/json/${indication}.json`)
    let data = await response.json();

    return data;
};
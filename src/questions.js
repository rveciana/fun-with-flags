import { data } from "./data";

export const selectFlag = (excluded=[]) => {
    const selectedItemIdx = getItemInt(excluded);
    const wrongItem1Idx = getItemInt([selectedItemIdx]);
    const wrongItem2Idx = getItemInt([selectedItemIdx], wrongItem1Idx);
    const flagCode = data[selectedItemIdx].cca3.toLowerCase();
    return {'image': 'https://restcountries.eu/data/'+flagCode+'.svg', 'options': [data[selectedItemIdx].name.common,
            data[wrongItem1Idx].name.common, data[wrongItem2Idx].name.common]};
};

const getItemInt = (excluded=[]) => {
    let value = getRandomInt(0, data.length - 1);
    while(excluded.includes(value)){
        value = getRandomInt(0, data.length - 1);
    }

    return value;
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
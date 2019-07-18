import { selectFlag } from './questions';
import { data } from "./data";

it('returns proper value', () => {
    console.info(selectFlag());
});

it('Check excluding all', () => {
    let excluded = [];
    for (let i = 0; i < data.length - 1; i ++) {
        excluded.push(i);
    }
    console.info(selectFlag(excluded));
});
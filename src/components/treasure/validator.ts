import { number, object } from "yup";

// https://stackoverflow.com/a/61970731
const isLatitude = (lat: number) => isFinite(lat) && Math.abs(lat) <= 90;
const isLongitude = (long: number) => isFinite(long) && Math.abs(long) <= 180;

const isValidDistance = (dist: number) => [1, 10].includes(dist);
const isValidPrizeValue = (amt: number) => Number.isInteger(amt) && amt >= 10 && amt <= 30;

export const findSchema = object().shape({
    latitude: number().required().test(isLatitude),
    longitude: number().required().test(isLongitude),
    distance: number().required().test(isValidDistance),
    prizeValue: number().optional().test((value) => {
        if (value) {
            return isValidPrizeValue(value)
        }
        return true;
    })
}).noUnknown(true)
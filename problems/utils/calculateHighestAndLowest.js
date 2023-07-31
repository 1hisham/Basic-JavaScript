"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHigestAndLowest = void 0;
function calculateHigestAndLowest(type, claculateItems) {
    let maxValue = 250;
    let minValue = 0;
    let value;
    switch (type) {
        case "highest":
            value = minValue;
            claculateItems.forEach((item) => {
                if (item > value) {
                    value = item;
                }
            });
            return value;
        case "lowest":
            value = maxValue;
            claculateItems.forEach((item) => {
                if (item < value) {
                    value = item;
                }
            });
            return value;
        default:
            console.log("inputError");
            return -1;
    }
}
exports.calculateHigestAndLowest = calculateHigestAndLowest;

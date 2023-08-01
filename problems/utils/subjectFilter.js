"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectFilter = void 0;
function subjectFilter(Items, filterItem, expression) {
    let filterItems = [];
    Object.entries(Items).forEach(([key, value]) => {
        switch (expression) {
            case "averageMark":
                if (value.averageMark === filterItem) {
                    filterItems.push(key);
                    break;
                }
            case "totalMark":
                if (value.totalMark === filterItem) {
                    filterItems.push(key);
                    break;
                }
            case "percentage":
                if (value.totalpercentage === filterItem) {
                    filterItems.push(key);
                    break;
                }
        }
    });
    return filterItems;
}
exports.subjectFilter = subjectFilter;

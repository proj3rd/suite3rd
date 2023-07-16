"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeries = void 0;
/**
 * @param specNumber in a form of `ab.xyz...`
 * @returns Series in a string type, e.g. `ab`
 */
function getSeries(specNumber) {
    const index = specNumber.indexOf(".");
    if (index === -1) {
        return undefined;
    }
    return specNumber.substring(0, index);
}
exports.getSeries = getSeries;
//# sourceMappingURL=number.js.map
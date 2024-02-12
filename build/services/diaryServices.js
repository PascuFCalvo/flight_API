"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWithoutSensitiveInfo = exports.findbyId = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// le pones asercion de tipos para decirle que si le va a llegar un array de DiaryEntry
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findbyId = (id) => {
    const entry = diaries.find((d) => d.id === id);
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findbyId = findbyId;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: Math.max(...diaries.map((d) => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;

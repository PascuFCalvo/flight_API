import { DiaryEntry } from "../types";
import diaryData from "./diaries.json";

//le pones asercion de tipos para decirle que si le va a llegar un array de DiaryEntry
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const addEntry = () => null;

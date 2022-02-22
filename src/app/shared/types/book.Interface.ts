import { ChapterInterface } from "../../chapter/types/chapter.Interface";

export interface BookInterface {
    id: string;
    title: string;
    placeOfWriting: string;
    writingCompleted: string;
    coverPeriod: string;
    author:string;
    chapters: ChapterInterface[];
    biblePart:string;
}
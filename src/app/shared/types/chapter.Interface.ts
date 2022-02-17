import { VerseInterface } from './verse.Interface';

export interface ChapterInterface {
  id: string;
  title: string;
  verses: VerseInterface[];
}

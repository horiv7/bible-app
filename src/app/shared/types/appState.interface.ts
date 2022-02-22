import { TitleStateInterface } from '../modules/header/types/titleState.interface';
import { BiblePartsStateInterface } from './biblePartsState.interface';
import { BookListStateInterface } from './bookListState.interface';
import { BookStateInterface } from './bookState.interface';
import { ChapterStateInterface } from './chapterState.interface';

export interface AppStateInterface {
  bibleParts: BiblePartsStateInterface;
  bookList: BookListStateInterface;
  book: BookStateInterface;
  chapter: ChapterStateInterface;
  title: TitleStateInterface;
}

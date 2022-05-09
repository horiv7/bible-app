import { TitleStateInterface } from '../modules/header/types/titleState.interface';
import { BiblePartsStateInterface } from '../../home/types/biblePartsState.interface';
import { BookListStateInterface } from '../../bookList/types/bookListState.interface';
import { BookStateInterface } from '../../book/types/bookState.interface';

export interface AppStateInterface {
  bibleParts: BiblePartsStateInterface;
  bookList: BookListStateInterface;
  book: BookStateInterface;
  title: TitleStateInterface;
}

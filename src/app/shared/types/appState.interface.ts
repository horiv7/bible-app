 import { BiblePartsStateInterface } from './BiblePartsState.interface';
import { BookListStateInterface } from './BookListState.interface';

export interface AppStateInterface {
  bibleParts: BiblePartsStateInterface;
  bookList: BookListStateInterface;
}

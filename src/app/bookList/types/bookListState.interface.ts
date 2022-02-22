import { BookCardInterface } from 'src/app/bookList/types/bookCard.Interface';

export interface BookListStateInterface {
  data: BookCardInterface[];
  isLoading: boolean;
  error: boolean;
}

import { BookInterface } from './book.Interface';

export interface BookStateInterface {
  data: BookInterface | null;
  isLoading: boolean;
  error: boolean;
}

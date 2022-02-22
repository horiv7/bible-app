import { BookInterface } from '../../shared/types/book.Interface';

export interface BookStateInterface {
  data: BookInterface | null;
  isLoading: boolean;
  error: boolean;
}

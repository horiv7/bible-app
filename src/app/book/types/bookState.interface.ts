import { BookInterface } from '../../shared/types/book.Interface';
import { ChapterInterface } from './chapter.Interface';

export interface BookStateInterface {
  data: BookInterface | null;
  isLoading: boolean;
  error: boolean;
  chapter: ChapterInterface | null;
  bookLength: number | null;
}

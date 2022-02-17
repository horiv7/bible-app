import { ChapterInterface } from './chapter.Interface';

export interface ChapterStateInterface {
  data: ChapterInterface | null;
  isLoading: boolean;
  error: boolean;
}

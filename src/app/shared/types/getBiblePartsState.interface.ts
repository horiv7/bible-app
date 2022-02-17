import { BiblePartInterface } from 'src/app/home/types/biblePart.interface';

export interface GetBiblePartsStateInterface {
  data: BiblePartInterface[];
  error: boolean;
  isLoading: boolean;
}

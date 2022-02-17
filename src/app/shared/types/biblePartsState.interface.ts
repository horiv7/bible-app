import { BiblePartInterface } from 'src/app/home/types/biblePart.interface';

export interface BiblePartsStateInterface {
  data: BiblePartInterface[];
  error: boolean;
  isLoading: boolean;
}

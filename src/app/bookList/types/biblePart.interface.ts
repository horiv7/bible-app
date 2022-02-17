export interface BiblePartInterface {
  id: string;
  title: string;
  description: string;
  img: string;
  biblePart: string;
  ordinal: number;
  booksIds: { bookId: string }[];
}

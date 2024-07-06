import Book from './Book';

class Chapter {
  book: Book;
  number: number;
  verseCount: number;
  metadata: object;

  constructor(book: Book, number: number, verseCount?: number) {
    this.book = book;
    this.number = number;
    this.verseCount = verseCount;
  }
}

export default Chapter;

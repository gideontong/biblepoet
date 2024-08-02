import Book from './Book';

/**
 * A section of a book in the Bible.
 */
class Chapter {
  book: Book;
  number: number;
  verseCount: number;
  metadata: object;

  /**
   * @param book Pointer to the parent book
   * @param number Chapter number
   * @param verseCount Number of verses in the chapter
   */
  constructor(book: Book, number: number, verseCount?: number) {
    this.book = book;
    this.number = number;
    this.verseCount = verseCount;
  }
}

export default Chapter;

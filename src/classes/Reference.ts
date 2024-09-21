import Book from './Book';
import Chapter from './Chapter';
import Verse from './Verse';

/**
 * A contiguous section of the Bible
 */
class Reference {
  book: Book;
  chapter?: Chapter;
  verse?: Verse;
  metadata: object;

  constructor(book: Book, chapter?: Chapter, verse?: Verse) {
    this.book = book;
    this.chapter = chapter;
    this.verse = verse;
  }
}

export default Reference;

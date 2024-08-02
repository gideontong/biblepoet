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
  constructor() {}
}

export default Reference;

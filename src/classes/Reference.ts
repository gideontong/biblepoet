/**
 * Pointer to a related Passage from the Bible
 * @property {object} metadata data about the Reference
 */
import Book from './Book';
import Chapter from './Chapter';
import Verse from './Verse';

class Reference {
  book: Book;
  chapter?: Chapter;
  verse?: Verse;
  metadata: object;
  constructor() {}
}

export default Reference;

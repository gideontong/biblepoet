/**
 * Pointer to a specific part of the Bible. Based on the fields, can be as broad as
 * referring to an entire book (example: Genesis) or as specific as a single verse
 * (example: John 3:16)
 * @property {Book} book which book is being referred to
 * @property {Chapter} [chapter] chapter that is referenced
 * @property {Verse} [verse] verse being referenced
 * @property {object} metadata generic data about the Reference such as version or language
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

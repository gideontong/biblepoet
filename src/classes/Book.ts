/**
 * Represents a book in the Bible
 * @property {string} name name of the Book
 * @property {Map<string, string>} otherNames alternative names for Book
 * @property {number} chapterCount number of chapters in Book
 * @property {Book} prev the previous Book of the Bible
 * @property {Book} next the next Book of the Bible
 * @property {Version} [version] version of Book
 * @property {object} metadata stores generic data about Book, like version or language
 */
import Version from './Version';

class Book {
  name: string;
  // TODO: Only allow valid languages
  otherNames: Map<string, string>;
  chapterCount: number;
  prev: Book;
  next: Book;
  version?: Version;
  metadata: object;
  constructor() { }
}

export default Book;

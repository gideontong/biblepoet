/**
 * Represents a Book in the Bible
 * @property {string} name: name of the Book
 * @property {Map<string, string>} otherNames: alternative names for Book
 * @property {number} chapterCount: number of chapters in Book
 * @property {Book} prev: the previous Book of the Bible
 * @property {Book} next: the next Book of the Bible
 * @property {object} metadata: data on, but not of Book
 */
class Book {
  name: string;
  // TODO: Only allow valid languages
  otherNames: Map<string, string>;
  chapterCount: number;
  prev: Book;
  next: Book;
  metadata: object;
  constructor() { }
}

export default Book;

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

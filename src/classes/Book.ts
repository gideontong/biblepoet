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

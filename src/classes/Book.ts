class Book {
  name: string;
  // TODO: Only allow valid languages
  otherNames: Map<string, string>;
  chapterCount: number;
  prev: Book;
  next: Book;
  metadata: Object;
  constructor() { }
}

export default Book;

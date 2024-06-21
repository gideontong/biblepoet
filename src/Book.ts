// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Book {
  name: string;
  // TODO: Only allow valid languages
  otherNames: Map<string, string>;
  chapterCount: number;
  prev: Book;
  next: Book;
  constructor() { }
}
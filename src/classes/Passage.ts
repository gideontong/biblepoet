// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Book<T> {
  prev: Book<T>;
  next: Book<T>;
  chapterCount: number;
  metadata: T[] [];
  constructor() { }
}

import Chapter from './Chapter';
import Version from './Version';

class Book {
  name: string;
  // TODO: Only allow valid languages
  otherNames: Map<string, string>;
  chapterCount: number;
  chapters: Map<number, Chapter>;
  prev: Book;
  next: Book;
  version?: Version;
  metadata: object;

  constructor(name?: string, chapterCount?: number) {
    this.name = name;
    // TODO: Ensure it is an integer
    this.chapterCount = chapterCount;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addOtherName(language: string, name: string) {
    // TODO: Implement function
  }

  generateChapters(chapters: number) {
    this.chapterCount = chapters;
    for (let i = 1; i <= chapters; i++) {
      const chapter = new Chapter(this, i);
      this.chapters.set(i, chapter);
    }
  }
}

export default Book;

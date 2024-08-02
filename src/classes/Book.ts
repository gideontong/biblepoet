import Chapter from './Chapter';
import Version from './Version';

/**
 * A religious text in the Bible, typically named after its author.
 */
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

  /**
   * Add an alternative name to the book
   * @param language ISO-639 code of name in another language
   * @param name Alternative name
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addOtherName(language: string, name: string) {
    // TODO: Implement function
  }

  /**
   * Automatically generate chapter stubs given the number of chapters,
   * assumes no chapters are skipped.
   * @param chapters Number of chapters
   */
  generateChapters(chapters: number) {
    this.chapterCount = chapters;
    for (let i = 1; i <= chapters; i++) {
      const chapter = new Chapter(this, i);
      this.chapters.set(i, chapter);
    }
  }
}

export default Book;

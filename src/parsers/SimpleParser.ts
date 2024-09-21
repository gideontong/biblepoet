import Book from '../classes/Book';
import Chapter from '../classes/Chapter';
import Reference from '../classes/Reference';
import Verse from '../classes/Verse';
import {
  Acts, Amos, Chronicles_1, Chronicles_2, Colossians, Corinthians_1,
  Corinthians_2, Daniel, Deuteronomy, Ecclesiastes, Ephesians, Esther,
  Exodus, Ezekiel, Ezra, Galatians, Genesis, Habakkuk, Haggai, Hebrews,
  Hosea, Isaiah, James, Jeremiah, Job, Joel, John, John_1, John_2, John_3,
  Jonah, Joshua, Jude, Judges, Kings_1, Kings_2, Lamentations, Leviticus,
  Luke, Malachi, Mark, Matthew, Micah, Nahum, Nehemiah, Numbers, Obadiah,
  Peter_1, Peter_2, Philemon, Philippians, Proverbs, Psalm, Revelation,
  Romans, Ruth, Samuel_1, Samuel_2, SongOfSolomon, Thessalonians_1,
  Thessalonians_2, Timothy_1, Timothy_2, Titus, Zechariah, Zephaniah
} from '../data/books';

interface Mapping {
  [key: string]: Book;
}

const mapping: Mapping = {
  'Genesis': Genesis,
  'Exodus': Exodus,
  'Leviticus': Leviticus,
  'Numbers': Numbers,
  'Deuteronomy': Deuteronomy,
  'Joshua': Joshua,
  'Judges': Judges,
  'Ruth': Ruth,
  '1 Samuel': Samuel_1,
  '2 Samuel': Samuel_2,
  '1 Kings': Kings_1,
  '2 Kings': Kings_2,
  '1 Chronicles': Chronicles_1,
  '2 Chronicles': Chronicles_2,
  'Ezra': Ezra,
  'Nehemiah': Nehemiah,
  'Esther': Esther,
  'Job': Job,
  'Psalm': Psalm,
  'Proverbs': Proverbs,
  'Ecclesiastes': Ecclesiastes,
  'Song of Solomon': SongOfSolomon,
  'Isaiah': Isaiah,
  'Jeremiah': Jeremiah,
  'Lamentations': Lamentations,
  'Ezekiel': Ezekiel,
  'Daniel': Daniel,
  'Hosea': Hosea,
  'Joel': Joel,
  'Amos': Amos,
  'Obadiah': Obadiah,
  'Jonah': Jonah,
  'Micah': Micah,
  'Nahum': Nahum,
  'Habakkuk': Habakkuk,
  'Zephaniah': Zephaniah,
  'Haggai': Haggai,
  'Zechariah': Zechariah,
  'Malachi': Malachi,
  'Matthew': Matthew,
  'Mark': Mark,
  'Luke': Luke,
  'John': John,
  'Acts': Acts,
  'Romans': Romans,
  '1 Corinthians': Corinthians_1,
  '2 Corinthians': Corinthians_2,
  'Galatians': Galatians,
  'Ephesians': Ephesians,
  'Philippians': Philippians,
  'Colossians': Colossians,
  '1 Thessalonians': Thessalonians_1,
  '2 Thessalonians': Thessalonians_2,
  '1 Timothy': Timothy_1,
  '2 Timothy': Timothy_2,
  'Titus': Titus,
  'Philemon': Philemon,
  'Hebrews': Hebrews,
  'James': James,
  '1 Peter': Peter_1,
  '2 Peter': Peter_2,
  '1 John': John_1,
  '2 John': John_2,
  '3 John': John_3,
  'Jude': Jude,
  'Revelation': Revelation
};

/**
 * An easy-to-use, no-configuration parser that does the job
 */
class SimpleParser {
  constructor() { }

  /**
   * @param text Text to parse
   * @returns Single verse
   */
  parse(text: string): Reference | undefined {
    const trimmed = text.trim();
    for (const key in Object.keys(mapping)) {
      if (trimmed.startsWith(key)) {
        const split = trimmed.split(' ')[-1].split(':');
        if (split.length == 2) {
          const chapterNumber = parseInt(split[0]);
          const verseNumber = parseInt(split[1]);
          if (!isNaN(chapterNumber) && !isNaN(verseNumber)) {
            const chapter = new Chapter(mapping[key], chapterNumber);
            const verse = new Verse(verseNumber);
            return new Reference(mapping[key], chapter, verse);
          }
        }
      }
    }
    return null;
  }
}

export default SimpleParser;

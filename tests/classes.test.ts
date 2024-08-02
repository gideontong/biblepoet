import Book from '../src/classes/Book';
import { expect, test } from 'vitest';

test('book of Genesis', () => {
  const book = new Book('Genesis', 2);
  expect(book.name).toBe('Genesis');
  expect(book.chapterCount).toBe(2);
});

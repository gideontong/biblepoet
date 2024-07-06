/**
 * A set of one or more consecutive verses from the Bible
 * @property {object} metadata data about the Passage
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Reference from './Reference';

class Passage {
  passages: [Reference];
  metadata: object;
  constructor() { }
}

export default Passage;

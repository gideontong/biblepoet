/**
 * A set of one or more consecutive verses from the Bible
 * @property {object} metadata data about the Passage such as version or language
 */
import Reference from './Reference';

class Passage {
  passages: [Reference];
  metadata: object;
  constructor() { }
}

export default Passage;

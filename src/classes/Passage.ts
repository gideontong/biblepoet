import Reference from './Reference';

/**
 * Any section of the Bible, it can be non-contiguous
 */
class Passage {
  passages: [Reference];
  metadata: object;
  constructor() { }
}

export default Passage;

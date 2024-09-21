/**
 * A section of a chapter typically made up of a few sentences
 */
class Verse {
  number: number;
  metadata: object;

  constructor(number: number) {
    this.number = number;
  }
}

export default Verse;

interface PatternTest {
  /**
   * Test path
   */
  path: string;

  /**
   * Expected `null` if not match, otherwise expect the parameter list to be similar.
   */
  expected: Record<string, string> | null;
}

interface Pattern {
  /**
   * URLPattern API pattern.
   */
  pattern: string;
  tests: PatternTest[];
}

export type Suite = Pattern[];

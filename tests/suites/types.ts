interface PatternTest {
  path: string;
  expected: Record<string, string | undefined> | null;
}

interface Pattern {
  pattern: string;
  tests: PatternTest[];
}

export type Suite = Pattern[];

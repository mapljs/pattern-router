/**
 * @param path
 * @param startIdx position after (
 * @returns position after )
 */
export const findUnnamedGroupEnd = (path: string, startIdx: number): number => {
  let stack = 1;
  while (true) {
    if (path[startIdx] === ')') {
      if (--stack === 0) return startIdx + 1;
    } else if (path[startIdx] === '(') stack++;

    startIdx++;
  }
};

/**
 * @param path
 * @param startIdx position of : or /:
 */
export const findNamedGroupEnd = (path: string, startIdx: number): number => {
  let groupEndIdx = startIdx + 2;
  blk: while (groupEndIdx < path.length) {
    switch (path[groupEndIdx]) {
      case '/':
        return groupEndIdx;

      case '*':
      case '+':
      case '?':
        return groupEndIdx + 1;

      case '(':
        groupEndIdx = findUnnamedGroupEnd(path, groupEndIdx + 1);
        continue blk;
    }

    groupEndIdx++;
  }

  return groupEndIdx;
};

export const isDynamicPattern = (pat: string): boolean => /[({:*]/.test(pat);
export const isModifier = (modifier: string): boolean =>
  modifier === '?' || modifier === '+' || modifier === '*';

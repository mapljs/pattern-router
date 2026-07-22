export type Evaluate<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

export type InferNamedGroup<Group extends string, OptionalSep extends string> =
  // Optional named params
  Group extends `${infer Name}${OptionalSep}${infer Rest}`
    ? Evaluate<{ [key in Name]: string | undefined } & InferParams<Rest>>
    : Group extends `${infer Name}${'{' | '}' | '+' | '*' | '/' | '.' | '@' | '[' | ']' | '-' | '=' | '%'}${infer Rest}`
      ? Evaluate<{ [key in Name]: string } & InferParams<Rest>>
      : Group extends `${infer Name}:${infer Rest}`
        ? Evaluate<{ [key in Name]: string } & InferNamedGroup<Rest, '?'>>
        : { [key in Group]: string };

export type InferParams<Path extends string> =
  // Clear all capture groups
  Path extends `${infer Prefix}(${string})${infer Suffix}`
    ? InferParams<`${Prefix}${Suffix}`>
    : // Split and mark params in optional group delimiters as optional
      Path extends `${infer Prefix}{${infer Body}}?${infer Suffix}`
      ? Evaluate<InferParams<Prefix> & Partial<InferParams<Body>> & InferParams<Suffix>>
      : // Named params
        Path extends `${string}/:${infer Group}`
        ? InferNamedGroup<Group, '?' | '*'>
        : Path extends `${string}:${infer Group}`
          ? InferNamedGroup<Group, '?'>
          : {};

export const checkEndModifier = (path: string, groupEndIdx: number): number => {
  if (groupEndIdx < path.length)
    switch (path[groupEndIdx]) {
      case '+':
      case '*':
      case '?':
        return groupEndIdx + 1;
    }
  return groupEndIdx;
};

/**
 * @param path
 * @param startIdx position after {
 * @returns position after } or a modifier
 */
export const findGroupDelimEnd = (path: string, startIdx: number): number =>
  checkEndModifier(path, path.indexOf('}', startIdx) + 1);

/**
 * @param path
 * @param startIdx position after (
 * @returns position after )
 */
export const findUnnamedGroupEnd = (path: string, startIdx: number): number => {
  let stack = 1;
  while (true) {
    if (path[startIdx] === ')') {
      if (--stack === 0) return checkEndModifier(path, startIdx + 1);
    } else if (path[startIdx] === '(') stack++;

    startIdx++;
  }
};

/**
 * @param path
 * @param startIdx position of : or /:
 */
export const findNamedGroupEnd = (path: string, startIdx: number, len: number): number => {
  let groupEndIdx = startIdx + 2;
  blk: while (groupEndIdx < len) {
    switch (path[groupEndIdx]) {
      case '*':
      case '+':
      case '?':
        return groupEndIdx + 1;

      case '(':
        groupEndIdx = findUnnamedGroupEnd(path, groupEndIdx + 1);
        continue blk;

      case '{':
      case '}':
      case '/':
      case ':':
      case '.':
      case '@':
      case '[':
      case ']':
      case '-':
      case '=':
      case '%':
        return groupEndIdx;
    }

    groupEndIdx++;
  }

  return groupEndIdx;
};

export const isDynamicPattern = (pat: string): boolean => /[({:*]/.test(pat);
export const validatePattern = (pat: string): URLPattern => new URLPattern({ pathname: pat });
export const isModifier = (modifier: string): boolean =>
  modifier === '?' || modifier === '+' || modifier === '*';

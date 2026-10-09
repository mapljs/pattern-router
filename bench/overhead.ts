import { bench, category } from 'measure-loop';
import run from './run.ts';

const all = category({
  iters: 1 << 12,
  warmupIters: 1 << 8,
  gcOnce: true
});

const PARAMS = new Array(100).fill(0).map(() => (Math.random() > 0.5 ? 'bcab' : 'bbac')),
  params = [(i: number) => PARAMS[i]] as const;

{
  const regexp = /(a)/;

  all.it(
    'regexp caching',
    bench()
      .it('cached', params, (str) => regexp.exec(str))
      .it('uncached', params, (str) => /(a)/.exec(str)),
  );
}

{
  const r1 = /b.a.()$/,
    r2 = /b.a.($)/,
    r3 = /b.a.$()/;

  all.it(
    'regexp end check',
    bench()
      .it('()$', params, (str) => r1.exec(str))
      .it('($)', params, (str) => r2.exec(str))
      .it('$()', params, (str) => r3.exec(str)),
  );
}

{
  const r1 = /^b(?:cab|bac)$/,
    r2 = /^b(?:cab$|bac$)/;

  all.it(
    'regexp start-end check',
    bench()
      .it('^(...)$', params, (str) => r1.exec(str))
      .it('^(...$|...$|...)', params, (str) => r2.exec(str)),
  );
}

export default run(import.meta, all);

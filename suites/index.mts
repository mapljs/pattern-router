import complex_api from './complex-api.mts';
import type { Suite } from './lib.mts';
import simple_api from './simple-api.mts';

const suites: Record<string, Suite> = {
  'simple-api': simple_api,
  'complex-api': complex_api,
};
export default suites;

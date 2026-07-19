import './routers/index.ts';
import suites from './suites.ts';
import run from '../run.ts';

export default run(import.meta, suites);

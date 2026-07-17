export interface LinearMap<K, V> {
  0: K[];
  1: V[];
}

export const linear_map_index = <K>(m: LinearMap<K, any>, k: K): number => m[0].indexOf(k);
export const linear_map_get = <V>(m: LinearMap<any, V>, i: number): V => m[1][i];

export const linear_map_add = <K, V>(m: LinearMap<K, V>, k: K, v: V): void => {
  m[0].push(k);
  m[1].push(v);
};

export const linear_map_set = <K, V>(m: LinearMap<K, V>, k: K, v: V): void => {
  const keys = m[0],
    idx = keys.indexOf(k);
  if (idx === -1) {
    keys.push(k);
    m[1].push(v);
  } else {
    keys[idx] = k;
    m[1][idx] = v;
  }
};

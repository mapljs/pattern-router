[2m
$ runtime: deno 2.9.3 (x64-linux)[22m
[1m# simple api[22m
  [1m## GET /[22m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m12.48ns[39m ± [93m393.08ps[39m
      - p99: [93m46.05ns[39m
      - range: [93m6.18ns[39m - [93m79.9ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m223.77ns[39m ± [93m2.06ns[39m
      - p99: [93m324.2ns[39m
      - range: [93m157.1ns[39m - [93m379.03ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m39.06ns[39m ± [93m626.21ps[39m
      - p99: [93m76.45ns[39m
      - range: [93m20.53ns[39m - [93m110.33ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m628.1ns[39m ± [93m4.24ns[39m
      - p99: [93m955.77ns[39m
      - range: [93m536.9ns[39m - [93m1.22μs[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m41.62ns[39m ± [93m927.92ps[39m
      - p99: [93m135.7ns[39m
      - range: [93m23.8ns[39m - [93m142.29ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m68.87ns[39m ± [93m805.54ps[39m
      - p99: [93m106.06ns[39m
      - range: [93m35.94ns[39m - [93m118.82ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m15.15ns[39m ± [93m739.67ps[39m
      - p99: [93m47.84ns[39m
      - range: [93m5.59ns[39m - [93m88.42ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m281.06ns[39m ± [93m1.8ns[39m
      - p99: [93m384.48ns[39m
      - range: [93m227.96ns[39m - [93m416.21ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m63.65ns[39m ± [93m787.85ps[39m
      - p99: [93m101.67ns[39m
      - range: [93m34.83ns[39m - [93m122.58ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m223.8ns[39m ± [93m1.67ns[39m
      - p99: [93m323.39ns[39m
      - range: [93m159.33ns[39m - [93m337.29ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.21x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.13x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.33x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m5.1x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m5.52x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m17.93x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m17.93x[39m faster than [1m[36mrou3[39m[22m
      - [32m22.52x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m50.32x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /about[22m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m39.44ns[39m ± [93m805.58ps[39m
      - p99: [93m75.82ns[39m
      - range: [93m21.83ns[39m - [93m166.82ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m62.86ns[39m ± [93m885.67ps[39m
      - p99: [93m104.16ns[39m
      - range: [93m34.42ns[39m - [93m109.45ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m693.53ns[39m ± [93m4.58ns[39m
      - p99: [93m999.74ns[39m
      - range: [93m618.73ns[39m - [93m1.29μs[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m114.99ns[39m ± [93m1.3ns[39m
      - p99: [93m153.81ns[39m
      - range: [93m64.37ns[39m - [93m170.53ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m36.66ns[39m ± [93m627.22ps[39m
      - p99: [93m69.75ns[39m
      - range: [93m19.89ns[39m - [93m107.49ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m12.29ns[39m ± [93m279.27ps[39m
      - p99: [93m23.82ns[39m
      - range: [93m6.07ns[39m - [93m49.04ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m297.78ns[39m ± [93m2.55ns[39m
      - p99: [93m435.48ns[39m
      - range: [93m235.92ns[39m - [93m631.67ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m133.21ns[39m ± [93m1.43ns[39m
      - p99: [93m180.38ns[39m
      - range: [93m73.28ns[39m - [93m181.81ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m200.72ns[39m ± [93m1.78ns[39m
      - p99: [93m280.28ns[39m
      - range: [93m134.1ns[39m - [93m303.15ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m18.06ns[39m ± [93m827.77ps[39m
      - p99: [93m50.39ns[39m
      - range: [93m6.79ns[39m - [93m97.61ns[39m
    & [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.47x[39m faster than [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.98x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.21x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m5.11x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m9.36x[39m faster than [1m[36mrou3[39m[22m
      - [32m10.84x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m16.33x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m24.23x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m56.43x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /user/:id[22m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m992.58ns[39m ± [93m3.48ns[39m
      - p99: [93m1.14μs[39m
      - range: [93m934.36ns[39m - [93m1.27μs[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.5μs[39m ± [93m8.25ns[39m
      - p99: [93m1.75μs[39m
      - range: [93m1.37μs[39m - [93m1.81μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m276.61ns[39m ± [93m2.45ns[39m
      - p99: [93m459.79ns[39m
      - range: [93m210.66ns[39m - [93m470.24ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m171.33ns[39m ± [93m1.54ns[39m
      - p99: [93m225.67ns[39m
      - range: [93m115.44ns[39m - [93m268.45ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m2.08μs[39m ± [93m2.25ns[39m
      - p99: [93m2.17μs[39m
      - range: [93m2.03μs[39m - [93m2.2μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m258.2ns[39m ± [93m1.98ns[39m
      - p99: [93m373.19ns[39m
      - range: [93m196.48ns[39m - [93m382.68ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m824.33ns[39m ± [93m2.25ns[39m
      - p99: [93m908.55ns[39m
      - range: [93m779.77ns[39m - [93m914.1ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m266.94ns[39m ± [93m1.66ns[39m
      - p99: [93m341.23ns[39m
      - range: [93m159.66ns[39m - [93m414.21ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m557.18ns[39m ± [93m2.42ns[39m
      - p99: [93m692.43ns[39m
      - range: [93m507.71ns[39m - [93m835.56ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m65.97ns[39m ± [93m823.16ps[39m
      - p99: [93m98.59ns[39m
      - range: [93m33.15ns[39m - [93m111.56ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.6x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.91x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.05x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.19x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m8.45x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m12.5x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m15.05x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m22.77x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m31.56x[39m faster than [1m[36mrou3[39m[22m
  [1m## PUT /user/:id[22m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m68.67ns[39m ± [93m788.33ps[39m
      - p99: [93m94.36ns[39m
      - range: [93m36.07ns[39m - [93m127.46ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m533.36ns[39m ± [93m2.03ns[39m
      - p99: [93m671.79ns[39m
      - range: [93m490.87ns[39m - [93m805.43ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m2.08μs[39m ± [93m2.37ns[39m
      - p99: [93m2.19μs[39m
      - range: [93m2.03μs[39m - [93m2.22μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m272.29ns[39m ± [93m2.15ns[39m
      - p99: [93m420.24ns[39m
      - range: [93m206.15ns[39m - [93m444.33ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.22μs[39m ± [93m7.95ns[39m
      - p99: [93m1.48μs[39m
      - range: [93m1.11μs[39m - [93m1.54μs[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m988.75ns[39m ± [93m2.74ns[39m
      - p99: [93m1.1μs[39m
      - range: [93m937.33ns[39m - [93m1.16μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m157.06ns[39m ± [93m1.59ns[39m
      - p99: [93m241.68ns[39m
      - range: [93m99.25ns[39m - [93m250.87ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m823.46ns[39m ± [93m2.31ns[39m
      - p99: [93m910.95ns[39m
      - range: [93m775.39ns[39m - [93m931.92ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m226.16ns[39m ± [93m1.42ns[39m
      - p99: [93m313.49ns[39m
      - range: [93m165.24ns[39m - [93m336.57ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m267.08ns[39m ± [93m1.72ns[39m
      - p99: [93m345.9ns[39m
      - range: [93m155.94ns[39m - [93m393.33ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.29x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.29x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m3.89x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m3.97x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m7.77x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m11.99x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m14.4x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m17.79x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m30.32x[39m faster than [1m[36mrou3[39m[22m
  [1m## POST /post[22m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m288.4ns[39m ± [93m1.93ns[39m
      - p99: [93m406.38ns[39m
      - range: [93m226.74ns[39m - [93m485.88ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m13.81ns[39m ± [93m438.69ps[39m
      - p99: [93m47.75ns[39m
      - range: [93m6.35ns[39m - [93m51.75ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m88.91ns[39m ± [93m936.59ps[39m
      - p99: [93m130.41ns[39m
      - range: [93m45.7ns[39m - [93m140.43ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m42.1ns[39m ± [93m778.3ps[39m
      - p99: [93m77.51ns[39m
      - range: [93m22.74ns[39m - [93m113.82ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m12.5ns[39m ± [93m568.77ps[39m
      - p99: [93m46.8ns[39m
      - range: [93m5.46ns[39m - [93m103.74ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m334.53ns[39m ± [93m1.93ns[39m
      - p99: [93m446.23ns[39m
      - range: [93m269.25ns[39m - [93m559.27ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m32.69ns[39m ± [93m604.23ps[39m
      - p99: [93m71.65ns[39m
      - range: [93m16.86ns[39m - [93m75.6ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m166.99ns[39m ± [93m1.63ns[39m
      - p99: [93m223.75ns[39m
      - range: [93m106.94ns[39m - [93m227.82ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m127.69ns[39m ± [93m1.63ns[39m
      - p99: [93m187.73ns[39m
      - range: [93m69.92ns[39m - [93m194.92ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m59.52ns[39m ± [93m799.85ps[39m
      - p99: [93m98.91ns[39m
      - range: [93m33.27ns[39m - [93m125.02ns[39m
    & [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.1x[39m faster than [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.61x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.37x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m4.76x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m7.11x[39m faster than [1m[36mrou3[39m[22m
      - [32m10.21x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m13.35x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m23.06x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m26.75x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /post/:id[22m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m277.64ns[39m ± [93m2.24ns[39m
      - p99: [93m426.85ns[39m
      - range: [93m209.79ns[39m - [93m473.98ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m994.69ns[39m ± [93m2.83ns[39m
      - p99: [93m1.1μs[39m
      - range: [93m933.53ns[39m - [93m1.12μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m184.99ns[39m ± [93m2.05ns[39m
      - p99: [93m278.89ns[39m
      - range: [93m119.54ns[39m - [93m295.39ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m335.95ns[39m ± [93m1.49ns[39m
      - p99: [93m421.19ns[39m
      - range: [93m281.69ns[39m - [93m472.81ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m67.32ns[39m ± [93m887.35ps[39m
      - p99: [93m105.01ns[39m
      - range: [93m33.65ns[39m - [93m123.73ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m268.17ns[39m ± [93m2.3ns[39m
      - p99: [93m395.94ns[39m
      - range: [93m154.49ns[39m - [93m470.36ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m2.1μs[39m ± [93m2.09ns[39m
      - p99: [93m2.21μs[39m
      - range: [93m2.06μs[39m - [93m2.29μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m280.71ns[39m ± [93m1.9ns[39m
      - p99: [93m377.64ns[39m
      - range: [93m217.31ns[39m - [93m487.84ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m2.08μs[39m ± [93m8.75ns[39m
      - p99: [93m2.34μs[39m
      - range: [93m1.94μs[39m - [93m2.36μs[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m838.28ns[39m ± [93m2.06ns[39m
      - p99: [93m927.8ns[39m
      - range: [93m791.75ns[39m - [93m940.7ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.75x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.98x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.12x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m4.17x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.99x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m12.45x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m14.78x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m30.84x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m31.23x[39m faster than [1m[36mrou3[39m[22m
  [1m## PUT /post/:id[22m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m270.99ns[39m ± [93m2.51ns[39m
      - p99: [93m416.95ns[39m
      - range: [93m208.02ns[39m - [93m464.23ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m2.12μs[39m ± [93m4.65ns[39m
      - p99: [93m2.23μs[39m
      - range: [93m2.05μs[39m - [93m2.87μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m277.73ns[39m ± [93m2.13ns[39m
      - p99: [93m423.04ns[39m
      - range: [93m215.83ns[39m - [93m485.47ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m597.48ns[39m ± [93m2.93ns[39m
      - p99: [93m708.79ns[39m
      - range: [93m522.13ns[39m - [93m842.09ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m160.55ns[39m ± [93m1.44ns[39m
      - p99: [93m229.05ns[39m
      - range: [93m102.49ns[39m - [93m256.94ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m65.67ns[39m ± [93m960.29ps[39m
      - p99: [93m102.99ns[39m
      - range: [93m32.06ns[39m - [93m109.92ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.22μs[39m ± [93m8.2ns[39m
      - p99: [93m1.5μs[39m
      - range: [93m1.11μs[39m - [93m1.51μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m214.81ns[39m ± [93m1.64ns[39m
      - p99: [93m303.03ns[39m
      - range: [93m158.2ns[39m - [93m312.71ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1μs[39m ± [93m3.24ns[39m
      - p99: [93m1.13μs[39m
      - range: [93m935.53ns[39m - [93m1.15μs[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m836.66ns[39m ± [93m2.4ns[39m
      - p99: [93m931.83ns[39m
      - range: [93m787.64ns[39m - [93m940.47ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.44x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.27x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.13x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.23x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m9.1x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m12.74x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m15.28x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m18.62x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m32.21x[39m faster than [1m[36mrou3[39m[22m
  [1m## GET /post/:id/comments[22m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m530.78ns[39m ± [93m2.75ns[39m
      - p99: [93m711.48ns[39m
      - range: [93m477.26ns[39m - [93m900.6ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m382.52ns[39m ± [93m2.99ns[39m
      - p99: [93m629.48ns[39m
      - range: [93m312.74ns[39m - [93m652.82ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m435.59ns[39m ± [93m1.47ns[39m
      - p99: [93m516.26ns[39m
      - range: [93m380.35ns[39m - [93m571.5ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m2.17μs[39m ± [93m8.06ns[39m
      - p99: [93m2.43μs[39m
      - range: [93m2.05μs[39m - [93m2.47μs[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m502.07ns[39m ± [93m3.48ns[39m
      - p99: [93m731.69ns[39m
      - range: [93m429.42ns[39m - [93m880.79ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m2.33μs[39m ± [93m2.35ns[39m
      - p99: [93m2.43μs[39m
      - range: [93m2.26μs[39m - [93m2.45μs[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m163.2ns[39m ± [93m2.3ns[39m
      - p99: [93m241.38ns[39m
      - range: [93m96.17ns[39m - [93m266.2ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m383.81ns[39m ± [93m2.54ns[39m
      - p99: [93m537.24ns[39m
      - range: [93m318.56ns[39m - [93m685.59ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m244.3ns[39m ± [93m2.45ns[39m
      - p99: [93m382.79ns[39m
      - range: [93m175.73ns[39m - [93m392.48ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.1μs[39m ± [93m3.5ns[39m
      - p99: [93m1.24μs[39m
      - range: [93m1.05μs[39m - [93m1.48μs[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.5x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.34x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m2.35x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.67x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m3.08x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m3.25x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m6.75x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m13.27x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m14.29x[39m faster than [1m[36mrou3[39m[22m
  [1m## POST /post/:id/comment[22m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m2.33μs[39m ± [93m2.28ns[39m
      - p99: [93m2.43μs[39m
      - range: [93m2.27μs[39m - [93m2.45μs[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m3.17μs[39m ± [93m10.76ns[39m
      - p99: [93m3.44μs[39m
      - range: [93m3.02μs[39m - [93m4.79μs[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.09μs[39m ± [93m2.58ns[39m
      - p99: [93m1.18μs[39m
      - range: [93m1.04μs[39m - [93m1.21μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m315.88ns[39m ± [93m2.87ns[39m
      - p99: [93m502.15ns[39m
      - range: [93m244.68ns[39m - [93m512.57ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m171.94ns[39m ± [93m2.04ns[39m
      - p99: [93m233.48ns[39m
      - range: [93m110.32ns[39m - [93m279.32ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m720.69ns[39m ± [93m2.3ns[39m
      - p99: [93m809.22ns[39m
      - range: [93m649.07ns[39m - [93m825.91ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m397.57ns[39m ± [93m3.15ns[39m
      - p99: [93m601.69ns[39m
      - range: [93m328.42ns[39m - [93m703.06ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m504.84ns[39m ± [93m4.72ns[39m
      - p99: [93m869.31ns[39m
      - range: [93m416.3ns[39m - [93m909.82ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m953.51ns[39m ± [93m2.13ns[39m
      - p99: [93m1.05μs[39m
      - range: [93m901.84ns[39m - [93m1.06μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m213.38ns[39m ± [93m1.96ns[39m
      - p99: [93m320.4ns[39m
      - range: [93m150.5ns[39m - [93m338.87ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.24x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.84x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m2.31x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.94x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.19x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m5.55x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m6.35x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m13.55x[39m faster than [1m[36mrou3[39m[22m
      - [32m18.42x[39m faster than [1m[36mhono linear-router[39m[22m

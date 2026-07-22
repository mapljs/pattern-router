[2m
$ runtime: node 26.5.0 (x64-linux)[22m
[1m# simple api[22m
  [1m## GET /[22m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m658.91ns[39m ± [93m849.24ps[39m
      - p99: [93m699.18ns[39m
      - range: [93m646.8ns[39m - [93m834.99ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m13.88ns[39m ± [93m555.36ps[39m
      - p99: [93m48.48ns[39m
      - range: [93m6.16ns[39m - [93m90.53ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m255.05ns[39m ± [93m944.9ps[39m
      - p99: [93m340.85ns[39m
      - range: [93m202.01ns[39m - [93m375.28ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m71.4ns[39m ± [93m973.87ps[39m
      - p99: [93m113.42ns[39m
      - range: [93m35.81ns[39m - [93m171.65ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m250.06ns[39m ± [93m3.7ns[39m
      - p99: [93m344.7ns[39m
      - range: [93m157.65ns[39m - [93m640.27ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m70.28ns[39m ± [93m1.2ns[39m
      - p99: [93m143.62ns[39m
      - range: [93m36.28ns[39m - [93m177.54ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m13.16ns[39m ± [93m537.95ps[39m
      - p99: [93m49.48ns[39m
      - range: [93m5.9ns[39m - [93m94.93ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m258.77ns[39m ± [93m1.2ns[39m
      - p99: [93m322.69ns[39m
      - range: [93m205.77ns[39m - [93m455.22ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m43.8ns[39m ± [93m767.47ps[39m
      - p99: [93m77.26ns[39m
      - range: [93m26.84ns[39m - [93m108.42ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m45.32ns[39m ± [93m461.53ps[39m
      - p99: [93m82.26ns[39m
      - range: [93m23.91ns[39m - [93m105.87ns[39m
    & [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.05x[39m faster than [1m[36m@mapl/router (jit)[39m[22m
      - [32m3.33x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.44x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m5.34x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m5.42x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m19x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m19.38x[39m faster than [1m[36mrou3[39m[22m
      - [32m19.66x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m50.05x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /about[22m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m17.18ns[39m ± [93m594.85ps[39m
      - p99: [93m51.56ns[39m
      - range: [93m6.74ns[39m - [93m54.47ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m69.16ns[39m ± [93m603.68ps[39m
      - p99: [93m106.62ns[39m
      - range: [93m36.17ns[39m - [93m111.83ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m41.91ns[39m ± [93m293ps[39m
      - p99: [93m46.42ns[39m
      - range: [93m22.93ns[39m - [93m76.44ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m39.32ns[39m ± [93m586.86ps[39m
      - p99: [93m73.24ns[39m
      - range: [93m19.25ns[39m - [93m75.82ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m278.17ns[39m ± [93m556.63ps[39m
      - p99: [93m319.03ns[39m
      - range: [93m226.59ns[39m - [93m326.43ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m228.81ns[39m ± [93m777.15ps[39m
      - p99: [93m266.83ns[39m
      - range: [93m174.43ns[39m - [93m315.38ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m114.93ns[39m ± [93m590.52ps[39m
      - p99: [93m147.51ns[39m
      - range: [93m61.23ns[39m - [93m150.66ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m136.38ns[39m ± [93m1.34ns[39m
      - p99: [93m205.64ns[39m
      - range: [93m75.05ns[39m - [93m319.43ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m703.98ns[39m ± [93m3.95ns[39m
      - p99: [93m1.01μs[39m
      - range: [93m644.91ns[39m - [93m1.32μs[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m14.38ns[39m ± [93m394.65ps[39m
      - p99: [93m45.38ns[39m
      - range: [93m6.82ns[39m - [93m47.71ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.19x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.73x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.91x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m4.81x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m7.99x[39m faster than [1m[36mrou3[39m[22m
      - [32m9.48x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m15.91x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m19.34x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m48.95x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /user/:id[22m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m155.21ns[39m ± [93m697.5ps[39m
      - p99: [93m191.15ns[39m
      - range: [93m97.82ns[39m - [93m219.89ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m224.65ns[39m ± [93m568.22ps[39m
      - p99: [93m253.96ns[39m
      - range: [93m171.89ns[39m - [93m278.38ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m71ns[39m ± [93m567.57ps[39m
      - p99: [93m104.12ns[39m
      - range: [93m33.29ns[39m - [93m109.18ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m960.48ns[39m ± [93m2.9ns[39m
      - p99: [93m1.05μs[39m
      - range: [93m883.43ns[39m - [93m1.22μs[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m331.41ns[39m ± [93m698.1ps[39m
      - p99: [93m366.36ns[39m
      - range: [93m285.4ns[39m - [93m449.34ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m1.03μs[39m ± [93m3.52ns[39m
      - p99: [93m1.14μs[39m
      - range: [93m931.81ns[39m - [93m1.21μs[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m270.83ns[39m ± [93m1.95ns[39m
      - p99: [93m437.83ns[39m
      - range: [93m204.62ns[39m - [93m467.38ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m442.24ns[39m ± [93m675.11ps[39m
      - p99: [93m469.58ns[39m
      - range: [93m401.22ns[39m - [93m548.74ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.61μs[39m ± [93m6.5ns[39m
      - p99: [93m1.77μs[39m
      - range: [93m1.42μs[39m - [93m1.79μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m296.77ns[39m ± [93m1.05ns[39m
      - p99: [93m353.19ns[39m
      - range: [93m240.5ns[39m - [93m441.48ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.19x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.16x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.81x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.18x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.67x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m6.23x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m13.53x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m14.5x[39m faster than [1m[36mrou3[39m[22m
      - [32m22.69x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## PUT /user/:id[22m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m68.09ns[39m ± [93m559.58ps[39m
      - p99: [93m84.53ns[39m
      - range: [93m32.44ns[39m - [93m119.16ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.28μs[39m ± [93m6.15ns[39m
      - p99: [93m1.52μs[39m
      - range: [93m1.16μs[39m - [93m1.56μs[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m978.71ns[39m ± [93m2.68ns[39m
      - p99: [93m1.1μs[39m
      - range: [93m932.56ns[39m - [93m1.14μs[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m934.28ns[39m ± [93m4.47ns[39m
      - p99: [93m1.27μs[39m
      - range: [93m886.48ns[39m - [93m1.41μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m155.39ns[39m ± [93m814.9ps[39m
      - p99: [93m197.85ns[39m
      - range: [93m97.75ns[39m - [93m204.07ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m441.5ns[39m ± [93m535.61ps[39m
      - p99: [93m465.72ns[39m
      - range: [93m391.19ns[39m - [93m478.08ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m337.91ns[39m ± [93m756.86ps[39m
      - p99: [93m370.46ns[39m
      - range: [93m293.23ns[39m - [93m484.43ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m224.25ns[39m ± [93m1.08ns[39m
      - p99: [93m274.5ns[39m
      - range: [93m165.6ns[39m - [93m382.61ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m229.66ns[39m ± [93m1.05ns[39m
      - p99: [93m282.51ns[39m
      - range: [93m169.43ns[39m - [93m347.83ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m257.17ns[39m ± [93m1.25ns[39m
      - p99: [93m303.78ns[39m
      - range: [93m170.12ns[39m - [93m322.69ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.28x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.29x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.37x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m3.78x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.96x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m6.48x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m13.72x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m14.37x[39m faster than [1m[36mrou3[39m[22m
      - [32m18.8x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## POST /post[22m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m60.17ns[39m ± [93m735.92ps[39m
      - p99: [93m98.59ns[39m
      - range: [93m29.59ns[39m - [93m115.88ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m362.55ns[39m ± [93m3.23ns[39m
      - p99: [93m608ns[39m
      - range: [93m290.6ns[39m - [93m627.44ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m139.43ns[39m ± [93m1.37ns[39m
      - p99: [93m199.57ns[39m
      - range: [93m71.04ns[39m - [93m202.94ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m83.2ns[39m ± [93m595.33ps[39m
      - p99: [93m111.44ns[39m
      - range: [93m43.06ns[39m - [93m115.9ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m263.72ns[39m ± [93m829.85ps[39m
      - p99: [93m307.82ns[39m
      - range: [93m214.12ns[39m - [93m388.49ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m16.03ns[39m ± [93m821.31ps[39m
      - p99: [93m49.91ns[39m
      - range: [93m5.45ns[39m - [93m93.88ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m172.36ns[39m ± [93m911.01ps[39m
      - p99: [93m214.72ns[39m
      - range: [93m113.47ns[39m - [93m271.42ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m13.32ns[39m ± [93m257.66ps[39m
      - p99: [93m43.1ns[39m
      - range: [93m6.34ns[39m - [93m47.9ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m34.4ns[39m ± [93m611.8ps[39m
      - p99: [93m73.58ns[39m
      - range: [93m16.67ns[39m - [93m105.37ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m40.75ns[39m ± [93m326.37ps[39m
      - p99: [93m71.02ns[39m
      - range: [93m21.1ns[39m - [93m80.58ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.2x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.58x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.06x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m4.52x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m6.25x[39m faster than [1m[36mrou3[39m[22m
      - [32m10.47x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m12.94x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m19.8x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m27.23x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /post/:id[22m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m405.47ns[39m ± [93m668.99ps[39m
      - p99: [93m450.15ns[39m
      - range: [93m350.43ns[39m - [93m454.48ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m925.86ns[39m ± [93m2.69ns[39m
      - p99: [93m1.01μs[39m
      - range: [93m884.2ns[39m - [93m1.1μs[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m259.75ns[39m ± [93m1.06ns[39m
      - p99: [93m298.45ns[39m
      - range: [93m213.32ns[39m - [93m440.15ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m974.75ns[39m ± [93m3.14ns[39m
      - p99: [93m1.1μs[39m
      - range: [93m926.17ns[39m - [93m1.11μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m303.16ns[39m ± [93m2.1ns[39m
      - p99: [93m523.56ns[39m
      - range: [93m242.05ns[39m - [93m544.27ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m73.05ns[39m ± [93m592.84ps[39m
      - p99: [93m104.41ns[39m
      - range: [93m34.65ns[39m - [93m116.33ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m171.43ns[39m ± [93m1.7ns[39m
      - p99: [93m266.12ns[39m
      - range: [93m114.9ns[39m - [93m274.81ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m2.13μs[39m ± [93m5.27ns[39m
      - p99: [93m2.25μs[39m
      - range: [93m2.03μs[39m - [93m2.29μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m238.94ns[39m ± [93m1.55ns[39m
      - p99: [93m385.44ns[39m
      - range: [93m181.94ns[39m - [93m402.11ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m361.62ns[39m ± [93m538.77ps[39m
      - p99: [93m400.02ns[39m
      - range: [93m327.55ns[39m - [93m412.87ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.35x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.27x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.56x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m4.15x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.95x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m5.55x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m12.68x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m13.34x[39m faster than [1m[36mrou3[39m[22m
      - [32m29.16x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## PUT /post/:id[22m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m238.83ns[39m ± [93m2.05ns[39m
      - p99: [93m398.32ns[39m
      - range: [93m172.62ns[39m - [93m409ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m435.7ns[39m ± [93m2.22ns[39m
      - p99: [93m561.66ns[39m
      - range: [93m376.78ns[39m - [93m748ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.28μs[39m ± [93m5.9ns[39m
      - p99: [93m1.52μs[39m
      - range: [93m1.17μs[39m - [93m1.53μs[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m222.39ns[39m ± [93m2.05ns[39m
      - p99: [93m375.98ns[39m
      - range: [93m158.48ns[39m - [93m391.24ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m348.48ns[39m ± [93m873.84ps[39m
      - p99: [93m387.5ns[39m
      - range: [93m299.65ns[39m - [93m485.49ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m152.34ns[39m ± [93m865.37ps[39m
      - p99: [93m206.67ns[39m
      - range: [93m96.21ns[39m - [93m242.31ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m66.39ns[39m ± [93m565.28ps[39m
      - p99: [93m98.9ns[39m
      - range: [93m31.93ns[39m - [93m105.81ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m984.11ns[39m ± [93m3.63ns[39m
      - p99: [93m1.1μs[39m
      - range: [93m914.32ns[39m - [93m1.11μs[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m264.25ns[39m ± [93m989.85ps[39m
      - p99: [93m314.86ns[39m
      - range: [93m205.82ns[39m - [93m376.44ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m949ns[39m ± [93m3.06ns[39m
      - p99: [93m1.06μs[39m
      - range: [93m846.69ns[39m - [93m1.07μs[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.29x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m3.35x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m3.6x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m3.98x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m5.25x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m6.56x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m14.29x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m14.82x[39m faster than [1m[36mrou3[39m[22m
      - [32m19.25x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /post/:id/comments[22m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m431.38ns[39m ± [93m887.27ps[39m
      - p99: [93m481.73ns[39m
      - range: [93m373.96ns[39m - [93m525.49ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m462.86ns[39m ± [93m2.52ns[39m
      - p99: [93m618.62ns[39m
      - range: [93m408.62ns[39m - [93m855.48ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m504.89ns[39m ± [93m1.38ns[39m
      - p99: [93m525.93ns[39m
      - range: [93m474.06ns[39m - [93m836.17ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m401.03ns[39m ± [93m2.19ns[39m
      - p99: [93m515.65ns[39m
      - range: [93m329.34ns[39m - [93m690.63ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m2.21μs[39m ± [93m5.94ns[39m
      - p99: [93m2.47μs[39m
      - range: [93m2.12μs[39m - [93m2.58μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m244.55ns[39m ± [93m1.15ns[39m
      - p99: [93m342.08ns[39m
      - range: [93m179.44ns[39m - [93m350.56ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m1.18μs[39m ± [93m3.37ns[39m
      - p99: [93m1.29μs[39m
      - range: [93m1.11μs[39m - [93m1.41μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m336.66ns[39m ± [93m1.66ns[39m
      - p99: [93m450.07ns[39m
      - range: [93m272.69ns[39m - [93m570.03ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m178.93ns[39m ± [93m632.88ps[39m
      - p99: [93m198.74ns[39m
      - range: [93m109.15ns[39m - [93m219.04ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.05μs[39m ± [93m2.34ns[39m
      - p99: [93m1.17μs[39m
      - range: [93m1.02μs[39m - [93m1.18μs[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.37x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.88x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.24x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m2.41x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m2.59x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m2.82x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m5.87x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m6.58x[39m faster than [1m[36mrou3[39m[22m
      - [32m12.38x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## POST /post/:id/comment[22m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.09μs[39m ± [93m2.86ns[39m
      - p99: [93m1.18μs[39m
      - range: [93m1.02μs[39m - [93m1.2μs[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m401.88ns[39m ± [93m1.82ns[39m
      - p99: [93m450.95ns[39m
      - range: [93m341.75ns[39m - [93m784.21ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m204.89ns[39m ± [93m1.43ns[39m
      - p99: [93m292.61ns[39m
      - range: [93m133.05ns[39m - [93m295.79ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m502.1ns[39m ± [93m3.19ns[39m
      - p99: [93m659.28ns[39m
      - range: [93m429.95ns[39m - [93m920.81ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m319.54ns[39m ± [93m783.49ps[39m
      - p99: [93m358.94ns[39m
      - range: [93m256.59ns[39m - [93m395.12ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m337.43ns[39m ± [93m1.44ns[39m
      - p99: [93m399.73ns[39m
      - range: [93m276.36ns[39m - [93m593ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m170.94ns[39m ± [93m865.21ps[39m
      - p99: [93m208.88ns[39m
      - range: [93m98.97ns[39m - [93m260.04ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m461.76ns[39m ± [93m2.67ns[39m
      - p99: [93m628.85ns[39m
      - range: [93m387.55ns[39m - [93m866.55ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m1.17μs[39m ± [93m3.27ns[39m
      - p99: [93m1.29μs[39m
      - range: [93m1.11μs[39m - [93m1.3μs[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m3.11μs[39m ± [93m5.44ns[39m
      - p99: [93m3.25μs[39m
      - range: [93m3.02μs[39m - [93m3.74μs[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.2x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.87x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m1.97x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.35x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m2.7x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m2.94x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m6.36x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m6.86x[39m faster than [1m[36mrou3[39m[22m
      - [32m18.21x[39m faster than [1m[36mhono linear-router[39m[22m

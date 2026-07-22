[2m
$ runtime: bun 1.3.14 (x64-linux)[22m
[1m# simple api[22m
  [1m## GET /[22m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m30.6ns[39m ± [93m168ps[39m
      - p99: [93m37.8ns[39m
      - range: [93m29.11ns[39m - [93m47.43ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m709.32ns[39m ± [93m2.08ns[39m
      - p99: [93m771.26ns[39m
      - range: [93m697.04ns[39m - [93m1.15μs[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m98.41ns[39m ± [93m591.4ps[39m
      - p99: [93m117.22ns[39m
      - range: [93m93.54ns[39m - [93m196.76ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m240.61ns[39m ± [93m3.75ns[39m
      - p99: [93m463.07ns[39m
      - range: [93m211.57ns[39m - [93m518.9ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m20.37ns[39m ± [93m374.7ps[39m
      - p99: [93m37.88ns[39m
      - range: [93m17.09ns[39m - [93m45.93ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m48.21ns[39m ± [93m1.23ns[39m
      - p99: [93m150.06ns[39m
      - range: [93m38.71ns[39m - [93m156.43ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m17.94ns[39m ± [93m257.91ps[39m
      - p99: [93m35.35ns[39m
      - range: [93m16.15ns[39m - [93m36.65ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m7.39ns[39m ± [93m107.31ps[39m
      - p99: [93m13.35ns[39m
      - range: [93m6.77ns[39m - [93m13.73ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m167.95ns[39m ± [93m2.71ns[39m
      - p99: [93m413.75ns[39m
      - range: [93m155.3ns[39m - [93m493.6ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m7.58ns[39m ± [93m80.98ps[39m
      - p99: [93m13.79ns[39m
      - range: [93m7.14ns[39m - [93m14.28ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.03x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.43x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.76x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m4.14x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m6.53x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m13.32x[39m faster than [1m[36mrou3[39m[22m
      - [32m22.74x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m32.58x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m96.04x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /about[22m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m224.87ns[39m ± [93m1.3ns[39m
      - p99: [93m318.82ns[39m
      - range: [93m214.58ns[39m - [93m370.9ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m766.8ns[39m ± [93m1.68ns[39m
      - p99: [93m840.41ns[39m
      - range: [93m756.71ns[39m - [93m1.15μs[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m11.87ns[39m ± [93m86.34ps[39m
      - p99: [93m16.68ns[39m
      - range: [93m11.49ns[39m - [93m25.66ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m30.24ns[39m ± [93m124.89ps[39m
      - p99: [93m37.55ns[39m
      - range: [93m29.13ns[39m - [93m40.74ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m172.98ns[39m ± [93m2.99ns[39m
      - p99: [93m415.05ns[39m
      - range: [93m160.04ns[39m - [93m679.5ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m25.5ns[39m ± [93m184.15ps[39m
      - p99: [93m38.44ns[39m
      - range: [93m23.8ns[39m - [93m46.04ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m29.84ns[39m ± [93m429.76ps[39m
      - p99: [93m40.85ns[39m
      - range: [93m28.36ns[39m - [93m129.12ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m44.33ns[39m ± [93m734.97ps[39m
      - p99: [93m91.47ns[39m
      - range: [93m38.83ns[39m - [93m104.75ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m12.33ns[39m ± [93m74.28ps[39m
      - p99: [93m18.25ns[39m
      - range: [93m11.94ns[39m - [93m18.93ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m71.85ns[39m ± [93m801.84ps[39m
      - p99: [93m117.39ns[39m
      - range: [93m67.25ns[39m - [93m194.04ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.04x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.15x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.51x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m2.55x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m3.73x[39m faster than [1m[36mrou3[39m[22m
      - [32m6.05x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m14.57x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m18.94x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m64.59x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /user/:id[22m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m460.45ns[39m ± [93m2.23ns[39m
      - p99: [93m643.43ns[39m
      - range: [93m440.81ns[39m - [93m731.86ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m193.24ns[39m ± [93m1.28ns[39m
      - p99: [93m295.73ns[39m
      - range: [93m180.47ns[39m - [93m317.69ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m183.59ns[39m ± [93m1.33ns[39m
      - p99: [93m288.71ns[39m
      - range: [93m173.71ns[39m - [93m364.18ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m914.81ns[39m ± [93m1.62ns[39m
      - p99: [93m1.01μs[39m
      - range: [93m900.14ns[39m - [93m1.19μs[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m77.45ns[39m ± [93m242.01ps[39m
      - p99: [93m91.81ns[39m
      - range: [93m75.01ns[39m - [93m103.45ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m355.5ns[39m ± [93m1.65ns[39m
      - p99: [93m508.03ns[39m
      - range: [93m345.51ns[39m - [93m535.79ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m320.14ns[39m ± [93m1.78ns[39m
      - p99: [93m411.42ns[39m
      - range: [93m304.43ns[39m - [93m591.62ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m168.3ns[39m ± [93m802.88ps[39m
      - p99: [93m226.69ns[39m
      - range: [93m161.02ns[39m - [93m308.16ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m650.65ns[39m ± [93m3.15ns[39m
      - p99: [93m745.13ns[39m
      - range: [93m632.5ns[39m - [93m1.2μs[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m256.01ns[39m ± [93m1.35ns[39m
      - p99: [93m334.56ns[39m
      - range: [93m247.93ns[39m - [93m447.84ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.17x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.37x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.5x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m3.31x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m4.13x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m4.59x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m5.95x[39m faster than [1m[36mrou3[39m[22m
      - [32m8.4x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m11.81x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## PUT /user/:id[22m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m462.7ns[39m ± [93m2.04ns[39m
      - p99: [93m614.41ns[39m
      - range: [93m446.2ns[39m - [93m674.75ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m623.2ns[39m ± [93m4.03ns[39m
      - p99: [93m968.62ns[39m
      - range: [93m600.07ns[39m - [93m1.04μs[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m249.24ns[39m ± [93m1.36ns[39m
      - p99: [93m363.53ns[39m
      - range: [93m241.17ns[39m - [93m440.02ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m321.77ns[39m ± [93m1.46ns[39m
      - p99: [93m420.16ns[39m
      - range: [93m311.89ns[39m - [93m558.85ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m184.05ns[39m ± [93m1.11ns[39m
      - p99: [93m225.33ns[39m
      - range: [93m172.75ns[39m - [93m378.44ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m282ns[39m ± [93m1.27ns[39m
      - p99: [93m401.98ns[39m
      - range: [93m274.06ns[39m - [93m422.31ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m168.87ns[39m ± [93m1.89ns[39m
      - p99: [93m330.43ns[39m
      - range: [93m157.03ns[39m - [93m419.97ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m649.06ns[39m ± [93m5.22ns[39m
      - p99: [93m1.14μs[39m
      - range: [93m623.48ns[39m - [93m1.24μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m173.01ns[39m ± [93m632.02ps[39m
      - p99: [93m197.08ns[39m
      - range: [93m166.79ns[39m - [93m286.48ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m69.45ns[39m ± [93m358.94ps[39m
      - p99: [93m91.24ns[39m
      - range: [93m66.32ns[39m - [93m137.47ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.43x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.49x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.65x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m3.59x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m4.06x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.63x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m6.66x[39m faster than [1m[36mrou3[39m[22m
      - [32m8.97x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m9.35x[39m faster than [1m[36mhono trie-router[39m[22m
  [1m## POST /post[22m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m68.83ns[39m ± [93m880.19ps[39m
      - p99: [93m122.06ns[39m
      - range: [93m63.73ns[39m - [93m176.4ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m29.56ns[39m ± [93m543.62ps[39m
      - p99: [93m75.51ns[39m
      - range: [93m26.74ns[39m - [93m84.24ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m10.05ns[39m ± [93m132.9ps[39m
      - p99: [93m16.34ns[39m
      - range: [93m9.44ns[39m - [93m28.97ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m157.44ns[39m ± [93m1.06ns[39m
      - p99: [93m231.59ns[39m
      - range: [93m149.87ns[39m - [93m306.01ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m26.64ns[39m ± [93m111.57ps[39m
      - p99: [93m33.04ns[39m
      - range: [93m25.8ns[39m - [93m36.11ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m32.93ns[39m ± [93m303.02ps[39m
      - p99: [93m41.11ns[39m
      - range: [93m31.17ns[39m - [93m98.61ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m9.63ns[39m ± [93m73.96ps[39m
      - p99: [93m16.12ns[39m
      - range: [93m9.36ns[39m - [93m18.3ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m19.68ns[39m ± [93m223.66ps[39m
      - p99: [93m27.1ns[39m
      - range: [93m18.52ns[39m - [93m66.69ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m184.09ns[39m ± [93m2.89ns[39m
      - p99: [93m353.25ns[39m
      - range: [93m166.34ns[39m - [93m489.28ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m344.49ns[39m ± [93m1.98ns[39m
      - p99: [93m526.09ns[39m
      - range: [93m332.81ns[39m - [93m622.96ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.04x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.04x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.77x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m3.07x[39m faster than [1m[36mrou3[39m[22m
      - [32m3.42x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m7.15x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m16.35x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m19.12x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m35.78x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## GET /post/:id[22m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m312.05ns[39m ± [93m1.58ns[39m
      - p99: [93m412.26ns[39m
      - range: [93m296.43ns[39m - [93m508.5ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m158.11ns[39m ± [93m924.57ps[39m
      - p99: [93m223.6ns[39m
      - range: [93m149.89ns[39m - [93m291.46ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m265.52ns[39m ± [93m1.28ns[39m
      - p99: [93m345.3ns[39m
      - range: [93m256.28ns[39m - [93m404.89ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m80.57ns[39m ± [93m262.72ps[39m
      - p99: [93m95.72ns[39m
      - range: [93m77.43ns[39m - [93m101.41ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m350.09ns[39m ± [93m1.59ns[39m
      - p99: [93m505.68ns[39m
      - range: [93m340.07ns[39m - [93m564.01ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m557.51ns[39m ± [93m2.46ns[39m
      - p99: [93m722.78ns[39m
      - range: [93m516.23ns[39m - [93m802.26ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1μs[39m ± [93m5.7ns[39m
      - p99: [93m1.49μs[39m
      - range: [93m972.12ns[39m - [93m1.54μs[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m720.05ns[39m ± [93m6.41ns[39m
      - p99: [93m1.24μs[39m
      - range: [93m682.34ns[39m - [93m1.42μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m178.55ns[39m ± [93m1.05ns[39m
      - p99: [93m249.82ns[39m
      - range: [93m169.24ns[39m - [93m301.5ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m191.63ns[39m ± [93m1.43ns[39m
      - p99: [93m295.02ns[39m
      - range: [93m175.64ns[39m - [93m372.07ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.96x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.22x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.38x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m3.3x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m3.87x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m4.35x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m6.92x[39m faster than [1m[36mrou3[39m[22m
      - [32m8.94x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m12.46x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## PUT /post/:id[22m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m553.6ns[39m ± [93m1.78ns[39m
      - p99: [93m671.42ns[39m
      - range: [93m522.53ns[39m - [93m764.49ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m702.72ns[39m ± [93m2.74ns[39m
      - p99: [93m785.83ns[39m
      - range: [93m686.83ns[39m - [93m1.24μs[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m153.5ns[39m ± [93m728.14ps[39m
      - p99: [93m207.93ns[39m
      - range: [93m146.43ns[39m - [93m267.91ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m252.39ns[39m ± [93m890.84ps[39m
      - p99: [93m321.12ns[39m
      - range: [93m245.19ns[39m - [93m367.5ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m162.06ns[39m ± [93m653.47ps[39m
      - p99: [93m189.17ns[39m
      - range: [93m154.89ns[39m - [93m269.7ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m618.17ns[39m ± [93m3.29ns[39m
      - p99: [93m881.46ns[39m
      - range: [93m595.75ns[39m - [93m904.22ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m286.64ns[39m ± [93m1.52ns[39m
      - p99: [93m416.06ns[39m
      - range: [93m276.94ns[39m - [93m487.04ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m74.26ns[39m ± [93m224.73ps[39m
      - p99: [93m80.72ns[39m
      - range: [93m70.88ns[39m - [93m98.79ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m310.46ns[39m ± [93m1.45ns[39m
      - p99: [93m412.47ns[39m
      - range: [93m299.44ns[39m - [93m432.16ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m188.68ns[39m ± [93m1.43ns[39m
      - p99: [93m291.35ns[39m
      - range: [93m172.41ns[39m - [93m368.55ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m2.07x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.18x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.54x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m3.4x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m3.86x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m4.18x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m7.45x[39m faster than [1m[36mrou3[39m[22m
      - [32m8.32x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m9.46x[39m faster than [1m[36mhono trie-router[39m[22m
  [1m## GET /post/:id/comments[22m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m318.79ns[39m ± [93m1.34ns[39m
      - p99: [93m406.9ns[39m
      - range: [93m308.72ns[39m - [93m483.07ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m1.06μs[39m ± [93m5.88ns[39m
      - p99: [93m1.55μs[39m
      - range: [93m1.03μs[39m - [93m1.59μs[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m524.61ns[39m ± [93m2.09ns[39m
      - p99: [93m678.26ns[39m
      - range: [93m508.55ns[39m - [93m701.52ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m787.09ns[39m ± [93m4.57ns[39m
      - p99: [93m884.58ns[39m
      - range: [93m768.96ns[39m - [93m1.62μs[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m280.56ns[39m ± [93m1.3ns[39m
      - p99: [93m374.01ns[39m
      - range: [93m271.65ns[39m - [93m492.52ns[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m185.23ns[39m ± [93m1.18ns[39m
      - p99: [93m273.81ns[39m
      - range: [93m177.05ns[39m - [93m370.84ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m368.79ns[39m ± [93m1.81ns[39m
      - p99: [93m534.76ns[39m
      - range: [93m357.21ns[39m - [93m580.99ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m199.93ns[39m ± [93m1.62ns[39m
      - p99: [93m340.27ns[39m
      - range: [93m188.91ns[39m - [93m402.67ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m251.03ns[39m ± [93m1.31ns[39m
      - p99: [93m349.97ns[39m
      - range: [93m242.02ns[39m - [93m412.76ns[39m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m100.8ns[39m ± [93m382.52ps[39m
      - p99: [93m124.91ns[39m
      - range: [93m96.07ns[39m - [93m152.85ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.84x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m1.98x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.49x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m2.78x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m3.16x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m3.66x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m5.2x[39m faster than [1m[36mrou3[39m[22m
      - [32m7.81x[39m faster than [1m[36mhono trie-router[39m[22m
      - [32m10.53x[39m faster than [1m[36mhono linear-router[39m[22m
  [1m## POST /post/:id/comment[22m
    * [1m[36m@mapl/router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m88.17ns[39m ± [93m614.81ps[39m
      - p99: [93m107.12ns[39m
      - range: [93m83.88ns[39m - [93m205.78ns[39m
    * [1m[36mrou3 (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m209.45ns[39m ± [93m634.03ps[39m
      - p99: [93m264.78ns[39m
      - range: [93m200.97ns[39m - [93m274.46ns[39m
    * [1m[36mhono reg-exp-router[39m[22m: [93m1048576[39m runs
      - mean: [93m318.41ns[39m ± [93m1.48ns[39m
      - p99: [93m418.58ns[39m
      - range: [93m307.7ns[39m - [93m478.96ns[39m
    * [1m[36mrou3[39m[22m: [93m1048576[39m runs
      - mean: [93m526.53ns[39m ± [93m2.63ns[39m
      - p99: [93m703.07ns[39m
      - range: [93m511.33ns[39m - [93m880.17ns[39m
    * [1m[36mhono trie-router[39m[22m: [93m1048576[39m runs
      - mean: [93m795.59ns[39m ± [93m5.79ns[39m
      - p99: [93m1.36μs[39m
      - range: [93m766.67ns[39m - [93m1.41μs[39m
    * [1m[36m@mapl/pattern-router (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m169.08ns[39m ± [93m1.45ns[39m
      - p99: [93m274.23ns[39m
      - range: [93m158.45ns[39m - [93m338.1ns[39m
    * [1m[36m@mapl/pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m256.99ns[39m ± [93m601.38ps[39m
      - p99: [93m300.09ns[39m
      - range: [93m251.27ns[39m - [93m361.45ns[39m
    * [1m[36mfind-my-way (jit)[39m[22m: [93m1048576[39m runs
      - mean: [93m252.56ns[39m ± [93m1.69ns[39m
      - p99: [93m376.49ns[39m
      - range: [93m242.42ns[39m - [93m468.79ns[39m
    * [1m[36mhono pattern-router[39m[22m: [93m1048576[39m runs
      - mean: [93m296.76ns[39m ± [93m1.6ns[39m
      - p99: [93m419.16ns[39m
      - range: [93m286.15ns[39m - [93m450.41ns[39m
    * [1m[36mhono linear-router[39m[22m: [93m1048576[39m runs
      - mean: [93m540.49ns[39m ± [93m2.78ns[39m
      - p99: [93m741.27ns[39m
      - range: [93m526.08ns[39m - [93m921.1ns[39m
    & [1m[36m@mapl/router (jit)[39m[22m
      - [32m1.92x[39m faster than [1m[36m@mapl/pattern-router (jit)[39m[22m
      - [32m2.38x[39m faster than [1m[36mrou3 (jit)[39m[22m
      - [32m2.86x[39m faster than [1m[36mfind-my-way (jit)[39m[22m
      - [32m2.91x[39m faster than [1m[36m@mapl/pattern-router[39m[22m
      - [32m3.37x[39m faster than [1m[36mhono pattern-router[39m[22m
      - [32m3.61x[39m faster than [1m[36mhono reg-exp-router[39m[22m
      - [32m5.97x[39m faster than [1m[36mrou3[39m[22m
      - [32m6.13x[39m faster than [1m[36mhono linear-router[39m[22m
      - [32m9.02x[39m faster than [1m[36mhono trie-router[39m[22m

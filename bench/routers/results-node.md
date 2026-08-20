# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.66ns ± 412.63ps`|`43.3ns`|`6.23ns - 49.64ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.92ns ± 540.2ps`|`45.91ns`|`5.85ns - 50.15ns`|
|rou3 (jit)|`1048576`|`37.6ns ± 302.54ps`|`68.66ns`|`21.19ns - 79.84ns`|
|@mapl/pattern-router|`1048576`|`42.67ns ± 823.99ps`|`79.95ns`|`24.32ns - 147.27ns`|
|hono reg-exp-router|`1048576`|`68.48ns ± 384.58ps`|`100.3ns`|`38.54ns - 107.44ns`|
|find-my-way (jit)|`1048576`|`70.43ns ± 647.37ps`|`106.67ns`|`35.42ns - 127.15ns`|
|hono pattern-router|`1048576`|`216.57ns ± 1.38ns`|`333.91ns`|`156.2ns - 347.53ns`|
|hono trie-router|`1048576`|`226.35ns ± 912.75ps`|`289.17ns`|`174.94ns - 344.66ns`|
|rou3|`1048576`|`236.85ns ± 781.09ps`|`277.71ns`|`216.61ns - 361.62ns`|
|hono linear-router|`1048576`|`587.66ns ± 6.35ns`|`957.98ns`|`480.17ns - 962.2ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.29ns ± 282.21ps`|`44.95ns`|`6.64ns - 52.02ns`|
|@mapl/router (jit)|`1048576`|`13.85ns ± 329.72ps`|`40.8ns`|`6.58ns - 49.3ns`|
|rou3 (jit)|`1048576`|`36.8ns ± 437.69ps`|`69.24ns`|`18.88ns - 75.77ns`|
|@mapl/pattern-router|`1048576`|`43.87ns ± 570.74ps`|`76.92ns`|`23ns - 84.54ns`|
|hono reg-exp-router|`1048576`|`69.09ns ± 564.01ps`|`105.03ns`|`38.15ns - 119.19ns`|
|rou3|`1048576`|`113.78ns ± 659.42ps`|`142.95ns`|`63.2ns - 143.36ns`|
|find-my-way (jit)|`1048576`|`126.71ns ± 741.15ps`|`149.5ns`|`70.87ns - 167.46ns`|
|hono pattern-router|`1048576`|`215.11ns ± 839.78ps`|`255.1ns`|`158.49ns - 320.01ns`|
|hono trie-router|`1048576`|`235.46ns ± 929.36ps`|`289.78ns`|`180.89ns - 345.46ns`|
|hono linear-router|`1048576`|`560.93ns ± 936.38ps`|`614.85ns`|`507.31ns - 731.59ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.14ns ± 464.55ps`|`94.46ns`|`35.57ns - 100.35ns`|
|@mapl/pattern-router (jit)|`1048576`|`150.89ns ± 917.91ps`|`189.59ns`|`94.95ns - 262.43ns`|
|rou3 (jit)|`1048576`|`211.9ns ± 1.46ns`|`327.36ns`|`157.53ns - 334.01ns`|
|find-my-way (jit)|`1048576`|`221.29ns ± 1.04ns`|`264.83ns`|`147.94ns - 296.76ns`|
|hono pattern-router|`1048576`|`265.52ns ± 942.59ps`|`309.55ns`|`212.66ns - 440.01ns`|
|@mapl/pattern-router|`1048576`|`344.32ns ± 1.42ns`|`421.75ns`|`298.13ns - 537.67ns`|
|hono reg-exp-router|`1048576`|`405.38ns ± 1.76ns`|`485.83ns`|`357.72ns - 705.65ns`|
|hono trie-router|`1048576`|`991.89ns ± 3.06ns`|`1.1μs`|`925.35ns - 1.11μs`|
|rou3|`1048576`|`1.02μs ± 3.2ns`|`1.13μs`|`950.03ns - 1.16μs`|
|hono linear-router|`1048576`|`1.51μs ± 5.9ns`|`1.71μs`|`1.38μs - 1.73μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`63.91ns ± 350.8ps`|`93.53ns`|`34.99ns - 101.19ns`|
|@mapl/pattern-router (jit)|`1048576`|`146.66ns ± 652.31ps`|`178.56ns`|`91.59ns - 208.64ns`|
|rou3 (jit)|`1048576`|`210.8ns ± 546.92ps`|`249.93ns`|`160.02ns - 264.7ns`|
|hono pattern-router|`1048576`|`221.71ns ± 1.77ns`|`327.4ns`|`160.99ns - 329.99ns`|
|find-my-way (jit)|`1048576`|`225.93ns ± 1.25ns`|`287.24ns`|`168.96ns - 321.42ns`|
|@mapl/pattern-router|`1048576`|`309.98ns ± 1.84ns`|`514.61ns`|`260.8ns - 521.15ns`|
|hono reg-exp-router|`1048576`|`410.45ns ± 2.26ns`|`526.28ns`|`355.76ns - 718.12ns`|
|hono trie-router|`1048576`|`987.72ns ± 2.69ns`|`1.08μs`|`930.8ns - 1.1μs`|
|rou3|`1048576`|`1μs ± 2.77ns`|`1.12μs`|`955.11ns - 1.16μs`|
|hono linear-router|`1048576`|`1.12μs ± 1.04ns`|`1.16μs`|`1.09μs - 1.33μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.6ns ± 292.99ps`|`43.13ns`|`5.64ns - 56.45ns`|
|@mapl/router (jit)|`1048576`|`14.7ns ± 518.57ps`|`47.23ns`|`6.68ns - 87.66ns`|
|rou3 (jit)|`1048576`|`34.87ns ± 582.84ps`|`67.94ns`|`17.2ns - 101.55ns`|
|@mapl/pattern-router|`1048576`|`41.5ns ± 587.68ps`|`78.24ns`|`21.5ns - 111.85ns`|
|hono reg-exp-router|`1048576`|`55.09ns ± 442.89ps`|`87.44ns`|`30.63ns - 100.04ns`|
|rou3|`1048576`|`84.77ns ± 546.39ps`|`111.16ns`|`45.43ns - 114.04ns`|
|find-my-way (jit)|`1048576`|`127.57ns ± 953.11ps`|`173.02ns`|`67.56ns - 176.77ns`|
|hono pattern-router|`1048576`|`169.52ns ± 1.07ns`|`241.38ns`|`112.36ns - 308.07ns`|
|hono trie-router|`1048576`|`234.17ns ± 1.69ns`|`364.47ns`|`215.44ns - 380.04ns`|
|hono linear-router|`1048576`|`288.28ns ± 657.73ps`|`321.96ns`|`228.23ns - 345.83ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.28ns ± 392.35ps`|`95.82ns`|`35.94ns - 106.68ns`|
|@mapl/pattern-router (jit)|`1048576`|`151.7ns ± 691.14ps`|`194.49ns`|`96.2ns - 219.08ns`|
|rou3 (jit)|`1048576`|`217.14ns ± 495.27ps`|`256.23ns`|`171.45ns - 268.39ns`|
|find-my-way (jit)|`1048576`|`224.5ns ± 1.3ns`|`281.57ns`|`163.82ns - 374.06ns`|
|hono pattern-router|`1048576`|`288.98ns ± 2.38ns`|`450.42ns`|`221.75ns - 462.91ns`|
|@mapl/pattern-router|`1048576`|`317.28ns ± 1.65ns`|`497.01ns`|`266ns - 507.32ns`|
|hono reg-exp-router|`1048576`|`360.4ns ± 591.32ps`|`403.16ns`|`305.9ns - 412.99ns`|
|hono trie-router|`1048576`|`986.3ns ± 2.55ns`|`1.09μs`|`939.83ns - 1.09μs`|
|rou3|`1048576`|`994.9ns ± 3.37ns`|`1.11μs`|`932.53ns - 1.13μs`|
|hono linear-router|`1048576`|`2.13μs ± 5.61ns`|`2.35μs`|`2.04μs - 2.36μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`62.49ns ± 538.81ps`|`95.52ns`|`33.02ns - 138.58ns`|
|@mapl/pattern-router (jit)|`1048576`|`148.52ns ± 1.03ns`|`206.16ns`|`91.98ns - 210.98ns`|
|hono pattern-router|`1048576`|`215.09ns ± 858.22ps`|`281.04ns`|`161.71ns - 317.44ns`|
|rou3 (jit)|`1048576`|`216.66ns ± 680.35ps`|`258.42ns`|`161.33ns - 289.03ns`|
|find-my-way (jit)|`1048576`|`226.14ns ± 929.36ps`|`279.11ns`|`187.3ns - 319.21ns`|
|@mapl/pattern-router|`1048576`|`287.7ns ± 607.26ps`|`331.58ns`|`239.42ns - 380.46ns`|
|hono reg-exp-router|`1048576`|`385.82ns ± 929.42ps`|`433.79ns`|`335.81ns - 530.06ns`|
|rou3|`1048576`|`979.96ns ± 2.75ns`|`1.09μs`|`934.05ns - 1.1μs`|
|hono trie-router|`1048576`|`995.3ns ± 3.06ns`|`1.09μs`|`925.31ns - 1.11μs`|
|hono linear-router|`1048576`|`1.12μs ± 850.4ps`|`1.15μs`|`1.1μs - 1.29μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`173.33ns ± 871.68ps`|`230.97ns`|`108.84ns - 246.98ns`|
|@mapl/pattern-router (jit)|`1048576`|`203.19ns ± 734.66ps`|`235.33ns`|`193.67ns - 304.37ns`|
|rou3 (jit)|`1048576`|`299.85ns ± 1.5ns`|`457.12ns`|`232.35ns - 477.22ns`|
|hono pattern-router|`1048576`|`354.63ns ± 2.19ns`|`501.58ns`|`287.03ns - 607.49ns`|
|@mapl/pattern-router|`1048576`|`378.57ns ± 1.98ns`|`616.4ns`|`335.61ns - 641.15ns`|
|find-my-way (jit)|`1048576`|`382.12ns ± 1.6ns`|`454.24ns`|`314.17ns - 627.11ns`|
|hono reg-exp-router|`1048576`|`447.21ns ± 1.04ns`|`498.01ns`|`416.28ns - 596.09ns`|
|hono trie-router|`1048576`|`1.14μs ± 2.67ns`|`1.23μs`|`1.08μs - 1.24μs`|
|rou3|`1048576`|`1.19μs ± 2.95ns`|`1.29μs`|`1.13μs - 1.29μs`|
|hono linear-router|`1048576`|`2.28μs ± 5.86ns`|`2.45μs`|`2.14μs - 2.49μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`160.02ns ± 526.13ps`|`188.41ns`|`98.92ns - 219.43ns`|
|@mapl/pattern-router (jit)|`1048576`|`186.41ns ± 729.36ps`|`234.64ns`|`121.74ns - 240.92ns`|
|hono pattern-router|`1048576`|`264.59ns ± 965.45ps`|`331.42ns`|`200.31ns - 372ns`|
|rou3 (jit)|`1048576`|`300.43ns ± 1.27ns`|`341.91ns`|`237.57ns - 487.47ns`|
|@mapl/pattern-router|`1048576`|`361.25ns ± 967.47ps`|`402.12ns`|`309.82ns - 573.32ns`|
|find-my-way (jit)|`1048576`|`392.67ns ± 1.56ns`|`468.61ns`|`323.94ns - 640.33ns`|
|hono reg-exp-router|`1048576`|`475.3ns ± 698.61ps`|`521.96ns`|`458.4ns - 559.49ns`|
|hono trie-router|`1048576`|`1.12μs ± 2.87ns`|`1.21μs`|`1.07μs - 1.22μs`|
|rou3|`1048576`|`1.17μs ± 3.01ns`|`1.28μs`|`1.1μs - 1.28μs`|
|hono linear-router|`1048576`|`3.16μs ± 6.12ns`|`3.35μs`|`3.01μs - 3.47μs`|

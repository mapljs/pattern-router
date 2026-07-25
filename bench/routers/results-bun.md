# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`6.92ns ± 78.23ps`|`12.65ns`|`6.53ns - 18.66ns`|
|@mapl/pattern-router (jit)|`1048576`|`8.02ns ± 86.01ps`|`13.75ns`|`7.48ns - 14.85ns`|
|rou3 (jit)|`1048576`|`17.23ns ± 169.85ps`|`27.37ns`|`15.94ns - 36.24ns`|
|@mapl/pattern-router|`1048576`|`18.41ns ± 246ps`|`27.79ns`|`16.9ns - 63.73ns`|
|hono reg-exp-router|`1048576`|`34.14ns ± 483.15ps`|`53.64ns`|`29.06ns - 58.93ns`|
|find-my-way (jit)|`1048576`|`48.03ns ± 1.34ns`|`150.98ns`|`40.07ns - 231.22ns`|
|rou3|`1048576`|`109.24ns ± 1.83ns`|`190.82ns`|`92.79ns - 193.77ns`|
|hono trie-router|`1048576`|`194.27ns ± 4.19ns`|`434.32ns`|`152.15ns - 722.92ns`|
|hono pattern-router|`1048576`|`218.83ns ± 1.36ns`|`317.34ns`|`207.95ns - 419.26ns`|
|hono linear-router|`1048576`|`713.04ns ± 3.07ns`|`979.82ns`|`692.87ns - 1.09μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.93ns ± 102.95ps`|`18.12ns`|`11.28ns - 19.61ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.16ns ± 108.64ps`|`17.83ns`|`11.46ns - 22.6ns`|
|rou3 (jit)|`1048576`|`26.3ns ± 231.2ps`|`46.75ns`|`23.99ns - 48.31ns`|
|hono reg-exp-router|`1048576`|`30.1ns ± 153.8ps`|`37.78ns`|`28.56ns - 43.9ns`|
|@mapl/pattern-router|`1048576`|`32.91ns ± 197.8ps`|`39.67ns`|`31.38ns - 68.57ns`|
|rou3|`1048576`|`45.85ns ± 816.83ps`|`88.32ns`|`39.91ns - 143.58ns`|
|find-my-way (jit)|`1048576`|`72.41ns ± 877.96ps`|`125.01ns`|`67.09ns - 181.95ns`|
|hono trie-router|`1048576`|`173.88ns ± 2.44ns`|`434.4ns`|`160.47ns - 463.54ns`|
|hono pattern-router|`1048576`|`218.79ns ± 1.54ns`|`311.23ns`|`208ns - 465.83ns`|
|hono linear-router|`1048576`|`775.78ns ± 3.51ns`|`1.08μs`|`756.57ns - 1.23μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`82.2ns ± 492.88ps`|`99.26ns`|`78.8ns - 189.88ns`|
|rou3 (jit)|`1048576`|`160.5ns ± 827.14ps`|`229.53ns`|`152.27ns - 289.74ns`|
|@mapl/pattern-router (jit)|`1048576`|`184.13ns ± 1.09ns`|`241.86ns`|`174.85ns - 376.13ns`|
|find-my-way (jit)|`1048576`|`192.78ns ± 1.57ns`|`310.29ns`|`178.88ns - 387.41ns`|
|@mapl/pattern-router|`1048576`|`280.17ns ± 1.87ns`|`419.79ns`|`269.99ns - 509ns`|
|hono reg-exp-router|`1048576`|`326.82ns ± 1.76ns`|`432.2ns`|`310.76ns - 558.81ns`|
|hono pattern-router|`1048576`|`357.2ns ± 1.84ns`|`489.95ns`|`345.93ns - 659.56ns`|
|rou3|`1048576`|`473.65ns ± 3.49ns`|`753.43ns`|`445.04ns - 814.78ns`|
|hono trie-router|`1048576`|`650.66ns ± 3.83ns`|`1μs`|`625.36ns - 1.15μs`|
|hono linear-router|`1048576`|`942.57ns ± 6.19ns`|`1.41μs`|`903.5ns - 1.48μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.85ns ± 425.87ps`|`89.89ns`|`61.32ns - 137.96ns`|
|rou3 (jit)|`1048576`|`158.14ns ± 704.4ps`|`227.82ns`|`150.52ns - 232.08ns`|
|@mapl/pattern-router (jit)|`1048576`|`165.5ns ± 1.14ns`|`263.9ns`|`157.01ns - 314.52ns`|
|find-my-way (jit)|`1048576`|`183.47ns ± 1.89ns`|`305.78ns`|`168.68ns - 398.44ns`|
|@mapl/pattern-router|`1048576`|`270.95ns ± 1.51ns`|`368.3ns`|`260.37ns - 455.32ns`|
|hono pattern-router|`1048576`|`293.21ns ± 2.45ns`|`469.88ns`|`277.59ns - 497.76ns`|
|hono reg-exp-router|`1048576`|`328.26ns ± 2.03ns`|`502.77ns`|`309.48ns - 517.19ns`|
|rou3|`1048576`|`463.56ns ± 2.14ns`|`605.44ns`|`446.06ns - 719.7ns`|
|hono linear-router|`1048576`|`613.68ns ± 4.58ns`|`961.88ns`|`586.09ns - 1.07μs`|
|hono trie-router|`1048576`|`663.18ns ± 4.63ns`|`1.05μs`|`630.89ns - 1.3μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.88ns ± 94.93ps`|`16.43ns`|`9.39ns - 20.84ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.26ns ± 79.46ps`|`15.37ns`|`9.84ns - 19.31ns`|
|rou3 (jit)|`1048576`|`19.68ns ± 316.22ps`|`27.58ns`|`18.43ns - 94.54ns`|
|hono reg-exp-router|`1048576`|`26.53ns ± 133.75ps`|`32.28ns`|`25.43ns - 41.36ns`|
|rou3|`1048576`|`30.69ns ± 651.17ps`|`72.68ns`|`26.82ns - 112.87ns`|
|@mapl/pattern-router|`1048576`|`35.32ns ± 286.59ps`|`45.12ns`|`33.57ns - 94.91ns`|
|find-my-way (jit)|`1048576`|`70.32ns ± 1.05ns`|`168.6ns`|`64.53ns - 183.45ns`|
|hono pattern-router|`1048576`|`156.53ns ± 1.66ns`|`311.17ns`|`146.72ns - 358.98ns`|
|hono trie-router|`1048576`|`167.86ns ± 396.18ps`|`196.17ns`|`160.83ns - 200.47ns`|
|hono linear-router|`1048576`|`345.64ns ± 1.56ns`|`486.69ns`|`336.02ns - 595.34ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`80.21ns ± 700.35ps`|`111.07ns`|`76.11ns - 226.73ns`|
|rou3 (jit)|`1048576`|`150.14ns ± 776.14ps`|`216.49ns`|`142.68ns - 251.56ns`|
|@mapl/pattern-router (jit)|`1048576`|`187.52ns ± 1.26ns`|`278.72ns`|`177.71ns - 377.24ns`|
|find-my-way (jit)|`1048576`|`199.32ns ± 1.78ns`|`337.78ns`|`183.19ns - 379.07ns`|
|@mapl/pattern-router|`1048576`|`274.72ns ± 1.69ns`|`381.23ns`|`265.26ns - 510.34ns`|
|hono reg-exp-router|`1048576`|`312.75ns ± 1.78ns`|`425.74ns`|`298.04ns - 573.61ns`|
|hono pattern-router|`1048576`|`354.37ns ± 2.29ns`|`552.01ns`|`340.78ns - 606.82ns`|
|rou3|`1048576`|`561.65ns ± 2.15ns`|`682.49ns`|`522.09ns - 772.77ns`|
|hono trie-router|`1048576`|`719.54ns ± 4.15ns`|`869.13ns`|`693.32ns - 1.49μs`|
|hono linear-router|`1048576`|`999.23ns ± 3.38ns`|`1.17μs`|`981.61ns - 1.54μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.34ns ± 216.63ps`|`74.51ns`|`61.56ns - 82.74ns`|
|rou3 (jit)|`1048576`|`158.97ns ± 921.85ps`|`229.38ns`|`150.67ns - 300.27ns`|
|@mapl/pattern-router (jit)|`1048576`|`169.43ns ± 1ns`|`242.46ns`|`160.8ns - 354.37ns`|
|find-my-way (jit)|`1048576`|`198.43ns ± 1.49ns`|`306.09ns`|`183.99ns - 393.86ns`|
|@mapl/pattern-router|`1048576`|`262.08ns ± 1.3ns`|`372.62ns`|`254.36ns - 413.65ns`|
|hono pattern-router|`1048576`|`287.16ns ± 1.76ns`|`412.73ns`|`275.61ns - 492.32ns`|
|hono reg-exp-router|`1048576`|`311.32ns ± 1.37ns`|`408.68ns`|`300.33ns - 454.08ns`|
|rou3|`1048576`|`587.68ns ± 2.95ns`|`760.85ns`|`532.04ns - 822.79ns`|
|hono linear-router|`1048576`|`613.64ns ± 3.69ns`|`911.86ns`|`591.47ns - 1.03μs`|
|hono trie-router|`1048576`|`739.8ns ± 6.13ns`|`1.29μs`|`695.32ns - 1.45μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`103.27ns ± 582.98ps`|`134.31ns`|`97.6ns - 229.7ns`|
|@mapl/pattern-router (jit)|`1048576`|`192.71ns ± 1.38ns`|`284.7ns`|`182.25ns - 371.03ns`|
|rou3 (jit)|`1048576`|`208.18ns ± 1.28ns`|`294.55ns`|`197.71ns - 397.64ns`|
|find-my-way (jit)|`1048576`|`243.05ns ± 1.57ns`|`359.87ns`|`230.45ns - 439.25ns`|
|@mapl/pattern-router|`1048576`|`288.3ns ± 1.84ns`|`393.95ns`|`277ns - 578.63ns`|
|hono reg-exp-router|`1048576`|`322.94ns ± 1.5ns`|`422.7ns`|`310.32ns - 510.88ns`|
|hono pattern-router|`1048576`|`368.74ns ± 1.13ns`|`491.31ns`|`359.5ns - 497.38ns`|
|rou3|`1048576`|`536.14ns ± 2.29ns`|`714.77ns`|`518.01ns - 835.15ns`|
|hono trie-router|`1048576`|`810.49ns ± 4.7ns`|`1.3μs`|`775.65ns - 1.41μs`|
|hono linear-router|`1048576`|`1.06μs ± 5.93ns`|`1.39μs`|`1.04μs - 2.32μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`91.45ns ± 275.1ps`|`111.21ns`|`88.38ns - 120.88ns`|
|@mapl/pattern-router (jit)|`1048576`|`167.22ns ± 505.34ps`|`214.28ns`|`160.92ns - 237.25ns`|
|rou3 (jit)|`1048576`|`197.74ns ± 1ns`|`266.99ns`|`188.26ns - 354.03ns`|
|find-my-way (jit)|`1048576`|`260.18ns ± 1.72ns`|`400.24ns`|`249.47ns - 459.62ns`|
|@mapl/pattern-router|`1048576`|`275.14ns ± 1.46ns`|`388.58ns`|`265.32ns - 468.29ns`|
|hono pattern-router|`1048576`|`297.49ns ± 2.51ns`|`516.29ns`|`284.81ns - 593.72ns`|
|hono reg-exp-router|`1048576`|`328.3ns ± 1.81ns`|`434.36ns`|`314.82ns - 567.24ns`|
|hono linear-router|`1048576`|`541.74ns ± 2.87ns`|`784.27ns`|`526.11ns - 880.41ns`|
|rou3|`1048576`|`542.13ns ± 2.45ns`|`709.97ns`|`521.37ns - 750.44ns`|
|hono trie-router|`1048576`|`833.06ns ± 5.98ns`|`1.41μs`|`783.56ns - 1.46μs`|

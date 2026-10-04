# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.77ns ± 846.8ps`|`108.73ns`|`6.1ns - 114.83ns`|
|@mapl/router (jit)|`1048576`|`16.06ns ± 885.03ps`|`51.85ns`|`6.3ns - 118.47ns`|
|rou3 (jit)|`1048576`|`36.33ns ± 596.84ps`|`70.82ns`|`19.14ns - 104.97ns`|
|@mapl/pattern-router|`1048576`|`41.36ns ± 653.73ps`|`86.33ns`|`24.26ns - 107.7ns`|
|hono reg-exp-router|`1048576`|`61.82ns ± 811.8ps`|`102.71ns`|`35.96ns - 107.39ns`|
|find-my-way (jit)|`1048576`|`66.17ns ± 868.53ps`|`104.92ns`|`35.99ns - 143.73ns`|
|rou3|`1048576`|`202.15ns ± 1.7ns`|`278.55ns`|`149.49ns - 325.77ns`|
|hono pattern-router|`1048576`|`210.41ns ± 1.89ns`|`321.15ns`|`151.27ns - 325.95ns`|
|hono trie-router|`1048576`|`229.28ns ± 2.12ns`|`382.64ns`|`171.94ns - 393.04ns`|
|hono linear-router|`1048576`|`519.01ns ± 2.22ns`|`581.64ns`|`462.02ns - 956.54ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`12.76ns ± 392.95ps`|`22.35ns`|`6.49ns - 91.47ns`|
|@mapl/router (jit)|`1048576`|`13.15ns ± 411.99ps`|`44.7ns`|`6.6ns - 50.27ns`|
|rou3 (jit)|`1048576`|`34.73ns ± 598.05ps`|`70.24ns`|`19.02ns - 73.52ns`|
|@mapl/pattern-router|`1048576`|`39.31ns ± 456.88ps`|`48.13ns`|`23.27ns - 76.1ns`|
|hono reg-exp-router|`1048576`|`61.78ns ± 822.36ps`|`99.54ns`|`34.98ns - 105.59ns`|
|rou3|`1048576`|`109.84ns ± 1.22ns`|`158.03ns`|`63.44ns - 163.05ns`|
|find-my-way (jit)|`1048576`|`126.79ns ± 1.56ns`|`176.91ns`|`71.09ns - 185.69ns`|
|hono pattern-router|`1048576`|`184.29ns ± 1.69ns`|`279.06ns`|`132.09ns - 284.02ns`|
|hono trie-router|`1048576`|`243.59ns ± 2.25ns`|`409.14ns`|`186.89ns - 411.17ns`|
|hono linear-router|`1048576`|`561.16ns ± 2.38ns`|`664.62ns`|`502.95ns - 1.05μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`61.02ns ± 816.21ps`|`96.07ns`|`34.22ns - 140.41ns`|
|@mapl/pattern-router (jit)|`1048576`|`142.02ns ± 1.4ns`|`182.82ns`|`90.62ns - 187.45ns`|
|rou3 (jit)|`1048576`|`215.11ns ± 1.72ns`|`317.21ns`|`160.75ns - 343.21ns`|
|hono pattern-router|`1048576`|`229.59ns ± 1.66ns`|`331.55ns`|`170.65ns - 339.29ns`|
|find-my-way (jit)|`1048576`|`229.85ns ± 2.2ns`|`377.6ns`|`133.41ns - 388.34ns`|
|@mapl/pattern-router|`1048576`|`500.17ns ± 854.97ps`|`543.92ns`|`459.6ns - 589.47ns`|
|hono linear-router|`1048576`|`712.89ns ± 4.64ns`|`1.1μs`|`645.28ns - 1.36μs`|
|hono reg-exp-router|`1048576`|`737.73ns ± 2.74ns`|`827.18ns`|`693.89ns - 889.49ns`|
|hono trie-router|`1048576`|`999.67ns ± 4.04ns`|`1.1μs`|`925.53ns - 1.12μs`|
|rou3|`1048576`|`2.04μs ± 6.53ns`|`2.23μs`|`1.93μs - 2.27μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`59.11ns ± 653.23ps`|`90.73ns`|`35.13ns - 96.12ns`|
|@mapl/pattern-router (jit)|`1048576`|`136.26ns ± 1.51ns`|`191.27ns`|`84.9ns - 198.4ns`|
|hono pattern-router|`1048576`|`191.8ns ± 1.68ns`|`285.41ns`|`137.29ns - 288.02ns`|
|rou3 (jit)|`1048576`|`218.87ns ± 1.85ns`|`346.93ns`|`160.65ns - 358.77ns`|
|find-my-way (jit)|`1048576`|`228ns ± 1.65ns`|`302.44ns`|`143.03ns - 332.42ns`|
|@mapl/pattern-router|`1048576`|`487.7ns ± 1.09ns`|`560.51ns`|`446.69ns - 598.48ns`|
|hono linear-router|`1048576`|`495.24ns ± 2.62ns`|`655.06ns`|`430.38ns - 938.55ns`|
|hono reg-exp-router|`1048576`|`753.9ns ± 3.06ns`|`839.29ns`|`700.04ns - 849.4ns`|
|hono trie-router|`1048576`|`1.02μs ± 3.94ns`|`1.11μs`|`945.43ns - 1.14μs`|
|rou3|`1048576`|`2.03μs ± 6.26ns`|`2.24μs`|`1.94μs - 2.24μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.79ns ± 477.46ps`|`45.11ns`|`5.77ns - 46.67ns`|
|@mapl/router (jit)|`1048576`|`13.7ns ± 574.68ps`|`41.91ns`|`6.69ns - 100.16ns`|
|rou3 (jit)|`1048576`|`33.66ns ± 715.54ps`|`68ns`|`17.18ns - 107.58ns`|
|@mapl/pattern-router|`1048576`|`42.55ns ± 778.62ps`|`73.44ns`|`23.24ns - 78.19ns`|
|hono reg-exp-router|`1048576`|`57.21ns ± 652.69ps`|`91.59ns`|`34.51ns - 95.54ns`|
|rou3|`1048576`|`85.25ns ± 1.07ns`|`125.22ns`|`47.62ns - 128.76ns`|
|find-my-way (jit)|`1048576`|`124.52ns ± 1.58ns`|`170.69ns`|`67.21ns - 178.47ns`|
|hono pattern-router|`1048576`|`163.25ns ± 1.83ns`|`232.15ns`|`106.8ns - 234.12ns`|
|hono trie-router|`1048576`|`228.85ns ± 1.86ns`|`376.32ns`|`174.84ns - 394.7ns`|
|hono linear-router|`1048576`|`285.69ns ± 1.6ns`|`359.92ns`|`227.08ns - 440.08ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`60.75ns ± 747.99ps`|`92.98ns`|`33.67ns - 102.46ns`|
|@mapl/pattern-router (jit)|`1048576`|`142.99ns ± 1.3ns`|`175.91ns`|`91.13ns - 190.73ns`|
|rou3 (jit)|`1048576`|`218.04ns ± 1.78ns`|`286.53ns`|`164.09ns - 365.55ns`|
|find-my-way (jit)|`1048576`|`232.52ns ± 2.38ns`|`360.04ns`|`139.21ns - 416.19ns`|
|hono pattern-router|`1048576`|`247.48ns ± 1.99ns`|`395.18ns`|`185.52ns - 397.73ns`|
|@mapl/pattern-router|`1048576`|`499.39ns ± 1.63ns`|`568.27ns`|`460.05ns - 729.3ns`|
|hono reg-exp-router|`1048576`|`698.5ns ± 3.28ns`|`842.49ns`|`642.21ns - 1.04μs`|
|hono linear-router|`1048576`|`807.74ns ± 3.79ns`|`909.25ns`|`751.03ns - 1.61μs`|
|hono trie-router|`1048576`|`1.01μs ± 4.02ns`|`1.14μs`|`911.3ns - 1.17μs`|
|rou3|`1048576`|`2.09μs ± 6.18ns`|`2.24μs`|`1.97μs - 2.25μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`58.16ns ± 785.27ps`|`93.24ns`|`32.61ns - 154.75ns`|
|@mapl/pattern-router (jit)|`1048576`|`142.02ns ± 1.66ns`|`191.48ns`|`87.58ns - 198.72ns`|
|hono pattern-router|`1048576`|`192.23ns ± 1.54ns`|`265.22ns`|`137.72ns - 287.85ns`|
|rou3 (jit)|`1048576`|`224.82ns ± 1.96ns`|`363.91ns`|`164.16ns - 368.26ns`|
|find-my-way (jit)|`1048576`|`227.25ns ± 1.68ns`|`321.39ns`|`164.93ns - 332.41ns`|
|hono linear-router|`1048576`|`488.14ns ± 1.69ns`|`598.71ns`|`427.57ns - 694.26ns`|
|@mapl/pattern-router|`1048576`|`489.79ns ± 2.06ns`|`618.59ns`|`444.56ns - 753.52ns`|
|hono reg-exp-router|`1048576`|`684.1ns ± 838.04ps`|`738.59ns`|`647.35ns - 769.15ns`|
|hono trie-router|`1048576`|`1.01μs ± 3.83ns`|`1.12μs`|`938.78ns - 1.13μs`|
|rou3|`1048576`|`2.09μs ± 6.73ns`|`2.26μs`|`1.97μs - 2.28μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`158.82ns ± 1.83ns`|`202.12ns`|`97.39ns - 232.51ns`|
|@mapl/pattern-router (jit)|`1048576`|`197.51ns ± 1.93ns`|`268.84ns`|`133.33ns - 295.35ns`|
|rou3 (jit)|`1048576`|`311.73ns ± 2.62ns`|`528.15ns`|`245.39ns - 545.87ns`|
|hono pattern-router|`1048576`|`315.64ns ± 2.33ns`|`465.28ns`|`245.45ns - 541.36ns`|
|find-my-way (jit)|`1048576`|`406.64ns ± 4.48ns`|`699.41ns`|`273.67ns - 714.59ns`|
|@mapl/pattern-router|`1048576`|`583.75ns ± 1.26ns`|`637.15ns`|`539.69ns - 747.77ns`|
|hono reg-exp-router|`1048576`|`850.64ns ± 2.91ns`|`951.61ns`|`797.57ns - 953.41ns`|
|hono linear-router|`1048576`|`925.72ns ± 1.57ns`|`1μs`|`867.44ns - 1.21μs`|
|hono trie-router|`1048576`|`1.07μs ± 3.65ns`|`1.18μs`|`1.01μs - 1.3μs`|
|rou3|`1048576`|`2.26μs ± 5.94ns`|`2.46μs`|`2.15μs - 2.51μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`158.84ns ± 1.53ns`|`200.16ns`|`94.23ns - 230.92ns`|
|@mapl/pattern-router (jit)|`1048576`|`180.61ns ± 1.56ns`|`237.43ns`|`116.66ns - 299.1ns`|
|hono pattern-router|`1048576`|`262.06ns ± 1.89ns`|`383.5ns`|`193.69ns - 424.97ns`|
|rou3 (jit)|`1048576`|`317.31ns ± 1.81ns`|`438.82ns`|`252.11ns - 486.18ns`|
|find-my-way (jit)|`1048576`|`408.68ns ± 3.77ns`|`720.68ns`|`323.09ns - 740.22ns`|
|hono linear-router|`1048576`|`542.81ns ± 3.19ns`|`748.04ns`|`481.1ns - 1.02μs`|
|@mapl/pattern-router|`1048576`|`576.54ns ± 1.11ns`|`618.24ns`|`533.1ns - 732.07ns`|
|hono reg-exp-router|`1048576`|`871.06ns ± 3.75ns`|`985.23ns`|`774.29ns - 1.11μs`|
|hono trie-router|`1048576`|`1.06μs ± 3.67ns`|`1.17μs`|`1.01μs - 1.25μs`|
|rou3|`1048576`|`2.35μs ± 9.56ns`|`2.73μs`|`2.2μs - 3.6μs`|

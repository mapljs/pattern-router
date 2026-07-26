# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`14.85ns ± 572.33ps`|`48.78ns`|`6.14ns - 93.25ns`|
|@mapl/pattern-router (jit)|`1048576`|`19.8ns ± 942.03ps`|`52.54ns`|`5.98ns - 53.75ns`|
|rou3 (jit)|`1048576`|`39.27ns ± 522.74ps`|`77.18ns`|`20.2ns - 108.77ns`|
|@mapl/pattern-router|`1048576`|`44.52ns ± 596.42ps`|`84.06ns`|`22.95ns - 85.38ns`|
|hono reg-exp-router|`1048576`|`67.31ns ± 519.05ps`|`102.42ns`|`36.05ns - 113.26ns`|
|find-my-way (jit)|`1048576`|`72.8ns ± 843.27ps`|`111.84ns`|`35.62ns - 128.4ns`|
|hono pattern-router|`1048576`|`227.07ns ± 1.81ns`|`377.24ns`|`159.27ns - 397.18ns`|
|rou3|`1048576`|`254.73ns ± 1.66ns`|`349.54ns`|`191.75ns - 475.03ns`|
|hono trie-router|`1048576`|`260.73ns ± 2.71ns`|`420.69ns`|`192.48ns - 455.4ns`|
|hono linear-router|`1048576`|`698.23ns ± 8.63ns`|`1.22μs`|`553.46ns - 1.76μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.77ns ± 357.59ps`|`43.87ns`|`6.74ns - 49.9ns`|
|@mapl/pattern-router (jit)|`1048576`|`14.77ns ± 447.92ps`|`50.43ns`|`6.55ns - 51.41ns`|
|rou3 (jit)|`1048576`|`39.03ns ± 586.27ps`|`74.84ns`|`19.24ns - 111.36ns`|
|@mapl/pattern-router|`1048576`|`43.67ns ± 440.65ps`|`78.2ns`|`24.15ns - 81.62ns`|
|hono reg-exp-router|`1048576`|`72.56ns ± 851.25ps`|`110.92ns`|`35.79ns - 126.64ns`|
|rou3|`1048576`|`119.03ns ± 662.67ps`|`154.04ns`|`59.51ns - 159.93ns`|
|find-my-way (jit)|`1048576`|`146.3ns ± 1.35ns`|`212.52ns`|`81.87ns - 214.36ns`|
|hono pattern-router|`1048576`|`233.72ns ± 1.89ns`|`355.05ns`|`167.04ns - 360.07ns`|
|hono trie-router|`1048576`|`270.63ns ± 1.82ns`|`395.59ns`|`213.74ns - 471.98ns`|
|hono linear-router|`1048576`|`694.77ns ± 1.92ns`|`790.66ns`|`634.78ns - 1.03μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`71.38ns ± 385.61ps`|`107.07ns`|`67.51ns - 109.54ns`|
|@mapl/pattern-router (jit)|`1048576`|`159.54ns ± 1.15ns`|`251.34ns`|`100.91ns - 276.99ns`|
|rou3 (jit)|`1048576`|`238.83ns ± 1.65ns`|`337.74ns`|`175.24ns - 406.58ns`|
|find-my-way (jit)|`1048576`|`264.19ns ± 1.39ns`|`323.82ns`|`204.12ns - 414.22ns`|
|hono pattern-router|`1048576`|`293.14ns ± 1.93ns`|`520.57ns`|`234.39ns - 536.06ns`|
|@mapl/pattern-router|`1048576`|`361.15ns ± 532.03ps`|`397.03ns`|`316.52ns - 404.13ns`|
|hono reg-exp-router|`1048576`|`410.36ns ± 1.95ns`|`505.12ns`|`365.24ns - 742.05ns`|
|hono trie-router|`1048576`|`989.72ns ± 2.75ns`|`1.1μs`|`930.14ns - 1.11μs`|
|rou3|`1048576`|`1.05μs ± 2.93ns`|`1.18μs`|`1μs - 1.19μs`|
|hono linear-router|`1048576`|`1.6μs ± 6.77ns`|`1.82μs`|`1.47μs - 1.83μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.96ns ± 260.63ps`|`78.37ns`|`66.53ns - 104.58ns`|
|@mapl/pattern-router (jit)|`1048576`|`159.05ns ± 885.73ps`|`214.33ns`|`102.93ns - 248.17ns`|
|rou3 (jit)|`1048576`|`233.21ns ± 1.07ns`|`293.52ns`|`206.2ns - 301.6ns`|
|hono pattern-router|`1048576`|`233.61ns ± 1.51ns`|`343.64ns`|`179.13ns - 364.39ns`|
|find-my-way (jit)|`1048576`|`268.2ns ± 1.87ns`|`448.71ns`|`207.7ns - 464.18ns`|
|@mapl/pattern-router|`1048576`|`355.45ns ± 467.11ps`|`388.49ns`|`308.51ns - 401.89ns`|
|hono reg-exp-router|`1048576`|`449.61ns ± 739.7ps`|`493.57ns`|`398ns - 512.65ns`|
|hono trie-router|`1048576`|`971.66ns ± 2.87ns`|`1.1μs`|`924.82ns - 1.11μs`|
|rou3|`1048576`|`1.04μs ± 2.94ns`|`1.16μs`|`987.23ns - 1.17μs`|
|hono linear-router|`1048576`|`1.17μs ± 1.93ns`|`1.2μs`|`1.12μs - 1.52μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.84ns ± 492.08ps`|`48.17ns`|`5.46ns - 88.71ns`|
|@mapl/router (jit)|`1048576`|`13.24ns ± 251.15ps`|`42.98ns`|`6.32ns - 47.05ns`|
|rou3 (jit)|`1048576`|`32.91ns ± 344.9ps`|`64.87ns`|`16.59ns - 70.12ns`|
|@mapl/pattern-router|`1048576`|`43.1ns ± 688.13ps`|`81.22ns`|`21.19ns - 83.26ns`|
|hono reg-exp-router|`1048576`|`59.41ns ± 728.92ps`|`98.42ns`|`31.26ns - 104.8ns`|
|rou3|`1048576`|`85.11ns ± 615.57ps`|`114.08ns`|`43.56ns - 115.33ns`|
|find-my-way (jit)|`1048576`|`129.42ns ± 958.72ps`|`181.63ns`|`68.93ns - 191.69ns`|
|hono pattern-router|`1048576`|`174.51ns ± 1.13ns`|`240.74ns`|`112.08ns - 274.55ns`|
|hono trie-router|`1048576`|`257.35ns ± 1.4ns`|`348.14ns`|`197.13ns - 440.14ns`|
|hono linear-router|`1048576`|`347.75ns ± 2.11ns`|`509.58ns`|`285.12ns - 619.25ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`71.91ns ± 523.97ps`|`104.93ns`|`34.58ns - 110.27ns`|
|@mapl/pattern-router (jit)|`1048576`|`169.65ns ± 1.27ns`|`231.62ns`|`103.23ns - 262.9ns`|
|rou3 (jit)|`1048576`|`233.72ns ± 1.57ns`|`394.59ns`|`170.99ns - 415.61ns`|
|find-my-way (jit)|`1048576`|`265.37ns ± 1.28ns`|`317.91ns`|`155.08ns - 383.68ns`|
|hono pattern-router|`1048576`|`304.7ns ± 2ns`|`534.33ns`|`245.47ns - 569.07ns`|
|@mapl/pattern-router|`1048576`|`336.67ns ± 1.65ns`|`525.46ns`|`284.12ns - 550.06ns`|
|hono reg-exp-router|`1048576`|`411.06ns ± 816.72ps`|`464.34ns`|`364.37ns - 493.64ns`|
|hono trie-router|`1048576`|`984.66ns ± 3.06ns`|`1.1μs`|`911.7ns - 1.14μs`|
|rou3|`1048576`|`1.03μs ± 3.29ns`|`1.16μs`|`973.95ns - 1.18μs`|
|hono linear-router|`1048576`|`2.26μs ± 6.15ns`|`2.49μs`|`2.14μs - 2.87μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`67.63ns ± 510.49ps`|`100.56ns`|`31.58ns - 103.56ns`|
|@mapl/pattern-router (jit)|`1048576`|`161.05ns ± 1.32ns`|`245.06ns`|`97.01ns - 264.26ns`|
|hono pattern-router|`1048576`|`226.65ns ± 1.19ns`|`340.97ns`|`168.75ns - 359.59ns`|
|rou3 (jit)|`1048576`|`240.72ns ± 1.74ns`|`402.84ns`|`178.95ns - 419.54ns`|
|find-my-way (jit)|`1048576`|`261.98ns ± 1.04ns`|`296.94ns`|`205.03ns - 305.15ns`|
|@mapl/pattern-router|`1048576`|`342.9ns ± 1.75ns`|`539.69ns`|`289.38ns - 560.01ns`|
|hono reg-exp-router|`1048576`|`436.04ns ± 739.77ps`|`478.17ns`|`384.58ns - 539.28ns`|
|hono trie-router|`1048576`|`981.66ns ± 2.99ns`|`1.11μs`|`941.4ns - 1.16μs`|
|rou3|`1048576`|`1.01μs ± 2.97ns`|`1.15μs`|`965.99ns - 1.15μs`|
|hono linear-router|`1048576`|`1.34μs ± 7.23ns`|`1.57μs`|`1.22μs - 1.62μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`182.74ns ± 888.36ps`|`221.88ns`|`111.38ns - 285.82ns`|
|@mapl/pattern-router (jit)|`1048576`|`241.84ns ± 1.35ns`|`334.65ns`|`174.1ns - 364.29ns`|
|rou3 (jit)|`1048576`|`350.84ns ± 1.47ns`|`473.66ns`|`281.69ns - 526.63ns`|
|hono pattern-router|`1048576`|`398.93ns ± 852.78ps`|`437.66ns`|`337.9ns - 547.47ns`|
|@mapl/pattern-router|`1048576`|`418.61ns ± 1.72ns`|`450.62ns`|`361.87ns - 727.38ns`|
|find-my-way (jit)|`1048576`|`443.36ns ± 852.35ps`|`487.23ns`|`376.35ns - 531.23ns`|
|hono reg-exp-router|`1048576`|`504.37ns ± 787.7ps`|`555.58ns`|`444.49ns - 609.97ns`|
|hono trie-router|`1048576`|`1.15μs ± 2.73ns`|`1.24μs`|`1.07μs - 1.27μs`|
|rou3|`1048576`|`1.23μs ± 3.18ns`|`1.35μs`|`1.16μs - 1.39μs`|
|hono linear-router|`1048576`|`2.31μs ± 6.88ns`|`2.6μs`|`2.22μs - 3.08μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`181.76ns ± 1.08ns`|`238.86ns`|`112.84ns - 276.71ns`|
|@mapl/pattern-router (jit)|`1048576`|`201.22ns ± 1.11ns`|`237.59ns`|`132.12ns - 278.74ns`|
|hono pattern-router|`1048576`|`315.99ns ± 2.18ns`|`519.75ns`|`241.67ns - 537.05ns`|
|rou3 (jit)|`1048576`|`339.13ns ± 1.41ns`|`368.34ns`|`277.02ns - 600.68ns`|
|@mapl/pattern-router|`1048576`|`421.61ns ± 1.54ns`|`532.23ns`|`364.38ns - 615.06ns`|
|find-my-way (jit)|`1048576`|`460.93ns ± 886.62ps`|`508.65ns`|`387.93ns - 521.33ns`|
|hono reg-exp-router|`1048576`|`537.76ns ± 2.99ns`|`717.05ns`|`487.29ns - 961.23ns`|
|hono trie-router|`1048576`|`1.14μs ± 4.44ns`|`1.23μs`|`1.06μs - 1.97μs`|
|rou3|`1048576`|`1.22μs ± 3.35ns`|`1.33μs`|`1.16μs - 1.47μs`|
|hono linear-router|`1048576`|`3.48μs ± 13.4ns`|`3.68μs`|`3.32μs - 5.74μs`|

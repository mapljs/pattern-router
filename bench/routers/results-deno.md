# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.85ns ± 362.64ps`|`42.56ns`|`6.01ns - 46.7ns`|
|@mapl/router (jit)|`1048576`|`15.24ns ± 632.58ps`|`44.44ns`|`6.27ns - 46.57ns`|
|rou3 (jit)|`1048576`|`36.1ns ± 416.52ps`|`43.96ns`|`19.09ns - 86.75ns`|
|@mapl/pattern-router|`1048576`|`43.9ns ± 879.71ps`|`130.99ns`|`24.28ns - 140.29ns`|
|hono reg-exp-router|`1048576`|`63.82ns ± 711.42ps`|`102.14ns`|`43.62ns - 104.95ns`|
|find-my-way (jit)|`1048576`|`64.45ns ± 941.39ps`|`109.94ns`|`35.99ns - 136.56ns`|
|hono pattern-router|`1048576`|`208.85ns ± 1.77ns`|`299.81ns`|`150.95ns - 328.2ns`|
|rou3|`1048576`|`218.52ns ± 1.92ns`|`320.16ns`|`160.75ns - 334.97ns`|
|hono trie-router|`1048576`|`220.11ns ± 1.31ns`|`267.86ns`|`170.51ns - 326.22ns`|
|hono linear-router|`1048576`|`517.43ns ± 1.48ns`|`616.98ns`|`461.57ns - 697.98ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`12.61ns ± 372.68ps`|`41.5ns`|`6.64ns - 47.47ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.81ns ± 380.77ps`|`43.37ns`|`6.51ns - 47.8ns`|
|rou3 (jit)|`1048576`|`35.68ns ± 542.77ps`|`69.95ns`|`19.03ns - 74.05ns`|
|@mapl/pattern-router|`1048576`|`40.84ns ± 656.52ps`|`74.73ns`|`23.52ns - 111.73ns`|
|hono reg-exp-router|`1048576`|`64.28ns ± 1.02ns`|`101.45ns`|`35.08ns - 142.8ns`|
|rou3|`1048576`|`110.6ns ± 1.31ns`|`148.48ns`|`63.5ns - 168.66ns`|
|find-my-way (jit)|`1048576`|`124.94ns ± 1.47ns`|`179.14ns`|`70.95ns - 186.29ns`|
|hono pattern-router|`1048576`|`182.54ns ± 1.54ns`|`246.56ns`|`132.46ns - 285.33ns`|
|hono trie-router|`1048576`|`234.57ns ± 1.92ns`|`394.43ns`|`182.2ns - 401.36ns`|
|hono linear-router|`1048576`|`555.83ns ± 1.2ns`|`600.26ns`|`503.07ns - 661.97ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`58.99ns ± 744.57ps`|`94.65ns`|`34.53ns - 100.81ns`|
|@mapl/pattern-router (jit)|`1048576`|`141.48ns ± 1.36ns`|`171.53ns`|`89.71ns - 210.28ns`|
|find-my-way (jit)|`1048576`|`214ns ± 2.08ns`|`321.31ns`|`131.44ns - 343.6ns`|
|rou3 (jit)|`1048576`|`218.81ns ± 1.89ns`|`349.78ns`|`160.32ns - 355.15ns`|
|hono pattern-router|`1048576`|`248.56ns ± 2.46ns`|`332.93ns`|`170.87ns - 333.88ns`|
|@mapl/pattern-router|`1048576`|`507.42ns ± 1.24ns`|`571.29ns`|`468.63ns - 733.11ns`|
|hono linear-router|`1048576`|`717.3ns ± 1.21ns`|`766.32ns`|`661.88ns - 915.23ns`|
|hono reg-exp-router|`1048576`|`758.1ns ± 2.73ns`|`834.35ns`|`683.52ns - 836.6ns`|
|hono trie-router|`1048576`|`994.64ns ± 3.56ns`|`1.08μs`|`927.81ns - 1.09μs`|
|rou3|`1048576`|`2μs ± 3.97ns`|`2.28μs`|`1.94μs - 2.4μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`61.18ns ± 833.5ps`|`96.46ns`|`34.11ns - 126.56ns`|
|@mapl/pattern-router (jit)|`1048576`|`137.77ns ± 1.6ns`|`196.34ns`|`87.95ns - 264.14ns`|
|hono pattern-router|`1048576`|`192.29ns ± 1.34ns`|`228.59ns`|`138.45ns - 270.38ns`|
|rou3 (jit)|`1048576`|`215.42ns ± 1.6ns`|`295.22ns`|`161.31ns - 321.3ns`|
|find-my-way (jit)|`1048576`|`222.81ns ± 1.82ns`|`300.67ns`|`132.17ns - 359.51ns`|
|@mapl/pattern-router|`1048576`|`500.26ns ± 1.47ns`|`533.37ns`|`464.22ns - 719.87ns`|
|hono linear-router|`1048576`|`511.03ns ± 2.83ns`|`611.56ns`|`454.01ns - 986.59ns`|
|hono reg-exp-router|`1048576`|`754.84ns ± 3.27ns`|`845.52ns`|`675.14ns - 1.07μs`|
|hono trie-router|`1048576`|`980.83ns ± 3.36ns`|`1.08μs`|`915.53ns - 1.08μs`|
|rou3|`1048576`|`1.94μs ± 2.49ns`|`2.03μs`|`1.89μs - 2.12μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.28ns ± 416.8ps`|`45.46ns`|`6.71ns - 47.36ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.62ns ± 689.65ps`|`46.43ns`|`5.82ns - 88.17ns`|
|rou3 (jit)|`1048576`|`33.23ns ± 709.51ps`|`69.29ns`|`17.32ns - 100.91ns`|
|@mapl/pattern-router|`1048576`|`41.78ns ± 705.39ps`|`78.22ns`|`23.53ns - 105.9ns`|
|hono reg-exp-router|`1048576`|`60.8ns ± 696.01ps`|`93.06ns`|`35.53ns - 98.49ns`|
|rou3|`1048576`|`84.31ns ± 948.25ps`|`114.48ns`|`47.89ns - 118.4ns`|
|find-my-way (jit)|`1048576`|`119.24ns ± 1.58ns`|`172.13ns`|`67.42ns - 192.03ns`|
|hono pattern-router|`1048576`|`159.27ns ± 1.54ns`|`203.62ns`|`107.29ns - 235.34ns`|
|hono trie-router|`1048576`|`227.09ns ± 1.57ns`|`302.7ns`|`172.86ns - 338.62ns`|
|hono linear-router|`1048576`|`293.16ns ± 2.09ns`|`437.58ns`|`232.07ns - 507.07ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`62.52ns ± 777.39ps`|`98.21ns`|`33.21ns - 107ns`|
|@mapl/pattern-router (jit)|`1048576`|`145.83ns ± 1.53ns`|`194.27ns`|`93.04ns - 207.56ns`|
|rou3 (jit)|`1048576`|`218.28ns ± 1.79ns`|`299.67ns`|`163.89ns - 372.18ns`|
|find-my-way (jit)|`1048576`|`220.71ns ± 1.92ns`|`345.85ns`|`136.68ns - 354.47ns`|
|hono pattern-router|`1048576`|`258.28ns ± 1.95ns`|`397.57ns`|`196.14ns - 404.6ns`|
|@mapl/pattern-router|`1048576`|`280.46ns ± 1.28ns`|`324.08ns`|`229.27ns - 436.77ns`|
|hono reg-exp-router|`1048576`|`770.54ns ± 2.73ns`|`850.29ns`|`718.62ns - 866.22ns`|
|hono linear-router|`1048576`|`831.26ns ± 1.81ns`|`912.46ns`|`775.16ns - 1.19μs`|
|hono trie-router|`1048576`|`977.64ns ± 3.51ns`|`1.08μs`|`917.11ns - 1.09μs`|
|rou3|`1048576`|`1.95μs ± 2.72ns`|`2.03μs`|`1.89μs - 2.04μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`58.23ns ± 687.82ps`|`92.04ns`|`33.23ns - 95.47ns`|
|@mapl/pattern-router (jit)|`1048576`|`144.06ns ± 1.36ns`|`192.21ns`|`89.38ns - 201.33ns`|
|hono pattern-router|`1048576`|`193.6ns ± 1.55ns`|`265.94ns`|`137.66ns - 281.85ns`|
|rou3 (jit)|`1048576`|`222.37ns ± 1.73ns`|`284.06ns`|`164.66ns - 326.91ns`|
|find-my-way (jit)|`1048576`|`225.64ns ± 2.09ns`|`294.2ns`|`133.93ns - 490.1ns`|
|@mapl/pattern-router|`1048576`|`501.99ns ± 1.21ns`|`556.91ns`|`456.32ns - 676.89ns`|
|hono linear-router|`1048576`|`511.98ns ± 3.25ns`|`716.72ns`|`451.38ns - 990.22ns`|
|hono reg-exp-router|`1048576`|`744.28ns ± 1.63ns`|`858.11ns`|`705.39ns - 889.29ns`|
|hono trie-router|`1048576`|`979.95ns ± 3.48ns`|`1.08μs`|`889.53ns - 1.1μs`|
|rou3|`1048576`|`1.96μs ± 3.65ns`|`2.09μs`|`1.9μs - 2.46μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`154.89ns ± 1.81ns`|`201.14ns`|`96.16ns - 224.19ns`|
|@mapl/pattern-router (jit)|`1048576`|`202.84ns ± 1.77ns`|`267.69ns`|`136.92ns - 297.51ns`|
|hono pattern-router|`1048576`|`310.37ns ± 2.13ns`|`391.25ns`|`247.49ns - 534.87ns`|
|rou3 (jit)|`1048576`|`311.87ns ± 2.13ns`|`433.59ns`|`248.55ns - 519.47ns`|
|find-my-way (jit)|`1048576`|`377.52ns ± 2.84ns`|`581.21ns`|`262.8ns - 630.09ns`|
|@mapl/pattern-router|`1048576`|`597.89ns ± 906.07ps`|`642.02ns`|`551.44ns - 664.14ns`|
|hono reg-exp-router|`1048576`|`864.49ns ± 3.09ns`|`966.67ns`|`813.22ns - 976.31ns`|
|hono linear-router|`1048576`|`943.74ns ± 885.09ps`|`991.03ns`|`887.47ns - 1.01μs`|
|hono trie-router|`1048576`|`1.06μs ± 4.01ns`|`1.24μs`|`969.38ns - 1.45μs`|
|rou3|`1048576`|`2.23μs ± 3.49ns`|`2.34μs`|`2.14μs - 2.37μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`155.32ns ± 1.66ns`|`203.92ns`|`92.39ns - 226.55ns`|
|@mapl/pattern-router (jit)|`1048576`|`182.4ns ± 1.58ns`|`233.84ns`|`116.68ns - 256.14ns`|
|hono pattern-router|`1048576`|`265.73ns ± 1.97ns`|`367ns`|`189.7ns - 379.3ns`|
|rou3 (jit)|`1048576`|`338.31ns ± 1.71ns`|`447.26ns`|`277.2ns - 475.01ns`|
|find-my-way (jit)|`1048576`|`400.45ns ± 2.96ns`|`614.56ns`|`317.17ns - 728.57ns`|
|hono reg-exp-router|`1048576`|`456.09ns ± 2.64ns`|`628.94ns`|`401.22ns - 816.6ns`|
|hono linear-router|`1048576`|`554.26ns ± 3.11ns`|`750.54ns`|`495.16ns - 1μs`|
|@mapl/pattern-router|`1048576`|`570.45ns ± 2.1ns`|`662ns`|`521.92ns - 881.04ns`|
|hono trie-router|`1048576`|`1.04μs ± 3.77ns`|`1.16μs`|`994.85ns - 1.2μs`|
|rou3|`1048576`|`2.2μs ± 5.26ns`|`2.38μs`|`2.11μs - 3.13μs`|

# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.76ns ± 407.55ps`|`47.75ns`|`5.55ns - 49.28ns`|
|@mapl/router (jit)|`1048576`|`12.52ns ± 273.52ps`|`18.16ns`|`6.23ns - 47.88ns`|
|rou3 (jit)|`1048576`|`40.91ns ± 570.49ps`|`73.17ns`|`21.95ns - 111.79ns`|
|@mapl/pattern-router|`1048576`|`42ns ± 527.56ps`|`75.02ns`|`24.45ns - 89.75ns`|
|hono reg-exp-router|`1048576`|`67.13ns ± 849.27ps`|`110.29ns`|`35.81ns - 117.95ns`|
|find-my-way (jit)|`1048576`|`74.96ns ± 1.38ns`|`129.96ns`|`36.81ns - 160.69ns`|
|rou3|`1048576`|`230.51ns ± 1.79ns`|`341.22ns`|`171.89ns - 382.4ns`|
|hono pattern-router|`1048576`|`248.01ns ± 3.22ns`|`350.62ns`|`151.62ns - 410.49ns`|
|hono trie-router|`1048576`|`314.4ns ± 2.88ns`|`435.95ns`|`229.56ns - 506.37ns`|
|hono linear-router|`1048576`|`635.01ns ± 3.75ns`|`741.03ns`|`572.2ns - 1.24μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.17ns ± 341.81ps`|`43.45ns`|`6.74ns - 48.44ns`|
|@mapl/pattern-router (jit)|`1048576`|`14.4ns ± 656.68ps`|`47.83ns`|`6.03ns - 96.21ns`|
|rou3 (jit)|`1048576`|`37.52ns ± 612.97ps`|`74.06ns`|`20.04ns - 106.52ns`|
|@mapl/pattern-router|`1048576`|`41.91ns ± 914.93ps`|`79.25ns`|`21.85ns - 113.86ns`|
|hono reg-exp-router|`1048576`|`65.44ns ± 954.77ps`|`123.12ns`|`34.72ns - 127.07ns`|
|rou3|`1048576`|`116.4ns ± 1.24ns`|`148.66ns`|`63.72ns - 154.53ns`|
|find-my-way (jit)|`1048576`|`131.13ns ± 1.67ns`|`167.11ns`|`73.59ns - 194.18ns`|
|hono pattern-router|`1048576`|`198.76ns ± 1.91ns`|`284.2ns`|`134.63ns - 302.64ns`|
|hono trie-router|`1048576`|`300.4ns ± 2.04ns`|`437.71ns`|`243.98ns - 527.02ns`|
|hono linear-router|`1048576`|`706.04ns ± 2.83ns`|`809.99ns`|`647.05ns - 1.32μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`68.83ns ± 996.95ps`|`111.43ns`|`33.18ns - 123.81ns`|
|@mapl/pattern-router (jit)|`1048576`|`170.86ns ± 1.95ns`|`286.96ns`|`110.34ns - 301.16ns`|
|hono pattern-router|`1048576`|`257.27ns ± 1.73ns`|`319.78ns`|`197.01ns - 384.09ns`|
|find-my-way (jit)|`1048576`|`257.37ns ± 2.86ns`|`466.02ns`|`163.96ns - 476.73ns`|
|rou3 (jit)|`1048576`|`278.41ns ± 2.02ns`|`432.88ns`|`215.06ns - 433.94ns`|
|@mapl/pattern-router|`1048576`|`332.63ns ± 2.17ns`|`528.96ns`|`277.71ns - 544.02ns`|
|hono reg-exp-router|`1048576`|`852.6ns ± 3.09ns`|`942.27ns`|`791.74ns - 948.12ns`|
|hono trie-router|`1048576`|`1.03μs ± 4.21ns`|`1.17μs`|`964.17ns - 1.22μs`|
|hono linear-router|`1048576`|`1.55μs ± 8.22ns`|`1.77μs`|`1.43μs - 1.8μs`|
|rou3|`1048576`|`2.09μs ± 3.7ns`|`2.23μs`|`2μs - 2.41μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`75.35ns ± 880.06ps`|`112.41ns`|`42.68ns - 134.59ns`|
|@mapl/pattern-router (jit)|`1048576`|`164.52ns ± 1.62ns`|`217.79ns`|`105.26ns - 256.82ns`|
|hono pattern-router|`1048576`|`219.04ns ± 1.88ns`|`307.6ns`|`154.77ns - 313.08ns`|
|rou3 (jit)|`1048576`|`264.02ns ± 2.63ns`|`460.78ns`|`195.83ns - 473.97ns`|
|find-my-way (jit)|`1048576`|`266.65ns ± 2.45ns`|`422.42ns`|`182.27ns - 471.75ns`|
|@mapl/pattern-router|`1048576`|`546.5ns ± 1.04ns`|`604.62ns`|`506.02ns - 646.19ns`|
|hono reg-exp-router|`1048576`|`839.89ns ± 2.94ns`|`932.11ns`|`770.78ns - 943.61ns`|
|hono trie-router|`1048576`|`1.05μs ± 3.9ns`|`1.18μs`|`982.05ns - 1.22μs`|
|hono linear-router|`1048576`|`1.14μs ± 4.82ns`|`1.22μs`|`1.07μs - 2.21μs`|
|rou3|`1048576`|`2.08μs ± 4.04ns`|`2.22μs`|`2.01μs - 2.51μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.85ns ± 725.69ps`|`49.93ns`|`5.45ns - 97.73ns`|
|@mapl/router (jit)|`1048576`|`16.28ns ± 690.76ps`|`48.24ns`|`6.34ns - 95.86ns`|
|rou3 (jit)|`1048576`|`35.57ns ± 962.91ps`|`108.66ns`|`16.82ns - 112.77ns`|
|@mapl/pattern-router|`1048576`|`43.48ns ± 820.86ps`|`80.18ns`|`22.83ns - 116.47ns`|
|hono reg-exp-router|`1048576`|`61.71ns ± 874.76ps`|`102.59ns`|`33.62ns - 136.93ns`|
|rou3|`1048576`|`88.15ns ± 874.19ps`|`112.97ns`|`47.48ns - 125.63ns`|
|find-my-way (jit)|`1048576`|`131.44ns ± 1.73ns`|`167.3ns`|`71.67ns - 229.5ns`|
|hono pattern-router|`1048576`|`171.47ns ± 1.79ns`|`256.11ns`|`110.63ns - 259.81ns`|
|hono trie-router|`1048576`|`296.69ns ± 2.36ns`|`487.64ns`|`233.65ns - 497.36ns`|
|hono linear-router|`1048576`|`333.72ns ± 2.6ns`|`519.03ns`|`270.26ns - 610.91ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`77.55ns ± 1.13ns`|`115.3ns`|`33.96ns - 132.4ns`|
|@mapl/pattern-router (jit)|`1048576`|`166.37ns ± 1.56ns`|`222.16ns`|`108.89ns - 228.93ns`|
|rou3 (jit)|`1048576`|`265.22ns ± 2.02ns`|`392.18ns`|`202.93ns - 490.45ns`|
|find-my-way (jit)|`1048576`|`275.33ns ± 3.26ns`|`450.95ns`|`190.84ns - 473.05ns`|
|hono pattern-router|`1048576`|`289.54ns ± 2.35ns`|`472.87ns`|`222.23ns - 493.08ns`|
|@mapl/pattern-router|`1048576`|`340.45ns ± 2.16ns`|`484.78ns`|`281.64ns - 559.24ns`|
|hono reg-exp-router|`1048576`|`879.63ns ± 3.22ns`|`961.5ns`|`782.02ns - 967.18ns`|
|hono trie-router|`1048576`|`1.04μs ± 4.43ns`|`1.19μs`|`979.9ns - 1.27μs`|
|rou3|`1048576`|`2.12μs ± 3.92ns`|`2.25μs`|`2.03μs - 2.3μs`|
|hono linear-router|`1048576`|`2.13μs ± 8.63ns`|`2.41μs`|`1.98μs - 2.51μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`62.49ns ± 932.93ps`|`99.29ns`|`31.96ns - 124.66ns`|
|@mapl/pattern-router (jit)|`1048576`|`170.65ns ± 1.53ns`|`223.92ns`|`111.88ns - 286.29ns`|
|hono pattern-router|`1048576`|`213.26ns ± 1.53ns`|`286.18ns`|`146.7ns - 294.33ns`|
|find-my-way (jit)|`1048576`|`254.95ns ± 2.87ns`|`421.01ns`|`159.06ns - 553.86ns`|
|rou3 (jit)|`1048576`|`272.11ns ± 2.04ns`|`423.54ns`|`210.93ns - 444.39ns`|
|@mapl/pattern-router|`1048576`|`582.36ns ± 2.23ns`|`661.49ns`|`543.42ns - 1.06μs`|
|hono reg-exp-router|`1048576`|`869ns ± 3.05ns`|`955.48ns`|`810.46ns - 961.3ns`|
|hono trie-router|`1048576`|`1.06μs ± 4.58ns`|`1.19μs`|`989.06ns - 1.21μs`|
|hono linear-router|`1048576`|`1.14μs ± 5.61ns`|`1.56μs`|`1.07μs - 2.11μs`|
|rou3|`1048576`|`2.14μs ± 7.7ns`|`2.62μs`|`2.02μs - 2.84μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`180.93ns ± 1.79ns`|`245.78ns`|`111.34ns - 278.91ns`|
|@mapl/pattern-router (jit)|`1048576`|`241.27ns ± 1.69ns`|`329.58ns`|`172.01ns - 332.54ns`|
|hono pattern-router|`1048576`|`395.79ns ± 2.65ns`|`657.58ns`|`319.6ns - 664.77ns`|
|rou3 (jit)|`1048576`|`412.79ns ± 2.22ns`|`534.51ns`|`340.09ns - 631.79ns`|
|find-my-way (jit)|`1048576`|`476.96ns ± 2.99ns`|`610.64ns`|`338.98ns - 889.28ns`|
|@mapl/pattern-router|`1048576`|`760.54ns ± 4.26ns`|`881.99ns`|`639.31ns - 1.09μs`|
|hono reg-exp-router|`1048576`|`1.02μs ± 3.57ns`|`1.12μs`|`942.55ns - 1.15μs`|
|hono trie-router|`1048576`|`1.16μs ± 4.41ns`|`1.28μs`|`1.09μs - 1.32μs`|
|hono linear-router|`1048576`|`2.25μs ± 9.06ns`|`2.54μs`|`2.14μs - 2.77μs`|
|rou3|`1048576`|`2.35μs ± 3.99ns`|`2.49μs`|`2.26μs - 2.5μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`180.76ns ± 1.82ns`|`269.59ns`|`97.35ns - 285.89ns`|
|@mapl/pattern-router (jit)|`1048576`|`213.85ns ± 1.67ns`|`278.9ns`|`138.74ns - 325.54ns`|
|hono pattern-router|`1048576`|`319.8ns ± 2.05ns`|`439.69ns`|`246.34ns - 498.76ns`|
|rou3 (jit)|`1048576`|`407.7ns ± 2.38ns`|`494.06ns`|`343.44ns - 734.96ns`|
|find-my-way (jit)|`1048576`|`487.97ns ± 2.15ns`|`614.71ns`|`421.41ns - 668.89ns`|
|hono reg-exp-router|`1048576`|`547.95ns ± 2.81ns`|`682.13ns`|`483.02ns - 996.24ns`|
|@mapl/pattern-router|`1048576`|`711.59ns ± 3.17ns`|`830.62ns`|`634.04ns - 866.07ns`|
|hono trie-router|`1048576`|`1.14μs ± 4ns`|`1.28μs`|`1.08μs - 1.3μs`|
|rou3|`1048576`|`2.34μs ± 4ns`|`2.5μs`|`2.23μs - 2.59μs`|
|hono linear-router|`1048576`|`3.3μs ± 8.87ns`|`3.57μs`|`3.16μs - 3.77μs`|


# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`18.06ns ± 934.19ps`|`52.12ns`|`6.07ns - 100.54ns`|
|@mapl/router (jit)|`1048576`|`18.16ns ± 961.21ps`|`88.87ns`|`6.14ns - 111.97ns`|
|rou3 (jit)|`1048576`|`39.94ns ± 874.51ps`|`99.21ns`|`20.78ns - 133.48ns`|
|@mapl/pattern-router|`1048576`|`43.7ns ± 779.98ps`|`89.64ns`|`24.04ns - 117.46ns`|
|find-my-way (jit)|`1048576`|`71.36ns ± 1.07ns`|`110.6ns`|`36.2ns - 151.89ns`|
|hono reg-exp-router|`1048576`|`73.61ns ± 1.01ns`|`110.69ns`|`34.7ns - 128.29ns`|
|hono pattern-router|`1048576`|`223.29ns ± 1.59ns`|`323.91ns`|`157.74ns - 327.08ns`|
|rou3|`1048576`|`240.74ns ± 2.5ns`|`380.79ns`|`171.03ns - 394.73ns`|
|hono trie-router|`1048576`|`278.87ns ± 2.43ns`|`508.41ns`|`225.34ns - 521.01ns`|
|hono linear-router|`1048576`|`720.77ns ± 10.75ns`|`1.07μs`|`553.82ns - 1.31μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`14.71ns ± 690.06ps`|`47.52ns`|`6.77ns - 100.47ns`|
|@mapl/pattern-router (jit)|`1048576`|`15.18ns ± 588.42ps`|`48.29ns`|`6.78ns - 99.55ns`|
|rou3 (jit)|`1048576`|`40.78ns ± 1.07ns`|`108.09ns`|`19.79ns - 197.61ns`|
|@mapl/pattern-router|`1048576`|`44.09ns ± 842.37ps`|`82.4ns`|`23.1ns - 112.59ns`|
|hono reg-exp-router|`1048576`|`65.16ns ± 1.05ns`|`122.92ns`|`34.12ns - 127.49ns`|
|rou3|`1048576`|`116.75ns ± 1.31ns`|`157.6ns`|`65.56ns - 169.6ns`|
|find-my-way (jit)|`1048576`|`135.34ns ± 1.52ns`|`209.03ns`|`73.69ns - 215.17ns`|
|hono pattern-router|`1048576`|`195.29ns ± 1.76ns`|`281.22ns`|`133.33ns - 309.92ns`|
|hono trie-router|`1048576`|`287.53ns ± 1.52ns`|`360.2ns`|`234.12ns - 444.57ns`|
|hono linear-router|`1048576`|`660.76ns ± 3.17ns`|`805.58ns`|`596.79ns - 1.28μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`68.93ns ± 755.56ps`|`110.84ns`|`32.59ns - 116.11ns`|
|@mapl/pattern-router (jit)|`1048576`|`156.15ns ± 1.63ns`|`241.61ns`|`95.08ns - 246.09ns`|
|hono pattern-router|`1048576`|`252.3ns ± 1.47ns`|`323.54ns`|`189.2ns - 371.37ns`|
|find-my-way (jit)|`1048576`|`254.34ns ± 1.84ns`|`356.58ns`|`144.08ns - 381.15ns`|
|rou3 (jit)|`1048576`|`257.38ns ± 2.79ns`|`429.55ns`|`185.87ns - 446.36ns`|
|@mapl/pattern-router|`1048576`|`537.22ns ± 2.11ns`|`663.88ns`|`493.24ns - 814.45ns`|
|hono reg-exp-router|`1048576`|`794.74ns ± 2.17ns`|`877.59ns`|`745.29ns - 890.07ns`|
|hono linear-router|`1048576`|`883.27ns ± 3.65ns`|`1.17μs`|`813.24ns - 1.22μs`|
|hono trie-router|`1048576`|`1.02μs ± 3.35ns`|`1.14μs`|`945.85ns - 1.16μs`|
|rou3|`1048576`|`2.02μs ± 5.79ns`|`2.11μs`|`1.93μs - 3.02μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`70.29ns ± 806.65ps`|`105.55ns`|`34.34ns - 121.18ns`|
|@mapl/pattern-router (jit)|`1048576`|`147.79ns ± 1.82ns`|`212.98ns`|`84.28ns - 231.08ns`|
|hono pattern-router|`1048576`|`210.8ns ± 1.67ns`|`300.74ns`|`148.53ns - 330.4ns`|
|rou3 (jit)|`1048576`|`253.91ns ± 2.61ns`|`416.88ns`|`184.5ns - 527.71ns`|
|find-my-way (jit)|`1048576`|`267.18ns ± 2.95ns`|`448.54ns`|`193.01ns - 459.12ns`|
|@mapl/pattern-router|`1048576`|`544.21ns ± 2.1ns`|`660.7ns`|`491.6ns - 673.96ns`|
|hono linear-router|`1048576`|`626.87ns ± 3.84ns`|`986.26ns`|`562.73ns - 1.16μs`|
|hono reg-exp-router|`1048576`|`788.37ns ± 3.42ns`|`909.52ns`|`700.01ns - 1.16μs`|
|hono trie-router|`1048576`|`1.02μs ± 3.73ns`|`1.17μs`|`917.14ns - 1.31μs`|
|rou3|`1048576`|`2.01μs ± 2.66ns`|`2.13μs`|`1.94μs - 2.17μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`12.74ns ± 649.48ps`|`48.31ns`|`5.55ns - 101.26ns`|
|@mapl/router (jit)|`1048576`|`14.57ns ± 684.1ps`|`51.48ns`|`6.33ns - 95.01ns`|
|rou3 (jit)|`1048576`|`35.32ns ± 771.79ps`|`74.69ns`|`16.71ns - 78.45ns`|
|@mapl/pattern-router|`1048576`|`43.14ns ± 888.17ps`|`90.85ns`|`22.73ns - 121.54ns`|
|hono reg-exp-router|`1048576`|`66.07ns ± 959.23ps`|`124.95ns`|`36.41ns - 135.14ns`|
|rou3|`1048576`|`91.15ns ± 1.02ns`|`121.03ns`|`48.72ns - 146.05ns`|
|find-my-way (jit)|`1048576`|`134.1ns ± 1.5ns`|`181.05ns`|`70.12ns - 204.07ns`|
|hono pattern-router|`1048576`|`168.97ns ± 1.68ns`|`255.77ns`|`106.99ns - 262.73ns`|
|hono trie-router|`1048576`|`274.75ns ± 1.84ns`|`377.57ns`|`217.3ns - 497ns`|
|hono linear-router|`1048576`|`325.32ns ± 2.73ns`|`495.7ns`|`261.02ns - 609.77ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.51ns ± 903.58ps`|`104.93ns`|`33.05ns - 127.36ns`|
|@mapl/pattern-router (jit)|`1048576`|`164.97ns ± 1.81ns`|`250.75ns`|`99.85ns - 291.25ns`|
|find-my-way (jit)|`1048576`|`278.49ns ± 3.44ns`|`445.89ns`|`151.53ns - 465.54ns`|
|rou3 (jit)|`1048576`|`284.58ns ± 4.08ns`|`466.91ns`|`193.6ns - 481.08ns`|
|hono pattern-router|`1048576`|`292.47ns ± 2.8ns`|`476.74ns`|`222.08ns - 551.76ns`|
|@mapl/pattern-router|`1048576`|`327.27ns ± 1.55ns`|`413.73ns`|`269.51ns - 452.33ns`|
|hono reg-exp-router|`1048576`|`409.55ns ± 1.8ns`|`466.39ns`|`356.84ns - 719.81ns`|
|hono trie-router|`1048576`|`1.01μs ± 4.77ns`|`1.18μs`|`900.81ns - 1.58μs`|
|hono linear-router|`1048576`|`1.09μs ± 6.81ns`|`1.43μs`|`980.75ns - 1.58μs`|
|rou3|`1048576`|`2.03μs ± 2.41ns`|`2.11μs`|`1.97μs - 2.15μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.74ns ± 706.02ps`|`100.25ns`|`31.29ns - 131.3ns`|
|@mapl/pattern-router (jit)|`1048576`|`147.49ns ± 1.5ns`|`197.22ns`|`84.99ns - 207.66ns`|
|hono pattern-router|`1048576`|`216.66ns ± 2.46ns`|`339.75ns`|`145.14ns - 342.36ns`|
|rou3 (jit)|`1048576`|`256.53ns ± 2.56ns`|`418.46ns`|`184.41ns - 462.47ns`|
|find-my-way (jit)|`1048576`|`259.8ns ± 2.18ns`|`409.25ns`|`196.35ns - 411.89ns`|
|@mapl/pattern-router|`1048576`|`531.15ns ± 2.19ns`|`696.23ns`|`481.22ns - 798.23ns`|
|hono linear-router|`1048576`|`629.72ns ± 3.73ns`|`732.84ns`|`567.58ns - 1.26μs`|
|hono reg-exp-router|`1048576`|`756.85ns ± 3.92ns`|`1.09μs`|`684.69ns - 1.14μs`|
|hono trie-router|`1048576`|`1.01μs ± 3.11ns`|`1.13μs`|`946.47ns - 1.14μs`|
|rou3|`1048576`|`2.01μs ± 2.79ns`|`2.09μs`|`1.95μs - 2.36μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`167.95ns ± 1.74ns`|`232.52ns`|`98.31ns - 254.7ns`|
|@mapl/pattern-router (jit)|`1048576`|`223.72ns ± 1.91ns`|`316.41ns`|`158.96ns - 350.52ns`|
|rou3 (jit)|`1048576`|`366.98ns ± 2.6ns`|`490.66ns`|`296.31ns - 682.76ns`|
|hono pattern-router|`1048576`|`374.28ns ± 1.72ns`|`454.81ns`|`304.66ns - 514.28ns`|
|@mapl/pattern-router|`1048576`|`414.56ns ± 1.57ns`|`491.96ns`|`353.81ns - 557.12ns`|
|find-my-way (jit)|`1048576`|`489.75ns ± 5.64ns`|`858.53ns`|`385.01ns - 867.5ns`|
|hono reg-exp-router|`1048576`|`504.58ns ± 1.4ns`|`569.37ns`|`444.75ns - 616.19ns`|
|hono trie-router|`1048576`|`1.12μs ± 3.3ns`|`1.26μs`|`1.06μs - 1.33μs`|
|hono linear-router|`1048576`|`1.26μs ± 6.77ns`|`1.5μs`|`1.13μs - 1.55μs`|
|rou3|`1048576`|`2.21μs ± 2.52ns`|`2.31μs`|`2.15μs - 2.38μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`183.06ns ± 1.45ns`|`254.41ns`|`117.33ns - 280.78ns`|
|@mapl/pattern-router (jit)|`1048576`|`206.38ns ± 2ns`|`298.21ns`|`134.01ns - 301.56ns`|
|hono pattern-router|`1048576`|`303.22ns ± 2.14ns`|`428.79ns`|`230.89ns - 510.64ns`|
|rou3 (jit)|`1048576`|`371.47ns ± 1.92ns`|`486.99ns`|`303.05ns - 599.19ns`|
|@mapl/pattern-router|`1048576`|`398.92ns ± 1.86ns`|`508.96ns`|`336.48ns - 513.61ns`|
|find-my-way (jit)|`1048576`|`493.77ns ± 5.17ns`|`855.05ns`|`395.74ns - 912.46ns`|
|hono linear-router|`1048576`|`619.65ns ± 1.24ns`|`683.63ns`|`558.2ns - 694.04ns`|
|hono reg-exp-router|`1048576`|`920.37ns ± 2.57ns`|`1.02μs`|`860.1ns - 1.03μs`|
|hono trie-router|`1048576`|`1.12μs ± 2.92ns`|`1.26μs`|`1.07μs - 1.3μs`|
|rou3|`1048576`|`2.21μs ± 2.42ns`|`2.3μs`|`2.14μs - 2.37μs`|

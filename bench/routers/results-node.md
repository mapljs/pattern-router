# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.08ns ± 506.68ps`|`47.98ns`|`6.21ns - 95.07ns`|
|@mapl/router (jit)|`1048576`|`13.83ns ± 761.56ps`|`50.12ns`|`6.18ns - 121.89ns`|
|rou3 (jit)|`1048576`|`38.92ns ± 365.02ps`|`70.34ns`|`19.99ns - 80.62ns`|
|@mapl/pattern-router|`1048576`|`44.28ns ± 682.98ps`|`88.86ns`|`22.96ns - 106.93ns`|
|hono reg-exp-router|`1048576`|`66.61ns ± 749.04ps`|`105.79ns`|`36.3ns - 114.22ns`|
|find-my-way (jit)|`1048576`|`75.49ns ± 549.27ps`|`115.65ns`|`36.71ns - 127.82ns`|
|hono pattern-router|`1048576`|`225.38ns ± 1.12ns`|`266.3ns`|`165.73ns - 358.93ns`|
|rou3|`1048576`|`257.45ns ± 844.91ps`|`298.9ns`|`199.98ns - 370.78ns`|
|hono trie-router|`1048576`|`300ns ± 5.51ns`|`446ns`|`202.78ns - 1.35μs`|
|hono linear-router|`1048576`|`631.43ns ± 3.4ns`|`840.95ns`|`574.07ns - 1.2μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.59ns ± 327.46ps`|`44.1ns`|`6.76ns - 49.42ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.92ns ± 367.13ps`|`45.7ns`|`6.61ns - 79.41ns`|
|rou3 (jit)|`1048576`|`37.5ns ± 225.67ps`|`42.05ns`|`19.07ns - 82.12ns`|
|@mapl/pattern-router|`1048576`|`47.72ns ± 883.54ps`|`82.23ns`|`23.44ns - 112.52ns`|
|hono reg-exp-router|`1048576`|`66.91ns ± 411.37ps`|`99.65ns`|`35.79ns - 106ns`|
|rou3|`1048576`|`113.64ns ± 654.6ps`|`132.25ns`|`61.93ns - 136.72ns`|
|find-my-way (jit)|`1048576`|`139.21ns ± 1.01ns`|`201.38ns`|`78.84ns - 204.06ns`|
|hono pattern-router|`1048576`|`227.92ns ± 1.32ns`|`326.78ns`|`164.63ns - 382.86ns`|
|hono trie-router|`1048576`|`279.1ns ± 1.19ns`|`323.53ns`|`222.99ns - 459.5ns`|
|hono linear-router|`1048576`|`699.01ns ± 1.86ns`|`769.42ns`|`637.05ns - 1.07μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.62ns ± 412.66ps`|`75.83ns`|`33.31ns - 114.2ns`|
|@mapl/pattern-router (jit)|`1048576`|`155.71ns ± 515.18ps`|`204.71ns`|`142.36ns - 218.88ns`|
|rou3 (jit)|`1048576`|`233.54ns ± 1.62ns`|`286.95ns`|`169ns - 507.58ns`|
|find-my-way (jit)|`1048576`|`253.12ns ± 1.23ns`|`307.83ns`|`188.48ns - 407.4ns`|
|hono pattern-router|`1048576`|`286.27ns ± 752.58ps`|`321.11ns`|`229.01ns - 380.5ns`|
|@mapl/pattern-router|`1048576`|`350.67ns ± 962.39ps`|`397.02ns`|`307.87ns - 549.61ns`|
|hono reg-exp-router|`1048576`|`457.89ns ± 607.8ps`|`504.66ns`|`406.65ns - 550.1ns`|
|hono trie-router|`1048576`|`938.12ns ± 2.65ns`|`1μs`|`836.54ns - 1.06μs`|
|rou3|`1048576`|`945.45ns ± 932.96ps`|`1.01μs`|`907.87ns - 1.03μs`|
|hono linear-router|`1048576`|`1.51μs ± 5.82ns`|`1.76μs`|`1.42μs - 1.77μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.09ns ± 566.21ps`|`102.91ns`|`32.45ns - 111.49ns`|
|@mapl/pattern-router (jit)|`1048576`|`156.45ns ± 751.17ps`|`198.75ns`|`97.9ns - 246.08ns`|
|rou3 (jit)|`1048576`|`227.63ns ± 858ps`|`271.64ns`|`171.27ns - 385.74ns`|
|hono pattern-router|`1048576`|`229.13ns ± 646.52ps`|`255.72ns`|`166.87ns - 316.26ns`|
|find-my-way (jit)|`1048576`|`251.31ns ± 1.38ns`|`309.34ns`|`160.6ns - 321.1ns`|
|@mapl/pattern-router|`1048576`|`359.64ns ± 543.56ps`|`390.92ns`|`328.13ns - 431.25ns`|
|hono reg-exp-router|`1048576`|`454.04ns ± 1.02ns`|`503.01ns`|`433.01ns - 603.83ns`|
|hono trie-router|`1048576`|`943.83ns ± 2.9ns`|`1.05μs`|`889.25ns - 1.07μs`|
|rou3|`1048576`|`1.01μs ± 2.9ns`|`1.11μs`|`956.56ns - 1.32μs`|
|hono linear-router|`1048576`|`1.13μs ± 4.18ns`|`1.16μs`|`1.11μs - 2.14μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.91ns ± 481.11ps`|`50.78ns`|`5.48ns - 90.26ns`|
|@mapl/router (jit)|`1048576`|`18.64ns ± 831.08ps`|`52.69ns`|`6.33ns - 98.64ns`|
|rou3 (jit)|`1048576`|`33.46ns ± 478.46ps`|`65.32ns`|`16.73ns - 128.05ns`|
|@mapl/pattern-router|`1048576`|`41.91ns ± 576.43ps`|`79.91ns`|`21.16ns - 84.48ns`|
|hono reg-exp-router|`1048576`|`63.61ns ± 957.32ps`|`100.04ns`|`31.26ns - 103.56ns`|
|rou3|`1048576`|`86.57ns ± 533.96ps`|`117.93ns`|`76.04ns - 120.01ns`|
|find-my-way (jit)|`1048576`|`133.69ns ± 439.4ps`|`140.16ns`|`74.97ns - 145.6ns`|
|hono pattern-router|`1048576`|`172.7ns ± 689.35ps`|`210.85ns`|`114.19ns - 215.15ns`|
|hono trie-router|`1048576`|`264.59ns ± 1.2ns`|`327.39ns`|`201.74ns - 425.12ns`|
|hono linear-router|`1048576`|`338.8ns ± 1.53ns`|`399.3ns`|`274.84ns - 564.89ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`70.91ns ± 584.59ps`|`106.07ns`|`33.65ns - 107.16ns`|
|@mapl/pattern-router (jit)|`1048576`|`160.24ns ± 672.88ps`|`187.56ns`|`98.78ns - 252.68ns`|
|rou3 (jit)|`1048576`|`232.85ns ± 1.89ns`|`394.71ns`|`165.26ns - 413.97ns`|
|find-my-way (jit)|`1048576`|`255.28ns ± 1.57ns`|`323.72ns`|`189.8ns - 405.04ns`|
|hono pattern-router|`1048576`|`305.26ns ± 948.43ps`|`352.07ns`|`250.58ns - 432.89ns`|
|@mapl/pattern-router|`1048576`|`341.96ns ± 605.38ps`|`387.17ns`|`295.19ns - 404.02ns`|
|hono reg-exp-router|`1048576`|`442.26ns ± 887.15ps`|`496.88ns`|`392.9ns - 543.35ns`|
|hono trie-router|`1048576`|`944.03ns ± 3.16ns`|`1.08μs`|`889.42ns - 1.08μs`|
|rou3|`1048576`|`1μs ± 2.72ns`|`1.11μs`|`944.44ns - 1.14μs`|
|hono linear-router|`1048576`|`2.17μs ± 8.8ns`|`2.61μs`|`2.06μs - 3.11μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`67.19ns ± 509.57ps`|`101.72ns`|`31.68ns - 109.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`160.82ns ± 908.74ps`|`209.26ns`|`98.78ns - 255.8ns`|
|hono pattern-router|`1048576`|`229.03ns ± 1.35ns`|`341.59ns`|`172.33ns - 345.93ns`|
|rou3 (jit)|`1048576`|`231.73ns ± 1.26ns`|`338.58ns`|`169.99ns - 419.01ns`|
|find-my-way (jit)|`1048576`|`253.93ns ± 1.88ns`|`407.89ns`|`189.72ns - 423.92ns`|
|@mapl/pattern-router|`1048576`|`331.38ns ± 659.71ps`|`372.25ns`|`282.05ns - 408.58ns`|
|hono reg-exp-router|`1048576`|`434.47ns ± 684.59ps`|`491.95ns`|`391.87ns - 538.54ns`|
|hono trie-router|`1048576`|`929.05ns ± 2.44ns`|`1.01μs`|`863.16ns - 1.08μs`|
|rou3|`1048576`|`1μs ± 3.03ns`|`1.14μs`|`948.51ns - 1.17μs`|
|hono linear-router|`1048576`|`1.26μs ± 5.69ns`|`1.39μs`|`1.17μs - 1.52μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`184.71ns ± 1.07ns`|`243.33ns`|`114.11ns - 288.25ns`|
|@mapl/pattern-router (jit)|`1048576`|`230.66ns ± 1.26ns`|`333.3ns`|`162.96ns - 343.94ns`|
|rou3 (jit)|`1048576`|`339.94ns ± 776.45ps`|`374.22ns`|`281.6ns - 382.47ns`|
|hono pattern-router|`1048576`|`398.69ns ± 2.3ns`|`547.12ns`|`330.08ns - 695.16ns`|
|@mapl/pattern-router|`1048576`|`413.56ns ± 899ps`|`464.78ns`|`358.94ns - 499.99ns`|
|find-my-way (jit)|`1048576`|`458.18ns ± 2.4ns`|`556.03ns`|`378.75ns - 843.79ns`|
|hono reg-exp-router|`1048576`|`535.32ns ± 1.92ns`|`698.46ns`|`482.36ns - 716.9ns`|
|hono trie-router|`1048576`|`1.06μs ± 2.89ns`|`1.15μs`|`1.01μs - 1.18μs`|
|rou3|`1048576`|`1.2μs ± 3.01ns`|`1.29μs`|`1.13μs - 1.53μs`|
|hono linear-router|`1048576`|`2.24μs ± 6.18ns`|`2.46μs`|`2.11μs - 2.55μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`176.77ns ± 739.18ps`|`223.98ns`|`112.32ns - 272ns`|
|@mapl/pattern-router (jit)|`1048576`|`209.96ns ± 1.1ns`|`287.05ns`|`145.28ns - 314.09ns`|
|hono pattern-router|`1048576`|`317.16ns ± 2.28ns`|`518.38ns`|`246.28ns - 524.66ns`|
|rou3 (jit)|`1048576`|`342.83ns ± 2.4ns`|`529.17ns`|`272.36ns - 584.35ns`|
|@mapl/pattern-router|`1048576`|`401.11ns ± 1.85ns`|`523.65ns`|`339.08ns - 665.64ns`|
|find-my-way (jit)|`1048576`|`454.37ns ± 2.42ns`|`505.7ns`|`368.68ns - 850.19ns`|
|hono reg-exp-router|`1048576`|`497.27ns ± 770.4ps`|`556.98ns`|`438.55ns - 600.08ns`|
|hono trie-router|`1048576`|`1.06μs ± 2.77ns`|`1.14μs`|`1.02μs - 1.23μs`|
|rou3|`1048576`|`1.2μs ± 3.6ns`|`1.34μs`|`1.11μs - 1.49μs`|
|hono linear-router|`1048576`|`3.28μs ± 6.24ns`|`3.52μs`|`3.13μs - 3.66μs`|

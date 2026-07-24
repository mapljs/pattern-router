# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`6.1ns ± 64.91ps`|`11.7ns`|`5.13ns - 12ns`|
|@mapl/pattern-router (jit)|`1048576`|`6.52ns ± 57.32ps`|`10.99ns`|`5.4ns - 12.49ns`|
|rou3 (jit)|`1048576`|`16.29ns ± 156.73ps`|`26.02ns`|`14.55ns - 38.46ns`|
|@mapl/pattern-router|`1048576`|`19.31ns ± 154.66ps`|`30.46ns`|`17.66ns - 36.26ns`|
|hono reg-exp-router|`1048576`|`26.15ns ± 182.72ps`|`38.45ns`|`23.96ns - 47.81ns`|
|find-my-way (jit)|`1048576`|`47.67ns ± 1.02ns`|`138.42ns`|`39.98ns - 170.42ns`|
|rou3|`1048576`|`88.47ns ± 438.86ps`|`117.52ns`|`75.95ns - 121.19ns`|
|hono trie-router|`1048576`|`150.4ns ± 2.31ns`|`353.48ns`|`130.22ns - 444.72ns`|
|hono pattern-router|`1048576`|`162.97ns ± 1.01ns`|`240.04ns`|`150.36ns - 307.38ns`|
|hono linear-router|`1048576`|`717.6ns ± 11.23ns`|`1.29μs`|`625.72ns - 1.3μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`10.69ns ± 69.96ps`|`16.2ns`|`9.84ns - 17.4ns`|
|@mapl/pattern-router (jit)|`1048576`|`11.28ns ± 87.69ps`|`17.7ns`|`10.11ns - 18.69ns`|
|hono reg-exp-router|`1048576`|`25.93ns ± 136.63ps`|`32.11ns`|`23.6ns - 41.98ns`|
|rou3 (jit)|`1048576`|`28.82ns ± 446.18ps`|`47.42ns`|`22.52ns - 60.95ns`|
|@mapl/pattern-router|`1048576`|`31.9ns ± 171.95ps`|`41.61ns`|`29.33ns - 50.47ns`|
|rou3|`1048576`|`44.76ns ± 683.26ps`|`75.29ns`|`36.94ns - 85.98ns`|
|find-my-way (jit)|`1048576`|`61.72ns ± 1.07ns`|`147.76ns`|`52.43ns - 224.88ns`|
|hono trie-router|`1048576`|`158.7ns ± 2.57ns`|`367.98ns`|`138.98ns - 560.4ns`|
|hono pattern-router|`1048576`|`172.37ns ± 1.69ns`|`298.13ns`|`152.74ns - 373.47ns`|
|hono linear-router|`1048576`|`696.45ns ± 2.56ns`|`779.62ns`|`654.05ns - 1.12μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`74.24ns ± 342.28ps`|`98.85ns`|`61.61ns - 122.68ns`|
|rou3 (jit)|`1048576`|`162.66ns ± 933.43ps`|`248.26ns`|`140.35ns - 286.42ns`|
|find-my-way (jit)|`1048576`|`170.76ns ± 1.29ns`|`272.58ns`|`151.83ns - 343.61ns`|
|@mapl/pattern-router (jit)|`1048576`|`185.96ns ± 1.46ns`|`306.92ns`|`161.95ns - 330.4ns`|
|@mapl/pattern-router|`1048576`|`238.75ns ± 1.34ns`|`341.64ns`|`215.25ns - 405.38ns`|
|hono reg-exp-router|`1048576`|`276.6ns ± 2.1ns`|`359.08ns`|`248.88ns - 701.51ns`|
|hono pattern-router|`1048576`|`299.8ns ± 1.98ns`|`433.87ns`|`281.13ns - 595.94ns`|
|rou3|`1048576`|`402.71ns ± 1.64ns`|`509.71ns`|`369.03ns - 563.69ns`|
|hono trie-router|`1048576`|`577.29ns ± 4.38ns`|`968.06ns`|`533.22ns - 1.13μs`|
|hono linear-router|`1048576`|`842.73ns ± 5.29ns`|`1.22μs`|`776.46ns - 1.61μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`61.45ns ± 304.47ps`|`83.14ns`|`52.63ns - 108.54ns`|
|rou3 (jit)|`1048576`|`161.75ns ± 814.11ps`|`221.66ns`|`145.43ns - 264.93ns`|
|find-my-way (jit)|`1048576`|`172.83ns ± 1.59ns`|`296.82ns`|`141.67ns - 343.26ns`|
|@mapl/pattern-router (jit)|`1048576`|`173.88ns ± 772.61ps`|`241.44ns`|`151.3ns - 253.35ns`|
|@mapl/pattern-router|`1048576`|`225.71ns ± 1.26ns`|`299.93ns`|`193.75ns - 468.68ns`|
|hono pattern-router|`1048576`|`262.69ns ± 1.46ns`|`376.23ns`|`229.98ns - 446.05ns`|
|hono reg-exp-router|`1048576`|`278.33ns ± 1.57ns`|`380.51ns`|`259.18ns - 461.94ns`|
|rou3|`1048576`|`398.87ns ± 2.14ns`|`569.31ns`|`371.64ns - 694.78ns`|
|hono trie-router|`1048576`|`560.07ns ± 4.12ns`|`947.27ns`|`503.36ns - 960.48ns`|
|hono linear-router|`1048576`|`565.67ns ± 2.92ns`|`798.67ns`|`523.5ns - 869.13ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.29ns ± 71.02ps`|`15.22ns`|`8.51ns - 16.02ns`|
|@mapl/pattern-router (jit)|`1048576`|`10ns ± 75.5ps`|`15.64ns`|`8.44ns - 16.01ns`|
|rou3 (jit)|`1048576`|`21.64ns ± 206.84ps`|`35.15ns`|`19.49ns - 50.75ns`|
|hono reg-exp-router|`1048576`|`22.14ns ± 104.75ps`|`28.14ns`|`18.74ns - 28.67ns`|
|rou3|`1048576`|`29.84ns ± 159.41ps`|`37.81ns`|`25.5ns - 44.55ns`|
|@mapl/pattern-router|`1048576`|`33.38ns ± 161.67ps`|`43.17ns`|`29.25ns - 50.15ns`|
|find-my-way (jit)|`1048576`|`54.71ns ± 1.04ns`|`100.99ns`|`46.24ns - 220.83ns`|
|hono pattern-router|`1048576`|`121.36ns ± 909.84ps`|`175.07ns`|`106.35ns - 230.55ns`|
|hono trie-router|`1048576`|`156.65ns ± 2.29ns`|`307.01ns`|`132.41ns - 547.68ns`|
|hono linear-router|`1048576`|`303.75ns ± 1.47ns`|`432.93ns`|`266.79ns - 478.63ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`73.55ns ± 365.02ps`|`96.37ns`|`62.2ns - 115.56ns`|
|rou3 (jit)|`1048576`|`161.88ns ± 814.37ps`|`221.29ns`|`141.11ns - 242.74ns`|
|find-my-way (jit)|`1048576`|`177.58ns ± 1.5ns`|`276.47ns`|`150.63ns - 331.34ns`|
|@mapl/pattern-router (jit)|`1048576`|`185.03ns ± 1.14ns`|`271.69ns`|`163.94ns - 322.1ns`|
|@mapl/pattern-router|`1048576`|`237.47ns ± 1.09ns`|`306.81ns`|`220.62ns - 328.08ns`|
|hono reg-exp-router|`1048576`|`266.42ns ± 1.7ns`|`383.73ns`|`229.68ns - 459.64ns`|
|hono pattern-router|`1048576`|`294.42ns ± 1.39ns`|`402.45ns`|`268.24ns - 469.64ns`|
|rou3|`1048576`|`407.71ns ± 1.49ns`|`508.01ns`|`384.89ns - 554.25ns`|
|hono trie-router|`1048576`|`608.65ns ± 3.51ns`|`974.85ns`|`545.54ns - 1.06μs`|
|hono linear-router|`1048576`|`912.38ns ± 5.53ns`|`1.28μs`|`848.35ns - 1.5μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.16ns ± 308.68ps`|`89.37ns`|`58.35ns - 98.25ns`|
|rou3 (jit)|`1048576`|`160.2ns ± 1.26ns`|`254.48ns`|`138.13ns - 338.32ns`|
|find-my-way (jit)|`1048576`|`171.74ns ± 1.29ns`|`272.95ns`|`155.08ns - 338.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`176.24ns ± 926.57ps`|`252.79ns`|`160.69ns - 285.92ns`|
|@mapl/pattern-router|`1048576`|`225.69ns ± 1.05ns`|`273.5ns`|`200.61ns - 354.98ns`|
|hono pattern-router|`1048576`|`260.51ns ± 1.58ns`|`402.97ns`|`241.17ns - 446.54ns`|
|hono reg-exp-router|`1048576`|`263.53ns ± 1.57ns`|`350.07ns`|`231.55ns - 492.57ns`|
|rou3|`1048576`|`406.39ns ± 1.86ns`|`557.23ns`|`376.99ns - 666.9ns`|
|hono linear-router|`1048576`|`572.76ns ± 2.94ns`|`809.22ns`|`530.77ns - 872.05ns`|
|hono trie-router|`1048576`|`616.42ns ± 4.48ns`|`1.06μs`|`559.6ns - 1.17μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`88.52ns ± 365.36ps`|`110.7ns`|`81.36ns - 130.83ns`|
|@mapl/pattern-router (jit)|`1048576`|`190.34ns ± 1.12ns`|`303.38ns`|`175.81ns - 335.03ns`|
|rou3 (jit)|`1048576`|`210.1ns ± 1.2ns`|`265.68ns`|`186.17ns - 445.54ns`|
|find-my-way (jit)|`1048576`|`221.8ns ± 2.18ns`|`416.15ns`|`200.49ns - 464.86ns`|
|@mapl/pattern-router|`1048576`|`242.49ns ± 1.5ns`|`315.6ns`|`213.36ns - 478.49ns`|
|hono reg-exp-router|`1048576`|`275.83ns ± 1.35ns`|`371.5ns`|`253.15ns - 444.17ns`|
|hono pattern-router|`1048576`|`310.94ns ± 1.41ns`|`425.85ns`|`291.05ns - 467.18ns`|
|rou3|`1048576`|`488.35ns ± 1.94ns`|`620.04ns`|`456.33ns - 651.58ns`|
|hono trie-router|`1048576`|`689.06ns ± 3.07ns`|`790.4ns`|`645.13ns - 1.23μs`|
|hono linear-router|`1048576`|`952.26ns ± 4.2ns`|`1.26μs`|`835.24ns - 1.46μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`79.84ns ± 377.24ps`|`106.5ns`|`69.92ns - 140.33ns`|
|@mapl/pattern-router (jit)|`1048576`|`174.99ns ± 1.42ns`|`282.42ns`|`147.92ns - 367.22ns`|
|rou3 (jit)|`1048576`|`202.72ns ± 1.06ns`|`272.41ns`|`174.02ns - 323.25ns`|
|find-my-way (jit)|`1048576`|`218.14ns ± 1.39ns`|`308.97ns`|`192.26ns - 429.4ns`|
|@mapl/pattern-router|`1048576`|`226.85ns ± 719.83ps`|`271.75ns`|`213.61ns - 340.23ns`|
|hono pattern-router|`1048576`|`254.85ns ± 1.73ns`|`368.79ns`|`241.35ns - 512.36ns`|
|hono reg-exp-router|`1048576`|`276.98ns ± 1.64ns`|`372.15ns`|`248.28ns - 466.48ns`|
|rou3|`1048576`|`473.65ns ± 1.62ns`|`581.73ns`|`415.11ns - 642.74ns`|
|hono linear-router|`1048576`|`494.75ns ± 2.16ns`|`666.47ns`|`452.42ns - 701.35ns`|
|hono trie-router|`1048576`|`698.21ns ± 6.53ns`|`1.21μs`|`624.77ns - 1.24μs`|


# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`9.25ns ± 504.83ps`|`35.79ns`|`4.22ns - 82.21ns`|
|@mapl/router (jit)|`1048576`|`10.26ns ± 457.12ps`|`34.95ns`|`4.87ns - 80.49ns`|
|rou3 (jit)|`1048576`|`27.83ns ± 376.16ps`|`54.81ns`|`15.33ns - 60.38ns`|
|@mapl/pattern-router|`1048576`|`31.81ns ± 543.11ps`|`60.33ns`|`18.59ns - 89.1ns`|
|hono reg-exp-router|`1048576`|`46.37ns ± 626.09ps`|`75.24ns`|`27.76ns - 78.91ns`|
|find-my-way (jit)|`1048576`|`50.35ns ± 743.54ps`|`79.33ns`|`27.95ns - 83.21ns`|
|rou3|`1048576`|`157.26ns ± 1.31ns`|`218.51ns`|`114.18ns - 243.69ns`|
|hono pattern-router|`1048576`|`161.05ns ± 1.44ns`|`209.37ns`|`118.55ns - 258.88ns`|
|hono trie-router|`1048576`|`184.8ns ± 1.38ns`|`235.65ns`|`141.62ns - 285.67ns`|
|hono linear-router|`1048576`|`426.82ns ± 3.17ns`|`525.99ns`|`364.25ns - 907.67ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`10.53ns ± 505.51ps`|`35.79ns`|`4.66ns - 80.96ns`|
|@mapl/router (jit)|`1048576`|`11.06ns ± 413.19ps`|`35.39ns`|`5.16ns - 37.55ns`|
|rou3 (jit)|`1048576`|`27.62ns ± 523.35ps`|`55.56ns`|`15.09ns - 61.49ns`|
|@mapl/pattern-router|`1048576`|`30.26ns ± 479.23ps`|`57.91ns`|`17.9ns - 91.65ns`|
|hono reg-exp-router|`1048576`|`46.72ns ± 651.74ps`|`77.6ns`|`27.42ns - 102.02ns`|
|rou3|`1048576`|`85.32ns ± 984.93ps`|`108.86ns`|`50.9ns - 113.75ns`|
|find-my-way (jit)|`1048576`|`98.21ns ± 1.29ns`|`138.8ns`|`55.31ns - 150.28ns`|
|hono pattern-router|`1048576`|`147.19ns ± 1.41ns`|`203.95ns`|`103.13ns - 273.45ns`|
|hono trie-router|`1048576`|`192.24ns ± 1.62ns`|`285.63ns`|`146.3ns - 324.28ns`|
|hono linear-router|`1048576`|`464.23ns ± 1.06ns`|`509.68ns`|`420.64ns - 551.98ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`47.2ns ± 610.75ps`|`75.57ns`|`27.31ns - 77.18ns`|
|@mapl/pattern-router (jit)|`1048576`|`116.14ns ± 1.15ns`|`151.34ns`|`73.95ns - 166.08ns`|
|find-my-way (jit)|`1048576`|`173.21ns ± 1.41ns`|`243.43ns`|`116.02ns - 281.59ns`|
|rou3 (jit)|`1048576`|`186.04ns ± 1.24ns`|`250.59ns`|`145.67ns - 305.35ns`|
|hono pattern-router|`1048576`|`189.98ns ± 1.43ns`|`271.44ns`|`142.94ns - 296.25ns`|
|hono reg-exp-router|`1048576`|`308.9ns ± 1.82ns`|`417.28ns`|`268.56ns - 501.8ns`|
|@mapl/pattern-router|`1048576`|`427.11ns ± 1.42ns`|`533.9ns`|`395.1ns - 611.83ns`|
|hono trie-router|`1048576`|`810.59ns ± 2.73ns`|`883.03ns`|`762.63ns - 915.03ns`|
|hono linear-router|`1048576`|`1.18μs ± 6.8ns`|`1.35μs`|`1.05μs - 1.37μs`|
|rou3|`1048576`|`1.7μs ± 2.26ns`|`1.75μs`|`1.63μs - 1.76μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`46.09ns ± 503.23ps`|`68.16ns`|`26.64ns - 76.41ns`|
|@mapl/pattern-router (jit)|`1048576`|`112.41ns ± 1.33ns`|`151.23ns`|`69.91ns - 178.03ns`|
|hono pattern-router|`1048576`|`155.65ns ± 1.23ns`|`211.1ns`|`110.66ns - 213.15ns`|
|find-my-way (jit)|`1048576`|`172.86ns ± 1.69ns`|`244.85ns`|`109.75ns - 293.42ns`|
|rou3 (jit)|`1048576`|`192.46ns ± 1.46ns`|`294.01ns`|`145.69ns - 300.1ns`|
|@mapl/pattern-router|`1048576`|`422.67ns ± 806.78ps`|`478.53ns`|`391.45ns - 480.44ns`|
|hono reg-exp-router|`1048576`|`654.87ns ± 2.15ns`|`714.77ns`|`616.15ns - 723.74ns`|
|hono trie-router|`1048576`|`816.89ns ± 3ns`|`888.62ns`|`763.77ns - 906.94ns`|
|hono linear-router|`1048576`|`932.79ns ± 6.26ns`|`1.12μs`|`838.67ns - 1.14μs`|
|rou3|`1048576`|`1.68μs ± 2.38ns`|`1.76μs`|`1.62μs - 1.82μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.12ns ± 478.96ps`|`35.25ns`|`5.22ns - 79.8ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.04ns ± 585.42ps`|`36.66ns`|`4.3ns - 39.85ns`|
|rou3 (jit)|`1048576`|`25.5ns ± 481.17ps`|`52.9ns`|`13.45ns - 55.68ns`|
|@mapl/pattern-router|`1048576`|`32.74ns ± 569.08ps`|`59.61ns`|`18.48ns - 61.94ns`|
|hono reg-exp-router|`1048576`|`47.78ns ± 576.13ps`|`76.22ns`|`32.15ns - 82.01ns`|
|rou3|`1048576`|`64.24ns ± 815.87ps`|`86.89ns`|`37.66ns - 91.76ns`|
|find-my-way (jit)|`1048576`|`97.63ns ± 1.41ns`|`135.72ns`|`52.45ns - 147.22ns`|
|hono pattern-router|`1048576`|`128.1ns ± 1.45ns`|`167.1ns`|`83.71ns - 191.41ns`|
|hono trie-router|`1048576`|`183.66ns ± 1.4ns`|`251.92ns`|`135.9ns - 258.92ns`|
|hono linear-router|`1048576`|`233.48ns ± 1.68ns`|`327.13ns`|`187.84ns - 395.22ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`47.48ns ± 618.11ps`|`73.04ns`|`27.28ns - 108.87ns`|
|@mapl/pattern-router (jit)|`1048576`|`115.65ns ± 1.24ns`|`154.69ns`|`72.11ns - 168.91ns`|
|find-my-way (jit)|`1048576`|`173.95ns ± 1.41ns`|`243.76ns`|`115.91ns - 247.98ns`|
|rou3 (jit)|`1048576`|`190.93ns ± 1.56ns`|`301.03ns`|`144.24ns - 320.97ns`|
|hono pattern-router|`1048576`|`204.97ns ± 1.32ns`|`269.16ns`|`159.33ns - 300.9ns`|
|hono reg-exp-router|`1048576`|`287.61ns ± 1.74ns`|`364.6ns`|`242.47ns - 504.11ns`|
|@mapl/pattern-router|`1048576`|`448.39ns ± 1.63ns`|`531.95ns`|`411.91ns - 653.96ns`|
|hono trie-router|`1048576`|`809.49ns ± 2.79ns`|`890.17ns`|`770.67ns - 898.67ns`|
|hono linear-router|`1048576`|`1.65μs ± 5.81ns`|`1.82μs`|`1.56μs - 1.84μs`|
|rou3|`1048576`|`1.69μs ± 1.92ns`|`1.77μs`|`1.64μs - 1.78μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`45.36ns ± 680.41ps`|`73.92ns`|`26ns - 105.06ns`|
|@mapl/pattern-router (jit)|`1048576`|`113.36ns ± 1.29ns`|`140.39ns`|`68.87ns - 160.01ns`|
|hono pattern-router|`1048576`|`158.52ns ± 1.32ns`|`211.79ns`|`110.97ns - 215.32ns`|
|find-my-way (jit)|`1048576`|`182.6ns ± 1.75ns`|`289.15ns`|`106.11ns - 294.85ns`|
|rou3 (jit)|`1048576`|`203.88ns ± 1.85ns`|`326.97ns`|`155.33ns - 328.22ns`|
|@mapl/pattern-router|`1048576`|`438.75ns ± 1.43ns`|`498.34ns`|`403.13ns - 637.65ns`|
|hono reg-exp-router|`1048576`|`671.5ns ± 2.45ns`|`738.51ns`|`610.29ns - 740.28ns`|
|hono trie-router|`1048576`|`799.96ns ± 2.8ns`|`893.26ns`|`745.24ns - 920.92ns`|
|hono linear-router|`1048576`|`969.7ns ± 6.75ns`|`1.14μs`|`878.07ns - 1.48μs`|
|rou3|`1048576`|`1.7μs ± 2.7ns`|`1.81μs`|`1.64μs - 1.84μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`128.09ns ± 1.45ns`|`157.24ns`|`76.78ns - 180.04ns`|
|@mapl/pattern-router (jit)|`1048576`|`160.34ns ± 1.71ns`|`221.65ns`|`105.58ns - 242.67ns`|
|hono pattern-router|`1048576`|`263.91ns ± 2.26ns`|`436.03ns`|`202.96ns - 448.3ns`|
|rou3 (jit)|`1048576`|`290.43ns ± 3.78ns`|`462.18ns`|`216.72ns - 477.79ns`|
|find-my-way (jit)|`1048576`|`308.56ns ± 2.23ns`|`414.61ns`|`229.64ns - 573.37ns`|
|@mapl/pattern-router|`1048576`|`555.26ns ± 2.31ns`|`646.46ns`|`497.39ns - 651.17ns`|
|hono reg-exp-router|`1048576`|`756.75ns ± 2.48ns`|`833.63ns`|`717.83ns - 841.24ns`|
|hono trie-router|`1048576`|`885.12ns ± 2.9ns`|`967.66ns`|`839.51ns - 978.93ns`|
|hono linear-router|`1048576`|`1.74μs ± 6.7ns`|`1.92μs`|`1.65μs - 1.95μs`|
|rou3|`1048576`|`1.88μs ± 2.51ns`|`1.96μs`|`1.82μs - 2.06μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`125.01ns ± 1.76ns`|`179.31ns`|`74.05ns - 183.12ns`|
|@mapl/pattern-router (jit)|`1048576`|`148.49ns ± 1.61ns`|`197.83ns`|`94.02ns - 212.8ns`|
|hono pattern-router|`1048576`|`215.65ns ± 2.24ns`|`334.04ns`|`152.85ns - 344.92ns`|
|rou3 (jit)|`1048576`|`276.32ns ± 1.97ns`|`413.54ns`|`216.36ns - 458.67ns`|
|find-my-way (jit)|`1048576`|`311.11ns ± 1.71ns`|`395.7ns`|`254.91ns - 493.49ns`|
|@mapl/pattern-router|`1048576`|`509.62ns ± 883.46ps`|`576.22ns`|`474.94ns - 586.76ns`|
|hono reg-exp-router|`1048576`|`720.79ns ± 2.71ns`|`834.76ns`|`671.27ns - 1.09μs`|
|hono trie-router|`1048576`|`884.12ns ± 2.83ns`|`964.62ns`|`797.06ns - 993.9ns`|
|rou3|`1048576`|`1.9μs ± 6.63ns`|`2.35μs`|`1.82μs - 2.84μs`|
|hono linear-router|`1048576`|`2.54μs ± 7.54ns`|`2.85μs`|`2.41μs - 3.03μs`|


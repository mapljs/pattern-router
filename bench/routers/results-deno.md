# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.46ns ± 299.2ps`|`32.93ns`|`5.43ns - 35.84ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.07ns ± 445.45ps`|`34ns`|`4.52ns - 36.91ns`|
|rou3 (jit)|`1048576`|`27.99ns ± 403.37ps`|`52.49ns`|`16.16ns - 76.27ns`|
|find-my-way (jit)|`1048576`|`44.7ns ± 501.79ps`|`70.79ns`|`24.37ns - 82.16ns`|
|hono reg-exp-router|`1048576`|`49.53ns ± 629.5ps`|`76.14ns`|`28.52ns - 78.79ns`|
|hono pattern-router|`1048576`|`169.97ns ± 1.64ns`|`248.07ns`|`117.37ns - 265.35ns`|
|rou3|`1048576`|`181.41ns ± 1.6ns`|`254.51ns`|`123.74ns - 290.43ns`|
|hono trie-router|`1048576`|`204.72ns ± 2.55ns`|`343.85ns`|`133.19ns - 351.6ns`|
|hono linear-router|`1048576`|`494.82ns ± 4.73ns`|`803.36ns`|`404.62ns - 845.66ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`9.15ns ± 273.85ps`|`30.35ns`|`5.17ns - 33.98ns`|
|@mapl/router (jit)|`1048576`|`10.27ns ± 363.35ps`|`34.96ns`|`5.36ns - 38.19ns`|
|rou3 (jit)|`1048576`|`26.85ns ± 464.1ps`|`53.97ns`|`14.71ns - 57ns`|
|hono reg-exp-router|`1048576`|`48.07ns ± 545.1ps`|`68.79ns`|`27.86ns - 78.55ns`|
|rou3|`1048576`|`86.08ns ± 802.99ps`|`113.68ns`|`51.85ns - 117.57ns`|
|find-my-way (jit)|`1048576`|`101.93ns ± 1.09ns`|`132.41ns`|`58.25ns - 140.72ns`|
|hono pattern-router|`1048576`|`154.82ns ± 1.44ns`|`209.3ns`|`101.67ns - 215.8ns`|
|hono trie-router|`1048576`|`202.72ns ± 1.83ns`|`294.35ns`|`141.5ns - 309.68ns`|
|hono linear-router|`1048576`|`491.97ns ± 1.13ns`|`533.08ns`|`434.93ns - 590.3ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`43.93ns ± 545.37ps`|`69.42ns`|`27.09ns - 73.32ns`|
|@mapl/pattern-router (jit)|`1048576`|`116.22ns ± 1.23ns`|`156.69ns`|`63.84ns - 164.01ns`|
|hono pattern-router|`1048576`|`182.35ns ± 1.52ns`|`249.78ns`|`123.93ns - 267.52ns`|
|rou3 (jit)|`1048576`|`186.42ns ± 1.4ns`|`241.54ns`|`122.84ns - 309.48ns`|
|find-my-way (jit)|`1048576`|`195.96ns ± 1.89ns`|`307.64ns`|`114.04ns - 324.35ns`|
|hono reg-exp-router|`1048576`|`304.67ns ± 1.44ns`|`377.09ns`|`255.38ns - 413.7ns`|
|hono linear-router|`1048576`|`595.71ns ± 1.24ns`|`660.54ns`|`542.14ns - 696.64ns`|
|hono trie-router|`1048576`|`622.23ns ± 3.6ns`|`734.79ns`|`540.83ns - 747.36ns`|
|rou3|`1048576`|`1.49μs ± 3.04ns`|`1.63μs`|`1.44μs - 1.69μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`45.39ns ± 639.14ps`|`73.16ns`|`26.22ns - 76.13ns`|
|@mapl/pattern-router (jit)|`1048576`|`111.57ns ± 1.11ns`|`148.08ns`|`60.06ns - 161.54ns`|
|hono pattern-router|`1048576`|`155.63ns ± 1.67ns`|`230.46ns`|`98.81ns - 240.15ns`|
|rou3 (jit)|`1048576`|`182.36ns ± 1.75ns`|`266.3ns`|`121.51ns - 314.15ns`|
|find-my-way (jit)|`1048576`|`200.63ns ± 2.08ns`|`321.95ns`|`112.77ns - 326.07ns`|
|hono linear-router|`1048576`|`419.56ns ± 2.45ns`|`535.51ns`|`359.48ns - 783.84ns`|
|hono reg-exp-router|`1048576`|`612.76ns ± 3.35ns`|`733.71ns`|`533.65ns - 880.92ns`|
|hono trie-router|`1048576`|`637.41ns ± 4.19ns`|`762.08ns`|`534.67ns - 827.08ns`|
|rou3|`1048576`|`1.5μs ± 5.1ns`|`1.83μs`|`1.43μs - 2.05μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.46ns ± 331.1ps`|`30.81ns`|`5.11ns - 38.84ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.6ns ± 442.37ps`|`33.58ns`|`4.18ns - 40.42ns`|
|rou3 (jit)|`1048576`|`22.63ns ± 287.28ps`|`32.86ns`|`13.42ns - 51.54ns`|
|hono reg-exp-router|`1048576`|`45.64ns ± 538.08ps`|`71.76ns`|`27.25ns - 76.28ns`|
|rou3|`1048576`|`66.29ns ± 633.87ps`|`89.28ns`|`40.78ns - 99.41ns`|
|find-my-way (jit)|`1048576`|`98.45ns ± 1.31ns`|`134.02ns`|`53.53ns - 174.7ns`|
|hono pattern-router|`1048576`|`130.21ns ± 1.59ns`|`170.99ns`|`78.36ns - 184.93ns`|
|hono trie-router|`1048576`|`198.26ns ± 2.08ns`|`292.47ns`|`136.01ns - 366.82ns`|
|hono linear-router|`1048576`|`247.51ns ± 2.09ns`|`408.68ns`|`182.66ns - 424.59ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`45.38ns ± 466.85ps`|`66.57ns`|`26.97ns - 72.02ns`|
|@mapl/pattern-router (jit)|`1048576`|`118.42ns ± 1.43ns`|`151.83ns`|`64.59ns - 194.39ns`|
|rou3 (jit)|`1048576`|`192.5ns ± 2.06ns`|`281.32ns`|`127.24ns - 320.48ns`|
|find-my-way (jit)|`1048576`|`195.67ns ± 1.75ns`|`268.76ns`|`117.74ns - 307.83ns`|
|hono pattern-router|`1048576`|`207.12ns ± 2.1ns`|`311.51ns`|`147.58ns - 318.66ns`|
|hono reg-exp-router|`1048576`|`306.99ns ± 2.09ns`|`449.57ns`|`243.38ns - 473.44ns`|
|hono trie-router|`1048576`|`637.27ns ± 4.18ns`|`750.76ns`|`576.19ns - 849.42ns`|
|hono linear-router|`1048576`|`678.65ns ± 2.79ns`|`781.99ns`|`612.89ns - 1.28μs`|
|rou3|`1048576`|`1.55μs ± 7.55ns`|`1.98μs`|`1.45μs - 2.27μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`42.95ns ± 492.04ps`|`69.31ns`|`25.24ns - 76.05ns`|
|@mapl/pattern-router (jit)|`1048576`|`110.21ns ± 1.37ns`|`137.07ns`|`60.19ns - 151.66ns`|
|hono pattern-router|`1048576`|`153.96ns ± 1.81ns`|`217.54ns`|`94.34ns - 241.35ns`|
|rou3 (jit)|`1048576`|`190.16ns ± 2.18ns`|`321.96ns`|`128.91ns - 416.11ns`|
|find-my-way (jit)|`1048576`|`194.98ns ± 1.92ns`|`308.33ns`|`137.76ns - 327.09ns`|
|hono linear-router|`1048576`|`425.27ns ± 1.95ns`|`542.42ns`|`362.32ns - 566.89ns`|
|hono trie-router|`1048576`|`627.73ns ± 3.76ns`|`753.64ns`|`579.12ns - 805.35ns`|
|hono reg-exp-router|`1048576`|`639.5ns ± 2.65ns`|`736.64ns`|`603.18ns - 772.24ns`|
|rou3|`1048576`|`1.51μs ± 3.51ns`|`1.64μs`|`1.44μs - 1.77μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`140.3ns ± 1.21ns`|`184.13ns`|`82.41ns - 189.43ns`|
|@mapl/pattern-router (jit)|`1048576`|`166.89ns ± 1.67ns`|`211.45ns`|`101.69ns - 213.31ns`|
|rou3 (jit)|`1048576`|`267.66ns ± 1.71ns`|`344.26ns`|`202.11ns - 390.31ns`|
|hono pattern-router|`1048576`|`273.57ns ± 2.23ns`|`423.66ns`|`202.8ns - 435.63ns`|
|find-my-way (jit)|`1048576`|`338.09ns ± 1.86ns`|`434.99ns`|`277.59ns - 503.13ns`|
|hono trie-router|`1048576`|`719.6ns ± 3.76ns`|`849.5ns`|`667.24ns - 888.33ns`|
|hono reg-exp-router|`1048576`|`749.87ns ± 3.02ns`|`838.2ns`|`698.23ns - 1.01μs`|
|hono linear-router|`1048576`|`772.31ns ± 1.73ns`|`876.09ns`|`710.63ns - 969.27ns`|
|rou3|`1048576`|`1.68μs ± 3.42ns`|`1.81μs`|`1.62μs - 1.83μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`134.32ns ± 1.35ns`|`173.4ns`|`78.23ns - 184.5ns`|
|@mapl/pattern-router (jit)|`1048576`|`154.63ns ± 1.72ns`|`220.13ns`|`89.83ns - 241.57ns`|
|hono pattern-router|`1048576`|`227.02ns ± 1.97ns`|`310.18ns`|`155.17ns - 377.44ns`|
|rou3 (jit)|`1048576`|`274.23ns ± 1.79ns`|`360.72ns`|`205.68ns - 427.27ns`|
|find-my-way (jit)|`1048576`|`356.83ns ± 3.32ns`|`588.44ns`|`258.12ns - 602.61ns`|
|hono reg-exp-router|`1048576`|`378.65ns ± 1.8ns`|`483.38ns`|`317.15ns - 491.03ns`|
|hono linear-router|`1048576`|`425.66ns ± 2.34ns`|`537.47ns`|`361.12ns - 748.49ns`|
|hono trie-router|`1048576`|`729.17ns ± 4.07ns`|`859.89ns`|`667.24ns - 940.47ns`|
|rou3|`1048576`|`1.67μs ± 4.16ns`|`1.9μs`|`1.59μs - 1.95μs`|

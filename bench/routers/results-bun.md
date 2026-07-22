# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`5.62ns ± 49.33ps`|`9.48ns`|`5.27ns - 9.87ns`|
|@mapl/pattern-router (jit)|`1048576`|`6.03ns ± 38.94ps`|`10.25ns`|`5.79ns - 10.71ns`|
|rou3 (jit)|`1048576`|`13.49ns ± 145.94ps`|`20.25ns`|`12.59ns - 40.27ns`|
|@mapl/pattern-router|`1048576`|`17.39ns ± 301.97ps`|`27.81ns`|`13.9ns - 40.85ns`|
|hono reg-exp-router|`1048576`|`28.35ns ± 407.41ps`|`42.99ns`|`23.63ns - 46.53ns`|
|find-my-way (jit)|`1048576`|`34.61ns ± 691.4ps`|`73.27ns`|`31.73ns - 144.47ns`|
|rou3|`1048576`|`71.73ns ± 223.73ps`|`91.98ns`|`69.38ns - 95.82ns`|
|hono trie-router|`1048576`|`133.38ns ± 2.21ns`|`261.26ns`|`124.91ns - 484.75ns`|
|hono pattern-router|`1048576`|`201.47ns ± 3.36ns`|`354.8ns`|`171.42ns - 456.94ns`|
|hono linear-router|`1048576`|`517.63ns ± 1.51ns`|`543.56ns`|`508.37ns - 887.39ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`8.53ns ± 58.35ps`|`13.11ns`|`8.16ns - 14.1ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.49ns ± 57.42ps`|`13.84ns`|`9.03ns - 17.89ns`|
|rou3 (jit)|`1048576`|`20.67ns ± 248.31ps`|`37.57ns`|`18.92ns - 60.04ns`|
|hono reg-exp-router|`1048576`|`24.76ns ± 113.9ps`|`30.51ns`|`23.73ns - 34.29ns`|
|@mapl/pattern-router|`1048576`|`26.21ns ± 163.33ps`|`37.42ns`|`25.03ns - 45.09ns`|
|rou3|`1048576`|`37.29ns ± 126.22ps`|`43.52ns`|`35.4ns - 45.38ns`|
|find-my-way (jit)|`1048576`|`66.43ns ± 924.36ps`|`141.25ns`|`62.3ns - 205.53ns`|
|hono trie-router|`1048576`|`136.41ns ± 1.77ns`|`296.68ns`|`128.11ns - 393.81ns`|
|hono pattern-router|`1048576`|`180.17ns ± 1.24ns`|`279.36ns`|`170.92ns - 336.34ns`|
|hono linear-router|`1048576`|`548.36ns ± 2.42ns`|`690.59ns`|`537.56ns - 975.1ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`58.57ns ± 411.83ps`|`80.39ns`|`55.89ns - 148.08ns`|
|rou3 (jit)|`1048576`|`121.09ns ± 820.79ps`|`182.3ns`|`115.81ns - 277.47ns`|
|@mapl/pattern-router (jit)|`1048576`|`140.93ns ± 980.71ps`|`209.83ns`|`134.4ns - 304ns`|
|find-my-way (jit)|`1048576`|`140.96ns ± 1.42ns`|`252.4ns`|`132.45ns - 342.25ns`|
|@mapl/pattern-router|`1048576`|`191.35ns ± 1.31ns`|`328.23ns`|`182.7ns - 364.03ns`|
|hono reg-exp-router|`1048576`|`226.86ns ± 1.48ns`|`332.6ns`|`214.64ns - 416.66ns`|
|hono pattern-router|`1048576`|`267.48ns ± 1.54ns`|`402.36ns`|`259.82ns - 462.07ns`|
|rou3|`1048576`|`382.74ns ± 2.54ns`|`571.43ns`|`350.46ns - 624.12ns`|
|hono trie-router|`1048576`|`473.2ns ± 3.36ns`|`547.44ns`|`456.99ns - 1.01μs`|
|hono linear-router|`1048576`|`645.39ns ± 2.62ns`|`793.84ns`|`633.06ns - 1.09μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`50ns ± 211.98ps`|`69.37ns`|`48.02ns - 74.96ns`|
|rou3 (jit)|`1048576`|`120.85ns ± 551.39ps`|`170.52ns`|`116.28ns - 203.55ns`|
|@mapl/pattern-router (jit)|`1048576`|`129.37ns ± 751.85ps`|`202ns`|`124.1ns - 261.9ns`|
|find-my-way (jit)|`1048576`|`144.37ns ± 1.55ns`|`253.75ns`|`134.37ns - 336.75ns`|
|@mapl/pattern-router|`1048576`|`186.98ns ± 1.62ns`|`302.24ns`|`176.7ns - 436.47ns`|
|hono pattern-router|`1048576`|`211.45ns ± 950.27ps`|`287.18ns`|`203.93ns - 339.81ns`|
|hono reg-exp-router|`1048576`|`227.94ns ± 1.56ns`|`320.86ns`|`217.48ns - 460.53ns`|
|rou3|`1048576`|`371.3ns ± 1.89ns`|`511.19ns`|`344.98ns - 591.29ns`|
|hono linear-router|`1048576`|`435.25ns ± 3.42ns`|`777.55ns`|`418.76ns - 854.25ns`|
|hono trie-router|`1048576`|`490.29ns ± 4.58ns`|`880.96ns`|`467.25ns - 1.01μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`8.31ns ± 53.54ps`|`11.58ns`|`7.96ns - 12.43ns`|
|@mapl/pattern-router (jit)|`1048576`|`8.41ns ± 47.61ps`|`12.4ns`|`8.12ns - 13.09ns`|
|rou3 (jit)|`1048576`|`17.08ns ± 105.14ps`|`26.23ns`|`16.27ns - 30.75ns`|
|hono reg-exp-router|`1048576`|`22.12ns ± 81.34ps`|`27.47ns`|`21.41ns - 28.52ns`|
|rou3|`1048576`|`23.4ns ± 133.2ps`|`31.52ns`|`22.19ns - 37.14ns`|
|@mapl/pattern-router|`1048576`|`30.34ns ± 164.62ps`|`34.9ns`|`29.16ns - 58.15ns`|
|find-my-way (jit)|`1048576`|`56.09ns ± 1.16ns`|`151.02ns`|`51.28ns - 227.43ns`|
|hono pattern-router|`1048576`|`134.35ns ± 1.16ns`|`225.01ns`|`127.68ns - 330.02ns`|
|hono trie-router|`1048576`|`136.44ns ± 1.68ns`|`180.54ns`|`129.4ns - 476.11ns`|
|hono linear-router|`1048576`|`263.97ns ± 1.53ns`|`408.71ns`|`257.28ns - 477.34ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`57.55ns ± 242.22ps`|`69.17ns`|`55.61ns - 100.12ns`|
|rou3 (jit)|`1048576`|`122.02ns ± 1.17ns`|`246.17ns`|`115.26ns - 278.04ns`|
|@mapl/pattern-router (jit)|`1048576`|`139.82ns ± 841.22ps`|`209.69ns`|`134.07ns - 235.29ns`|
|find-my-way (jit)|`1048576`|`143.96ns ± 1.36ns`|`246.93ns`|`133.58ns - 323.94ns`|
|@mapl/pattern-router|`1048576`|`200.13ns ± 2.04ns`|`313.31ns`|`188.81ns - 512.6ns`|
|hono reg-exp-router|`1048576`|`221.7ns ± 1.93ns`|`374.8ns`|`206.32ns - 527.07ns`|
|hono pattern-router|`1048576`|`265.75ns ± 1.61ns`|`387.72ns`|`255.9ns - 467.28ns`|
|rou3|`1048576`|`342.89ns ± 1.52ns`|`449.13ns`|`330.71ns - 496.94ns`|
|hono trie-router|`1048576`|`537.67ns ± 4.13ns`|`951.33ns`|`520.38ns - 1.14μs`|
|hono linear-router|`1048576`|`716.99ns ± 5.93ns`|`1.21μs`|`689.45ns - 1.41μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`50.53ns ± 218.75ps`|`65.91ns`|`48.47ns - 80.92ns`|
|rou3 (jit)|`1048576`|`121.44ns ± 661.12ps`|`188.42ns`|`116.57ns - 196.83ns`|
|@mapl/pattern-router (jit)|`1048576`|`132.25ns ± 855.65ps`|`200.69ns`|`125.81ns - 245.1ns`|
|find-my-way (jit)|`1048576`|`140.21ns ± 1.07ns`|`195.46ns`|`132.03ns - 284.9ns`|
|@mapl/pattern-router|`1048576`|`186.82ns ± 710.81ps`|`259.59ns`|`180.07ns - 267.41ns`|
|hono pattern-router|`1048576`|`207.76ns ± 1.31ns`|`336.39ns`|`200.23ns - 400.34ns`|
|hono reg-exp-router|`1048576`|`216.76ns ± 1.13ns`|`311.12ns`|`206.82ns - 346.96ns`|
|rou3|`1048576`|`348.27ns ± 2.02ns`|`516.28ns`|`334.6ns - 573.56ns`|
|hono linear-router|`1048576`|`437.13ns ± 3.06ns`|`720.07ns`|`420.69ns - 794.06ns`|
|hono trie-router|`1048576`|`553.35ns ± 4.2ns`|`708.24ns`|`534.95ns - 1.25μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`70.24ns ± 203.8ps`|`78.44ns`|`67.72ns - 96.8ns`|
|@mapl/pattern-router (jit)|`1048576`|`141.83ns ± 826.01ps`|`225.14ns`|`136.22ns - 281.58ns`|
|rou3 (jit)|`1048576`|`152.72ns ± 985.81ps`|`218.35ns`|`145.85ns - 299.85ns`|
|find-my-way (jit)|`1048576`|`177.34ns ± 1.2ns`|`279.29ns`|`168.98ns - 316.25ns`|
|@mapl/pattern-router|`1048576`|`204.2ns ± 973.88ps`|`271.4ns`|`195.72ns - 321.59ns`|
|hono reg-exp-router|`1048576`|`230.11ns ± 1.51ns`|`334.33ns`|`218.42ns - 412.44ns`|
|hono pattern-router|`1048576`|`274.08ns ± 1.46ns`|`391.98ns`|`264.85ns - 469.1ns`|
|rou3|`1048576`|`396.69ns ± 1.72ns`|`505.57ns`|`383.69ns - 597.87ns`|
|hono trie-router|`1048576`|`598.15ns ± 2.88ns`|`684.9ns`|`582.47ns - 1.23μs`|
|hono linear-router|`1048576`|`754.26ns ± 5.56ns`|`1.21μs`|`728.89ns - 1.27μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.01ns ± 550.82ps`|`100.66ns`|`60.66ns - 180.07ns`|
|@mapl/pattern-router (jit)|`1048576`|`131.13ns ± 842.58ps`|`201.19ns`|`125.83ns - 265.31ns`|
|rou3 (jit)|`1048576`|`151.87ns ± 1.02ns`|`256.45ns`|`144.27ns - 272.05ns`|
|find-my-way (jit)|`1048576`|`187.4ns ± 1.25ns`|`277.09ns`|`178.48ns - 381.37ns`|
|@mapl/pattern-router|`1048576`|`196.78ns ± 705.23ps`|`243.98ns`|`190.95ns - 345.29ns`|
|hono pattern-router|`1048576`|`212.81ns ± 1.25ns`|`279.93ns`|`204.99ns - 405.05ns`|
|hono reg-exp-router|`1048576`|`226.97ns ± 1.61ns`|`324.01ns`|`215.01ns - 421.72ns`|
|hono linear-router|`1048576`|`395.73ns ± 2.24ns`|`586.86ns`|`384.16ns - 688.58ns`|
|rou3|`1048576`|`395.98ns ± 1.71ns`|`543.65ns`|`382.77ns - 580.55ns`|
|hono trie-router|`1048576`|`603.74ns ± 8.33ns`|`640.64ns`|`581.53ns - 2.69μs`|


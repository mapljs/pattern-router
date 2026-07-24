# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`6.83ns ± 74.38ps`|`11.77ns`|`6.45ns - 14.59ns`|
|@mapl/pattern-router (jit)|`1048576`|`8.05ns ± 102.57ps`|`14.42ns`|`7.47ns - 17.18ns`|
|@mapl/pattern-router|`1048576`|`19.37ns ± 330.87ps`|`38.01ns`|`17.83ns - 81ns`|
|rou3 (jit)|`1048576`|`19.4ns ± 348.86ps`|`39.69ns`|`16.8ns - 48.68ns`|
|hono reg-exp-router|`1048576`|`31.4ns ± 273.06ps`|`48.04ns`|`29.18ns - 53.51ns`|
|find-my-way (jit)|`1048576`|`46.78ns ± 1.08ns`|`151.76ns`|`40.86ns - 168.72ns`|
|rou3|`1048576`|`111.45ns ± 2.19ns`|`191.56ns`|`92.53ns - 217.75ns`|
|hono trie-router|`1048576`|`163.14ns ± 2.16ns`|`245.64ns`|`152.99ns - 519.78ns`|
|hono pattern-router|`1048576`|`240.76ns ± 1.26ns`|`338.05ns`|`230.5ns - 396.99ns`|
|hono linear-router|`1048576`|`732.55ns ± 2.11ns`|`795.68ns`|`717.06ns - 1.17μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.64ns ± 79.81ps`|`17.92ns`|`11.21ns - 18.54ns`|
|@mapl/pattern-router (jit)|`1048576`|`11.94ns ± 95.86ps`|`18.44ns`|`11.42ns - 22.99ns`|
|rou3 (jit)|`1048576`|`25.51ns ± 173.93ps`|`36.23ns`|`23.79ns - 41.84ns`|
|hono reg-exp-router|`1048576`|`30.96ns ± 186.3ps`|`38.58ns`|`29.52ns - 53.38ns`|
|@mapl/pattern-router|`1048576`|`33.98ns ± 455.74ps`|`44.59ns`|`31.81ns - 141.04ns`|
|rou3|`1048576`|`44.91ns ± 729.37ps`|`87.13ns`|`39.52ns - 140.83ns`|
|find-my-way (jit)|`1048576`|`84.04ns ± 1.2ns`|`194.57ns`|`77.32ns - 239.36ns`|
|hono trie-router|`1048576`|`172.76ns ± 1.9ns`|`303.75ns`|`161.89ns - 508.12ns`|
|hono pattern-router|`1048576`|`256.58ns ± 3.86ns`|`412.68ns`|`224.21ns - 857.77ns`|
|hono linear-router|`1048576`|`770.13ns ± 2.23ns`|`856.34ns`|`755.72ns - 1.23μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`84.77ns ± 1.34ns`|`161.72ns`|`75.11ns - 186.94ns`|
|rou3 (jit)|`1048576`|`169.39ns ± 1.02ns`|`236.87ns`|`161.48ns - 349.04ns`|
|@mapl/pattern-router (jit)|`1048576`|`200.13ns ± 870.07ps`|`243.77ns`|`190.81ns - 305.97ns`|
|find-my-way (jit)|`1048576`|`210.59ns ± 1.92ns`|`405.56ns`|`196.01ns - 455.39ns`|
|@mapl/pattern-router|`1048576`|`272.31ns ± 1.16ns`|`360.06ns`|`263.03ns - 392.36ns`|
|hono reg-exp-router|`1048576`|`324.4ns ± 1.79ns`|`438.64ns`|`307.41ns - 550.32ns`|
|hono pattern-router|`1048576`|`379.65ns ± 1.83ns`|`545.45ns`|`367.8ns - 591.27ns`|
|rou3|`1048576`|`461.25ns ± 2.09ns`|`636.35ns`|`444.99ns - 677.46ns`|
|hono trie-router|`1048576`|`669.28ns ± 5.13ns`|`1.13μs`|`629.31ns - 1.19μs`|
|hono linear-router|`1048576`|`943.93ns ± 4.31ns`|`1.38μs`|`918.97ns - 1.47μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.3ns ± 319.94ps`|`87.75ns`|`61.49ns - 104.84ns`|
|@mapl/pattern-router (jit)|`1048576`|`170.24ns ± 725.13ps`|`244.96ns`|`162.98ns - 276.91ns`|
|rou3 (jit)|`1048576`|`173.27ns ± 1.07ns`|`236.91ns`|`163.96ns - 361.47ns`|
|find-my-way (jit)|`1048576`|`216.6ns ± 1.09ns`|`320.07ns`|`203.66ns - 348.58ns`|
|@mapl/pattern-router|`1048576`|`271.99ns ± 1.57ns`|`375.55ns`|`261.72ns - 455.04ns`|
|hono pattern-router|`1048576`|`299.96ns ± 1.73ns`|`440.08ns`|`290.97ns - 536.28ns`|
|hono reg-exp-router|`1048576`|`324.96ns ± 1.64ns`|`457.24ns`|`314.77ns - 517.11ns`|
|rou3|`1048576`|`470.49ns ± 3.13ns`|`679.51ns`|`446.31ns - 698.88ns`|
|hono linear-router|`1048576`|`619.42ns ± 4.43ns`|`944.51ns`|`593.63ns - 1.04μs`|
|hono trie-router|`1048576`|`669.27ns ± 5.44ns`|`1.14μs`|`642.75ns - 1.38μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.65ns ± 74.71ps`|`15.94ns`|`9.35ns - 17.85ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.12ns ± 66.15ps`|`14.94ns`|`9.83ns - 19.04ns`|
|rou3 (jit)|`1048576`|`19.75ns ± 148.35ps`|`26.31ns`|`18.87ns - 44.92ns`|
|hono reg-exp-router|`1048576`|`27.34ns ± 156.74ps`|`36.22ns`|`25.92ns - 38.11ns`|
|rou3|`1048576`|`30.25ns ± 594.01ps`|`66.46ns`|`26.97ns - 123.57ns`|
|@mapl/pattern-router|`1048576`|`35.27ns ± 174.41ps`|`43.31ns`|`33.79ns - 45.53ns`|
|find-my-way (jit)|`1048576`|`73.49ns ± 1.51ns`|`139.3ns`|`67.27ns - 397.77ns`|
|hono pattern-router|`1048576`|`166.91ns ± 1.45ns`|`262.29ns`|`156.64ns - 407.98ns`|
|hono trie-router|`1048576`|`178.35ns ± 2.08ns`|`366.05ns`|`166.65ns - 501.44ns`|
|hono linear-router|`1048576`|`338.81ns ± 1.55ns`|`478.69ns`|`328.63ns - 560.47ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`80.95ns ± 332.12ps`|`107.95ns`|`77.81ns - 129.58ns`|
|rou3 (jit)|`1048576`|`155.66ns ± 910.8ps`|`221ns`|`146.81ns - 272.82ns`|
|@mapl/pattern-router (jit)|`1048576`|`205.99ns ± 1.24ns`|`304.74ns`|`195.39ns - 339.24ns`|
|find-my-way (jit)|`1048576`|`215.61ns ± 1.6ns`|`328.07ns`|`196.18ns - 413.17ns`|
|@mapl/pattern-router|`1048576`|`284.65ns ± 1.45ns`|`389.28ns`|`274.86ns - 475.13ns`|
|hono reg-exp-router|`1048576`|`319.41ns ± 1.7ns`|`412.59ns`|`306.72ns - 539.81ns`|
|hono pattern-router|`1048576`|`376.4ns ± 1.99ns`|`499.42ns`|`363.16ns - 699.56ns`|
|rou3|`1048576`|`578.86ns ± 4.23ns`|`905.57ns`|`530.91ns - 1.05μs`|
|hono trie-router|`1048576`|`735.59ns ± 6.83ns`|`1.25μs`|`700.74ns - 1.54μs`|
|hono linear-router|`1048576`|`1.04μs ± 7.16ns`|`1.58μs`|`995.94ns - 1.75μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.21ns ± 592.77ps`|`93.96ns`|`61.73ns - 175.26ns`|
|rou3 (jit)|`1048576`|`150.84ns ± 1.09ns`|`214.19ns`|`141.9ns - 365.42ns`|
|@mapl/pattern-router (jit)|`1048576`|`166.76ns ± 872.03ps`|`238.69ns`|`159ns - 268.04ns`|
|find-my-way (jit)|`1048576`|`209.98ns ± 1.39ns`|`308.11ns`|`195.72ns - 373.73ns`|
|@mapl/pattern-router|`1048576`|`263.02ns ± 1.64ns`|`387.13ns`|`253.66ns - 522.41ns`|
|hono pattern-router|`1048576`|`300.86ns ± 2.05ns`|`477.83ns`|`288.46ns - 505.64ns`|
|hono reg-exp-router|`1048576`|`306.86ns ± 1.75ns`|`406.18ns`|`294.53ns - 524.03ns`|
|rou3|`1048576`|`559.52ns ± 2.19ns`|`715.1ns`|`523.17ns - 867.25ns`|
|hono linear-router|`1048576`|`618.34ns ± 2.81ns`|`886.76ns`|`601.3ns - 982.35ns`|
|hono trie-router|`1048576`|`735.34ns ± 5.79ns`|`1.26μs`|`706.71ns - 1.35μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`99.66ns ± 316.81ps`|`124.74ns`|`95.89ns - 127.17ns`|
|rou3 (jit)|`1048576`|`192.59ns ± 871.03ps`|`264.14ns`|`183.11ns - 304.06ns`|
|@mapl/pattern-router (jit)|`1048576`|`212.25ns ± 1.55ns`|`305.86ns`|`200.03ns - 443.71ns`|
|find-my-way (jit)|`1048576`|`283.78ns ± 1.16ns`|`384.72ns`|`275.15ns - 441.96ns`|
|@mapl/pattern-router|`1048576`|`285.7ns ± 1.18ns`|`383.73ns`|`276.15ns - 392.96ns`|
|hono reg-exp-router|`1048576`|`335.45ns ± 1.25ns`|`437.48ns`|`324.62ns - 451.08ns`|
|hono pattern-router|`1048576`|`390.96ns ± 1.75ns`|`515.18ns`|`379.01ns - 651.27ns`|
|rou3|`1048576`|`614.7ns ± 2.76ns`|`787.13ns`|`577.1ns - 998.06ns`|
|hono trie-router|`1048576`|`804.25ns ± 4.75ns`|`957.05ns`|`784.29ns - 1.79μs`|
|hono linear-router|`1048576`|`1.07μs ± 5.47ns`|`1.58μs`|`1.04μs - 1.63μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`87.26ns ± 791.85ps`|`106.92ns`|`82.42ns - 259.18ns`|
|@mapl/pattern-router (jit)|`1048576`|`180.27ns ± 679.25ps`|`232.61ns`|`172.35ns - 294.39ns`|
|rou3 (jit)|`1048576`|`187.47ns ± 855.94ps`|`254.89ns`|`178.4ns - 284.31ns`|
|@mapl/pattern-router|`1048576`|`279.03ns ± 929.4ps`|`348.77ns`|`270.5ns - 396.16ns`|
|find-my-way (jit)|`1048576`|`293.22ns ± 1.25ns`|`393.8ns`|`283.43ns - 405.44ns`|
|hono pattern-router|`1048576`|`302.48ns ± 1.53ns`|`426.81ns`|`291.93ns - 481.28ns`|
|hono reg-exp-router|`1048576`|`336.22ns ± 1.25ns`|`431.1ns`|`324.53ns - 437.22ns`|
|rou3|`1048576`|`533.24ns ± 1.84ns`|`638.71ns`|`519.7ns - 748.16ns`|
|hono linear-router|`1048576`|`549.65ns ± 2.97ns`|`812.36ns`|`531.97ns - 921.41ns`|
|hono trie-router|`1048576`|`817.03ns ± 5.53ns`|`1.4μs`|`789.57ns - 1.44μs`|

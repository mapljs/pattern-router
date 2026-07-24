# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`6.85ns ± 138.47ps`|`9.71ns`|`4.11ns - 27.39ns`|
|@mapl/pattern-router (jit)|`1048576`|`6.92ns ± 218.69ps`|`24.73ns`|`3.84ns - 27.83ns`|
|rou3 (jit)|`1048576`|`22.6ns ± 338.75ps`|`42.99ns`|`12.44ns - 49.45ns`|
|@mapl/pattern-router|`1048576`|`24.97ns ± 344.51ps`|`45.51ns`|`14.19ns - 49.52ns`|
|find-my-way (jit)|`1048576`|`36.61ns ± 407.53ps`|`55.47ns`|`20.17ns - 63.57ns`|
|hono reg-exp-router|`1048576`|`38.03ns ± 471.88ps`|`61.53ns`|`23.37ns - 64.75ns`|
|hono pattern-router|`1048576`|`145.25ns ± 1.15ns`|`176.14ns`|`100.04ns - 194.04ns`|
|rou3|`1048576`|`149.1ns ± 1.59ns`|`170.91ns`|`96.39ns - 223.68ns`|
|hono trie-router|`1048576`|`158.96ns ± 1.37ns`|`210.48ns`|`108.93ns - 227.13ns`|
|hono linear-router|`1048576`|`384.47ns ± 1.63ns`|`482.47ns`|`329.12ns - 597.26ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`6.93ns ± 149.45ps`|`9.72ns`|`4.04ns - 28.27ns`|
|@mapl/pattern-router (jit)|`1048576`|`7.43ns ± 156.83ps`|`17.62ns`|`4.45ns - 29.18ns`|
|rou3 (jit)|`1048576`|`22.59ns ± 389.37ps`|`43.94ns`|`11.84ns - 45ns`|
|@mapl/pattern-router|`1048576`|`25.28ns ± 415.79ps`|`47.46ns`|`13.79ns - 49.41ns`|
|hono reg-exp-router|`1048576`|`39.83ns ± 504.39ps`|`62.87ns`|`23.13ns - 108.01ns`|
|rou3|`1048576`|`63.1ns ± 737.53ps`|`88.74ns`|`38.67ns - 94.53ns`|
|find-my-way (jit)|`1048576`|`79.84ns ± 936.49ps`|`109.56ns`|`47.29ns - 115.79ns`|
|hono pattern-router|`1048576`|`128.56ns ± 1.23ns`|`157.53ns`|`82.74ns - 182.28ns`|
|hono trie-router|`1048576`|`165.82ns ± 1.48ns`|`235.24ns`|`117.83ns - 240.39ns`|
|hono linear-router|`1048576`|`405.2ns ± 1.85ns`|`521.2ns`|`354.19ns - 636.17ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`38.06ns ± 498.9ps`|`59.16ns`|`22.63ns - 61.19ns`|
|@mapl/pattern-router (jit)|`1048576`|`95.31ns ± 1.01ns`|`124.96ns`|`54.14ns - 158.35ns`|
|rou3 (jit)|`1048576`|`154.64ns ± 1.53ns`|`218.54ns`|`101.8ns - 228.86ns`|
|hono pattern-router|`1048576`|`156.65ns ± 1.5ns`|`209.32ns`|`109.66ns - 274.32ns`|
|find-my-way (jit)|`1048576`|`161.98ns ± 1.41ns`|`200.82ns`|`100.97ns - 223.71ns`|
|hono reg-exp-router|`1048576`|`292.06ns ± 1.79ns`|`354.44ns`|`222.55ns - 361.74ns`|
|@mapl/pattern-router|`1048576`|`409.78ns ± 2.19ns`|`489.09ns`|`344.98ns - 595.77ns`|
|hono trie-router|`1048576`|`446.81ns ± 919.42ps`|`512.94ns`|`408.79ns - 527.24ns`|
|hono linear-router|`1048576`|`487.7ns ± 910.66ps`|`523.23ns`|`441ns - 567.11ns`|
|rou3|`1048576`|`1.3μs ± 1.76ns`|`1.36μs`|`1.28μs - 1.38μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`38.54ns ± 485.24ps`|`64.4ns`|`22.34ns - 71.7ns`|
|@mapl/pattern-router (jit)|`1048576`|`89.35ns ± 984.55ps`|`107.75ns`|`51.46ns - 121.17ns`|
|hono pattern-router|`1048576`|`134.71ns ± 1.31ns`|`168.84ns`|`86.06ns - 174.53ns`|
|rou3 (jit)|`1048576`|`152.69ns ± 1.54ns`|`219.97ns`|`101.06ns - 229.16ns`|
|find-my-way (jit)|`1048576`|`162.13ns ± 1.59ns`|`223.11ns`|`87.91ns - 296.69ns`|
|hono linear-router|`1048576`|`348.36ns ± 1.82ns`|`500.88ns`|`295.41ns - 518.23ns`|
|@mapl/pattern-router|`1048576`|`369.58ns ± 1.03ns`|`434.05ns`|`334.74ns - 438.03ns`|
|hono trie-router|`1048576`|`448.36ns ± 744.14ps`|`484.38ns`|`410.12ns - 519.21ns`|
|hono reg-exp-router|`1048576`|`565.65ns ± 1.48ns`|`615.12ns`|`545.52ns - 615.92ns`|
|rou3|`1048576`|`1.3μs ± 1.87ns`|`1.36μs`|`1.26μs - 1.36μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`6.75ns ± 198.66ps`|`25.47ns`|`3.73ns - 28.31ns`|
|@mapl/pattern-router (jit)|`1048576`|`7.11ns ± 270.94ps`|`24.87ns`|`3.62ns - 27.39ns`|
|rou3 (jit)|`1048576`|`19.23ns ± 377.51ps`|`40.79ns`|`10.52ns - 41.76ns`|
|@mapl/pattern-router|`1048576`|`25.33ns ± 513.42ps`|`48.74ns`|`14.38ns - 112.6ns`|
|hono reg-exp-router|`1048576`|`38.14ns ± 557.31ps`|`62.53ns`|`22.22ns - 65.77ns`|
|rou3|`1048576`|`49.91ns ± 582.46ps`|`72.11ns`|`30.54ns - 104.68ns`|
|find-my-way (jit)|`1048576`|`82.78ns ± 1.18ns`|`121.43ns`|`43.5ns - 181.71ns`|
|hono pattern-router|`1048576`|`113.87ns ± 1.4ns`|`142.88ns`|`66.38ns - 272.01ns`|
|hono trie-router|`1048576`|`163.24ns ± 1.42ns`|`216.04ns`|`110.84ns - 232.41ns`|
|hono linear-router|`1048576`|`203.52ns ± 1.55ns`|`267.72ns`|`146.9ns - 291.2ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`36.51ns ± 522.97ps`|`47.18ns`|`22.16ns - 134.19ns`|
|@mapl/pattern-router (jit)|`1048576`|`105.66ns ± 1.19ns`|`136.55ns`|`56.15ns - 200.47ns`|
|rou3 (jit)|`1048576`|`163.99ns ± 1.61ns`|`232.72ns`|`108.52ns - 234.8ns`|
|find-my-way (jit)|`1048576`|`165.23ns ± 1.2ns`|`198.79ns`|`113.8ns - 244.61ns`|
|hono pattern-router|`1048576`|`172.6ns ± 1.24ns`|`213.86ns`|`124.85ns - 230.71ns`|
|hono reg-exp-router|`1048576`|`266.06ns ± 1.49ns`|`336.7ns`|`211.68ns - 374.37ns`|
|@mapl/pattern-router|`1048576`|`380.85ns ± 1.42ns`|`444.14ns`|`342.99ns - 612.65ns`|
|hono trie-router|`1048576`|`450.54ns ± 1.49ns`|`520.35ns`|`408.47ns - 666.29ns`|
|hono linear-router|`1048576`|`556.95ns ± 1.62ns`|`644.09ns`|`505.97ns - 730.58ns`|
|rou3|`1048576`|`1.3μs ± 1.7ns`|`1.36μs`|`1.28μs - 1.37μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`36.42ns ± 485.82ps`|`59.26ns`|`21.22ns - 63.72ns`|
|@mapl/pattern-router (jit)|`1048576`|`106.12ns ± 1.24ns`|`139ns`|`53.1ns - 139.1ns`|
|hono pattern-router|`1048576`|`136.06ns ± 1.34ns`|`170.24ns`|`81.6ns - 174.89ns`|
|find-my-way (jit)|`1048576`|`163.77ns ± 1.46ns`|`218.89ns`|`88.63ns - 251.74ns`|
|rou3 (jit)|`1048576`|`164.47ns ± 1.56ns`|`228ns`|`109.24ns - 239.67ns`|
|hono linear-router|`1048576`|`345.81ns ± 1.41ns`|`422.64ns`|`294.16ns - 439.66ns`|
|@mapl/pattern-router|`1048576`|`368.65ns ± 914.02ps`|`402.01ns`|`332.87ns - 442.81ns`|
|hono trie-router|`1048576`|`446.8ns ± 883.29ps`|`470.76ns`|`409.45ns - 530.63ns`|
|hono reg-exp-router|`1048576`|`536.19ns ± 1.45ns`|`616.13ns`|`490.06ns - 620.1ns`|
|rou3|`1048576`|`1.31μs ± 1.94ns`|`1.37μs`|`1.28μs - 1.4μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`119.88ns ± 854.47ps`|`152.59ns`|`74.39ns - 160.13ns`|
|@mapl/pattern-router (jit)|`1048576`|`142.2ns ± 1.14ns`|`182.96ns`|`85.47ns - 191.5ns`|
|hono pattern-router|`1048576`|`225.36ns ± 1.21ns`|`284.65ns`|`170.16ns - 289.52ns`|
|rou3 (jit)|`1048576`|`231.21ns ± 1.78ns`|`323.25ns`|`165.53ns - 335.37ns`|
|find-my-way (jit)|`1048576`|`283.29ns ± 1.5ns`|`361.19ns`|`201.01ns - 393.44ns`|
|@mapl/pattern-router|`1048576`|`434.36ns ± 1.08ns`|`483.39ns`|`390.33ns - 513.49ns`|
|hono trie-router|`1048576`|`586.2ns ± 2.26ns`|`649.25ns`|`515.02ns - 651.48ns`|
|hono linear-router|`1048576`|`632.2ns ± 867.94ps`|`674.54ns`|`582.02ns - 718.67ns`|
|hono reg-exp-router|`1048576`|`645.95ns ± 1.8ns`|`691.28ns`|`571.96ns - 693.81ns`|
|rou3|`1048576`|`1.44μs ± 1.99ns`|`1.49μs`|`1.4μs - 1.52μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`116.28ns ± 1.08ns`|`145.38ns`|`63.24ns - 164.66ns`|
|@mapl/pattern-router (jit)|`1048576`|`135.26ns ± 1.34ns`|`177.72ns`|`72.86ns - 182.21ns`|
|hono pattern-router|`1048576`|`189.39ns ± 1.29ns`|`228.71ns`|`127.12ns - 241.35ns`|
|rou3 (jit)|`1048576`|`232.01ns ± 1.72ns`|`316.08ns`|`167.1ns - 344.45ns`|
|find-my-way (jit)|`1048576`|`325.16ns ± 2.1ns`|`413.42ns`|`235.04ns - 441.39ns`|
|hono linear-router|`1048576`|`347.71ns ± 1.34ns`|`428.9ns`|`297.2ns - 436.44ns`|
|@mapl/pattern-router|`1048576`|`453.53ns ± 3.1ns`|`574.81ns`|`382.09ns - 939.25ns`|
|hono trie-router|`1048576`|`564.74ns ± 2.35ns`|`639.67ns`|`488.47ns - 653.5ns`|
|hono reg-exp-router|`1048576`|`643.69ns ± 1.72ns`|`694.78ns`|`606.72ns - 714.92ns`|
|rou3|`1048576`|`1.42μs ± 1.85ns`|`1.48μs`|`1.39μs - 1.53μs`|

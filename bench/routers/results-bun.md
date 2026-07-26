# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`7.29ns ± 104.85ps`|`13.3ns`|`6.62ns - 17.11ns`|
|@mapl/pattern-router (jit)|`1048576`|`7.78ns ± 53.73ps`|`12.61ns`|`7.49ns - 14.27ns`|
|rou3 (jit)|`1048576`|`17.71ns ± 176.21ps`|`29.52ns`|`16.5ns - 32.76ns`|
|@mapl/pattern-router|`1048576`|`18.49ns ± 250.59ps`|`32.62ns`|`16.86ns - 43.27ns`|
|hono reg-exp-router|`1048576`|`32.1ns ± 316.67ps`|`51.12ns`|`29.4ns - 54.42ns`|
|find-my-way (jit)|`1048576`|`44.1ns ± 918.07ps`|`89.1ns`|`39.05ns - 205.41ns`|
|rou3|`1048576`|`114.11ns ± 2.07ns`|`195.18ns`|`96.49ns - 233.91ns`|
|hono trie-router|`1048576`|`178.13ns ± 3.6ns`|`484.81ns`|`156.12ns - 586.63ns`|
|hono pattern-router|`1048576`|`261.67ns ± 4.94ns`|`448.98ns`|`207.61ns - 590.99ns`|
|hono linear-router|`1048576`|`714.16ns ± 2.92ns`|`888.47ns`|`697.9ns - 1.22μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`12.38ns ± 124.33ps`|`18.73ns`|`11.8ns - 29.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.7ns ± 95.44ps`|`18.93ns`|`12.11ns - 19.9ns`|
|rou3 (jit)|`1048576`|`25.86ns ± 245.47ps`|`37.13ns`|`23.93ns - 70.55ns`|
|@mapl/pattern-router|`1048576`|`30.13ns ± 201.99ps`|`38.92ns`|`28.53ns - 55.69ns`|
|hono reg-exp-router|`1048576`|`30.99ns ± 145.73ps`|`37.48ns`|`29.59ns - 39.15ns`|
|rou3|`1048576`|`47.32ns ± 756.67ps`|`87.39ns`|`41.43ns - 134.28ns`|
|find-my-way (jit)|`1048576`|`75.82ns ± 633.44ps`|`116.09ns`|`70.88ns - 178.91ns`|
|hono trie-router|`1048576`|`169.25ns ± 1.76ns`|`192.19ns`|`159.82ns - 529.54ns`|
|hono pattern-router|`1048576`|`220.15ns ± 1.64ns`|`388.72ns`|`208.89ns - 408.92ns`|
|hono linear-router|`1048576`|`756.67ns ± 4.32ns`|`1.17μs`|`737.44ns - 1.23μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`80.63ns ± 245.61ps`|`95.41ns`|`77.37ns - 103.8ns`|
|rou3 (jit)|`1048576`|`178.93ns ± 758.62ps`|`239.54ns`|`171.56ns - 287.85ns`|
|@mapl/pattern-router (jit)|`1048576`|`184.1ns ± 1.37ns`|`276.53ns`|`173.22ns - 354.22ns`|
|find-my-way (jit)|`1048576`|`194.58ns ± 1.79ns`|`359.89ns`|`180.44ns - 405.32ns`|
|@mapl/pattern-router|`1048576`|`273.31ns ± 1.75ns`|`380.73ns`|`263.32ns - 604.49ns`|
|hono reg-exp-router|`1048576`|`332.74ns ± 1.88ns`|`465.68ns`|`315.64ns - 592.59ns`|
|hono pattern-router|`1048576`|`363.22ns ± 2.29ns`|`528.18ns`|`348.06ns - 641.43ns`|
|rou3|`1048576`|`468.79ns ± 2.17ns`|`639.47ns`|`448.22ns - 753.66ns`|
|hono trie-router|`1048576`|`665.41ns ± 4.16ns`|`1.13μs`|`644.59ns - 1.16μs`|
|hono linear-router|`1048576`|`932.5ns ± 5.22ns`|`1.39μs`|`903.53ns - 1.43μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.16ns ± 636.16ps`|`83.56ns`|`61.11ns - 214.62ns`|
|rou3 (jit)|`1048576`|`173.42ns ± 828.81ps`|`236.93ns`|`165.03ns - 295.32ns`|
|@mapl/pattern-router (jit)|`1048576`|`177.96ns ± 1.07ns`|`250ns`|`170.31ns - 380.3ns`|
|find-my-way (jit)|`1048576`|`195.43ns ± 1.42ns`|`311.15ns`|`179.99ns - 365.51ns`|
|@mapl/pattern-router|`1048576`|`260.07ns ± 942.36ps`|`329.05ns`|`252.69ns - 378.16ns`|
|hono pattern-router|`1048576`|`289.15ns ± 1.68ns`|`455.44ns`|`279.67ns - 508.06ns`|
|hono reg-exp-router|`1048576`|`341.6ns ± 2.13ns`|`460.4ns`|`324.33ns - 652.58ns`|
|rou3|`1048576`|`467.82ns ± 2.06ns`|`614.85ns`|`450.08ns - 739.39ns`|
|hono linear-router|`1048576`|`612.94ns ± 4.66ns`|`996.62ns`|`584.91ns - 1.06μs`|
|hono trie-router|`1048576`|`663ns ± 3.28ns`|`845.4ns`|`646.18ns - 1.16μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.67ns ± 68.23ps`|`14.31ns`|`9.36ns - 16.16ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.14ns ± 75.77ps`|`16.48ns`|`9.8ns - 16.64ns`|
|rou3 (jit)|`1048576`|`19.41ns ± 144.66ps`|`30.08ns`|`18.4ns - 31.9ns`|
|hono reg-exp-router|`1048576`|`26.86ns ± 110.43ps`|`33.19ns`|`25.99ns - 33.67ns`|
|rou3|`1048576`|`30.48ns ± 610.01ps`|`70.75ns`|`26.9ns - 111.21ns`|
|@mapl/pattern-router|`1048576`|`35.09ns ± 215.47ps`|`46.81ns`|`33.12ns - 63.86ns`|
|find-my-way (jit)|`1048576`|`69.9ns ± 926.34ps`|`164.41ns`|`64.86ns - 182.55ns`|
|hono pattern-router|`1048576`|`155.45ns ± 933.7ps`|`214.85ns`|`147.38ns - 259.12ns`|
|hono trie-router|`1048576`|`172.7ns ± 2.33ns`|`424.03ns`|`160.41ns - 505.88ns`|
|hono linear-router|`1048576`|`344.69ns ± 2ns`|`536.44ns`|`333.13ns - 634.9ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`78.38ns ± 242.16ps`|`91.91ns`|`75.56ns - 107.02ns`|
|rou3 (jit)|`1048576`|`162.58ns ± 912.18ps`|`222.71ns`|`154.49ns - 309.35ns`|
|@mapl/pattern-router (jit)|`1048576`|`183.3ns ± 1.26ns`|`271.15ns`|`173.56ns - 342.27ns`|
|find-my-way (jit)|`1048576`|`196.12ns ± 1.57ns`|`301.8ns`|`180.27ns - 424.42ns`|
|@mapl/pattern-router|`1048576`|`272.16ns ± 1.17ns`|`341.43ns`|`263.3ns - 412.95ns`|
|hono reg-exp-router|`1048576`|`316.16ns ± 1.46ns`|`409.41ns`|`305.44ns - 493.47ns`|
|hono pattern-router|`1048576`|`360.95ns ± 1.52ns`|`487.12ns`|`349.64ns - 537.87ns`|
|rou3|`1048576`|`580.29ns ± 4.73ns`|`785.84ns`|`536.59ns - 1.43μs`|
|hono trie-router|`1048576`|`731.04ns ± 4.08ns`|`1.13μs`|`709.25ns - 1.29μs`|
|hono linear-router|`1048576`|`1.01μs ± 6.75ns`|`1.51μs`|`972.48ns - 1.61μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.09ns ± 544.5ps`|`90.31ns`|`61.82ns - 157ns`|
|rou3 (jit)|`1048576`|`159.72ns ± 725.24ps`|`221.75ns`|`151.37ns - 228.14ns`|
|@mapl/pattern-router (jit)|`1048576`|`174.33ns ± 1.11ns`|`246.82ns`|`165.56ns - 348.87ns`|
|find-my-way (jit)|`1048576`|`194.35ns ± 1.08ns`|`286.37ns`|`182.53ns - 319.35ns`|
|@mapl/pattern-router|`1048576`|`250.08ns ± 904.4ps`|`310.36ns`|`243.12ns - 369.68ns`|
|hono pattern-router|`1048576`|`294.44ns ± 1.67ns`|`416.3ns`|`285.13ns - 541.9ns`|
|hono reg-exp-router|`1048576`|`318.31ns ± 1.81ns`|`459.39ns`|`304.89ns - 492.29ns`|
|rou3|`1048576`|`571.58ns ± 2.35ns`|`713.39ns`|`530.46ns - 792.52ns`|
|hono linear-router|`1048576`|`613.33ns ± 3.52ns`|`894.1ns`|`591.34ns - 1.03μs`|
|hono trie-router|`1048576`|`740.28ns ± 5.25ns`|`1.24μs`|`710.46ns - 1.33μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`101ns ± 900.48ps`|`193.67ns`|`94.05ns - 202.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`188.86ns ± 1.16ns`|`265.15ns`|`178.87ns - 354.59ns`|
|rou3 (jit)|`1048576`|`208.62ns ± 1.04ns`|`276.43ns`|`198.89ns - 363.01ns`|
|find-my-way (jit)|`1048576`|`244.64ns ± 1.59ns`|`372.27ns`|`230.18ns - 457.89ns`|
|@mapl/pattern-router|`1048576`|`284.52ns ± 1.47ns`|`406.24ns`|`274.74ns - 473.42ns`|
|hono reg-exp-router|`1048576`|`335.21ns ± 1.58ns`|`434.69ns`|`323.58ns - 494.02ns`|
|hono pattern-router|`1048576`|`371.8ns ± 1.51ns`|`497.47ns`|`361.13ns - 603.26ns`|
|rou3|`1048576`|`633.04ns ± 2.71ns`|`820.94ns`|`596.83ns - 903.82ns`|
|hono trie-router|`1048576`|`820.47ns ± 5.52ns`|`1.43μs`|`788.68ns - 1.49μs`|
|hono linear-router|`1048576`|`1.05μs ± 4.67ns`|`1.37μs`|`1.03μs - 1.72μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`92.42ns ± 415.36ps`|`111.3ns`|`87.97ns - 177.24ns`|
|@mapl/pattern-router (jit)|`1048576`|`164.81ns ± 437.61ps`|`191.79ns`|`158.5ns - 219.83ns`|
|rou3 (jit)|`1048576`|`204.06ns ± 1.07ns`|`269.96ns`|`194.06ns - 393.18ns`|
|find-my-way (jit)|`1048576`|`255.74ns ± 1.36ns`|`351.82ns`|`246.25ns - 426.06ns`|
|@mapl/pattern-router|`1048576`|`266.2ns ± 850.34ps`|`333.74ns`|`257.67ns - 404.25ns`|
|hono pattern-router|`1048576`|`297.48ns ± 1.35ns`|`417.14ns`|`287.37ns - 428.05ns`|
|hono reg-exp-router|`1048576`|`324.23ns ± 1.68ns`|`457.8ns`|`312.94ns - 534.87ns`|
|rou3|`1048576`|`542.38ns ± 2.39ns`|`710.39ns`|`526.19ns - 812.56ns`|
|hono linear-router|`1048576`|`559.88ns ± 3.19ns`|`790.26ns`|`543.62ns - 959.2ns`|
|hono trie-router|`1048576`|`817.05ns ± 5.26ns`|`1.21μs`|`790.5ns - 1.61μs`|

# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`7.5ns ± 142.32ps`|`14.85ns`|`6.03ns - 15.01ns`|
|@mapl/pattern-router (jit)|`1048576`|`7.58ns ± 72.05ps`|`13.52ns`|`6.85ns - 17.85ns`|
|@mapl/pattern-router|`1048576`|`17.82ns ± 101.6ps`|`23.61ns`|`17ns - 26.3ns`|
|rou3 (jit)|`1048576`|`18.04ns ± 327.18ps`|`31.24ns`|`16.56ns - 90.92ns`|
|hono reg-exp-router|`1048576`|`29.07ns ± 150.24ps`|`35.89ns`|`27.73ns - 49.75ns`|
|find-my-way (jit)|`1048576`|`43.95ns ± 689.27ps`|`116.79ns`|`39.58ns - 130.34ns`|
|rou3|`1048576`|`99.55ns ± 425.68ps`|`117.46ns`|`95.16ns - 185.93ns`|
|hono trie-router|`1048576`|`208.39ns ± 4.44ns`|`368.79ns`|`168.21ns - 582.84ns`|
|hono pattern-router|`1048576`|`208.68ns ± 2.32ns`|`398.26ns`|`191.22ns - 429.7ns`|
|hono linear-router|`1048576`|`792.11ns ± 4.52ns`|`1.14μs`|`748.22ns - 1.32μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`12.52ns ± 91.99ps`|`18.06ns`|`11.71ns - 24.92ns`|
|@mapl/router (jit)|`1048576`|`12.74ns ± 71.08ps`|`17.68ns`|`11.71ns - 18.07ns`|
|rou3 (jit)|`1048576`|`25.59ns ± 205.7ps`|`38.73ns`|`23.54ns - 58.34ns`|
|hono reg-exp-router|`1048576`|`28.23ns ± 121.79ps`|`34.78ns`|`26.48ns - 35.53ns`|
|@mapl/pattern-router|`1048576`|`30.64ns ± 113.85ps`|`35.89ns`|`29.44ns - 36.08ns`|
|rou3|`1048576`|`46.26ns ± 178.79ps`|`54.31ns`|`43.72ns - 66.67ns`|
|find-my-way (jit)|`1048576`|`67.44ns ± 994.24ps`|`148.22ns`|`62.34ns - 253.4ns`|
|hono trie-router|`1048576`|`182.66ns ± 1.77ns`|`352.66ns`|`170.5ns - 409.01ns`|
|hono pattern-router|`1048576`|`203.3ns ± 837.51ps`|`255.25ns`|`194.29ns - 306.15ns`|
|hono linear-router|`1048576`|`840.92ns ± 4.58ns`|`1.19μs`|`794.83ns - 1.6μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`82.53ns ± 309.17ps`|`100.82ns`|`78.68ns - 105.3ns`|
|rou3 (jit)|`1048576`|`172.15ns ± 735.08ps`|`222.29ns`|`164.13ns - 270.37ns`|
|find-my-way (jit)|`1048576`|`194.26ns ± 1.09ns`|`282.92ns`|`181.31ns - 342.13ns`|
|@mapl/pattern-router (jit)|`1048576`|`206.98ns ± 903.57ps`|`283ns`|`197.28ns - 345.28ns`|
|@mapl/pattern-router|`1048576`|`278.7ns ± 1.43ns`|`385.38ns`|`266.93ns - 412.72ns`|
|hono reg-exp-router|`1048576`|`303.27ns ± 974.02ps`|`370.72ns`|`295.53ns - 452.95ns`|
|hono pattern-router|`1048576`|`362.6ns ± 2.41ns`|`515.16ns`|`337.95ns - 539.75ns`|
|rou3|`1048576`|`429.14ns ± 1.26ns`|`500.22ns`|`415.52ns - 598.63ns`|
|hono trie-router|`1048576`|`631.32ns ± 4.58ns`|`1.03μs`|`600.47ns - 1.2μs`|
|hono linear-router|`1048576`|`1.02μs ± 4.77ns`|`1.4μs`|`958.64ns - 1.5μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.16ns ± 298.87ps`|`85ns`|`65.79ns - 105.4ns`|
|rou3 (jit)|`1048576`|`173.92ns ± 891.45ps`|`226.24ns`|`165.44ns - 300.93ns`|
|@mapl/pattern-router (jit)|`1048576`|`186.05ns ± 772.77ps`|`245.36ns`|`178.42ns - 291.63ns`|
|find-my-way (jit)|`1048576`|`194.94ns ± 1.18ns`|`279.1ns`|`180.6ns - 312.18ns`|
|@mapl/pattern-router|`1048576`|`264.79ns ± 879.56ps`|`311.65ns`|`258.51ns - 378.4ns`|
|hono pattern-router|`1048576`|`293.32ns ± 1.37ns`|`448.26ns`|`284.89ns - 460.64ns`|
|hono reg-exp-router|`1048576`|`305.56ns ± 911ps`|`374.17ns`|`297.79ns - 425.62ns`|
|rou3|`1048576`|`426.68ns ± 1.3ns`|`503.54ns`|`413.53ns - 559.94ns`|
|hono linear-router|`1048576`|`649.1ns ± 2.49ns`|`863.02ns`|`628.77ns - 897ns`|
|hono trie-router|`1048576`|`668.2ns ± 3.82ns`|`1.02μs`|`616.23ns - 1.16μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.28ns ± 56.06ps`|`14.34ns`|`8.87ns - 14.46ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.83ns ± 70.29ps`|`15.69ns`|`9.37ns - 16.29ns`|
|rou3 (jit)|`1048576`|`20.13ns ± 150.45ps`|`29.3ns`|`18.23ns - 35.72ns`|
|hono reg-exp-router|`1048576`|`24.26ns ± 106.94ps`|`28.93ns`|`22.94ns - 30.53ns`|
|rou3|`1048576`|`32.93ns ± 127.25ps`|`39.79ns`|`31.52ns - 47.55ns`|
|@mapl/pattern-router|`1048576`|`34.6ns ± 410.48ps`|`46.84ns`|`32.72ns - 117.55ns`|
|find-my-way (jit)|`1048576`|`60.27ns ± 759.21ps`|`135.73ns`|`55.71ns - 148.01ns`|
|hono pattern-router|`1048576`|`144.28ns ± 945.84ps`|`205.5ns`|`137.37ns - 294.8ns`|
|hono trie-router|`1048576`|`184.76ns ± 1.94ns`|`366.76ns`|`173.64ns - 453.04ns`|
|hono linear-router|`1048576`|`358.09ns ± 1.96ns`|`467.51ns`|`347.35ns - 711.62ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`79.52ns ± 330.09ps`|`101.5ns`|`75.67ns - 111.43ns`|
|rou3 (jit)|`1048576`|`171.54ns ± 945.14ps`|`221.53ns`|`163.48ns - 320.74ns`|
|find-my-way (jit)|`1048576`|`195.22ns ± 1.19ns`|`287.16ns`|`181.54ns - 298.83ns`|
|@mapl/pattern-router (jit)|`1048576`|`207.52ns ± 1.07ns`|`278.82ns`|`197.4ns - 333.9ns`|
|@mapl/pattern-router|`1048576`|`270.26ns ± 904.67ps`|`346.66ns`|`263.48ns - 400.51ns`|
|hono reg-exp-router|`1048576`|`293.43ns ± 816.41ps`|`354.3ns`|`285.05ns - 379.14ns`|
|hono pattern-router|`1048576`|`353.88ns ± 1.44ns`|`484.56ns`|`343.52ns - 540.43ns`|
|rou3|`1048576`|`453.14ns ± 1.72ns`|`594.52ns`|`437.16ns - 617.42ns`|
|hono trie-router|`1048576`|`738.25ns ± 3.41ns`|`1.13μs`|`705.89ns - 1.15μs`|
|hono linear-router|`1048576`|`1.12μs ± 5.19ns`|`1.52μs`|`1.04μs - 1.56μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`67.57ns ± 258.04ps`|`85.05ns`|`64.47ns - 88.11ns`|
|rou3 (jit)|`1048576`|`169.46ns ± 518.87ps`|`216.31ns`|`162.29ns - 239.27ns`|
|@mapl/pattern-router (jit)|`1048576`|`187.25ns ± 701.11ps`|`242.13ns`|`179.29ns - 292.27ns`|
|find-my-way (jit)|`1048576`|`192.01ns ± 1.2ns`|`277.72ns`|`179.54ns - 322.35ns`|
|@mapl/pattern-router|`1048576`|`262.45ns ± 968.94ps`|`303.58ns`|`255.39ns - 407.8ns`|
|hono pattern-router|`1048576`|`292.22ns ± 1.48ns`|`390.85ns`|`280.41ns - 506.19ns`|
|hono reg-exp-router|`1048576`|`293.06ns ± 1.04ns`|`359.27ns`|`285.46ns - 436.19ns`|
|rou3|`1048576`|`455.19ns ± 1.6ns`|`534.3ns`|`439.03ns - 663.81ns`|
|hono linear-router|`1048576`|`650.58ns ± 3.31ns`|`855.16ns`|`627.13ns - 1.12μs`|
|hono trie-router|`1048576`|`752.38ns ± 3.28ns`|`1.03μs`|`729.09ns - 1.17μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`96.83ns ± 388.23ps`|`118.09ns`|`91.93ns - 150.59ns`|
|@mapl/pattern-router (jit)|`1048576`|`216.74ns ± 1.11ns`|`283.48ns`|`205.72ns - 354.64ns`|
|rou3 (jit)|`1048576`|`226.59ns ± 959.37ps`|`276.48ns`|`217.12ns - 377.39ns`|
|find-my-way (jit)|`1048576`|`247.5ns ± 1.3ns`|`335.18ns`|`238.43ns - 440.78ns`|
|@mapl/pattern-router|`1048576`|`283.1ns ± 1.03ns`|`349.49ns`|`275.5ns - 460.78ns`|
|hono reg-exp-router|`1048576`|`312.32ns ± 914.47ps`|`376.3ns`|`302.6ns - 446.1ns`|
|hono pattern-router|`1048576`|`372.78ns ± 1.66ns`|`465.82ns`|`357.24ns - 510.19ns`|
|rou3|`1048576`|`534.54ns ± 1.55ns`|`640.3ns`|`518.43ns - 685.87ns`|
|hono trie-router|`1048576`|`856.31ns ± 4ns`|`1.16μs`|`808.97ns - 1.38μs`|
|hono linear-router|`1048576`|`1.27μs ± 6.93ns`|`1.61μs`|`1.1μs - 2.12μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`87.59ns ± 323.24ps`|`109.08ns`|`83.52ns - 122.68ns`|
|@mapl/pattern-router (jit)|`1048576`|`194.8ns ± 665.42ps`|`235.58ns`|`186.27ns - 290.62ns`|
|rou3 (jit)|`1048576`|`217.02ns ± 932.05ps`|`262.79ns`|`208.3ns - 336.2ns`|
|find-my-way (jit)|`1048576`|`251.79ns ± 1.38ns`|`347.29ns`|`241.67ns - 430.82ns`|
|@mapl/pattern-router|`1048576`|`270.31ns ± 464.79ps`|`301.24ns`|`265.76ns - 336.83ns`|
|hono pattern-router|`1048576`|`304.58ns ± 2.35ns`|`441.59ns`|`291.47ns - 687.1ns`|
|hono reg-exp-router|`1048576`|`311.77ns ± 1.09ns`|`392.38ns`|`301.98ns - 459.92ns`|
|rou3|`1048576`|`532.7ns ± 1.75ns`|`640.32ns`|`516.77ns - 729.29ns`|
|hono linear-router|`1048576`|`639.17ns ± 2.95ns`|`787.05ns`|`554.07ns - 847.67ns`|
|hono trie-router|`1048576`|`870.08ns ± 5.25ns`|`1.26μs`|`832.54ns - 1.4μs`|

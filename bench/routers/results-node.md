# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`12.26ns ± 264.52ps`|`38ns`|`6.12ns - 50.89ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.97ns ± 835.7ps`|`48.09ns`|`5.78ns - 189.11ns`|
|rou3 (jit)|`1048576`|`42.17ns ± 513.52ps`|`76.96ns`|`19.12ns - 81.87ns`|
|@mapl/pattern-router|`1048576`|`46.05ns ± 528.77ps`|`79.47ns`|`21.22ns - 81.41ns`|
|find-my-way (jit)|`1048576`|`73.2ns ± 746.21ps`|`113.78ns`|`32.08ns - 117.73ns`|
|hono reg-exp-router|`1048576`|`77.57ns ± 1.03ns`|`114.22ns`|`36.22ns - 116.52ns`|
|hono pattern-router|`1048576`|`233.21ns ± 1.48ns`|`341.97ns`|`168.79ns - 364.99ns`|
|hono trie-router|`1048576`|`255.17ns ± 909.19ps`|`300.9ns`|`192.06ns - 350.24ns`|
|rou3|`1048576`|`257.38ns ± 921.32ps`|`303.64ns`|`194.02ns - 388.66ns`|
|hono linear-router|`1048576`|`672.47ns ± 4.05ns`|`871.57ns`|`611.54ns - 1.3μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.3ns ± 326.04ps`|`43.93ns`|`6.38ns - 52.25ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.87ns ± 425.09ps`|`47.55ns`|`6.88ns - 53.38ns`|
|rou3 (jit)|`1048576`|`40.2ns ± 536.51ps`|`77.24ns`|`18.78ns - 84.03ns`|
|@mapl/pattern-router|`1048576`|`45.32ns ± 553.13ps`|`79.78ns`|`20.88ns - 90.45ns`|
|hono reg-exp-router|`1048576`|`71.23ns ± 665.24ps`|`110.03ns`|`38.11ns - 113.35ns`|
|rou3|`1048576`|`117.78ns ± 709.02ps`|`146.34ns`|`63.4ns - 151.19ns`|
|find-my-way (jit)|`1048576`|`144.32ns ± 1.44ns`|`213.12ns`|`69.9ns - 223.84ns`|
|hono pattern-router|`1048576`|`235.51ns ± 1.35ns`|`322.72ns`|`167.8ns - 386.11ns`|
|hono trie-router|`1048576`|`266.92ns ± 857.98ps`|`309.42ns`|`199.12ns - 368.85ns`|
|hono linear-router|`1048576`|`706.55ns ± 2.3ns`|`813.89ns`|`651.13ns - 974.12ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`73.75ns ± 838.14ps`|`110.9ns`|`29.5ns - 113.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`162.18ns ± 1.05ns`|`222.02ns`|`96.69ns - 248.56ns`|
|rou3 (jit)|`1048576`|`231.62ns ± 1.99ns`|`411.54ns`|`162.24ns - 429.44ns`|
|find-my-way (jit)|`1048576`|`261.87ns ± 1.46ns`|`327.87ns`|`186.97ns - 363.7ns`|
|hono pattern-router|`1048576`|`289.29ns ± 2.27ns`|`497.37ns`|`216.84ns - 518.57ns`|
|@mapl/pattern-router|`1048576`|`360.89ns ± 1.1ns`|`389.37ns`|`295.46ns - 488.69ns`|
|hono reg-exp-router|`1048576`|`448.69ns ± 1.55ns`|`492.63ns`|`393.79ns - 787.61ns`|
|hono trie-router|`1048576`|`965.91ns ± 2.98ns`|`1.06μs`|`888.69ns - 1.1μs`|
|rou3|`1048576`|`1μs ± 3.04ns`|`1.12μs`|`943.24ns - 1.13μs`|
|hono linear-router|`1048576`|`1.61μs ± 7.95ns`|`1.86μs`|`1.46μs - 2.58μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.48ns ± 444.82ps`|`99.83ns`|`31.55ns - 104.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`158.14ns ± 916.64ps`|`232.25ns`|`91.28ns - 239.97ns`|
|rou3 (jit)|`1048576`|`231.6ns ± 1.66ns`|`416.47ns`|`159.89ns - 434.7ns`|
|hono pattern-router|`1048576`|`240.21ns ± 1.07ns`|`328.61ns`|`227.39ns - 370.77ns`|
|find-my-way (jit)|`1048576`|`257.92ns ± 2.04ns`|`423.03ns`|`200.25ns - 456.37ns`|
|@mapl/pattern-router|`1048576`|`350.54ns ± 1.48ns`|`455.98ns`|`331.06ns - 575.88ns`|
|hono reg-exp-router|`1048576`|`447.78ns ± 822.81ps`|`497.61ns`|`396.63ns - 540.47ns`|
|hono trie-router|`1048576`|`962.97ns ± 3.24ns`|`1.06μs`|`873.9ns - 1.12μs`|
|rou3|`1048576`|`1.05μs ± 3.29ns`|`1.16μs`|`962.72ns - 1.17μs`|
|hono linear-router|`1048576`|`1.29μs ± 5.84ns`|`1.5μs`|`1.14μs - 1.5μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`12.7ns ± 310.24ps`|`44.29ns`|`5.74ns - 52.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.06ns ± 435.12ps`|`44.75ns`|`5.83ns - 50.39ns`|
|rou3 (jit)|`1048576`|`34.5ns ± 346.03ps`|`38.71ns`|`15.7ns - 80.55ns`|
|@mapl/pattern-router|`1048576`|`44.28ns ± 548.32ps`|`79.28ns`|`19.75ns - 81.99ns`|
|hono reg-exp-router|`1048576`|`59.69ns ± 643.26ps`|`96.95ns`|`29.75ns - 103.67ns`|
|rou3|`1048576`|`87.55ns ± 591.48ps`|`119.45ns`|`42.51ns - 127.21ns`|
|find-my-way (jit)|`1048576`|`140.64ns ± 1.1ns`|`201.1ns`|`68.53ns - 204.89ns`|
|hono pattern-router|`1048576`|`206.9ns ± 1.08ns`|`279.56ns`|`150.95ns - 293.61ns`|
|hono trie-router|`1048576`|`264.14ns ± 883.7ps`|`304.57ns`|`198.51ns - 370.31ns`|
|hono linear-router|`1048576`|`339.82ns ± 1.44ns`|`413.9ns`|`265.22ns - 537.24ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.19ns ± 405.19ps`|`75.89ns`|`32.66ns - 116.16ns`|
|@mapl/pattern-router (jit)|`1048576`|`178.41ns ± 1.15ns`|`250.97ns`|`150.58ns - 256.32ns`|
|find-my-way (jit)|`1048576`|`261.45ns ± 1.1ns`|`303.61ns`|`208.92ns - 335.82ns`|
|rou3 (jit)|`1048576`|`265.57ns ± 3.32ns`|`438.04ns`|`205.5ns - 451.14ns`|
|hono pattern-router|`1048576`|`305.72ns ± 1.12ns`|`340.83ns`|`240.96ns - 516.53ns`|
|@mapl/pattern-router|`1048576`|`344.57ns ± 2.18ns`|`559.06ns`|`292.7ns - 583.49ns`|
|hono reg-exp-router|`1048576`|`435.38ns ± 697.06ps`|`471.78ns`|`374.55ns - 509.04ns`|
|hono trie-router|`1048576`|`949.31ns ± 2.82ns`|`1.07μs`|`893.91ns - 1.1μs`|
|rou3|`1048576`|`1.03μs ± 3.17ns`|`1.15μs`|`952.54ns - 1.15μs`|
|hono linear-router|`1048576`|`2.13μs ± 5.45ns`|`2.37μs`|`2.03μs - 2.4μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`68.82ns ± 666.8ps`|`107.18ns`|`29.6ns - 111.63ns`|
|@mapl/pattern-router (jit)|`1048576`|`161.16ns ± 1.09ns`|`239.28ns`|`95.85ns - 241.65ns`|
|hono pattern-router|`1048576`|`235.66ns ± 986.65ps`|`259.36ns`|`167.79ns - 384.13ns`|
|rou3 (jit)|`1048576`|`241.47ns ± 791.8ps`|`286.82ns`|`172.24ns - 363.86ns`|
|find-my-way (jit)|`1048576`|`257.57ns ± 1.56ns`|`339.07ns`|`150.56ns - 409.92ns`|
|@mapl/pattern-router|`1048576`|`329.92ns ± 742.3ps`|`372.48ns`|`271.89ns - 380.38ns`|
|hono reg-exp-router|`1048576`|`438.85ns ± 2.33ns`|`543.61ns`|`422.96ns - 766.26ns`|
|hono trie-router|`1048576`|`965.17ns ± 3.31ns`|`1.07μs`|`884.03ns - 1.09μs`|
|rou3|`1048576`|`1.02μs ± 2.84ns`|`1.13μs`|`935.36ns - 1.13μs`|
|hono linear-router|`1048576`|`1.12μs ± 1.54ns`|`1.17μs`|`1.06μs - 1.36μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`189.14ns ± 738.35ps`|`216.1ns`|`112.6ns - 228.48ns`|
|@mapl/pattern-router (jit)|`1048576`|`232.09ns ± 1.04ns`|`287.96ns`|`165.95ns - 358.71ns`|
|rou3 (jit)|`1048576`|`339.51ns ± 1.22ns`|`386.56ns`|`267.69ns - 587.45ns`|
|hono pattern-router|`1048576`|`381.87ns ± 747.38ps`|`426.23ns`|`323.69ns - 466.95ns`|
|@mapl/pattern-router|`1048576`|`412.44ns ± 1.13ns`|`448.79ns`|`335.08ns - 568.57ns`|
|find-my-way (jit)|`1048576`|`448.1ns ± 2.98ns`|`666.69ns`|`374.27ns - 811.56ns`|
|hono reg-exp-router|`1048576`|`493.04ns ± 638.82ps`|`530.93ns`|`441.29ns - 553.79ns`|
|hono trie-router|`1048576`|`1.14μs ± 3.51ns`|`1.24μs`|`1.04μs - 1.25μs`|
|rou3|`1048576`|`1.21μs ± 2.95ns`|`1.34μs`|`1.15μs - 1.35μs`|
|hono linear-router|`1048576`|`2.35μs ± 6.89ns`|`2.58μs`|`2.15μs - 2.61μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`176.85ns ± 650.78ps`|`199.55ns`|`103.18ns - 233.17ns`|
|@mapl/pattern-router (jit)|`1048576`|`211.95ns ± 689.07ps`|`236.69ns`|`132.29ns - 306.33ns`|
|hono pattern-router|`1048576`|`315.04ns ± 1.28ns`|`374.56ns`|`254.87ns - 519.71ns`|
|rou3 (jit)|`1048576`|`341.63ns ± 2ns`|`463.07ns`|`267.15ns - 656.2ns`|
|@mapl/pattern-router|`1048576`|`418.8ns ± 1.12ns`|`459.14ns`|`349.5ns - 491.4ns`|
|find-my-way (jit)|`1048576`|`447.53ns ± 1.68ns`|`508.29ns`|`369.71ns - 704.67ns`|
|hono reg-exp-router|`1048576`|`529.61ns ± 786.6ps`|`552.85ns`|`465.55ns - 620.56ns`|
|hono trie-router|`1048576`|`1.12μs ± 3.3ns`|`1.22μs`|`1.03μs - 1.23μs`|
|rou3|`1048576`|`1.23μs ± 2.87ns`|`1.37μs`|`1.17μs - 1.38μs`|
|hono linear-router|`1048576`|`3.21μs ± 6.42ns`|`3.44μs`|`3.08μs - 3.52μs`|

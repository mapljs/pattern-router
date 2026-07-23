# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`7.69ns ± 128.39ps`|`14.53ns`|`6.74ns - 18.06ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.73ns ± 1.93ns`|`15.18ns`|`7.41ns - 501.23ns`|
|rou3 (jit)|`1048576`|`18ns ± 199.75ps`|`31.16ns`|`16.69ns - 37.98ns`|
|@mapl/pattern-router|`1048576`|`18.23ns ± 159.94ps`|`25.87ns`|`17.1ns - 40.28ns`|
|hono reg-exp-router|`1048576`|`19.09ns ± 152.91ps`|`25.6ns`|`17.95ns - 38.58ns`|
|find-my-way (jit)|`1048576`|`50.54ns ± 1.57ns`|`154.41ns`|`41.67ns - 245.67ns`|
|rou3|`1048576`|`96.23ns ± 395.22ps`|`118.38ns`|`91.85ns - 153.61ns`|
|hono trie-router|`1048576`|`186.92ns ± 3.82ns`|`471.45ns`|`160.56ns - 619.24ns`|
|hono pattern-router|`1048576`|`271.84ns ± 5.12ns`|`466.44ns`|`212.52ns - 561.59ns`|
|hono linear-router|`1048576`|`739.49ns ± 6.28ns`|`1.4μs`|`714.39ns - 1.41μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.61ns ± 85.45ps`|`17.76ns`|`11.14ns - 17.85ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.68ns ± 143.91ps`|`18.57ns`|`11.87ns - 39.37ns`|
|hono reg-exp-router|`1048576`|`21.48ns ± 220.48ps`|`39.01ns`|`20.04ns - 44.65ns`|
|rou3 (jit)|`1048576`|`26.19ns ± 186.75ps`|`38.33ns`|`24.25ns - 44.78ns`|
|@mapl/pattern-router|`1048576`|`30.65ns ± 183.38ps`|`40.76ns`|`29.25ns - 49.67ns`|
|rou3|`1048576`|`46.74ns ± 305.3ps`|`61.06ns`|`43.4ns - 89.32ns`|
|find-my-way (jit)|`1048576`|`78.92ns ± 1.29ns`|`186.09ns`|`72.15ns - 275.69ns`|
|hono trie-router|`1048576`|`176.05ns ± 2.44ns`|`421.28ns`|`163.26ns - 453.65ns`|
|hono pattern-router|`1048576`|`224.66ns ± 1.69ns`|`361.54ns`|`212.87ns - 441.39ns`|
|hono linear-router|`1048576`|`764.71ns ± 2.5ns`|`837.48ns`|`750.77ns - 1.31μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`77.94ns ± 375.6ps`|`84.57ns`|`75ns - 155.86ns`|
|rou3 (jit)|`1048576`|`162.98ns ± 1.39ns`|`289.32ns`|`151.92ns - 344.64ns`|
|@mapl/pattern-router (jit)|`1048576`|`185.06ns ± 1.36ns`|`282.19ns`|`174.84ns - 421.2ns`|
|find-my-way (jit)|`1048576`|`207.07ns ± 1.69ns`|`323.98ns`|`190.6ns - 407.36ns`|
|@mapl/pattern-router|`1048576`|`271.46ns ± 1.77ns`|`449.42ns`|`260.49ns - 480.07ns`|
|hono reg-exp-router|`1048576`|`324.89ns ± 2.58ns`|`424.96ns`|`308.7ns - 731.31ns`|
|hono pattern-router|`1048576`|`355.06ns ± 1.78ns`|`505.59ns`|`344.01ns - 573.46ns`|
|rou3|`1048576`|`441.91ns ± 1.69ns`|`532.64ns`|`428.03ns - 724.51ns`|
|hono trie-router|`1048576`|`690.79ns ± 6.58ns`|`1.22μs`|`651.09ns - 1.36μs`|
|hono linear-router|`1048576`|`961.58ns ± 9.34ns`|`1.62μs`|`906.73ns - 1.86μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.34ns ± 440.75ps`|`87.76ns`|`63ns - 157.26ns`|
|rou3 (jit)|`1048576`|`161.82ns ± 750.78ps`|`235.19ns`|`154.73ns - 265.28ns`|
|@mapl/pattern-router (jit)|`1048576`|`165.79ns ± 977.62ps`|`245.69ns`|`158.5ns - 356.22ns`|
|find-my-way (jit)|`1048576`|`210.93ns ± 1.47ns`|`332.44ns`|`197.19ns - 400.17ns`|
|@mapl/pattern-router|`1048576`|`275.55ns ± 1.58ns`|`371.17ns`|`264.23ns - 477.16ns`|
|hono pattern-router|`1048576`|`294.77ns ± 2.59ns`|`480.8ns`|`279.81ns - 644.66ns`|
|hono reg-exp-router|`1048576`|`329.45ns ± 2.43ns`|`516.24ns`|`310.34ns - 660.02ns`|
|rou3|`1048576`|`451.8ns ± 2.15ns`|`618.16ns`|`435.8ns - 648.01ns`|
|hono linear-router|`1048576`|`617.58ns ± 4ns`|`925.13ns`|`593.81ns - 1.08μs`|
|hono trie-router|`1048576`|`665.58ns ± 1.5ns`|`728.27ns`|`651.03ns - 888.25ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.65ns ± 81.39ps`|`15.37ns`|`9.24ns - 15.93ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.26ns ± 88.44ps`|`16.53ns`|`9.8ns - 16.68ns`|
|hono reg-exp-router|`1048576`|`18.09ns ± 247.41ps`|`32.48ns`|`16.34ns - 36.9ns`|
|rou3 (jit)|`1048576`|`20.74ns ± 305.72ps`|`37.43ns`|`19.19ns - 81.59ns`|
|@mapl/pattern-router|`1048576`|`32.84ns ± 298.97ps`|`41.39ns`|`31.26ns - 98.08ns`|
|rou3|`1048576`|`33.85ns ± 172.61ps`|`41.8ns`|`32.03ns - 51.86ns`|
|find-my-way (jit)|`1048576`|`74.51ns ± 1.32ns`|`186.05ns`|`68.44ns - 265.69ns`|
|hono pattern-router|`1048576`|`158.77ns ± 1.26ns`|`258.15ns`|`149.3ns - 277.48ns`|
|hono trie-router|`1048576`|`176.52ns ± 2.78ns`|`432.61ns`|`163.93ns - 620.54ns`|
|hono linear-router|`1048576`|`343.29ns ± 1.85ns`|`496.78ns`|`331.64ns - 592.97ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`78.87ns ± 293.07ps`|`88.07ns`|`75.43ns - 120.98ns`|
|rou3 (jit)|`1048576`|`153.58ns ± 974.64ps`|`223.01ns`|`144.8ns - 301.43ns`|
|@mapl/pattern-router (jit)|`1048576`|`185.3ns ± 1.54ns`|`284.53ns`|`174.11ns - 373.9ns`|
|find-my-way (jit)|`1048576`|`202.7ns ± 1.34ns`|`298.54ns`|`187.09ns - 366.07ns`|
|@mapl/pattern-router|`1048576`|`267.99ns ± 1.32ns`|`348.65ns`|`260.36ns - 449.92ns`|
|hono reg-exp-router|`1048576`|`344.22ns ± 4.15ns`|`603.75ns`|`318.56ns - 740.13ns`|
|hono pattern-router|`1048576`|`360.58ns ± 2.04ns`|`491.34ns`|`345.42ns - 583.04ns`|
|rou3|`1048576`|`465.2ns ± 2.04ns`|`627.82ns`|`448.23ns - 660.91ns`|
|hono trie-router|`1048576`|`743.36ns ± 4.2ns`|`1.07μs`|`718.38ns - 1.35μs`|
|hono linear-router|`1048576`|`1.02μs ± 5.61ns`|`1.55μs`|`990.98ns - 1.68μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`73.58ns ± 500.82ps`|`95.01ns`|`69.63ns - 178.97ns`|
|@mapl/pattern-router (jit)|`1048576`|`163.68ns ± 926.48ps`|`228.65ns`|`155.64ns - 303.68ns`|
|rou3 (jit)|`1048576`|`166.18ns ± 1.22ns`|`282.44ns`|`156.33ns - 309.09ns`|
|find-my-way (jit)|`1048576`|`203.95ns ± 1.57ns`|`319.51ns`|`186.43ns - 399.45ns`|
|@mapl/pattern-router|`1048576`|`256.37ns ± 783.85ps`|`324.04ns`|`248.83ns - 350.64ns`|
|hono pattern-router|`1048576`|`289.18ns ± 1.66ns`|`419.03ns`|`279.35ns - 499.92ns`|
|hono reg-exp-router|`1048576`|`319.52ns ± 1.65ns`|`419.34ns`|`304.78ns - 534.02ns`|
|rou3|`1048576`|`470.17ns ± 2.13ns`|`657.58ns`|`455.03ns - 680.75ns`|
|hono linear-router|`1048576`|`610.25ns ± 3.35ns`|`903.17ns`|`589.65ns - 1.03μs`|
|hono trie-router|`1048576`|`762.83ns ± 6.65ns`|`1.29μs`|`723.94ns - 1.51μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`96.13ns ± 306.95ps`|`111.38ns`|`92.32ns - 144.81ns`|
|@mapl/pattern-router (jit)|`1048576`|`191.34ns ± 1.2ns`|`286.76ns`|`182.82ns - 376.8ns`|
|rou3 (jit)|`1048576`|`196.85ns ± 1.19ns`|`266.35ns`|`186.7ns - 371.51ns`|
|@mapl/pattern-router|`1048576`|`276.48ns ± 975.07ps`|`361.95ns`|`269.18ns - 439.75ns`|
|find-my-way (jit)|`1048576`|`290.12ns ± 1.48ns`|`394.55ns`|`278.74ns - 492.38ns`|
|hono reg-exp-router|`1048576`|`345.01ns ± 2.18ns`|`505.94ns`|`332.7ns - 681.62ns`|
|hono pattern-router|`1048576`|`379.16ns ± 1.7ns`|`509.12ns`|`366.91ns - 610.98ns`|
|rou3|`1048576`|`533.42ns ± 2.11ns`|`650.72ns`|`517.79ns - 750.12ns`|
|hono trie-router|`1048576`|`823.94ns ± 4.31ns`|`1.23μs`|`792.68ns - 1.38μs`|
|hono linear-router|`1048576`|`1.06μs ± 2.93ns`|`1.18μs`|`1.04μs - 1.54μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`88ns ± 354.93ps`|`110.67ns`|`82.9ns - 134.36ns`|
|@mapl/pattern-router (jit)|`1048576`|`168.29ns ± 753.67ps`|`217.68ns`|`161.32ns - 309.88ns`|
|rou3 (jit)|`1048576`|`217.52ns ± 1.31ns`|`316.79ns`|`207.18ns - 438.96ns`|
|@mapl/pattern-router|`1048576`|`261.9ns ± 872.86ps`|`304.58ns`|`255.33ns - 449.32ns`|
|find-my-way (jit)|`1048576`|`286.97ns ± 1.67ns`|`405.75ns`|`275.7ns - 471.16ns`|
|hono pattern-router|`1048576`|`299.26ns ± 1.76ns`|`450.41ns`|`287.7ns - 517.21ns`|
|hono reg-exp-router|`1048576`|`327.04ns ± 1.7ns`|`495.19ns`|`315.82ns - 530.06ns`|
|rou3|`1048576`|`529.84ns ± 2ns`|`703.51ns`|`515.99ns - 783.27ns`|
|hono linear-router|`1048576`|`565.06ns ± 2.54ns`|`772.1ns`|`548.34ns - 862.81ns`|
|hono trie-router|`1048576`|`832.27ns ± 2.23ns`|`945.86ns`|`799.86ns - 1.15μs`|


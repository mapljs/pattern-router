# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.11ns ± 348.93ps`|`36.74ns`|`6.39ns - 43.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`11.31ns ± 465.91ps`|`36.12ns`|`5.8ns - 38.7ns`|
|rou3 (jit)|`1048576`|`34.65ns ± 601.12ps`|`64.43ns`|`17.93ns - 67.75ns`|
|@mapl/pattern-router|`1048576`|`36.16ns ± 329.72ps`|`61.01ns`|`19.75ns - 75.36ns`|
|find-my-way (jit)|`1048576`|`51.07ns ± 522.62ps`|`79.72ns`|`27.13ns - 87.43ns`|
|hono reg-exp-router|`1048576`|`59.84ns ± 567.09ps`|`89ns`|`33.51ns - 129.48ns`|
|hono pattern-router|`1048576`|`210.9ns ± 2.45ns`|`288.29ns`|`127.72ns - 295.67ns`|
|hono trie-router|`1048576`|`217.83ns ± 858.49ps`|`263.77ns`|`165.3ns - 308.71ns`|
|rou3|`1048576`|`223.85ns ± 1.06ns`|`275.31ns`|`155.25ns - 358.31ns`|
|hono linear-router|`1048576`|`495.52ns ± 726.32ps`|`526.39ns`|`465.51ns - 550.04ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`10.45ns ± 241.3ps`|`34.3ns`|`6.2ns - 41.8ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.45ns ± 514.71ps`|`39.75ns`|`6.72ns - 47.47ns`|
|rou3 (jit)|`1048576`|`33.2ns ± 455.9ps`|`60.64ns`|`16.93ns - 64.01ns`|
|@mapl/pattern-router|`1048576`|`37.94ns ± 466.34ps`|`67.85ns`|`20.97ns - 70.71ns`|
|hono reg-exp-router|`1048576`|`57.98ns ± 370.91ps`|`64.36ns`|`33.3ns - 88.22ns`|
|rou3|`1048576`|`99.4ns ± 570.82ps`|`125ns`|`58.91ns - 137.85ns`|
|find-my-way (jit)|`1048576`|`122.13ns ± 663.38ps`|`159.57ns`|`66.35ns - 169.36ns`|
|hono pattern-router|`1048576`|`202.75ns ± 1.07ns`|`291.06ns`|`144.62ns - 296.39ns`|
|hono trie-router|`1048576`|`235.89ns ± 1.81ns`|`384.42ns`|`177.4ns - 387.28ns`|
|hono linear-router|`1048576`|`566.19ns ± 1.77ns`|`623ns`|`501.49ns - 803.23ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`55.5ns ± 566.87ps`|`84.78ns`|`32ns - 91.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`144.15ns ± 949.47ps`|`200.05ns`|`82.35ns - 205.32ns`|
|rou3 (jit)|`1048576`|`186.97ns ± 1.12ns`|`248.42ns`|`120.99ns - 327.1ns`|
|find-my-way (jit)|`1048576`|`227.49ns ± 2.37ns`|`388.92ns`|`153.7ns - 397.99ns`|
|hono pattern-router|`1048576`|`239.98ns ± 1.13ns`|`305.43ns`|`176.66ns - 366.75ns`|
|@mapl/pattern-router|`1048576`|`278.28ns ± 677.99ps`|`318ns`|`249.22ns - 365.82ns`|
|hono reg-exp-router|`1048576`|`365.84ns ± 1.01ns`|`408.94ns`|`316.88ns - 525.43ns`|
|hono trie-router|`1048576`|`636.99ns ± 3.49ns`|`795.34ns`|`573.17ns - 1.21μs`|
|rou3|`1048576`|`873.14ns ± 3.2ns`|`990.6ns`|`751.41ns - 1.02μs`|
|hono linear-router|`1048576`|`1.07μs ± 4.53ns`|`1.19μs`|`992.48ns - 1.99μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`52.05ns ± 210.47ps`|`57.47ns`|`29.89ns - 81.62ns`|
|@mapl/pattern-router (jit)|`1048576`|`136.65ns ± 756ps`|`188.05ns`|`77.91ns - 191.23ns`|
|rou3 (jit)|`1048576`|`190.54ns ± 1.08ns`|`239.59ns`|`130.42ns - 357.29ns`|
|hono pattern-router|`1048576`|`196.32ns ± 1.1ns`|`300.1ns`|`138.69ns - 319.94ns`|
|find-my-way (jit)|`1048576`|`219.41ns ± 1.11ns`|`266.86ns`|`158.45ns - 303.66ns`|
|@mapl/pattern-router|`1048576`|`288.67ns ± 979.36ps`|`324.23ns`|`227.58ns - 407.13ns`|
|hono reg-exp-router|`1048576`|`396.88ns ± 1.04ns`|`433.73ns`|`347.26ns - 544.49ns`|
|hono trie-router|`1048576`|`640.32ns ± 1.04ns`|`691.24ns`|`577.94ns - 735.73ns`|
|hono linear-router|`1048576`|`843.18ns ± 1.39ns`|`896.36ns`|`772.57ns - 1.01μs`|
|rou3|`1048576`|`891.88ns ± 3.4ns`|`1.01μs`|`770.43ns - 1.09μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.21ns ± 406.7ps`|`37.33ns`|`5.79ns - 48.18ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.69ns ± 611.16ps`|`38.48ns`|`5.21ns - 42.78ns`|
|rou3 (jit)|`1048576`|`27.71ns ± 408.44ps`|`56.22ns`|`15.37ns - 60.32ns`|
|@mapl/pattern-router|`1048576`|`33.15ns ± 270.74ps`|`55.14ns`|`18.13ns - 65.06ns`|
|hono reg-exp-router|`1048576`|`48.85ns ± 470.91ps`|`78.29ns`|`28.34ns - 82.62ns`|
|rou3|`1048576`|`71.13ns ± 425.93ps`|`94.53ns`|`39.78ns - 103.03ns`|
|find-my-way (jit)|`1048576`|`113.41ns ± 707.79ps`|`147.5ns`|`60.12ns - 164.82ns`|
|hono pattern-router|`1048576`|`158.15ns ± 1.03ns`|`204.82ns`|`93.38ns - 206.2ns`|
|hono trie-router|`1048576`|`227.03ns ± 1.27ns`|`275.8ns`|`166.67ns - 401.1ns`|
|hono linear-router|`1048576`|`284.24ns ± 1.74ns`|`447.56ns`|`211.26ns - 485.88ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`53.75ns ± 443.4ps`|`80.94ns`|`30.71ns - 85.32ns`|
|@mapl/pattern-router (jit)|`1048576`|`141.94ns ± 806.68ps`|`184.19ns`|`80.77ns - 188.58ns`|
|rou3 (jit)|`1048576`|`197.14ns ± 1.04ns`|`268.26ns`|`126.34ns - 335.79ns`|
|find-my-way (jit)|`1048576`|`224.73ns ± 1.52ns`|`318.88ns`|`156.93ns - 366.64ns`|
|hono pattern-router|`1048576`|`259.92ns ± 2.3ns`|`414.18ns`|`189.96ns - 423.46ns`|
|@mapl/pattern-router|`1048576`|`283.1ns ± 794.23ps`|`317.7ns`|`232.15ns - 373ns`|
|hono reg-exp-router|`1048576`|`352.29ns ± 1.14ns`|`389.66ns`|`301.41ns - 584.21ns`|
|hono trie-router|`1048576`|`642.94ns ± 1.37ns`|`699.64ns`|`576.05ns - 854.71ns`|
|rou3|`1048576`|`877.22ns ± 3.37ns`|`983.49ns`|`783.66ns - 1μs`|
|hono linear-router|`1048576`|`1.62μs ± 6.63ns`|`1.88μs`|`1.45μs - 1.9μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`51.57ns ± 497.19ps`|`80.94ns`|`28.74ns - 92.34ns`|
|@mapl/pattern-router (jit)|`1048576`|`141.28ns ± 833.61ps`|`183.41ns`|`76.21ns - 187.5ns`|
|hono pattern-router|`1048576`|`201.09ns ± 1.42ns`|`301.93ns`|`125.28ns - 327.98ns`|
|rou3 (jit)|`1048576`|`210.19ns ± 2.21ns`|`336.34ns`|`128.85ns - 344.85ns`|
|find-my-way (jit)|`1048576`|`224.95ns ± 1.56ns`|`322.62ns`|`153.7ns - 370.46ns`|
|@mapl/pattern-router|`1048576`|`292.5ns ± 1.64ns`|`465.37ns`|`231.49ns - 491.65ns`|
|hono reg-exp-router|`1048576`|`390.43ns ± 1.39ns`|`456.54ns`|`329.08ns - 626.33ns`|
|hono trie-router|`1048576`|`646.56ns ± 3.46ns`|`785.9ns`|`564.3ns - 1.24μs`|
|hono linear-router|`1048576`|`825.14ns ± 1.39ns`|`879.25ns`|`759.13ns - 1.04μs`|
|rou3|`1048576`|`895.14ns ± 3.67ns`|`1.01μs`|`795.43ns - 1.02μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`166.41ns ± 590.61ps`|`200.07ns`|`105.88ns - 219.26ns`|
|@mapl/pattern-router (jit)|`1048576`|`198.43ns ± 1.13ns`|`284.7ns`|`125.3ns - 295.51ns`|
|rou3 (jit)|`1048576`|`277.34ns ± 1.76ns`|`472.76ns`|`207.76ns - 495.87ns`|
|hono pattern-router|`1048576`|`337.46ns ± 2.11ns`|`531.2ns`|`261.58ns - 559ns`|
|@mapl/pattern-router|`1048576`|`373.77ns ± 1.35ns`|`436.43ns`|`313.9ns - 596.33ns`|
|find-my-way (jit)|`1048576`|`384.64ns ± 2.06ns`|`515.23ns`|`322.03ns - 628.37ns`|
|hono reg-exp-router|`1048576`|`471.05ns ± 990.49ps`|`510.53ns`|`416.7ns - 626.52ns`|
|hono trie-router|`1048576`|`868.46ns ± 3.84ns`|`989.05ns`|`775.13ns - 1μs`|
|rou3|`1048576`|`1μs ± 3.57ns`|`1.14μs`|`878.99ns - 1.17μs`|
|hono linear-router|`1048576`|`1.82μs ± 7.27ns`|`2.08μs`|`1.6μs - 2.13μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`154.63ns ± 798.05ps`|`192.46ns`|`91ns - 201.13ns`|
|@mapl/pattern-router (jit)|`1048576`|`188.11ns ± 1.57ns`|`273.04ns`|`110.68ns - 281.09ns`|
|hono pattern-router|`1048576`|`271.63ns ± 2.24ns`|`430.8ns`|`238.19ns - 438.16ns`|
|rou3 (jit)|`1048576`|`294.53ns ± 1.27ns`|`408.1ns`|`239.49ns - 485.11ns`|
|@mapl/pattern-router|`1048576`|`339.94ns ± 906.52ps`|`388.52ns`|`270.57ns - 439.63ns`|
|find-my-way (jit)|`1048576`|`398.75ns ± 968.35ps`|`441.27ns`|`324.87ns - 444.73ns`|
|hono reg-exp-router|`1048576`|`468.04ns ± 1.02ns`|`515.61ns`|`407.02ns - 584.05ns`|
|hono trie-router|`1048576`|`900.95ns ± 4.04ns`|`1.02μs`|`782.83ns - 1.07μs`|
|rou3|`1048576`|`1.01μs ± 3.4ns`|`1.14μs`|`890.13ns - 1.17μs`|
|hono linear-router|`1048576`|`3.02μs ± 6.23ns`|`3.25μs`|`2.84μs - 3.3μs`|


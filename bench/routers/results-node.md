# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`10.12ns ± 771.71ps`|`35.94ns`|`4.75ns - 186.93ns`|
|@mapl/router (jit)|`1048576`|`14.58ns ± 635.59ps`|`36.18ns`|`4.84ns - 68.5ns`|
|rou3 (jit)|`1048576`|`29.05ns ± 314.7ps`|`54.9ns`|`18.13ns - 59.52ns`|
|@mapl/pattern-router|`1048576`|`36.36ns ± 576.01ps`|`60.97ns`|`19.07ns - 91.28ns`|
|hono reg-exp-router|`1048576`|`50.5ns ± 387.1ps`|`76.48ns`|`28.21ns - 86.5ns`|
|find-my-way (jit)|`1048576`|`54.24ns ± 387.18ps`|`78.96ns`|`28.93ns - 82.28ns`|
|hono pattern-router|`1048576`|`164.92ns ± 717.23ps`|`200.71ns`|`122.64ns - 256.87ns`|
|rou3|`1048576`|`181ns ± 1.55ns`|`284.64ns`|`134.73ns - 288.63ns`|
|hono trie-router|`1048576`|`187.44ns ± 1.93ns`|`284.87ns`|`131.49ns - 290.75ns`|
|hono linear-router|`1048576`|`425.18ns ± 1.01ns`|`463.05ns`|`387.58ns - 600.72ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`10.28ns ± 286.53ps`|`31.91ns`|`5.11ns - 66.69ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.59ns ± 522.86ps`|`38.18ns`|`5.31ns - 44.3ns`|
|rou3 (jit)|`1048576`|`29.6ns ± 438.19ps`|`56.14ns`|`14.62ns - 58.86ns`|
|@mapl/pattern-router|`1048576`|`32.3ns ± 255.46ps`|`56.08ns`|`18.13ns - 63.28ns`|
|hono reg-exp-router|`1048576`|`52.05ns ± 436.18ps`|`79.27ns`|`28.66ns - 83.7ns`|
|rou3|`1048576`|`87.08ns ± 556.38ps`|`115.77ns`|`48.5ns - 116.92ns`|
|find-my-way (jit)|`1048576`|`97.23ns ± 628.92ps`|`135.34ns`|`55.37ns - 139.78ns`|
|hono pattern-router|`1048576`|`170.73ns ± 1.43ns`|`263.9ns`|`123.32ns - 269.89ns`|
|hono trie-router|`1048576`|`180.83ns ± 1ns`|`269.76ns`|`139.11ns - 273.05ns`|
|hono linear-router|`1048576`|`438.92ns ± 2.13ns`|`446.52ns`|`396.82ns - 821.82ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`53.37ns ± 562.68ps`|`77.18ns`|`27.91ns - 80.05ns`|
|@mapl/pattern-router (jit)|`1048576`|`116.16ns ± 773.37ps`|`170.88ns`|`75.68ns - 187.07ns`|
|rou3 (jit)|`1048576`|`158.12ns ± 587.87ps`|`189.79ns`|`118.61ns - 247.23ns`|
|find-my-way (jit)|`1048576`|`171.94ns ± 888.44ps`|`211.85ns`|`113.67ns - 224.38ns`|
|hono pattern-router|`1048576`|`204.23ns ± 861.6ps`|`284.83ns`|`160.82ns - 292.67ns`|
|@mapl/pattern-router|`1048576`|`234.28ns ± 754.14ps`|`294.8ns`|`195.84ns - 347.27ns`|
|hono reg-exp-router|`1048576`|`302.41ns ± 1.17ns`|`332.71ns`|`264.53ns - 526.98ns`|
|hono trie-router|`1048576`|`731.43ns ± 2.15ns`|`804.86ns`|`688.07ns - 814.1ns`|
|rou3|`1048576`|`797.08ns ± 2.24ns`|`885.65ns`|`743.4ns - 929.52ns`|
|hono linear-router|`1048576`|`1.08μs ± 3.58ns`|`1.26μs`|`1.04μs - 1.29μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`49.4ns ± 419.94ps`|`74.5ns`|`28.02ns - 80.69ns`|
|@mapl/pattern-router (jit)|`1048576`|`110.48ns ± 563.12ps`|`145.23ns`|`70.29ns - 159.2ns`|
|rou3 (jit)|`1048576`|`159.7ns ± 515.18ps`|`191.39ns`|`118.48ns - 193.66ns`|
|hono pattern-router|`1048576`|`164.78ns ± 848.71ps`|`229.03ns`|`121.28ns - 245.35ns`|
|find-my-way (jit)|`1048576`|`172.68ns ± 794.99ps`|`208.95ns`|`120.14ns - 224.74ns`|
|@mapl/pattern-router|`1048576`|`230.85ns ± 962ps`|`317.48ns`|`203.28ns - 332ns`|
|hono reg-exp-router|`1048576`|`318.33ns ± 623.86ps`|`345.93ns`|`283.08ns - 400.6ns`|
|hono trie-router|`1048576`|`738.68ns ± 2.57ns`|`830.99ns`|`696.28ns - 959.41ns`|
|rou3|`1048576`|`776.43ns ± 2.36ns`|`853.27ns`|`728.5ns - 863.42ns`|
|hono linear-router|`1048576`|`875.5ns ± 4.29ns`|`1.1μs`|`829.73ns - 1.11μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`9.07ns ± 276.05ps`|`33.6ns`|`4.29ns - 39.65ns`|
|@mapl/router (jit)|`1048576`|`11.23ns ± 355.54ps`|`35.95ns`|`5.17ns - 39.34ns`|
|rou3 (jit)|`1048576`|`26.37ns ± 289.46ps`|`50.83ns`|`18.64ns - 79.01ns`|
|@mapl/pattern-router|`1048576`|`33.35ns ± 449.09ps`|`58.1ns`|`16.89ns - 60.61ns`|
|hono reg-exp-router|`1048576`|`44.45ns ± 443.8ps`|`71.15ns`|`24.41ns - 77.27ns`|
|rou3|`1048576`|`66.03ns ± 496.59ps`|`88.92ns`|`34.82ns - 90.49ns`|
|find-my-way (jit)|`1048576`|`95.92ns ± 501.86ps`|`127.67ns`|`52.09ns - 133.04ns`|
|hono pattern-router|`1048576`|`129.86ns ± 324.65ps`|`156.3ns`|`124.41ns - 166.5ns`|
|hono trie-router|`1048576`|`175.71ns ± 735.53ps`|`210.63ns`|`133.4ns - 270.54ns`|
|hono linear-router|`1048576`|`228.41ns ± 1.02ns`|`261.44ns`|`179.55ns - 389.84ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`50.08ns ± 295.66ps`|`53.67ns`|`27.08ns - 82.5ns`|
|@mapl/pattern-router (jit)|`1048576`|`115.76ns ± 585.54ps`|`148.27ns`|`73.34ns - 174.86ns`|
|rou3 (jit)|`1048576`|`166.97ns ± 1.13ns`|`259.2ns`|`126.32ns - 261.02ns`|
|find-my-way (jit)|`1048576`|`171.91ns ± 767.45ps`|`203.22ns`|`129.96ns - 223.77ns`|
|hono pattern-router|`1048576`|`208.95ns ± 328.37ps`|`226.18ns`|`168.56ns - 230.64ns`|
|@mapl/pattern-router|`1048576`|`219.58ns ± 770.09ps`|`249.77ns`|`181.9ns - 377.22ns`|
|hono reg-exp-router|`1048576`|`291.25ns ± 600.83ps`|`324.47ns`|`254.17ns - 359.9ns`|
|hono trie-router|`1048576`|`749.73ns ± 2.22ns`|`814.57ns`|`693.45ns - 823.37ns`|
|rou3|`1048576`|`793.11ns ± 2.52ns`|`862.84ns`|`723.3ns - 865.02ns`|
|hono linear-router|`1048576`|`1.63μs ± 4.63ns`|`1.79μs`|`1.55μs - 1.83μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`47.65ns ± 291.9ps`|`73.39ns`|`27.17ns - 81.53ns`|
|@mapl/pattern-router (jit)|`1048576`|`111.09ns ± 434.3ps`|`144.04ns`|`69.73ns - 159.99ns`|
|rou3 (jit)|`1048576`|`164.03ns ± 573.78ps`|`195.73ns`|`122.25ns - 259.57ns`|
|hono pattern-router|`1048576`|`165.93ns ± 858.16ps`|`234.77ns`|`122.07ns - 253.01ns`|
|find-my-way (jit)|`1048576`|`174.15ns ± 1.03ns`|`233.98ns`|`124ns - 282.33ns`|
|@mapl/pattern-router|`1048576`|`232.52ns ± 946.26ps`|`291.88ns`|`187.75ns - 340.02ns`|
|hono reg-exp-router|`1048576`|`308.44ns ± 623.36ps`|`341.58ns`|`274.06ns - 398.36ns`|
|hono trie-router|`1048576`|`759.94ns ± 2.42ns`|`821.33ns`|`700.13ns - 833.19ns`|
|rou3|`1048576`|`789.09ns ± 2.52ns`|`855.09ns`|`723.87ns - 865.26ns`|
|hono linear-router|`1048576`|`952.68ns ± 4.58ns`|`1.11μs`|`875.13ns - 1.12μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`133.6ns ± 780.97ps`|`188.59ns`|`85.15ns - 193.3ns`|
|@mapl/pattern-router (jit)|`1048576`|`160.06ns ± 810.6ps`|`217.93ns`|`110.5ns - 230.2ns`|
|rou3 (jit)|`1048576`|`235.28ns ± 1.37ns`|`354.58ns`|`190.47ns - 363.87ns`|
|hono pattern-router|`1048576`|`264.52ns ± 511.91ps`|`287.12ns`|`218.88ns - 302.21ns`|
|@mapl/pattern-router|`1048576`|`295.85ns ± 454.67ps`|`323.22ns`|`259.89ns - 337.47ns`|
|find-my-way (jit)|`1048576`|`311.26ns ± 1.8ns`|`450.43ns`|`265.41ns - 547.75ns`|
|hono reg-exp-router|`1048576`|`352.41ns ± 2.13ns`|`459.18ns`|`309.63ns - 638.37ns`|
|hono trie-router|`1048576`|`822.95ns ± 2.54ns`|`904.65ns`|`779ns - 924.35ns`|
|rou3|`1048576`|`929.25ns ± 2.94ns`|`1.02μs`|`858.25ns - 1.03μs`|
|hono linear-router|`1048576`|`1.69μs ± 3.84ns`|`1.87μs`|`1.63μs - 1.88μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`123.26ns ± 502.93ps`|`145.16ns`|`74.36ns - 158.74ns`|
|@mapl/pattern-router (jit)|`1048576`|`143.83ns ± 545.62ps`|`177.6ns`|`95.93ns - 184.39ns`|
|hono pattern-router|`1048576`|`208.6ns ± 811.56ps`|`269.72ns`|`161ns - 289.25ns`|
|rou3 (jit)|`1048576`|`237.99ns ± 1.26ns`|`339.06ns`|`186.62ns - 398.18ns`|
|@mapl/pattern-router|`1048576`|`271.48ns ± 1.51ns`|`447.09ns`|`260.61ns - 467.66ns`|
|find-my-way (jit)|`1048576`|`309.84ns ± 1.76ns`|`453.12ns`|`256.46ns - 547.3ns`|
|hono reg-exp-router|`1048576`|`349.26ns ± 2.14ns`|`472.77ns`|`302.17ns - 630.97ns`|
|hono trie-router|`1048576`|`825.67ns ± 2.3ns`|`902.33ns`|`779.19ns - 970ns`|
|rou3|`1048576`|`908.35ns ± 2.25ns`|`983.58ns`|`859.42ns - 989.83ns`|
|hono linear-router|`1048576`|`2.41μs ± 4.28ns`|`2.6μs`|`2.35μs - 2.61μs`|


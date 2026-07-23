# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.92ns ± 585.04ps`|`49.78ns`|`5.98ns - 56.51ns`|
|@mapl/router (jit)|`1048576`|`14.39ns ± 351.07ps`|`48.59ns`|`6.18ns - 52.54ns`|
|rou3 (jit)|`1048576`|`38.95ns ± 261.85ps`|`44.03ns`|`20.07ns - 77.35ns`|
|@mapl/pattern-router|`1048576`|`41.97ns ± 411.93ps`|`75.61ns`|`22.9ns - 77.68ns`|
|hono reg-exp-router|`1048576`|`72.3ns ± 861.02ps`|`113.07ns`|`36.76ns - 114.48ns`|
|find-my-way (jit)|`1048576`|`74.07ns ± 524.85ps`|`108.41ns`|`35.79ns - 114.16ns`|
|hono pattern-router|`1048576`|`223.77ns ± 1.63ns`|`385.29ns`|`164.59ns - 399.21ns`|
|hono trie-router|`1048576`|`245.73ns ± 1.42ns`|`309.3ns`|`192.21ns - 438.88ns`|
|rou3|`1048576`|`300.55ns ± 4.49ns`|`430.59ns`|`207.52ns - 1.05μs`|
|hono linear-router|`1048576`|`680.93ns ± 4.86ns`|`1.11μs`|`595.1ns - 1.12μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`15.25ns ± 628.47ps`|`54.95ns`|`6.53ns - 94.99ns`|
|@mapl/router (jit)|`1048576`|`16.05ns ± 533.33ps`|`48.37ns`|`6.75ns - 50.39ns`|
|rou3 (jit)|`1048576`|`39.27ns ± 657.2ps`|`78.65ns`|`20.08ns - 106.19ns`|
|@mapl/pattern-router|`1048576`|`43.71ns ± 457.76ps`|`80.82ns`|`23.4ns - 85.34ns`|
|hono reg-exp-router|`1048576`|`68.38ns ± 567.95ps`|`107.08ns`|`36.26ns - 113.34ns`|
|rou3|`1048576`|`117.75ns ± 642.73ps`|`156.58ns`|`62.7ns - 162.46ns`|
|find-my-way (jit)|`1048576`|`135.41ns ± 882.82ps`|`181.26ns`|`75.01ns - 210.58ns`|
|hono pattern-router|`1048576`|`232.32ns ± 1.14ns`|`301.21ns`|`169.42ns - 373.15ns`|
|hono trie-router|`1048576`|`257.86ns ± 1.14ns`|`306.7ns`|`203.54ns - 403.03ns`|
|hono linear-router|`1048576`|`743.26ns ± 2.99ns`|`901.59ns`|`685.55ns - 1.35μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`72.52ns ± 662.17ps`|`104.74ns`|`33.65ns - 112.91ns`|
|@mapl/pattern-router (jit)|`1048576`|`161.77ns ± 1.23ns`|`266.22ns`|`102.42ns - 272.37ns`|
|rou3 (jit)|`1048576`|`228.73ns ± 1.01ns`|`288.33ns`|`167.82ns - 382.98ns`|
|find-my-way (jit)|`1048576`|`262.29ns ± 2.42ns`|`445.02ns`|`151.36ns - 456.57ns`|
|hono pattern-router|`1048576`|`298.94ns ± 1.6ns`|`352.03ns`|`242.69ns - 526.77ns`|
|@mapl/pattern-router|`1048576`|`324.15ns ± 1.51ns`|`372.91ns`|`275.45ns - 538.03ns`|
|hono reg-exp-router|`1048576`|`426.24ns ± 905.75ps`|`464.59ns`|`392.08ns - 581.32ns`|
|hono trie-router|`1048576`|`965.63ns ± 2.95ns`|`1.1μs`|`921.18ns - 1.12μs`|
|rou3|`1048576`|`1.05μs ± 3.42ns`|`1.17μs`|`978.84ns - 1.26μs`|
|hono linear-router|`1048576`|`1.59μs ± 6.23ns`|`1.84μs`|`1.47μs - 1.87μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`77.54ns ± 556.43ps`|`104.21ns`|`34.11ns - 111.83ns`|
|@mapl/pattern-router (jit)|`1048576`|`154.1ns ± 566.61ps`|`174.23ns`|`147.6ns - 251.27ns`|
|rou3 (jit)|`1048576`|`230.09ns ± 1.98ns`|`392.79ns`|`165.7ns - 421.74ns`|
|hono pattern-router|`1048576`|`231.78ns ± 2.11ns`|`390.79ns`|`163.03ns - 398.96ns`|
|find-my-way (jit)|`1048576`|`261ns ± 1.8ns`|`372.7ns`|`192.21ns - 458.69ns`|
|@mapl/pattern-router|`1048576`|`346.05ns ± 1.43ns`|`414.91ns`|`302.1ns - 562.25ns`|
|hono reg-exp-router|`1048576`|`453.27ns ± 486.68ps`|`482.44ns`|`444.42ns - 504.86ns`|
|hono trie-router|`1048576`|`915.06ns ± 5.42ns`|`1.09μs`|`875.64ns - 1.7μs`|
|rou3|`1048576`|`1.01μs ± 2.82ns`|`1.13μs`|`967.33ns - 1.22μs`|
|hono linear-router|`1048576`|`1.23μs ± 5.81ns`|`1.43μs`|`1.12μs - 1.63μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`12.48ns ± 1.13ns`|`43.64ns`|`5.6ns - 291.39ns`|
|@mapl/router (jit)|`1048576`|`13.71ns ± 417.44ps`|`43.95ns`|`6.34ns - 87.89ns`|
|rou3 (jit)|`1048576`|`33.99ns ± 500.27ps`|`73.52ns`|`16.53ns - 84.88ns`|
|@mapl/pattern-router|`1048576`|`41.22ns ± 559.23ps`|`75.97ns`|`20.84ns - 80.16ns`|
|hono reg-exp-router|`1048576`|`59.21ns ± 584.62ps`|`96.12ns`|`31.71ns - 99.08ns`|
|rou3|`1048576`|`85.06ns ± 471.32ps`|`114.48ns`|`43.57ns - 124.49ns`|
|find-my-way (jit)|`1048576`|`137.23ns ± 1.13ns`|`200.71ns`|`72.17ns - 204.84ns`|
|hono pattern-router|`1048576`|`177.61ns ± 555.33ps`|`211.76ns`|`117.1ns - 227.78ns`|
|hono trie-router|`1048576`|`249.11ns ± 967.28ps`|`304.73ns`|`189.28ns - 336.37ns`|
|hono linear-router|`1048576`|`356.42ns ± 2.03ns`|`463.88ns`|`295.55ns - 669ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`78.93ns ± 835.71ps`|`117.93ns`|`40.6ns - 120.45ns`|
|@mapl/pattern-router (jit)|`1048576`|`161.48ns ± 587.52ps`|`186.69ns`|`103.4ns - 221.14ns`|
|rou3 (jit)|`1048576`|`233.05ns ± 888.17ps`|`292.73ns`|`174.08ns - 349.88ns`|
|find-my-way (jit)|`1048576`|`260.66ns ± 988.03ps`|`298.77ns`|`196.78ns - 317.11ns`|
|hono pattern-router|`1048576`|`307.33ns ± 739.35ps`|`348.12ns`|`247.62ns - 350.65ns`|
|@mapl/pattern-router|`1048576`|`333.83ns ± 643.46ps`|`374.73ns`|`290.57ns - 414.21ns`|
|hono reg-exp-router|`1048576`|`415.41ns ± 1.32ns`|`458.02ns`|`369.21ns - 711.57ns`|
|hono trie-router|`1048576`|`978.02ns ± 2.82ns`|`1.06μs`|`934.95ns - 1.14μs`|
|rou3|`1048576`|`1.02μs ± 3.03ns`|`1.15μs`|`964.9ns - 1.2μs`|
|hono linear-router|`1048576`|`2.25μs ± 5.77ns`|`2.43μs`|`2.14μs - 2.52μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`68.83ns ± 492.27ps`|`75.81ns`|`32.13ns - 110.71ns`|
|@mapl/pattern-router (jit)|`1048576`|`156.58ns ± 816.12ps`|`201.91ns`|`100.05ns - 233.98ns`|
|hono pattern-router|`1048576`|`228.94ns ± 1.73ns`|`391.42ns`|`167.66ns - 394.03ns`|
|rou3 (jit)|`1048576`|`235.9ns ± 1.88ns`|`406.15ns`|`168.77ns - 422.45ns`|
|find-my-way (jit)|`1048576`|`261.04ns ± 1.97ns`|`410.9ns`|`179.64ns - 454.72ns`|
|@mapl/pattern-router|`1048576`|`351.44ns ± 974.5ps`|`395.88ns`|`301.27ns - 491.69ns`|
|hono reg-exp-router|`1048576`|`441.92ns ± 1.73ns`|`525.33ns`|`388.64ns - 802.1ns`|
|hono trie-router|`1048576`|`996.64ns ± 4.67ns`|`1.16μs`|`909.8ns - 1.85μs`|
|rou3|`1048576`|`1.05μs ± 3.58ns`|`1.16μs`|`961.41ns - 1.17μs`|
|hono linear-router|`1048576`|`1.24μs ± 7.54ns`|`1.59μs`|`1.16μs - 2.22μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`192.8ns ± 1.24ns`|`258.64ns`|`119.87ns - 301.64ns`|
|@mapl/pattern-router (jit)|`1048576`|`241.8ns ± 680.85ps`|`274.76ns`|`176.62ns - 280.97ns`|
|rou3 (jit)|`1048576`|`336.78ns ± 1.25ns`|`383.33ns`|`275.74ns - 552.65ns`|
|hono pattern-router|`1048576`|`399.38ns ± 2.15ns`|`441.55ns`|`338.79ns - 719.28ns`|
|@mapl/pattern-router|`1048576`|`456.05ns ± 1.39ns`|`493.54ns`|`434.44ns - 749.03ns`|
|find-my-way (jit)|`1048576`|`460.64ns ± 2.85ns`|`659.96ns`|`375.72ns - 873.3ns`|
|hono reg-exp-router|`1048576`|`538.07ns ± 2.55ns`|`627.04ns`|`492.35ns - 979.3ns`|
|hono trie-router|`1048576`|`1.12μs ± 2.71ns`|`1.23μs`|`1.07μs - 1.25μs`|
|rou3|`1048576`|`1.2μs ± 3.01ns`|`1.34μs`|`1.15μs - 1.42μs`|
|hono linear-router|`1048576`|`2.31μs ± 6.91ns`|`2.59μs`|`2.2μs - 3.16μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`189.26ns ± 622.9ps`|`230.62ns`|`127.12ns - 241.79ns`|
|@mapl/pattern-router (jit)|`1048576`|`200.95ns ± 626.73ps`|`233.85ns`|`135.24ns - 277.1ns`|
|hono pattern-router|`1048576`|`324.3ns ± 1.7ns`|`415.14ns`|`249.45ns - 463.3ns`|
|rou3 (jit)|`1048576`|`336.68ns ± 1.42ns`|`394.78ns`|`272.7ns - 570.88ns`|
|@mapl/pattern-router|`1048576`|`423.41ns ± 2.99ns`|`666.64ns`|`357.24ns - 705.12ns`|
|find-my-way (jit)|`1048576`|`476.94ns ± 2.39ns`|`531.3ns`|`400.35ns - 858.09ns`|
|hono reg-exp-router|`1048576`|`510.92ns ± 901.61ps`|`552.93ns`|`460.76ns - 648.72ns`|
|hono trie-router|`1048576`|`1.12μs ± 2.4ns`|`1.22μs`|`1.08μs - 1.24μs`|
|rou3|`1048576`|`1.24μs ± 3.86ns`|`1.37μs`|`1.16μs - 1.4μs`|
|hono linear-router|`1048576`|`3.29μs ± 8.4ns`|`3.56μs`|`3.15μs - 4.53μs`|


# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`5.39ns ± 58.78ps`|`10.4ns`|`4.59ns - 11.71ns`|
|@mapl/pattern-router (jit)|`1048576`|`5.59ns ± 38.63ps`|`8.77ns`|`5.1ns - 10.89ns`|
|rou3 (jit)|`1048576`|`19.63ns ± 130.07ps`|`26.87ns`|`17.04ns - 28.46ns`|
|hono reg-exp-router|`1048576`|`19.75ns ± 112.61ps`|`26.37ns`|`18.6ns - 40ns`|
|find-my-way (jit)|`1048576`|`69.92ns ± 379.1ps`|`85.55ns`|`61.98ns - 93.34ns`|
|rou3|`1048576`|`95.97ns ± 1.89ns`|`175.19ns`|`73.85ns - 178.94ns`|
|hono trie-router|`1048576`|`146.26ns ± 422.55ps`|`163.52ns`|`135.58ns - 170.44ns`|
|hono pattern-router|`1048576`|`182.12ns ± 3.05ns`|`260.38ns`|`134.52ns - 273.56ns`|
|hono linear-router|`1048576`|`566.69ns ± 4.14ns`|`995.21ns`|`537.38ns - 1.11μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.61ns ± 62.75ps`|`14.92ns`|`8.79ns - 15.96ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.37ns ± 75.25ps`|`15.71ns`|`9.23ns - 16.23ns`|
|hono reg-exp-router|`1048576`|`20.13ns ± 115.02ps`|`26.19ns`|`18.82ns - 31.3ns`|
|rou3 (jit)|`1048576`|`22.8ns ± 128.95ps`|`29.2ns`|`20.11ns - 32.01ns`|
|rou3|`1048576`|`34.64ns ± 137.58ps`|`40.79ns`|`31.94ns - 41.3ns`|
|find-my-way (jit)|`1048576`|`86.68ns ± 503.27ps`|`106.48ns`|`77.04ns - 132.55ns`|
|hono trie-router|`1048576`|`146.56ns ± 373.34ps`|`159.94ns`|`135.1ns - 161.94ns`|
|hono pattern-router|`1048576`|`148.22ns ± 593.78ps`|`163.98ns`|`136.54ns - 238.06ns`|
|hono linear-router|`1048576`|`595.39ns ± 867.42ps`|`628.87ns`|`574.14ns - 663.11ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`70.08ns ± 325.07ps`|`81.52ns`|`61.51ns - 118.64ns`|
|rou3 (jit)|`1048576`|`119.82ns ± 327.32ps`|`134.48ns`|`108.87ns - 140.35ns`|
|@mapl/pattern-router (jit)|`1048576`|`146.42ns ± 792.62ps`|`191.56ns`|`134.51ns - 260.78ns`|
|find-my-way (jit)|`1048576`|`183.69ns ± 753.87ps`|`212.87ns`|`167.87ns - 272.93ns`|
|hono reg-exp-router|`1048576`|`194.24ns ± 1.07ns`|`229.94ns`|`165.52ns - 244.02ns`|
|hono pattern-router|`1048576`|`230.3ns ± 394.26ps`|`253.9ns`|`216.12ns - 261.1ns`|
|rou3|`1048576`|`327.41ns ± 1.07ns`|`379.06ns`|`298.72ns - 384.86ns`|
|hono trie-router|`1048576`|`499.07ns ± 1.64ns`|`567.73ns`|`455.66ns - 581.32ns`|
|hono linear-router|`1048576`|`675.18ns ± 1.94ns`|`790.41ns`|`647.53ns - 951.27ns`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`59.9ns ± 268.06ps`|`71.21ns`|`52.2ns - 74.16ns`|
|rou3 (jit)|`1048576`|`126.02ns ± 327.29ps`|`137.89ns`|`113.77ns - 142.12ns`|
|@mapl/pattern-router (jit)|`1048576`|`133.82ns ± 384.18ps`|`153.59ns`|`121.08ns - 156.08ns`|
|find-my-way (jit)|`1048576`|`185.8ns ± 731.69ps`|`215.45ns`|`165.23ns - 229.04ns`|
|hono pattern-router|`1048576`|`193.38ns ± 592.14ps`|`227.85ns`|`175.94ns - 235.41ns`|
|hono reg-exp-router|`1048576`|`205.11ns ± 1.56ns`|`276.68ns`|`169.54ns - 369.36ns`|
|rou3|`1048576`|`329.31ns ± 1.21ns`|`386.76ns`|`301.89ns - 390.54ns`|
|hono linear-router|`1048576`|`476.32ns ± 1.14ns`|`544.51ns`|`456.83ns - 589.37ns`|
|hono trie-router|`1048576`|`508.31ns ± 1.87ns`|`580.49ns`|`461.96ns - 634.17ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.16ns ± 86.07ps`|`14.15ns`|`8.12ns - 21.95ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.67ns ± 78.98ps`|`14.48ns`|`8.78ns - 14.6ns`|
|hono reg-exp-router|`1048576`|`19ns ± 119.31ps`|`24.87ns`|`17.65ns - 38.71ns`|
|rou3 (jit)|`1048576`|`21.36ns ± 148.72ps`|`29.37ns`|`18.88ns - 30.45ns`|
|rou3|`1048576`|`27.58ns ± 198.15ps`|`38.53ns`|`24.79ns - 40.52ns`|
|find-my-way (jit)|`1048576`|`87.4ns ± 437.7ps`|`107.71ns`|`78.52ns - 114.36ns`|
|hono pattern-router|`1048576`|`107.78ns ± 389.63ps`|`121.67ns`|`99.39ns - 125.51ns`|
|hono trie-router|`1048576`|`145.63ns ± 924.32ps`|`179.75ns`|`131.93ns - 328.86ns`|
|hono linear-router|`1048576`|`286.73ns ± 671.77ps`|`323.35ns`|`269.13ns - 339ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`70.33ns ± 264.68ps`|`82.17ns`|`61.56ns - 83.37ns`|
|rou3 (jit)|`1048576`|`130.11ns ± 453.49ps`|`149.6ns`|`118.16ns - 191.58ns`|
|@mapl/pattern-router (jit)|`1048576`|`150.53ns ± 330.55ps`|`165.06ns`|`138.39ns - 173.89ns`|
|find-my-way (jit)|`1048576`|`191.25ns ± 948.99ps`|`237.4ns`|`170.42ns - 260.62ns`|
|hono reg-exp-router|`1048576`|`203.73ns ± 1.53ns`|`259.51ns`|`166.42ns - 272.92ns`|
|hono pattern-router|`1048576`|`232.82ns ± 510.52ps`|`254.59ns`|`217.72ns - 269.93ns`|
|rou3|`1048576`|`346.65ns ± 1.12ns`|`410.75ns`|`327.75ns - 547.79ns`|
|hono trie-router|`1048576`|`557.76ns ± 1.9ns`|`632.46ns`|`502.14ns - 647.97ns`|
|hono linear-router|`1048576`|`732.33ns ± 1.67ns`|`824.83ns`|`703.53ns - 879.92ns`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`59.84ns ± 218.99ps`|`68.72ns`|`53.38ns - 73.76ns`|
|rou3 (jit)|`1048576`|`128.85ns ± 270.61ps`|`138.03ns`|`119.13ns - 139.69ns`|
|@mapl/pattern-router (jit)|`1048576`|`136.99ns ± 352.95ps`|`151.52ns`|`124.34ns - 156ns`|
|find-my-way (jit)|`1048576`|`183.84ns ± 663.4ps`|`209.95ns`|`168.07ns - 234.09ns`|
|hono pattern-router|`1048576`|`199.85ns ± 439.57ps`|`229.11ns`|`184.51ns - 230.07ns`|
|hono reg-exp-router|`1048576`|`203.58ns ± 1.61ns`|`238.41ns`|`168.45ns - 400.44ns`|
|rou3|`1048576`|`353.09ns ± 1.52ns`|`424.95ns`|`319.49ns - 485.19ns`|
|hono linear-router|`1048576`|`479.38ns ± 917.74ps`|`510.48ns`|`459.64ns - 577.5ns`|
|hono trie-router|`1048576`|`554.12ns ± 2.54ns`|`635.64ns`|`501.51ns - 956.73ns`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`78.44ns ± 271.97ps`|`90.44ns`|`71.5ns - 94.1ns`|
|rou3 (jit)|`1048576`|`150.15ns ± 450.39ps`|`168.19ns`|`140.17ns - 220.87ns`|
|@mapl/pattern-router (jit)|`1048576`|`152.84ns ± 418.54ps`|`163.2ns`|`142.94ns - 230.1ns`|
|hono reg-exp-router|`1048576`|`216.07ns ± 1.6ns`|`275.68ns`|`176.41ns - 284.07ns`|
|find-my-way (jit)|`1048576`|`236.61ns ± 601.68ps`|`266.68ns`|`218.6ns - 287.88ns`|
|hono pattern-router|`1048576`|`247.69ns ± 565.77ps`|`286.86ns`|`233.46ns - 292.72ns`|
|rou3|`1048576`|`422.09ns ± 1.54ns`|`490.58ns`|`385.22ns - 500.94ns`|
|hono trie-router|`1048576`|`649.67ns ± 2.07ns`|`728.64ns`|`594.01ns - 771.02ns`|
|hono linear-router|`1048576`|`780.43ns ± 1.08ns`|`833.32ns`|`752.16ns - 862.86ns`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`73.36ns ± 217.28ps`|`82.42ns`|`66.34ns - 88.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`129.55ns ± 279.26ps`|`139.5ns`|`120.76ns - 146.92ns`|
|rou3 (jit)|`1048576`|`159.96ns ± 347.17ps`|`174.63ns`|`149.89ns - 176.54ns`|
|hono reg-exp-router|`1048576`|`207.91ns ± 818.81ps`|`255.11ns`|`180.83ns - 266.06ns`|
|hono pattern-router|`1048576`|`208.87ns ± 315.3ps`|`223.3ns`|`197.55ns - 236.46ns`|
|find-my-way (jit)|`1048576`|`247.47ns ± 621.75ps`|`274ns`|`231.05ns - 317.57ns`|
|rou3|`1048576`|`414.68ns ± 1.03ns`|`460.55ns`|`386.84ns - 524.6ns`|
|hono linear-router|`1048576`|`440.99ns ± 617.79ps`|`471.81ns`|`422.52ns - 500.32ns`|
|hono trie-router|`1048576`|`647.27ns ± 2.91ns`|`749.23ns`|`594.59ns - 1.18μs`|

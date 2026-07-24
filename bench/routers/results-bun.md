# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`5.16ns ± 59.2ps`|`9.72ns`|`4.57ns - 10.24ns`|
|@mapl/router (jit)|`1048576`|`5.68ns ± 101.56ps`|`8.67ns`|`4.12ns - 10.88ns`|
|rou3 (jit)|`1048576`|`12.04ns ± 96.62ps`|`16.84ns`|`11.23ns - 24.05ns`|
|@mapl/pattern-router|`1048576`|`14.12ns ± 192.21ps`|`23.33ns`|`11.92ns - 25.49ns`|
|hono reg-exp-router|`1048576`|`18.37ns ± 104.21ps`|`23.84ns`|`17.28ns - 33.76ns`|
|find-my-way (jit)|`1048576`|`29.79ns ± 531.68ps`|`81ns`|`26.45ns - 98.26ns`|
|rou3|`1048576`|`64.58ns ± 336.16ps`|`76.67ns`|`61.28ns - 133.27ns`|
|hono trie-router|`1048576`|`111.45ns ± 1.75ns`|`237.35ns`|`97.48ns - 338.38ns`|
|hono pattern-router|`1048576`|`120.15ns ± 523.72ps`|`160.46ns`|`114.47ns - 195.09ns`|
|hono linear-router|`1048576`|`490.74ns ± 3.89ns`|`749.64ns`|`466.54ns - 1.01μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`8.17ns ± 51.74ps`|`12.56ns`|`7.6ns - 12.86ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.33ns ± 60.77ps`|`14.09ns`|`8.44ns - 14.9ns`|
|rou3 (jit)|`1048576`|`18.45ns ± 112.62ps`|`23.65ns`|`16.94ns - 36.26ns`|
|hono reg-exp-router|`1048576`|`18.62ns ± 123.96ps`|`24.42ns`|`17.31ns - 39.13ns`|
|@mapl/pattern-router|`1048576`|`20.51ns ± 94.83ps`|`25.55ns`|`19.46ns - 29.07ns`|
|rou3|`1048576`|`27.99ns ± 115.34ps`|`33.3ns`|`26.29ns - 40.73ns`|
|find-my-way (jit)|`1048576`|`48.15ns ± 549.27ps`|`87.72ns`|`44.48ns - 126.48ns`|
|hono trie-router|`1048576`|`112ns ± 1.37ns`|`239.65ns`|`102.33ns - 277.92ns`|
|hono pattern-router|`1048576`|`122.48ns ± 661.92ps`|`165.78ns`|`116.27ns - 217.22ns`|
|hono linear-router|`1048576`|`504.15ns ± 1.35ns`|`525.55ns`|`491.76ns - 740.46ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`56.32ns ± 202.31ps`|`68.21ns`|`53.6ns - 74.77ns`|
|rou3 (jit)|`1048576`|`113.41ns ± 391.58ps`|`145.9ns`|`107.78ns - 151.48ns`|
|find-my-way (jit)|`1048576`|`121.79ns ± 609.91ps`|`167.39ns`|`114.25ns - 205.84ns`|
|@mapl/pattern-router (jit)|`1048576`|`130.59ns ± 468.67ps`|`159.66ns`|`124.79ns - 182.8ns`|
|@mapl/pattern-router|`1048576`|`169.31ns ± 702.83ps`|`217.95ns`|`160.9ns - 271.81ns`|
|hono reg-exp-router|`1048576`|`196.79ns ± 733.49ps`|`249.09ns`|`183.47ns - 263.65ns`|
|hono pattern-router|`1048576`|`213.52ns ± 565ps`|`248.78ns`|`205.39ns - 290.91ns`|
|rou3|`1048576`|`280.39ns ± 1.5ns`|`369.17ns`|`268.76ns - 502.1ns`|
|hono trie-router|`1048576`|`403.76ns ± 2.94ns`|`676.92ns`|`384.59ns - 757.14ns`|
|hono linear-router|`1048576`|`605.76ns ± 2.68ns`|`846.21ns`|`586.83ns - 965.84ns`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`44.8ns ± 160.13ps`|`51.36ns`|`42.72ns - 57.46ns`|
|rou3 (jit)|`1048576`|`113.74ns ± 509.08ps`|`148.27ns`|`108.13ns - 187.42ns`|
|@mapl/pattern-router (jit)|`1048576`|`124.45ns ± 440.02ps`|`164.33ns`|`119.01ns - 188.03ns`|
|find-my-way (jit)|`1048576`|`124.58ns ± 674.57ps`|`183.48ns`|`116.63ns - 214.46ns`|
|@mapl/pattern-router|`1048576`|`163.18ns ± 801.13ps`|`211.04ns`|`154.61ns - 293.83ns`|
|hono pattern-router|`1048576`|`184.73ns ± 669.21ps`|`246.81ns`|`177.32ns - 272.54ns`|
|hono reg-exp-router|`1048576`|`194.57ns ± 711.4ps`|`254.86ns`|`183.13ns - 286.35ns`|
|rou3|`1048576`|`275.75ns ± 1.05ns`|`357.95ns`|`266.81ns - 423.42ns`|
|hono trie-router|`1048576`|`402.81ns ± 2.68ns`|`685.31ns`|`385.28ns - 717.45ns`|
|hono linear-router|`1048576`|`407.89ns ± 1.7ns`|`554.59ns`|`394.8ns - 625.81ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`6.87ns ± 49.7ps`|`11.13ns`|`6.36ns - 11.65ns`|
|@mapl/router (jit)|`1048576`|`6.89ns ± 40.02ps`|`7.74ns`|`6.25ns - 11.96ns`|
|rou3 (jit)|`1048576`|`14.1ns ± 103.48ps`|`22.87ns`|`13.08ns - 26.57ns`|
|hono reg-exp-router|`1048576`|`15.14ns ± 73.16ps`|`20.24ns`|`14.36ns - 20.82ns`|
|rou3|`1048576`|`19.03ns ± 134.24ps`|`28.14ns`|`17.63ns - 28.84ns`|
|@mapl/pattern-router|`1048576`|`23.87ns ± 125.18ps`|`29.59ns`|`22.81ns - 43.05ns`|
|find-my-way (jit)|`1048576`|`40.3ns ± 438.18ps`|`73.44ns`|`37.54ns - 96.11ns`|
|hono pattern-router|`1048576`|`89.66ns ± 684.58ps`|`122.68ns`|`84.95ns - 201.93ns`|
|hono trie-router|`1048576`|`110.36ns ± 1.19ns`|`143.46ns`|`102.54ns - 330.24ns`|
|hono linear-router|`1048576`|`221.36ns ± 1.03ns`|`302.82ns`|`211.06ns - 365.31ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`52.21ns ± 345.3ps`|`62.61ns`|`49.39ns - 116.19ns`|
|rou3 (jit)|`1048576`|`111.96ns ± 426ps`|`145.68ns`|`106.61ns - 169.99ns`|
|find-my-way (jit)|`1048576`|`125.39ns ± 1.02ns`|`202.51ns`|`116.6ns - 258.73ns`|
|@mapl/pattern-router (jit)|`1048576`|`133.17ns ± 616.6ps`|`177.23ns`|`126.57ns - 188.22ns`|
|@mapl/pattern-router|`1048576`|`168.93ns ± 786.31ps`|`182.47ns`|`161.17ns - 347.93ns`|
|hono reg-exp-router|`1048576`|`186.43ns ± 879.13ps`|`242.74ns`|`177.12ns - 325.79ns`|
|hono pattern-router|`1048576`|`211.07ns ± 797.87ps`|`278.23ns`|`202.02ns - 333.43ns`|
|rou3|`1048576`|`292.54ns ± 1.49ns`|`398.74ns`|`275.34ns - 478.49ns`|
|hono trie-router|`1048576`|`434.22ns ± 2.24ns`|`635.02ns`|`418.31ns - 767.86ns`|
|hono linear-router|`1048576`|`659.54ns ± 2.69ns`|`902.74ns`|`637.6ns - 961.48ns`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`44.41ns ± 150.13ps`|`51.39ns`|`41.88ns - 59.9ns`|
|rou3 (jit)|`1048576`|`109.79ns ± 553.04ps`|`151.67ns`|`103.73ns - 168.01ns`|
|find-my-way (jit)|`1048576`|`122.47ns ± 621.59ps`|`178.04ns`|`115.16ns - 188.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`125.77ns ± 568.89ps`|`170.26ns`|`119.58ns - 186.5ns`|
|@mapl/pattern-router|`1048576`|`159.94ns ± 770.26ps`|`225.38ns`|`150.82ns - 260.86ns`|
|hono pattern-router|`1048576`|`180.74ns ± 885.25ps`|`247.84ns`|`172.17ns - 297.93ns`|
|hono reg-exp-router|`1048576`|`186.05ns ± 604.75ps`|`229.88ns`|`176.23ns - 283.7ns`|
|rou3|`1048576`|`285.28ns ± 736.03ps`|`345.95ns`|`278.13ns - 405.07ns`|
|hono linear-router|`1048576`|`408.11ns ± 2.2ns`|`572.71ns`|`392.23ns - 648.36ns`|
|hono trie-router|`1048576`|`431.12ns ± 2.58ns`|`710.41ns`|`414.8ns - 775.14ns`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.26ns ± 281.27ps`|`76.93ns`|`62.42ns - 120.22ns`|
|@mapl/pattern-router (jit)|`1048576`|`133.88ns ± 414.89ps`|`139.56ns`|`129.21ns - 193.72ns`|
|rou3 (jit)|`1048576`|`140.75ns ± 518.04ps`|`168.79ns`|`135.15ns - 217.63ns`|
|find-my-way (jit)|`1048576`|`161.46ns ± 890.08ps`|`230.68ns`|`152.25ns - 253.31ns`|
|@mapl/pattern-router|`1048576`|`175.99ns ± 1ns`|`231.69ns`|`167.2ns - 371.17ns`|
|hono reg-exp-router|`1048576`|`199.39ns ± 1.1ns`|`277.24ns`|`188.37ns - 398.27ns`|
|hono pattern-router|`1048576`|`223.9ns ± 1.05ns`|`311.37ns`|`213.49ns - 340.73ns`|
|rou3|`1048576`|`345.59ns ± 2.49ns`|`525.51ns`|`326.62ns - 617.39ns`|
|hono trie-router|`1048576`|`485.01ns ± 522.32ps`|`518.4ns`|`475.51ns - 565.03ns`|
|hono linear-router|`1048576`|`698.71ns ± 3.14ns`|`961.25ns`|`673.36ns - 1.06μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`68.42ns ± 349.25ps`|`79.03ns`|`63.82ns - 138.08ns`|
|@mapl/pattern-router (jit)|`1048576`|`122.99ns ± 290.28ps`|`146.05ns`|`117.96ns - 154.14ns`|
|rou3 (jit)|`1048576`|`137.59ns ± 573.43ps`|`176.89ns`|`130.83ns - 225.22ns`|
|find-my-way (jit)|`1048576`|`159.92ns ± 717.39ps`|`210.41ns`|`151.28ns - 257.97ns`|
|@mapl/pattern-router|`1048576`|`164.93ns ± 426.81ps`|`193.51ns`|`157.28ns - 219.02ns`|
|hono pattern-router|`1048576`|`182.42ns ± 805.55ps`|`205.88ns`|`173.73ns - 305.44ns`|
|hono reg-exp-router|`1048576`|`193.89ns ± 560.91ps`|`240.53ns`|`186.49ns - 281.14ns`|
|rou3|`1048576`|`339.68ns ± 1.67ns`|`407.51ns`|`326.98ns - 634.76ns`|
|hono linear-router|`1048576`|`355.47ns ± 1.15ns`|`454.28ns`|`346.4ns - 470.66ns`|
|hono trie-router|`1048576`|`519.27ns ± 5.49ns`|`905.2ns`|`473.16ns - 1.19μs`|

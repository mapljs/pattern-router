# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`10.89ns ± 486.35ps`|`38.99ns`|`4.72ns - 40.04ns`|
|@mapl/router (jit)|`1048576`|`12.06ns ± 471.43ps`|`38.03ns`|`6.05ns - 43.11ns`|
|rou3 (jit)|`1048576`|`31.69ns ± 351.22ps`|`40.94ns`|`17.05ns - 67.2ns`|
|@mapl/pattern-router|`1048576`|`35.9ns ± 503.76ps`|`67.28ns`|`17.98ns - 73.65ns`|
|find-my-way (jit)|`1048576`|`50.86ns ± 676.32ps`|`82.51ns`|`25.62ns - 85.11ns`|
|hono reg-exp-router|`1048576`|`57.76ns ± 873.35ps`|`91.49ns`|`31.51ns - 103.33ns`|
|rou3|`1048576`|`201.44ns ± 1.71ns`|`250.08ns`|`132.85ns - 302.27ns`|
|hono trie-router|`1048576`|`227.75ns ± 2.3ns`|`351.62ns`|`150.48ns - 376.58ns`|
|hono pattern-router|`1048576`|`238.82ns ± 2.66ns`|`286.61ns`|`127.38ns - 290.19ns`|
|hono linear-router|`1048576`|`529.05ns ± 2.51ns`|`605.4ns`|`434.67ns - 835.73ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`10.17ns ± 192.77ps`|`13.81ns`|`6.02ns - 45.54ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.56ns ± 294.23ps`|`39.45ns`|`5.66ns - 44.91ns`|
|rou3 (jit)|`1048576`|`31.55ns ± 342.63ps`|`57.71ns`|`16.38ns - 60.2ns`|
|@mapl/pattern-router|`1048576`|`34.34ns ± 526.7ps`|`62.98ns`|`18.39ns - 70.38ns`|
|hono reg-exp-router|`1048576`|`56.26ns ± 827.21ps`|`87.43ns`|`28.78ns - 94.15ns`|
|rou3|`1048576`|`97.85ns ± 987.92ps`|`134.63ns`|`58.84ns - 161.02ns`|
|find-my-way (jit)|`1048576`|`115.79ns ± 1.08ns`|`151.47ns`|`64.52ns - 156.19ns`|
|hono pattern-router|`1048576`|`186.62ns ± 1.43ns`|`225.08ns`|`114.67ns - 256.39ns`|
|hono trie-router|`1048576`|`244.46ns ± 1.8ns`|`308.34ns`|`161.25ns - 344.42ns`|
|hono linear-router|`1048576`|`572.42ns ± 4.81ns`|`1.06μs`|`453.14ns - 1.08μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`52.07ns ± 454.38ps`|`69.09ns`|`30.82ns - 84.62ns`|
|@mapl/pattern-router (jit)|`1048576`|`141.08ns ± 1.53ns`|`183.1ns`|`75.58ns - 186.94ns`|
|hono pattern-router|`1048576`|`209.72ns ± 1.63ns`|`285.49ns`|`134.77ns - 297.25ns`|
|rou3 (jit)|`1048576`|`222.71ns ± 2.07ns`|`335.61ns`|`140.24ns - 366.11ns`|
|find-my-way (jit)|`1048576`|`225.12ns ± 1.96ns`|`298.48ns`|`144.19ns - 333.09ns`|
|@mapl/pattern-router|`1048576`|`499.37ns ± 2.04ns`|`604.44ns`|`409.48ns - 767.21ns`|
|hono trie-router|`1048576`|`707.68ns ± 4.36ns`|`879.32ns`|`581.09ns - 895.78ns`|
|hono reg-exp-router|`1048576`|`753.18ns ± 3.09ns`|`866.36ns`|`670.14ns - 900.75ns`|
|hono linear-router|`1048576`|`753.96ns ± 4.28ns`|`963.35ns`|`662.31ns - 1.35μs`|
|rou3|`1048576`|`1.83μs ± 3.82ns`|`1.97μs`|`1.73μs - 1.98μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`50.77ns ± 513.51ps`|`79.89ns`|`30.53ns - 83.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`133.16ns ± 1.12ns`|`164.78ns`|`68.6ns - 173.83ns`|
|hono pattern-router|`1048576`|`189.08ns ± 1.78ns`|`253.71ns`|`114.32ns - 274.55ns`|
|rou3 (jit)|`1048576`|`213.44ns ± 1.72ns`|`265.33ns`|`138.92ns - 283.27ns`|
|find-my-way (jit)|`1048576`|`229.46ns ± 1.88ns`|`311.88ns`|`134.94ns - 354.18ns`|
|@mapl/pattern-router|`1048576`|`489.6ns ± 1.29ns`|`573.43ns`|`426.61ns - 591.8ns`|
|hono linear-router|`1048576`|`510.07ns ± 1.79ns`|`575.36ns`|`397.39ns - 661.17ns`|
|hono reg-exp-router|`1048576`|`755.73ns ± 3.03ns`|`864.75ns`|`712.08ns - 885.67ns`|
|hono trie-router|`1048576`|`763.24ns ± 5ns`|`901.98ns`|`625.78ns - 914.64ns`|
|rou3|`1048576`|`1.81μs ± 5.82ns`|`1.97μs`|`1.67μs - 2.73μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`8.69ns ± 187.04ps`|`12.07ns`|`4.8ns - 41.22ns`|
|@mapl/router (jit)|`1048576`|`11.34ns ± 447.17ps`|`37.28ns`|`5.72ns - 42.27ns`|
|rou3 (jit)|`1048576`|`26.53ns ± 422.62ps`|`54.45ns`|`14.5ns - 65.17ns`|
|@mapl/pattern-router|`1048576`|`39.92ns ± 745.18ps`|`68.99ns`|`19.96ns - 70.8ns`|
|hono reg-exp-router|`1048576`|`55.14ns ± 786.44ps`|`85.9ns`|`31.06ns - 91.84ns`|
|rou3|`1048576`|`75.2ns ± 635.49ps`|`94.46ns`|`46.33ns - 105.93ns`|
|find-my-way (jit)|`1048576`|`110.61ns ± 1.14ns`|`147.46ns`|`57.05ns - 158.97ns`|
|hono pattern-router|`1048576`|`158.9ns ± 1.73ns`|`204.86ns`|`91.06ns - 216.84ns`|
|hono trie-router|`1048576`|`237.35ns ± 2.33ns`|`398.31ns`|`153.22ns - 410.5ns`|
|hono linear-router|`1048576`|`289.95ns ± 1.62ns`|`354.55ns`|`213.52ns - 424.83ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`51.79ns ± 526.9ps`|`78.69ns`|`31.16ns - 86.1ns`|
|@mapl/pattern-router (jit)|`1048576`|`137.77ns ± 1.37ns`|`176.96ns`|`74.28ns - 185.81ns`|
|find-my-way (jit)|`1048576`|`223.52ns ± 2.07ns`|`304.73ns`|`133.8ns - 340.17ns`|
|rou3 (jit)|`1048576`|`228.2ns ± 2.7ns`|`374.02ns`|`144.62ns - 585.04ns`|
|hono pattern-router|`1048576`|`236.14ns ± 1.66ns`|`326.09ns`|`151.48ns - 335.4ns`|
|@mapl/pattern-router|`1048576`|`291.4ns ± 1.93ns`|`415.43ns`|`217.96ns - 461.11ns`|
|hono reg-exp-router|`1048576`|`360.39ns ± 2.5ns`|`491.86ns`|`281.61ns - 676.06ns`|
|hono trie-router|`1048576`|`717.23ns ± 5.98ns`|`980.64ns`|`587.78ns - 1.35μs`|
|hono linear-router|`1048576`|`827.33ns ± 2.41ns`|`952.12ns`|`746.99ns - 981.87ns`|
|rou3|`1048576`|`1.81μs ± 3.67ns`|`1.94μs`|`1.73μs - 1.98μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`49.72ns ± 613.89ps`|`76.38ns`|`29.4ns - 143.74ns`|
|@mapl/pattern-router (jit)|`1048576`|`134.54ns ± 1.22ns`|`172.17ns`|`69.08ns - 231.66ns`|
|hono pattern-router|`1048576`|`194.82ns ± 1.62ns`|`257.62ns`|`114.52ns - 281.24ns`|
|find-my-way (jit)|`1048576`|`224.56ns ± 1.96ns`|`320.34ns`|`152.41ns - 358.55ns`|
|rou3 (jit)|`1048576`|`226.96ns ± 1.71ns`|`314.93ns`|`149.41ns - 335.8ns`|
|@mapl/pattern-router|`1048576`|`502.51ns ± 1.3ns`|`551.65ns`|`426.7ns - 595.56ns`|
|hono linear-router|`1048576`|`506.89ns ± 1.65ns`|`554.61ns`|`431.01ns - 726.64ns`|
|hono trie-router|`1048576`|`666.39ns ± 3.63ns`|`826.31ns`|`581.97ns - 1.25μs`|
|hono reg-exp-router|`1048576`|`762.35ns ± 3.55ns`|`869.27ns`|`676.47ns - 1.15μs`|
|rou3|`1048576`|`1.81μs ± 3.82ns`|`1.96μs`|`1.63μs - 1.98μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`157.62ns ± 1.58ns`|`206.39ns`|`94.37ns - 269.28ns`|
|@mapl/pattern-router (jit)|`1048576`|`202.39ns ± 1.78ns`|`291.61ns`|`118.23ns - 294.06ns`|
|hono pattern-router|`1048576`|`317.32ns ± 1.92ns`|`429.56ns`|`233.93ns - 468.26ns`|
|rou3 (jit)|`1048576`|`326.93ns ± 2.67ns`|`495.79ns`|`236.28ns - 563.98ns`|
|find-my-way (jit)|`1048576`|`395.26ns ± 2.41ns`|`549.06ns`|`291.34ns - 609.93ns`|
|@mapl/pattern-router|`1048576`|`595.3ns ± 1.26ns`|`648.67ns`|`502.95ns - 683.4ns`|
|hono trie-router|`1048576`|`859.79ns ± 4.69ns`|`1.01μs`|`697.29ns - 1.02μs`|
|hono reg-exp-router|`1048576`|`860.43ns ± 3.26ns`|`958.74ns`|`739.36ns - 982.78ns`|
|hono linear-router|`1048576`|`966.63ns ± 3.61ns`|`1.13μs`|`817.21ns - 1.3μs`|
|rou3|`1048576`|`2.03μs ± 4.34ns`|`2.19μs`|`1.86μs - 2.2μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`157.78ns ± 1.43ns`|`197.86ns`|`83.28ns - 213.92ns`|
|@mapl/pattern-router (jit)|`1048576`|`182.05ns ± 1.76ns`|`236.46ns`|`96.38ns - 252.12ns`|
|hono pattern-router|`1048576`|`259.86ns ± 1.72ns`|`334.32ns`|`174.43ns - 370.56ns`|
|rou3 (jit)|`1048576`|`311.26ns ± 2ns`|`408.54ns`|`228.08ns - 472.57ns`|
|find-my-way (jit)|`1048576`|`414.82ns ± 3.27ns`|`654.96ns`|`320.15ns - 680.39ns`|
|hono linear-router|`1048576`|`489.68ns ± 3.06ns`|`719.8ns`|`410.78ns - 887.96ns`|
|@mapl/pattern-router|`1048576`|`578.66ns ± 1.45ns`|`681.14ns`|`474.29ns - 696.56ns`|
|hono trie-router|`1048576`|`836.8ns ± 4.4ns`|`985.19ns`|`710.1ns - 1.01μs`|
|hono reg-exp-router|`1048576`|`878.75ns ± 3.47ns`|`984.88ns`|`796.64ns - 997.71ns`|
|rou3|`1048576`|`2.04μs ± 4.18ns`|`2.19μs`|`1.86μs - 2.2μs`|


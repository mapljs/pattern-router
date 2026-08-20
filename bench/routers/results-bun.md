# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`7.11ns ± 68.58ps`|`12.93ns`|`6.82ns - 15.31ns`|
|@mapl/pattern-router (jit)|`1048576`|`8.87ns ± 164.61ps`|`18.56ns`|`7.51ns - 18.79ns`|
|rou3 (jit)|`1048576`|`16.44ns ± 81.01ps`|`22.2ns`|`15.7ns - 25.44ns`|
|hono reg-exp-router|`1048576`|`19.08ns ± 110.4ps`|`24.86ns`|`18.14ns - 30.13ns`|
|@mapl/pattern-router|`1048576`|`27.17ns ± 281.13ps`|`42.78ns`|`25.14ns - 49.13ns`|
|find-my-way (jit)|`1048576`|`41.4ns ± 242.5ps`|`59.96ns`|`39.16ns - 65ns`|
|rou3|`1048576`|`103.42ns ± 1.74ns`|`163.7ns`|`87.22ns - 164.27ns`|
|hono trie-router|`1048576`|`162.06ns ± 1.66ns`|`253.85ns`|`148.64ns - 254.63ns`|
|hono pattern-router|`1048576`|`193.99ns ± 2.06ns`|`324.99ns`|`179.6ns - 326.53ns`|
|hono linear-router|`1048576`|`609.79ns ± 1.01ns`|`686.72ns`|`598.07ns - 716.76ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`12.37ns ± 73.92ps`|`17.94ns`|`11.8ns - 18.53ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.12ns ± 93.2ps`|`18.97ns`|`12.37ns - 19.61ns`|
|rou3 (jit)|`1048576`|`20.83ns ± 95.06ps`|`26.44ns`|`19.91ns - 28.74ns`|
|hono reg-exp-router|`1048576`|`23.04ns ± 169.04ps`|`35.48ns`|`21.66ns - 36.47ns`|
|@mapl/pattern-router|`1048576`|`28.13ns ± 104.17ps`|`33.86ns`|`27.11ns - 34.82ns`|
|rou3|`1048576`|`42.92ns ± 172.44ps`|`49.85ns`|`40.16ns - 55.4ns`|
|find-my-way (jit)|`1048576`|`72.53ns ± 156.56ps`|`77.88ns`|`70.19ns - 79.89ns`|
|hono trie-router|`1048576`|`156.26ns ± 207.54ps`|`164.77ns`|`150.89ns - 170.05ns`|
|hono pattern-router|`1048576`|`185.01ns ± 177.19ps`|`192.92ns`|`179.68ns - 198.06ns`|
|hono linear-router|`1048576`|`654.57ns ± 768.27ps`|`710.72ns`|`641.67ns - 734.46ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`73.12ns ± 196.22ps`|`79.88ns`|`68.81ns - 85.96ns`|
|rou3 (jit)|`1048576`|`134.96ns ± 228.87ps`|`143.24ns`|`129.37ns - 148.53ns`|
|find-my-way (jit)|`1048576`|`157.73ns ± 303.43ps`|`173.06ns`|`149.17ns - 187.88ns`|
|@mapl/pattern-router (jit)|`1048576`|`159.66ns ± 1.34ns`|`242.91ns`|`147.12ns - 247.26ns`|
|@mapl/pattern-router|`1048576`|`200.12ns ± 253.02ps`|`213.68ns`|`192.64ns - 221.55ns`|
|hono reg-exp-router|`1048576`|`230.86ns ± 2.06ns`|`365.24ns`|`214.88ns - 374.88ns`|
|hono pattern-router|`1048576`|`265.56ns ± 306.04ps`|`285.51ns`|`259.87ns - 306.12ns`|
|rou3|`1048576`|`379.54ns ± 1.45ns`|`464.25ns`|`366.93ns - 666.16ns`|
|hono trie-router|`1048576`|`566.82ns ± 470.02ps`|`592.44ns`|`553.79ns - 606.47ns`|
|hono linear-router|`1048576`|`767.95ns ± 866.75ps`|`848.18ns`|`756.15ns - 872.95ns`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`62.04ns ± 204.08ps`|`69.95ns`|`58.04ns - 77.15ns`|
|rou3 (jit)|`1048576`|`135.99ns ± 233.97ps`|`145ns`|`129.76ns - 151.27ns`|
|@mapl/pattern-router (jit)|`1048576`|`144.15ns ± 244.52ps`|`155.25ns`|`137.42ns - 158.29ns`|
|find-my-way (jit)|`1048576`|`160.35ns ± 259.75ps`|`173.82ns`|`150.55ns - 181.42ns`|
|@mapl/pattern-router|`1048576`|`194.65ns ± 332.59ps`|`208.74ns`|`186.55ns - 253.95ns`|
|hono pattern-router|`1048576`|`222.8ns ± 201.07ps`|`231.01ns`|`215.17ns - 242.28ns`|
|hono reg-exp-router|`1048576`|`223.79ns ± 1.28ns`|`356.16ns`|`211.16ns - 381.71ns`|
|rou3|`1048576`|`378.42ns ± 358.06ps`|`396.76ns`|`367.52ns - 403.46ns`|
|hono linear-router|`1048576`|`521.76ns ± 361.37ps`|`541.73ns`|`511.76ns - 567.41ns`|
|hono trie-router|`1048576`|`568.64ns ± 834.43ps`|`641.46ns`|`555.7ns - 655.31ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.59ns ± 66.01ps`|`14.05ns`|`9.17ns - 16.12ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.9ns ± 80.41ps`|`15.79ns`|`9.39ns - 16.42ns`|
|rou3 (jit)|`1048576`|`18.1ns ± 121.35ps`|`23.75ns`|`17.09ns - 24.06ns`|
|hono reg-exp-router|`1048576`|`19.44ns ± 227.35ps`|`32.93ns`|`17.44ns - 34.67ns`|
|@mapl/pattern-router|`1048576`|`29.54ns ± 120.77ps`|`35.33ns`|`28.44ns - 35.47ns`|
|rou3|`1048576`|`32.9ns ± 162.56ps`|`40.59ns`|`31.36ns - 53.54ns`|
|find-my-way (jit)|`1048576`|`59.93ns ± 161.6ps`|`65.1ns`|`57.66ns - 71.53ns`|
|hono pattern-router|`1048576`|`135.59ns ± 341.93ps`|`152.4ns`|`131.13ns - 200.31ns`|
|hono trie-router|`1048576`|`149.41ns ± 200.52ps`|`154.78ns`|`144.66ns - 167.47ns`|
|hono linear-router|`1048576`|`310.54ns ± 220.12ps`|`321.88ns`|`303.99ns - 328.24ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`70.73ns ± 207.2ps`|`79.26ns`|`66.08ns - 84.63ns`|
|rou3 (jit)|`1048576`|`139.29ns ± 248.54ps`|`147.85ns`|`131.9ns - 169.38ns`|
|@mapl/pattern-router (jit)|`1048576`|`156.95ns ± 193.43ps`|`163.05ns`|`150.46ns - 174.46ns`|
|find-my-way (jit)|`1048576`|`161.38ns ± 597.04ps`|`193.55ns`|`150.17ns - 257.15ns`|
|@mapl/pattern-router|`1048576`|`201.75ns ± 1.11ns`|`246.95ns`|`191.96ns - 361.99ns`|
|hono reg-exp-router|`1048576`|`220.08ns ± 1ns`|`232.74ns`|`208.64ns - 366.31ns`|
|hono pattern-router|`1048576`|`266.33ns ± 344.05ps`|`278.16ns`|`259.88ns - 336.89ns`|
|rou3|`1048576`|`395.97ns ± 286.31ps`|`408.3ns`|`387.25ns - 417.01ns`|
|hono trie-router|`1048576`|`648.44ns ± 508.11ps`|`675.04ns`|`632ns - 692.98ns`|
|hono linear-router|`1048576`|`838.33ns ± 518.24ps`|`870.64ns`|`824.01ns - 875.62ns`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`62.31ns ± 213.77ps`|`70.85ns`|`57.31ns - 72.06ns`|
|rou3 (jit)|`1048576`|`141.95ns ± 265.16ps`|`151.19ns`|`133.13ns - 164.2ns`|
|@mapl/pattern-router (jit)|`1048576`|`145.99ns ± 390.14ps`|`155.2ns`|`138.71ns - 228.08ns`|
|find-my-way (jit)|`1048576`|`162.24ns ± 298.37ps`|`173.33ns`|`151.85ns - 194.94ns`|
|@mapl/pattern-router|`1048576`|`190.81ns ± 199.16ps`|`197.8ns`|`183.25ns - 203.81ns`|
|hono pattern-router|`1048576`|`220.16ns ± 307.96ps`|`231.62ns`|`211.11ns - 267.76ns`|
|hono reg-exp-router|`1048576`|`224.81ns ± 1.48ns`|`359.77ns`|`209.53ns - 367.4ns`|
|rou3|`1048576`|`395.31ns ± 370.32ps`|`413.35ns`|`385.07ns - 431.96ns`|
|hono linear-router|`1048576`|`524.29ns ± 919.4ps`|`617.55ns`|`514.2ns - 642.64ns`|
|hono trie-router|`1048576`|`640.92ns ± 374.54ps`|`658.43ns`|`628.16ns - 663.46ns`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`83.97ns ± 200.45ps`|`91.35ns`|`79.27ns - 97.41ns`|
|@mapl/pattern-router (jit)|`1048576`|`160.35ns ± 193.43ps`|`166.17ns`|`151.97ns - 178.03ns`|
|rou3 (jit)|`1048576`|`170.96ns ± 223.42ps`|`178.33ns`|`162.9ns - 184.7ns`|
|@mapl/pattern-router|`1048576`|`206.15ns ± 184.59ps`|`211.64ns`|`198.32ns - 216.38ns`|
|find-my-way (jit)|`1048576`|`208.33ns ± 2.67ns`|`458.01ns`|`185.66ns - 480.88ns`|
|hono reg-exp-router|`1048576`|`226.25ns ± 276.16ps`|`236.83ns`|`217.52ns - 266.72ns`|
|hono pattern-router|`1048576`|`274.15ns ± 222.84ps`|`284.05ns`|`268.69ns - 296.47ns`|
|rou3|`1048576`|`461.76ns ± 379.19ps`|`478.2ns`|`451.22ns - 515.98ns`|
|hono trie-router|`1048576`|`742.16ns ± 922.5ps`|`796.54ns`|`724.94ns - 826.94ns`|
|hono linear-router|`1048576`|`901.93ns ± 508.03ps`|`927ns`|`886.14ns - 938.96ns`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`75.76ns ± 209.89ps`|`83.97ns`|`70.5ns - 92.68ns`|
|@mapl/pattern-router (jit)|`1048576`|`128.09ns ± 220.77ps`|`134.38ns`|`121.67ns - 147.44ns`|
|rou3 (jit)|`1048576`|`176.74ns ± 424.51ps`|`198.46ns`|`168.59ns - 235.11ns`|
|@mapl/pattern-router|`1048576`|`180.05ns ± 197.73ps`|`186.85ns`|`172.56ns - 193.26ns`|
|find-my-way (jit)|`1048576`|`212.83ns ± 538.44ps`|`258.49ns`|`202.94ns - 266.36ns`|
|hono reg-exp-router|`1048576`|`222.49ns ± 522.65ps`|`246.43ns`|`214.43ns - 306.03ns`|
|hono pattern-router|`1048576`|`224.63ns ± 725.79ps`|`234.46ns`|`216.13ns - 355.08ns`|
|rou3|`1048576`|`460.33ns ± 397.69ps`|`474.12ns`|`448.85ns - 527ns`|
|hono linear-router|`1048576`|`489.36ns ± 1.56ns`|`506.76ns`|`477.41ns - 874.82ns`|
|hono trie-router|`1048576`|`746.66ns ± 789.93ps`|`772.62ns`|`732.57ns - 903.62ns`|

# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.87ns ± 435.88ps`|`46ns`|`6.24ns - 53.48ns`|
|@mapl/pattern-router (jit)|`1048576`|`15.53ns ± 723ps`|`52.78ns`|`6.19ns - 90.37ns`|
|rou3 (jit)|`1048576`|`38.87ns ± 486.65ps`|`52.91ns`|`21.47ns - 91.41ns`|
|@mapl/pattern-router|`1048576`|`45.63ns ± 783.34ps`|`80.78ns`|`24.54ns - 107.54ns`|
|hono reg-exp-router|`1048576`|`66.56ns ± 940.62ps`|`110.78ns`|`35.52ns - 121.22ns`|
|find-my-way (jit)|`1048576`|`69.11ns ± 949.34ps`|`112.29ns`|`36.49ns - 115.58ns`|
|hono pattern-router|`1048576`|`219.68ns ± 2.1ns`|`360.05ns`|`156.9ns - 371.48ns`|
|rou3|`1048576`|`228.46ns ± 2.13ns`|`337.5ns`|`169.17ns - 390.96ns`|
|hono trie-router|`1048576`|`275.48ns ± 2.19ns`|`472.42ns`|`214.94ns - 485.95ns`|
|hono linear-router|`1048576`|`609.79ns ± 2.22ns`|`710.64ns`|`531.28ns - 921.8ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`14ns ± 431.01ps`|`47.14ns`|`6.83ns - 49.75ns`|
|@mapl/pattern-router (jit)|`1048576`|`16.56ns ± 659.31ps`|`49.09ns`|`6.85ns - 54.81ns`|
|rou3 (jit)|`1048576`|`39.54ns ± 639.31ps`|`75.23ns`|`19.69ns - 103.6ns`|
|@mapl/pattern-router|`1048576`|`42.82ns ± 651.88ps`|`78.27ns`|`23.39ns - 79.27ns`|
|hono reg-exp-router|`1048576`|`66.37ns ± 949.34ps`|`103.86ns`|`34.78ns - 109.44ns`|
|rou3|`1048576`|`116.13ns ± 1.23ns`|`154.86ns`|`63.88ns - 165.92ns`|
|find-my-way (jit)|`1048576`|`130.99ns ± 1.55ns`|`199.46ns`|`74.04ns - 205.56ns`|
|hono pattern-router|`1048576`|`191.37ns ± 1.79ns`|`280.27ns`|`133ns - 282.07ns`|
|hono trie-router|`1048576`|`282.86ns ± 1.64ns`|`383.04ns`|`223.24ns - 440.74ns`|
|hono linear-router|`1048576`|`640.77ns ± 3.76ns`|`738.56ns`|`576.15ns - 1.28μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.86ns ± 891.99ps`|`105.11ns`|`33.14ns - 107.96ns`|
|@mapl/pattern-router (jit)|`1048576`|`155.18ns ± 1.36ns`|`198.17ns`|`92ns - 201.64ns`|
|rou3 (jit)|`1048576`|`249.22ns ± 1.95ns`|`380.25ns`|`187.69ns - 440.79ns`|
|hono pattern-router|`1048576`|`251.95ns ± 1.96ns`|`365.9ns`|`183.55ns - 381.25ns`|
|find-my-way (jit)|`1048576`|`264.22ns ± 1.83ns`|`348.36ns`|`196.64ns - 440.72ns`|
|@mapl/pattern-router|`1048576`|`547.68ns ± 887.17ps`|`588.31ns`|`508.18ns - 628.6ns`|
|hono reg-exp-router|`1048576`|`812.17ns ± 3.79ns`|`905.79ns`|`754.35ns - 911.74ns`|
|hono linear-router|`1048576`|`838.86ns ± 1.36ns`|`969.94ns`|`787.48ns - 976.72ns`|
|hono trie-router|`1048576`|`991.83ns ± 5.91ns`|`1.15μs`|`886.75ns - 1.43μs`|
|rou3|`1048576`|`2.03μs ± 4.03ns`|`2.17μs`|`1.96μs - 2.22μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.81ns ± 705.75ps`|`102.99ns`|`33.04ns - 110.42ns`|
|@mapl/pattern-router (jit)|`1048576`|`159.76ns ± 1.55ns`|`236.85ns`|`104.11ns - 240.42ns`|
|hono pattern-router|`1048576`|`207.25ns ± 1.49ns`|`276.54ns`|`144.36ns - 298.82ns`|
|find-my-way (jit)|`1048576`|`259.88ns ± 2.51ns`|`430.92ns`|`146.57ns - 470.97ns`|
|rou3 (jit)|`1048576`|`263.47ns ± 1.79ns`|`348.54ns`|`201.24ns - 445.59ns`|
|@mapl/pattern-router|`1048576`|`541.29ns ± 887.71ps`|`589.66ns`|`501.27ns - 615.73ns`|
|hono linear-router|`1048576`|`619.63ns ± 3.43ns`|`719.42ns`|`558.15ns - 1.16μs`|
|hono reg-exp-router|`1048576`|`804.84ns ± 3.51ns`|`902.21ns`|`744.89ns - 917.9ns`|
|hono trie-router|`1048576`|`1μs ± 5.4ns`|`1.13μs`|`896.84ns - 1.17μs`|
|rou3|`1048576`|`2.02μs ± 4.13ns`|`2.15μs`|`1.95μs - 2.33μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.78ns ± 522.17ps`|`41.98ns`|`5.69ns - 93.58ns`|
|@mapl/router (jit)|`1048576`|`13.79ns ± 176.43ps`|`20.09ns`|`6.61ns - 42.18ns`|
|rou3 (jit)|`1048576`|`33.08ns ± 564.09ps`|`67.87ns`|`17.11ns - 71.2ns`|
|@mapl/pattern-router|`1048576`|`41.67ns ± 732.56ps`|`78.2ns`|`23.16ns - 117.98ns`|
|hono reg-exp-router|`1048576`|`65.34ns ± 997.88ps`|`107.83ns`|`33.82ns - 126.81ns`|
|rou3|`1048576`|`87.84ns ± 1.02ns`|`119.71ns`|`48.15ns - 137.42ns`|
|find-my-way (jit)|`1048576`|`129.33ns ± 1.4ns`|`177.65ns`|`70.36ns - 202.21ns`|
|hono pattern-router|`1048576`|`167.88ns ± 1.59ns`|`226.48ns`|`109.21ns - 228.75ns`|
|hono trie-router|`1048576`|`285.39ns ± 2.36ns`|`466.98ns`|`221.74ns - 486.85ns`|
|hono linear-router|`1048576`|`324.2ns ± 2.58ns`|`451.05ns`|`259.61ns - 578.4ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`67.75ns ± 892.52ps`|`102.25ns`|`33.22ns - 120.11ns`|
|@mapl/pattern-router (jit)|`1048576`|`154.62ns ± 1.61ns`|`207.15ns`|`91.88ns - 240.07ns`|
|find-my-way (jit)|`1048576`|`251.66ns ± 2.9ns`|`459.56ns`|`156.57ns - 478.78ns`|
|rou3 (jit)|`1048576`|`259.15ns ± 1.73ns`|`346.4ns`|`193.16ns - 374.14ns`|
|hono pattern-router|`1048576`|`277.63ns ± 1.75ns`|`396.49ns`|`213.08ns - 444.63ns`|
|@mapl/pattern-router|`1048576`|`328.28ns ± 1.42ns`|`405.3ns`|`274.23ns - 431.79ns`|
|hono reg-exp-router|`1048576`|`745.76ns ± 2.4ns`|`817.68ns`|`701.77ns - 1.16μs`|
|hono trie-router|`1048576`|`942.42ns ± 6.43ns`|`1.44μs`|`839.13ns - 1.6μs`|
|hono linear-router|`1048576`|`1.06μs ± 6.83ns`|`1.42μs`|`962.93ns - 1.94μs`|
|rou3|`1048576`|`2.03μs ± 4.02ns`|`2.17μs`|`1.96μs - 2.34μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`63.5ns ± 756.42ps`|`97.34ns`|`31.39ns - 101.01ns`|
|@mapl/pattern-router (jit)|`1048576`|`167.03ns ± 1.27ns`|`233.42ns`|`107.77ns - 288.76ns`|
|hono pattern-router|`1048576`|`214.08ns ± 2.02ns`|`323.37ns`|`146.01ns - 336.72ns`|
|find-my-way (jit)|`1048576`|`252.36ns ± 2.07ns`|`341.7ns`|`146.81ns - 455.31ns`|
|rou3 (jit)|`1048576`|`268.7ns ± 2.4ns`|`419.91ns`|`200.38ns - 460.57ns`|
|@mapl/pattern-router|`1048576`|`535.58ns ± 753.67ps`|`574.61ns`|`495.47ns - 616.37ns`|
|hono linear-router|`1048576`|`626.79ns ± 2.44ns`|`793.63ns`|`564.84ns - 1μs`|
|hono reg-exp-router|`1048576`|`810.65ns ± 3.51ns`|`912.67ns`|`757.19ns - 928.06ns`|
|hono trie-router|`1048576`|`991.8ns ± 5.28ns`|`1.14μs`|`914.03ns - 1.16μs`|
|rou3|`1048576`|`2.04μs ± 4.15ns`|`2.19μs`|`1.98μs - 2.33μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`161.13ns ± 1.9ns`|`254.03ns`|`95.01ns - 263.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`217.42ns ± 1.73ns`|`303.55ns`|`151.8ns - 364.05ns`|
|rou3 (jit)|`1048576`|`368.17ns ± 3.25ns`|`607.3ns`|`290.2ns - 675.24ns`|
|hono pattern-router|`1048576`|`371.3ns ± 1.98ns`|`491.39ns`|`293.82ns - 627.27ns`|
|@mapl/pattern-router|`1048576`|`414.29ns ± 1.83ns`|`505.91ns`|`355.74ns - 584.96ns`|
|find-my-way (jit)|`1048576`|`440.07ns ± 4.08ns`|`777.06ns`|`365.27ns - 841.19ns`|
|hono reg-exp-router|`1048576`|`514.23ns ± 1.37ns`|`613.41ns`|`456.87ns - 629.84ns`|
|hono trie-router|`1048576`|`1.11μs ± 4.9ns`|`1.24μs`|`1.03μs - 1.24μs`|
|hono linear-router|`1048576`|`1.29μs ± 9.67ns`|`1.54μs`|`1.16μs - 1.56μs`|
|rou3|`1048576`|`2.27μs ± 4.31ns`|`2.41μs`|`2.19μs - 2.45μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`180.03ns ± 1.54ns`|`236.52ns`|`113.58ns - 270.29ns`|
|@mapl/pattern-router (jit)|`1048576`|`196.53ns ± 2.02ns`|`280.18ns`|`130.05ns - 312.3ns`|
|hono pattern-router|`1048576`|`291ns ± 1.98ns`|`416.75ns`|`224.71ns - 425.3ns`|
|rou3 (jit)|`1048576`|`375.65ns ± 2.03ns`|`499.34ns`|`310.95ns - 621.26ns`|
|find-my-way (jit)|`1048576`|`429.63ns ± 2.57ns`|`581.51ns`|`364.1ns - 732.62ns`|
|hono linear-router|`1048576`|`603.18ns ± 1.93ns`|`680.72ns`|`538.65ns - 905.93ns`|
|@mapl/pattern-router|`1048576`|`624.61ns ± 2.12ns`|`715.15ns`|`574.1ns - 978.99ns`|
|hono reg-exp-router|`1048576`|`938.8ns ± 4.16ns`|`1.05μs`|`845.85ns - 1.09μs`|
|hono trie-router|`1048576`|`1.1μs ± 5.05ns`|`1.24μs`|`1.03μs - 1.25μs`|
|rou3|`1048576`|`2.25μs ± 4.2ns`|`2.4μs`|`2.17μs - 2.43μs`|

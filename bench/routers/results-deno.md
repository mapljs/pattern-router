# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`11.37ns ± 300.48ps`|`38ns`|`5.92ns - 53.86ns`|
|@mapl/pattern-router (jit)|`1048576`|`12.84ns ± 531.45ps`|`48.34ns`|`5.61ns - 54.39ns`|
|rou3 (jit)|`1048576`|`41.15ns ± 578.18ps`|`78.58ns`|`20.19ns - 83.14ns`|
|@mapl/pattern-router|`1048576`|`43.86ns ± 686.28ps`|`81.24ns`|`21.75ns - 88.2ns`|
|hono reg-exp-router|`1048576`|`65.68ns ± 959.47ps`|`107.97ns`|`34.38ns - 110.47ns`|
|find-my-way (jit)|`1048576`|`69.43ns ± 929.05ps`|`113.49ns`|`34.68ns - 116.48ns`|
|hono pattern-router|`1048576`|`261.58ns ± 3.35ns`|`373.76ns`|`160.01ns - 376.11ns`|
|hono trie-router|`1048576`|`273.72ns ± 2.3ns`|`467.41ns`|`200.31ns - 472.57ns`|
|rou3|`1048576`|`276.46ns ± 4.16ns`|`364.6ns`|`159.68ns - 390.32ns`|
|hono linear-router|`1048576`|`663.84ns ± 2.45ns`|`754.87ns`|`541.55ns - 822.56ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.51ns ± 443.31ps`|`47.75ns`|`6.9ns - 52.93ns`|
|@mapl/router (jit)|`1048576`|`14.29ns ± 510.62ps`|`47.99ns`|`6.43ns - 50.25ns`|
|rou3 (jit)|`1048576`|`41ns ± 622.21ps`|`78.71ns`|`19.4ns - 84.52ns`|
|@mapl/pattern-router|`1048576`|`43.77ns ± 619.95ps`|`81.83ns`|`21.65ns - 90.95ns`|
|hono reg-exp-router|`1048576`|`66.98ns ± 705.54ps`|`103.12ns`|`33.85ns - 108.55ns`|
|rou3|`1048576`|`114.86ns ± 1.26ns`|`147.25ns`|`65.46ns - 151.56ns`|
|find-my-way (jit)|`1048576`|`136.63ns ± 1.68ns`|`184.81ns`|`70.72ns - 207.27ns`|
|hono pattern-router|`1048576`|`215.51ns ± 1.85ns`|`316.62ns`|`140.36ns - 319.93ns`|
|hono trie-router|`1048576`|`282.98ns ± 2.13ns`|`492.07ns`|`215.73ns - 503.86ns`|
|hono linear-router|`1048576`|`703.44ns ± 4.01ns`|`849.51ns`|`589.4ns - 1.43μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.53ns ± 796.95ps`|`102.78ns`|`29.49ns - 117.71ns`|
|@mapl/pattern-router (jit)|`1048576`|`158.76ns ± 1.34ns`|`204.71ns`|`89.35ns - 217.72ns`|
|hono pattern-router|`1048576`|`247.93ns ± 1.7ns`|`344.78ns`|`173.06ns - 412.72ns`|
|find-my-way (jit)|`1048576`|`257.82ns ± 2.67ns`|`459.49ns`|`162.77ns - 498.2ns`|
|rou3 (jit)|`1048576`|`258.92ns ± 1.3ns`|`310.51ns`|`195.62ns - 362.05ns`|
|@mapl/pattern-router|`1048576`|`534.15ns ± 1.18ns`|`579.96ns`|`477.36ns - 633.48ns`|
|hono reg-exp-router|`1048576`|`793.7ns ± 3.64ns`|`886.95ns`|`734.15ns - 906.2ns`|
|hono trie-router|`1048576`|`971.63ns ± 2.82ns`|`1.09μs`|`924.86ns - 1.11μs`|
|hono linear-router|`1048576`|`1.05μs ± 9.79ns`|`1.33μs`|`814.19ns - 1.79μs`|
|rou3|`1048576`|`1.97μs ± 2.84ns`|`2.09μs`|`1.93μs - 2.13μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.91ns ± 978.86ps`|`107.03ns`|`29.08ns - 114.09ns`|
|@mapl/pattern-router (jit)|`1048576`|`153.79ns ± 1.81ns`|`227.29ns`|`84.84ns - 234.99ns`|
|hono pattern-router|`1048576`|`224.86ns ± 1.84ns`|`311.31ns`|`144.43ns - 353.63ns`|
|find-my-way (jit)|`1048576`|`258.02ns ± 2.21ns`|`450.04ns`|`182.08ns - 461.92ns`|
|rou3 (jit)|`1048576`|`265.4ns ± 2.3ns`|`466.86ns`|`198ns - 478.29ns`|
|@mapl/pattern-router|`1048576`|`520.45ns ± 944.72ps`|`551.77ns`|`467.36ns - 574.06ns`|
|hono linear-router|`1048576`|`606.69ns ± 2.04ns`|`700.91ns`|`525.39ns - 744.62ns`|
|hono reg-exp-router|`1048576`|`796.09ns ± 3.44ns`|`899.75ns`|`741.1ns - 944.31ns`|
|hono trie-router|`1048576`|`1μs ± 4.26ns`|`1.11μs`|`919.61ns - 1.12μs`|
|rou3|`1048576`|`1.98μs ± 3.35ns`|`2.07μs`|`1.92μs - 2.09μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`11.76ns ± 461.43ps`|`46.23ns`|`5.55ns - 50.39ns`|
|@mapl/router (jit)|`1048576`|`12.05ns ± 312.7ps`|`43.61ns`|`5.76ns - 50.58ns`|
|rou3 (jit)|`1048576`|`32.81ns ± 479.52ps`|`39.95ns`|`16.17ns - 70.03ns`|
|@mapl/pattern-router|`1048576`|`44.3ns ± 685.46ps`|`81.53ns`|`21.39ns - 88.78ns`|
|hono reg-exp-router|`1048576`|`60.86ns ± 752.67ps`|`100.19ns`|`32.13ns - 106.57ns`|
|rou3|`1048576`|`86.98ns ± 956.15ps`|`121.53ns`|`46.41ns - 127.72ns`|
|find-my-way (jit)|`1048576`|`133.53ns ± 1.63ns`|`164.53ns`|`64.32ns - 199.14ns`|
|hono pattern-router|`1048576`|`188.06ns ± 1.18ns`|`221.17ns`|`111.44ns - 235.68ns`|
|hono trie-router|`1048576`|`275.66ns ± 1.65ns`|`358.31ns`|`203.97ns - 394.89ns`|
|hono linear-router|`1048576`|`344.25ns ± 2.49ns`|`500.43ns`|`252.96ns - 709.99ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.74ns ± 873.06ps`|`103.95ns`|`29.94ns - 127.87ns`|
|@mapl/pattern-router (jit)|`1048576`|`163.46ns ± 1.54ns`|`210.14ns`|`88.63ns - 233.51ns`|
|find-my-way (jit)|`1048576`|`253.55ns ± 1.72ns`|`315.87ns`|`143.86ns - 390.68ns`|
|rou3 (jit)|`1048576`|`269.53ns ± 1.35ns`|`323.28ns`|`201.42ns - 426.16ns`|
|hono pattern-router|`1048576`|`276.53ns ± 1.63ns`|`421.49ns`|`205.97ns - 434.82ns`|
|@mapl/pattern-router|`1048576`|`322.57ns ± 1.6ns`|`396.25ns`|`253.97ns - 434.53ns`|
|hono reg-exp-router|`1048576`|`798.05ns ± 3.21ns`|`908.19ns`|`744.18ns - 924.23ns`|
|hono trie-router|`1048576`|`970.02ns ± 3.29ns`|`1.12μs`|`888.66ns - 1.28μs`|
|hono linear-router|`1048576`|`1.01μs ± 2.78ns`|`1.13μs`|`909.67ns - 1.37μs`|
|rou3|`1048576`|`1.99μs ± 5.38ns`|`2.21μs`|`1.93μs - 2.69μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`64.68ns ± 733.52ps`|`104.56ns`|`29.69ns - 111.31ns`|
|@mapl/pattern-router (jit)|`1048576`|`157.21ns ± 1.23ns`|`199.16ns`|`84.89ns - 204.06ns`|
|hono pattern-router|`1048576`|`227.49ns ± 2.2ns`|`345.97ns`|`147.58ns - 364.69ns`|
|find-my-way (jit)|`1048576`|`256.4ns ± 1.6ns`|`330.79ns`|`176.54ns - 382.73ns`|
|rou3 (jit)|`1048576`|`275.61ns ± 1.73ns`|`402.59ns`|`206.48ns - 474.43ns`|
|@mapl/pattern-router|`1048576`|`521.04ns ± 1ns`|`558ns`|`465.71ns - 633.19ns`|
|hono linear-router|`1048576`|`593.25ns ± 1.88ns`|`682.27ns`|`521.88ns - 805.49ns`|
|hono reg-exp-router|`1048576`|`781.97ns ± 3.08ns`|`899.08ns`|`691.65ns - 914.31ns`|
|hono trie-router|`1048576`|`985.51ns ± 3.88ns`|`1.1μs`|`916.8ns - 1.16μs`|
|rou3|`1048576`|`1.97μs ± 3.2ns`|`2.11μs`|`1.93μs - 2.16μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`182.1ns ± 1.66ns`|`264.16ns`|`100.56ns - 283.87ns`|
|@mapl/pattern-router (jit)|`1048576`|`227.71ns ± 1.51ns`|`279.96ns`|`147.66ns - 332.63ns`|
|hono pattern-router|`1048576`|`354.5ns ± 1.81ns`|`478.32ns`|`276.31ns - 488.12ns`|
|rou3 (jit)|`1048576`|`391.35ns ± 4.46ns`|`680.45ns`|`292.24ns - 683.61ns`|
|find-my-way (jit)|`1048576`|`438.7ns ± 2.12ns`|`595.25ns`|`371.11ns - 656.5ns`|
|hono reg-exp-router|`1048576`|`499.5ns ± 1.41ns`|`578.05ns`|`428.69ns - 626.82ns`|
|@mapl/pattern-router|`1048576`|`624.64ns ± 1.29ns`|`665.8ns`|`567.12ns - 798.8ns`|
|hono trie-router|`1048576`|`1.16μs ± 3.61ns`|`1.27μs`|`1.1μs - 1.29μs`|
|hono linear-router|`1048576`|`1.31μs ± 7.9ns`|`1.57μs`|`1.15μs - 1.64μs`|
|rou3|`1048576`|`2.2μs ± 3.69ns`|`2.31μs`|`2.13μs - 2.31μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`178.28ns ± 1.68ns`|`230.18ns`|`97.52ns - 235.8ns`|
|@mapl/pattern-router (jit)|`1048576`|`217.26ns ± 2.16ns`|`342.98ns`|`129.34ns - 352.2ns`|
|hono pattern-router|`1048576`|`303.61ns ± 1.64ns`|`417.03ns`|`226.91ns - 439.81ns`|
|rou3 (jit)|`1048576`|`379.34ns ± 3.01ns`|`614.5ns`|`294.49ns - 727.04ns`|
|@mapl/pattern-router|`1048576`|`400.84ns ± 2.8ns`|`666.01ns`|`330.79ns - 687.44ns`|
|find-my-way (jit)|`1048576`|`466.61ns ± 3.39ns`|`671.81ns`|`358.47ns - 868.58ns`|
|hono reg-exp-router|`1048576`|`498.91ns ± 1.58ns`|`615.73ns`|`431.28ns - 625.38ns`|
|hono linear-router|`1048576`|`563.21ns ± 1.14ns`|`607.77ns`|`494.87ns - 691.43ns`|
|hono trie-router|`1048576`|`1.15μs ± 3.44ns`|`1.27μs`|`1.07μs - 1.38μs`|
|rou3|`1048576`|`2.22μs ± 4.12ns`|`2.35μs`|`2.13μs - 2.37μs`|

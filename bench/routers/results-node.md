# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`12.82ns ± 553.19ps`|`45.91ns`|`6.03ns - 93.55ns`|
|@mapl/router (jit)|`1048576`|`13.64ns ± 418.54ps`|`44.76ns`|`8.82ns - 91.61ns`|
|rou3 (jit)|`1048576`|`38.19ns ± 378.17ps`|`70.69ns`|`20.14ns - 75.44ns`|
|@mapl/pattern-router|`1048576`|`42.09ns ± 954.35ps`|`88.56ns`|`24.89ns - 139.22ns`|
|hono reg-exp-router|`1048576`|`69.51ns ± 612.69ps`|`105.27ns`|`36.21ns - 110.82ns`|
|find-my-way (jit)|`1048576`|`71.37ns ± 609.26ps`|`109.89ns`|`35.61ns - 114.79ns`|
|hono pattern-router|`1048576`|`222.29ns ± 1.74ns`|`372.41ns`|`158.57ns - 380.6ns`|
|hono trie-router|`1048576`|`254.28ns ± 1.03ns`|`307.38ns`|`194.92ns - 381.22ns`|
|rou3|`1048576`|`275.18ns ± 2.66ns`|`432.54ns`|`201.58ns - 531.89ns`|
|hono linear-router|`1048576`|`661.76ns ± 1.79ns`|`733.12ns`|`636.22ns - 969.56ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`13.98ns ± 400.92ps`|`46.77ns`|`6.72ns - 49.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`15.97ns ± 601.01ps`|`50.64ns`|`6.59ns - 54.6ns`|
|rou3 (jit)|`1048576`|`36.78ns ± 345.28ps`|`56.98ns`|`19.01ns - 73.19ns`|
|@mapl/pattern-router|`1048576`|`43.51ns ± 657.52ps`|`80.23ns`|`23.09ns - 116.75ns`|
|hono reg-exp-router|`1048576`|`69.14ns ± 681.36ps`|`106.23ns`|`35.78ns - 116.59ns`|
|rou3|`1048576`|`116.69ns ± 820.43ps`|`149.11ns`|`62.72ns - 163.82ns`|
|find-my-way (jit)|`1048576`|`145.5ns ± 1.72ns`|`210.81ns`|`74.02ns - 212.67ns`|
|hono pattern-router|`1048576`|`225.11ns ± 769.21ps`|`280.45ns`|`199.37ns - 314.87ns`|
|hono trie-router|`1048576`|`270.76ns ± 1.26ns`|`329.87ns`|`217.05ns - 465.09ns`|
|hono linear-router|`1048576`|`713.1ns ± 3.18ns`|`817.75ns`|`659.16ns - 1.3μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.15ns ± 653.16ps`|`105.87ns`|`33.21ns - 107.19ns`|
|@mapl/pattern-router (jit)|`1048576`|`170.41ns ± 1.04ns`|`249.23ns`|`116.25ns - 281.48ns`|
|rou3 (jit)|`1048576`|`226.66ns ± 2.29ns`|`399.9ns`|`159.63ns - 407.42ns`|
|find-my-way (jit)|`1048576`|`268.77ns ± 2.02ns`|`427.42ns`|`196.76ns - 455.64ns`|
|hono pattern-router|`1048576`|`283.17ns ± 2.11ns`|`492.59ns`|`222.29ns - 517.72ns`|
|@mapl/pattern-router|`1048576`|`361.4ns ± 485.43ps`|`394.62ns`|`315.36ns - 399.37ns`|
|hono reg-exp-router|`1048576`|`448.26ns ± 771.91ps`|`500.35ns`|`407.88ns - 566.86ns`|
|hono trie-router|`1048576`|`968.72ns ± 2.58ns`|`1.02μs`|`912.19ns - 1.06μs`|
|rou3|`1048576`|`1.04μs ± 3.31ns`|`1.17μs`|`970.57ns - 1.18μs`|
|hono linear-router|`1048576`|`1.55μs ± 5.91ns`|`1.82μs`|`1.46μs - 1.86μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`69.73ns ± 702.15ps`|`111.85ns`|`32.27ns - 114.66ns`|
|@mapl/pattern-router (jit)|`1048576`|`157.93ns ± 1.24ns`|`241.34ns`|`94.64ns - 248.85ns`|
|hono pattern-router|`1048576`|`223.23ns ± 841.84ps`|`252.17ns`|`158.22ns - 316.59ns`|
|rou3 (jit)|`1048576`|`228.37ns ± 1.43ns`|`346.25ns`|`166.21ns - 414.11ns`|
|find-my-way (jit)|`1048576`|`269.73ns ± 1.42ns`|`323.83ns`|`151.85ns - 432.94ns`|
|@mapl/pattern-router|`1048576`|`353.69ns ± 1.97ns`|`568.01ns`|`303.54ns - 573.17ns`|
|hono reg-exp-router|`1048576`|`459.79ns ± 2.32ns`|`519.36ns`|`406.92ns - 799.09ns`|
|hono trie-router|`1048576`|`980.59ns ± 3.01ns`|`1.09μs`|`924.26ns - 1.22μs`|
|rou3|`1048576`|`1.04μs ± 3.21ns`|`1.15μs`|`963.85ns - 1.17μs`|
|hono linear-router|`1048576`|`1.17μs ± 4.36ns`|`1.2μs`|`1.15μs - 2.21μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`14.68ns ± 785.74ps`|`48.22ns`|`5.48ns - 96.14ns`|
|@mapl/router (jit)|`1048576`|`21.44ns ± 959.88ps`|`52.07ns`|`6.33ns - 101.02ns`|
|rou3 (jit)|`1048576`|`33.42ns ± 357.65ps`|`65.02ns`|`16.68ns - 75.61ns`|
|@mapl/pattern-router|`1048576`|`45.39ns ± 839.42ps`|`82.94ns`|`21.17ns - 107.69ns`|
|hono reg-exp-router|`1048576`|`57.79ns ± 603.83ps`|`95.99ns`|`29.99ns - 100.85ns`|
|rou3|`1048576`|`86.49ns ± 589.35ps`|`121.28ns`|`45.04ns - 129.06ns`|
|find-my-way (jit)|`1048576`|`136.13ns ± 1.21ns`|`190.82ns`|`70.35ns - 206.55ns`|
|hono pattern-router|`1048576`|`180.46ns ± 721.36ps`|`222.68ns`|`120.04ns - 232.71ns`|
|hono trie-router|`1048576`|`266.53ns ± 849.28ps`|`327.65ns`|`208.45ns - 373.67ns`|
|hono linear-router|`1048576`|`348.37ns ± 1.3ns`|`373.51ns`|`293.92ns - 567.03ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`71.61ns ± 535.76ps`|`107.11ns`|`34.45ns - 119.49ns`|
|@mapl/pattern-router (jit)|`1048576`|`173.3ns ± 1.06ns`|`229.33ns`|`111.4ns - 282.66ns`|
|rou3 (jit)|`1048576`|`232.11ns ± 602.44ps`|`284.23ns`|`169.18ns - 291.79ns`|
|find-my-way (jit)|`1048576`|`267.93ns ± 1.73ns`|`412.15ns`|`193.33ns - 455.31ns`|
|hono pattern-router|`1048576`|`321.82ns ± 1.2ns`|`403.36ns`|`262.57ns - 547.81ns`|
|@mapl/pattern-router|`1048576`|`345.05ns ± 762.79ps`|`381.82ns`|`310.49ns - 513.46ns`|
|hono reg-exp-router|`1048576`|`410.95ns ± 1.41ns`|`466.47ns`|`376.13ns - 663.36ns`|
|hono trie-router|`1048576`|`1.02μs ± 3.15ns`|`1.12μs`|`898.48ns - 1.21μs`|
|rou3|`1048576`|`1.06μs ± 4.06ns`|`1.16μs`|`962.61ns - 1.42μs`|
|hono linear-router|`1048576`|`2.28μs ± 6.8ns`|`2.49μs`|`2.13μs - 2.5μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.83ns ± 483.44ps`|`95.6ns`|`32.59ns - 137.67ns`|
|@mapl/pattern-router (jit)|`1048576`|`150.92ns ± 689.09ps`|`193.41ns`|`89.73ns - 205.11ns`|
|hono pattern-router|`1048576`|`232.5ns ± 875.24ps`|`262.48ns`|`169.23ns - 377.45ns`|
|rou3 (jit)|`1048576`|`236.85ns ± 949.24ps`|`291.81ns`|`178.51ns - 423.08ns`|
|find-my-way (jit)|`1048576`|`267.47ns ± 1.94ns`|`439.22ns`|`197.59ns - 465.51ns`|
|@mapl/pattern-router|`1048576`|`333.96ns ± 1.73ns`|`528.88ns`|`287.58ns - 541.34ns`|
|hono reg-exp-router|`1048576`|`437.84ns ± 959.74ps`|`491.72ns`|`427.69ns - 588.4ns`|
|hono trie-router|`1048576`|`958.54ns ± 4.23ns`|`1.09μs`|`928.75ns - 1.86μs`|
|rou3|`1048576`|`977.41ns ± 2.43ns`|`1.12μs`|`949.5ns - 1.12μs`|
|hono linear-router|`1048576`|`1.32μs ± 7.02ns`|`1.56μs`|`1.22μs - 2.2μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`185.59ns ± 698.17ps`|`201.31ns`|`121.68ns - 299.52ns`|
|@mapl/pattern-router (jit)|`1048576`|`235.52ns ± 1.03ns`|`272.17ns`|`167.69ns - 352.63ns`|
|rou3 (jit)|`1048576`|`339.64ns ± 1.47ns`|`399.04ns`|`270.63ns - 543.9ns`|
|hono pattern-router|`1048576`|`408.55ns ± 1.95ns`|`527.65ns`|`340.99ns - 717.9ns`|
|@mapl/pattern-router|`1048576`|`425.99ns ± 971.91ps`|`485.11ns`|`364.24ns - 557.06ns`|
|find-my-way (jit)|`1048576`|`470.13ns ± 2.05ns`|`592.89ns`|`405.25ns - 842.89ns`|
|hono reg-exp-router|`1048576`|`498.77ns ± 700.53ps`|`559.2ns`|`444.36ns - 567.29ns`|
|hono trie-router|`1048576`|`1.1μs ± 2.61ns`|`1.21μs`|`1.05μs - 1.22μs`|
|rou3|`1048576`|`1.19μs ± 2.75ns`|`1.33μs`|`1.15μs - 1.43μs`|
|hono linear-router|`1048576`|`2.36μs ± 7.67ns`|`2.57μs`|`2.2μs - 3.33μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`181.82ns ± 829.71ps`|`209.59ns`|`115.91ns - 273.48ns`|
|@mapl/pattern-router (jit)|`1048576`|`209.1ns ± 1.38ns`|`334.75ns`|`138.84ns - 348.52ns`|
|hono pattern-router|`1048576`|`307.42ns ± 546.74ps`|`348.66ns`|`296.8ns - 394.52ns`|
|rou3 (jit)|`1048576`|`335.41ns ± 1.86ns`|`512.21ns`|`261.33ns - 549.11ns`|
|@mapl/pattern-router|`1048576`|`417.65ns ± 1.13ns`|`473.08ns`|`355.44ns - 553.41ns`|
|find-my-way (jit)|`1048576`|`476.23ns ± 1.76ns`|`571.39ns`|`401.94ns - 716.42ns`|
|hono reg-exp-router|`1048576`|`502.13ns ± 1.19ns`|`594.8ns`|`447.01ns - 675.64ns`|
|hono trie-router|`1048576`|`1.09μs ± 2.25ns`|`1.18μs`|`1.05μs - 1.2μs`|
|rou3|`1048576`|`1.19μs ± 3.02ns`|`1.34μs`|`1.14μs - 1.37μs`|
|hono linear-router|`1048576`|`3.3μs ± 5.49ns`|`3.48μs`|`3.12μs - 3.59μs`|

# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`7.46ns ± 76.24ps`|`13.08ns`|`7ns - 14.2ns`|
|@mapl/pattern-router (jit)|`1048576`|`9.22ns ± 143.97ps`|`14.18ns`|`7.73ns - 17.45ns`|
|hono reg-exp-router|`1048576`|`28.83ns ± 143.38ps`|`36.57ns`|`27.57ns - 44.77ns`|
|rou3 (jit)|`1048576`|`31.04ns ± 447.64ps`|`46.46ns`|`23.69ns - 46.98ns`|
|@mapl/pattern-router|`1048576`|`34.56ns ± 157.65ps`|`41.48ns`|`31.71ns - 45.83ns`|
|find-my-way (jit)|`1048576`|`84.78ns ± 271.55ps`|`93.63ns`|`77.42ns - 95.6ns`|
|rou3|`1048576`|`106.85ns ± 728.1ps`|`169.68ns`|`99.81ns - 180.65ns`|
|hono trie-router|`1048576`|`200.31ns ± 842.33ps`|`269.15ns`|`184.82ns - 284ns`|
|hono pattern-router|`1048576`|`203.37ns ± 583.86ps`|`219.01ns`|`195.57ns - 335.02ns`|
|hono linear-router|`1048576`|`682.75ns ± 2.96ns`|`910.86ns`|`652.45ns - 1.12μs`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`12.38ns ± 68.5ps`|`17.69ns`|`11.92ns - 18.31ns`|
|@mapl/pattern-router (jit)|`1048576`|`13.04ns ± 83.79ps`|`19.46ns`|`12.51ns - 22.61ns`|
|hono reg-exp-router|`1048576`|`29.61ns ± 263.39ps`|`44.49ns`|`27.55ns - 56.91ns`|
|rou3 (jit)|`1048576`|`32.99ns ± 427.32ps`|`50.53ns`|`27.2ns - 52.16ns`|
|@mapl/pattern-router|`1048576`|`38.84ns ± 171.39ps`|`48.21ns`|`35.98ns - 51.03ns`|
|rou3|`1048576`|`44.3ns ± 152.2ps`|`52.19ns`|`42.01ns - 54.61ns`|
|find-my-way (jit)|`1048576`|`119.96ns ± 299.76ps`|`131.25ns`|`110.8ns - 137.24ns`|
|hono trie-router|`1048576`|`196.08ns ± 435.51ps`|`210.29ns`|`183.96ns - 222.92ns`|
|hono pattern-router|`1048576`|`205.01ns ± 295.69ps`|`214.62ns`|`195.78ns - 226.39ns`|
|hono linear-router|`1048576`|`720.58ns ± 1.01ns`|`760.77ns`|`702.11ns - 859.75ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`80.29ns ± 275.42ps`|`90.39ns`|`72.66ns - 93.23ns`|
|rou3 (jit)|`1048576`|`168.72ns ± 373.89ps`|`183.05ns`|`156.67ns - 193.78ns`|
|@mapl/pattern-router (jit)|`1048576`|`192.63ns ± 786.22ps`|`243.31ns`|`175.83ns - 310.77ns`|
|find-my-way (jit)|`1048576`|`235.62ns ± 655.35ps`|`272.75ns`|`221.26ns - 319.12ns`|
|hono reg-exp-router|`1048576`|`239.76ns ± 915.53ps`|`269.28ns`|`209.15ns - 277.63ns`|
|@mapl/pattern-router|`1048576`|`247.91ns ± 375.36ps`|`262.31ns`|`237.07ns - 269.75ns`|
|hono pattern-router|`1048576`|`315.48ns ± 438.08ps`|`330.36ns`|`300.85ns - 346.46ns`|
|rou3|`1048576`|`405.8ns ± 1.72ns`|`457.61ns`|`370.61ns - 748.9ns`|
|hono trie-router|`1048576`|`631.08ns ± 2.29ns`|`746.03ns`|`582.2ns - 913.86ns`|
|hono linear-router|`1048576`|`825.85ns ± 2.18ns`|`858.7ns`|`800.29ns - 1.32μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`71.24ns ± 274.27ps`|`81.63ns`|`63.15ns - 83.64ns`|
|rou3 (jit)|`1048576`|`169.09ns ± 340.97ps`|`183.71ns`|`157.75ns - 189.18ns`|
|@mapl/pattern-router (jit)|`1048576`|`181.62ns ± 271.11ps`|`191.19ns`|`170.87ns - 192.96ns`|
|find-my-way (jit)|`1048576`|`239.25ns ± 408.56ps`|`255ns`|`223.6ns - 263.2ns`|
|hono reg-exp-router|`1048576`|`244.72ns ± 1.22ns`|`314.52ns`|`214.1ns - 323.1ns`|
|@mapl/pattern-router|`1048576`|`257.04ns ± 388.31ps`|`275.67ns`|`245.61ns - 278.35ns`|
|hono pattern-router|`1048576`|`274.64ns ± 384.93ps`|`289.82ns`|`262.14ns - 297.34ns`|
|rou3|`1048576`|`411.32ns ± 1.12ns`|`448.23ns`|`382.93ns - 496.14ns`|
|hono linear-router|`1048576`|`573.57ns ± 1.24ns`|`605.56ns`|`555.8ns - 850.1ns`|
|hono trie-router|`1048576`|`625.16ns ± 2.01ns`|`720.24ns`|`576.22ns - 734.07ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`9.78ns ± 75.37ps`|`15.34ns`|`9.24ns - 16.48ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.19ns ± 53.95ps`|`14.59ns`|`9.85ns - 15.87ns`|
|rou3 (jit)|`1048576`|`26.3ns ± 117.97ps`|`31.81ns`|`24.2ns - 33.27ns`|
|hono reg-exp-router|`1048576`|`27.33ns ± 111.88ps`|`32.75ns`|`26.27ns - 35.63ns`|
|rou3|`1048576`|`34.73ns ± 107.93ps`|`40.13ns`|`33.63ns - 42.65ns`|
|@mapl/pattern-router|`1048576`|`40.82ns ± 180.78ps`|`50.03ns`|`37.66ns - 51.47ns`|
|find-my-way (jit)|`1048576`|`124.46ns ± 676.23ps`|`133.69ns`|`114.38ns - 273.62ns`|
|hono pattern-router|`1048576`|`156.01ns ± 309.09ps`|`165.38ns`|`147.27ns - 175.77ns`|
|hono trie-router|`1048576`|`194.05ns ± 389.33ps`|`203.56ns`|`180.25ns - 205.19ns`|
|hono linear-router|`1048576`|`375.43ns ± 1.22ns`|`472.85ns`|`358.98ns - 517.5ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`80.58ns ± 259.66ps`|`91.94ns`|`74.49ns - 105.57ns`|
|rou3 (jit)|`1048576`|`174.02ns ± 410.53ps`|`195.42ns`|`163.12ns - 204.1ns`|
|@mapl/pattern-router (jit)|`1048576`|`199.01ns ± 321.36ps`|`211.19ns`|`188.51ns - 241.15ns`|
|hono reg-exp-router|`1048576`|`246.22ns ± 1.44ns`|`280.06ns`|`214.91ns - 333.43ns`|
|@mapl/pattern-router|`1048576`|`247.72ns ± 416.74ps`|`265.76ns`|`235.62ns - 295.45ns`|
|find-my-way (jit)|`1048576`|`251.42ns ± 1.09ns`|`288.53ns`|`222.8ns - 413.5ns`|
|hono pattern-router|`1048576`|`324.06ns ± 450.37ps`|`346.78ns`|`311.88ns - 351.52ns`|
|rou3|`1048576`|`438.79ns ± 1.31ns`|`479.48ns`|`407.21ns - 503.96ns`|
|hono trie-router|`1048576`|`708.85ns ± 4.38ns`|`808.8ns`|`656.96ns - 1.51μs`|
|hono linear-router|`1048576`|`912.16ns ± 7.4ns`|`1.13μs`|`867.92ns - 2.62μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`75.06ns ± 329.39ps`|`89.61ns`|`66.94ns - 94.94ns`|
|rou3 (jit)|`1048576`|`177.52ns ± 468.82ps`|`202.19ns`|`164.27ns - 225.03ns`|
|@mapl/pattern-router (jit)|`1048576`|`191.52ns ± 552.98ps`|`228.97ns`|`177.32ns - 238.29ns`|
|hono reg-exp-router|`1048576`|`246.5ns ± 1.4ns`|`282.31ns`|`213.65ns - 290.48ns`|
|find-my-way (jit)|`1048576`|`250.29ns ± 739.93ps`|`290.59ns`|`226.37ns - 310.56ns`|
|@mapl/pattern-router|`1048576`|`257.04ns ± 723.35ps`|`284.21ns`|`237.97ns - 297.63ns`|
|hono pattern-router|`1048576`|`283.21ns ± 741.31ps`|`331.96ns`|`264.17ns - 362.49ns`|
|rou3|`1048576`|`448.6ns ± 3.37ns`|`647.99ns`|`417.05ns - 1.02μs`|
|hono linear-router|`1048576`|`583.62ns ± 701.07ps`|`606.19ns`|`561.49ns - 624.41ns`|
|hono trie-router|`1048576`|`706.94ns ± 1.68ns`|`769.27ns`|`659.86ns - 799.95ns`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`98.4ns ± 277.49ps`|`110.09ns`|`90.16ns - 113.16ns`|
|rou3 (jit)|`1048576`|`202.08ns ± 324.41ps`|`213.44ns`|`190.37ns - 218.14ns`|
|@mapl/pattern-router (jit)|`1048576`|`207.22ns ± 342.19ps`|`219.91ns`|`195.16ns - 240.76ns`|
|hono reg-exp-router|`1048576`|`261.39ns ± 1.65ns`|`301.69ns`|`222.95ns - 320.73ns`|
|@mapl/pattern-router|`1048576`|`262.01ns ± 338.37ps`|`274.83ns`|`251.56ns - 278.61ns`|
|find-my-way (jit)|`1048576`|`297.2ns ± 459.51ps`|`315.49ns`|`283.16ns - 323.13ns`|
|hono pattern-router|`1048576`|`342.96ns ± 570.8ps`|`361.11ns`|`326.61ns - 413.42ns`|
|rou3|`1048576`|`525.4ns ± 1.65ns`|`575.53ns`|`485.77ns - 590.4ns`|
|hono trie-router|`1048576`|`893.93ns ± 2.28ns`|`984.6ns`|`822.85ns - 1.06μs`|
|hono linear-router|`1048576`|`1.02μs ± 2.11ns`|`1.11μs`|`958.55ns - 1.33μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`87.06ns ± 309.08ps`|`98.65ns`|`79.15ns - 104.29ns`|
|@mapl/pattern-router (jit)|`1048576`|`174.05ns ± 318.21ps`|`190.52ns`|`161.35ns - 194.6ns`|
|rou3 (jit)|`1048576`|`210.67ns ± 645.96ps`|`236.78ns`|`196.51ns - 328.04ns`|
|@mapl/pattern-router|`1048576`|`240.01ns ± 468.75ps`|`268.02ns`|`225.7ns - 275.83ns`|
|hono reg-exp-router|`1048576`|`252.53ns ± 1.4ns`|`288.89ns`|`223.15ns - 337.7ns`|
|hono pattern-router|`1048576`|`283.1ns ± 353.39ps`|`294.6ns`|`273.94ns - 341.35ns`|
|find-my-way (jit)|`1048576`|`331.94ns ± 1.07ns`|`354.67ns`|`314.46ns - 571.81ns`|
|rou3|`1048576`|`521.72ns ± 1.35ns`|`562.4ns`|`486.2ns - 588.59ns`|
|hono linear-router|`1048576`|`553.45ns ± 1.16ns`|`610.19ns`|`529.11ns - 654.98ns`|
|hono trie-router|`1048576`|`851.33ns ± 2.76ns`|`984.55ns`|`777.91ns - 1.02μs`|

# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`7.55ns ± 241.26ps`|`26.37ns`|`4.11ns - 29.25ns`|
|@mapl/router (jit)|`1048576`|`7.87ns ± 349.83ps`|`24.65ns`|`4.26ns - 86.32ns`|
|rou3 (jit)|`1048576`|`21.82ns ± 293.74ps`|`40.59ns`|`12.62ns - 49.39ns`|
|@mapl/pattern-router|`1048576`|`31.26ns ± 541.88ps`|`53.75ns`|`15.63ns - 56.33ns`|
|find-my-way (jit)|`1048576`|`39.7ns ± 294.8ps`|`59.97ns`|`20.53ns - 64.48ns`|
|hono reg-exp-router|`1048576`|`45.85ns ± 511.06ps`|`69.96ns`|`25.94ns - 76.37ns`|
|hono pattern-router|`1048576`|`147.83ns ± 829.32ps`|`198.55ns`|`100.72ns - 202.38ns`|
|hono trie-router|`1048576`|`152.61ns ± 567.48ps`|`181.42ns`|`108.06ns - 194.87ns`|
|rou3|`1048576`|`159.81ns ± 731.06ps`|`201.2ns`|`116.49ns - 266.05ns`|
|hono linear-router|`1048576`|`400.11ns ± 1.82ns`|`471.13ns`|`343.29ns - 549.47ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`7.78ns ± 209.1ps`|`25.53ns`|`4.14ns - 28.81ns`|
|@mapl/pattern-router (jit)|`1048576`|`11.44ns ± 471.43ps`|`31.44ns`|`5.13ns - 33.52ns`|
|rou3 (jit)|`1048576`|`22.28ns ± 297.16ps`|`43.11ns`|`11.67ns - 45.44ns`|
|@mapl/pattern-router|`1048576`|`26.05ns ± 358.19ps`|`45.37ns`|`14.52ns - 89.33ns`|
|hono reg-exp-router|`1048576`|`42.37ns ± 385.44ps`|`66.68ns`|`23.69ns - 69.15ns`|
|rou3|`1048576`|`66.3ns ± 502.06ps`|`91.79ns`|`39.06ns - 104.79ns`|
|find-my-way (jit)|`1048576`|`88.62ns ± 372.1ps`|`107.31ns`|`47.98ns - 112.85ns`|
|hono pattern-router|`1048576`|`148.29ns ± 704.55ps`|`185.58ns`|`104.06ns - 197.85ns`|
|hono trie-router|`1048576`|`160.58ns ± 635.02ps`|`199.05ns`|`116.54ns - 225.12ns`|
|hono linear-router|`1048576`|`417.05ns ± 1.67ns`|`538.6ns`|`371.23ns - 640.74ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`41.45ns ± 386.67ps`|`61.63ns`|`24.31ns - 72.28ns`|
|@mapl/pattern-router (jit)|`1048576`|`120.3ns ± 769.28ps`|`156.06ns`|`67.47ns - 210.85ns`|
|rou3 (jit)|`1048576`|`139.15ns ± 438.36ps`|`154.91ns`|`92.29ns - 207ns`|
|find-my-way (jit)|`1048576`|`164.03ns ± 830.72ps`|`224.79ns`|`129.8ns - 241.46ns`|
|hono pattern-router|`1048576`|`176.45ns ± 747.03ps`|`208.08ns`|`131.14ns - 253.18ns`|
|@mapl/pattern-router|`1048576`|`229ns ± 890.89ps`|`319.96ns`|`194.58ns - 325.78ns`|
|hono reg-exp-router|`1048576`|`294.42ns ± 746.25ps`|`366.23ns`|`286.58ns - 375.16ns`|
|hono trie-router|`1048576`|`439.65ns ± 471.01ps`|`467.39ns`|`404.95ns - 496.04ns`|
|rou3|`1048576`|`627.22ns ± 1.67ns`|`680.43ns`|`592.82ns - 684.45ns`|
|hono linear-router|`1048576`|`726.96ns ± 2.6ns`|`798.65ns`|`682.55ns - 1.19μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`38.6ns ± 267.73ps`|`58.53ns`|`23.22ns - 61.82ns`|
|@mapl/pattern-router (jit)|`1048576`|`102.31ns ± 223.15ps`|`117.2ns`|`96.55ns - 130.6ns`|
|hono pattern-router|`1048576`|`141.05ns ± 633.84ps`|`161.99ns`|`96.83ns - 197.36ns`|
|rou3 (jit)|`1048576`|`161.06ns ± 664.37ps`|`229.12ns`|`107.18ns - 238.94ns`|
|find-my-way (jit)|`1048576`|`183.51ns ± 1.31ns`|`243.23ns`|`118.83ns - 351.09ns`|
|@mapl/pattern-router|`1048576`|`220.47ns ± 369.02ps`|`247.62ns`|`182.2ns - 252.6ns`|
|hono reg-exp-router|`1048576`|`296.86ns ± 821.99ps`|`343.49ns`|`287.54ns - 411.42ns`|
|hono trie-router|`1048576`|`442.26ns ± 658.09ps`|`476.61ns`|`406.59ns - 560.64ns`|
|hono linear-router|`1048576`|`578.62ns ± 1.38ns`|`654.1ns`|`535.18ns - 775.69ns`|
|rou3|`1048576`|`663.45ns ± 3.31ns`|`777.43ns`|`584.65ns - 798.52ns`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`6.96ns ± 212.32ps`|`25.79ns`|`3.82ns - 30.4ns`|
|@mapl/router (jit)|`1048576`|`7.12ns ± 148.63ps`|`22.48ns`|`4.13ns - 28.84ns`|
|rou3 (jit)|`1048576`|`22.21ns ± 287.39ps`|`46.13ns`|`12.57ns - 55.86ns`|
|@mapl/pattern-router|`1048576`|`25.1ns ± 352.38ps`|`46.48ns`|`12.87ns - 48.81ns`|
|hono reg-exp-router|`1048576`|`36.93ns ± 279.51ps`|`56.48ns`|`20.69ns - 60.43ns`|
|rou3|`1048576`|`49.5ns ± 413.24ps`|`72.6ns`|`27.91ns - 74.82ns`|
|find-my-way (jit)|`1048576`|`83.49ns ± 602.3ps`|`106.55ns`|`45.37ns - 109.88ns`|
|hono pattern-router|`1048576`|`115.57ns ± 511.95ps`|`128.4ns`|`70.06ns - 149.29ns`|
|hono trie-router|`1048576`|`157.62ns ± 537.5ps`|`188.41ns`|`119.05ns - 221.96ns`|
|hono linear-router|`1048576`|`205.51ns ± 867.72ps`|`279.56ns`|`159.58ns - 295.14ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`40.55ns ± 449.95ps`|`63.53ns`|`23.69ns - 106.74ns`|
|@mapl/pattern-router (jit)|`1048576`|`105.92ns ± 577.8ps`|`122.79ns`|`61.28ns - 134.22ns`|
|rou3 (jit)|`1048576`|`146.86ns ± 853.95ps`|`202.96ns`|`95.43ns - 215.93ns`|
|find-my-way (jit)|`1048576`|`164.05ns ± 821.88ps`|`198.58ns`|`119.36ns - 230.21ns`|
|hono pattern-router|`1048576`|`187.09ns ± 650.91ps`|`225.5ns`|`140.78ns - 244.04ns`|
|@mapl/pattern-router|`1048576`|`222.6ns ± 590.88ps`|`253.64ns`|`185.5ns - 294.06ns`|
|hono reg-exp-router|`1048576`|`264.38ns ± 1.08ns`|`369.11ns`|`222.17ns - 379.54ns`|
|hono trie-router|`1048576`|`443.73ns ± 1.21ns`|`459.72ns`|`406.15ns - 647.86ns`|
|rou3|`1048576`|`609.66ns ± 1.58ns`|`664.11ns`|`574.59ns - 666.16ns`|
|hono linear-router|`1048576`|`1.13μs ± 2.99ns`|`1.23μs`|`1.05μs - 1.24μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`38.78ns ± 263.44ps`|`61.05ns`|`22.86ns - 71.34ns`|
|@mapl/pattern-router (jit)|`1048576`|`103.05ns ± 499.49ps`|`124.93ns`|`57.63ns - 129.3ns`|
|rou3 (jit)|`1048576`|`144.41ns ± 625.27ps`|`174.73ns`|`95.92ns - 209.08ns`|
|hono pattern-router|`1048576`|`145.47ns ± 809.77ps`|`196.44ns`|`94.29ns - 203.42ns`|
|find-my-way (jit)|`1048576`|`166.03ns ± 838.62ps`|`213.16ns`|`120.42ns - 238.93ns`|
|@mapl/pattern-router|`1048576`|`213.21ns ± 670.84ps`|`241.55ns`|`180.64ns - 356.63ns`|
|hono reg-exp-router|`1048576`|`282.88ns ± 331.16ps`|`311.23ns`|`261.73ns - 315.28ns`|
|hono trie-router|`1048576`|`445.36ns ± 1.25ns`|`524.37ns`|`409.83ns - 645.15ns`|
|hono linear-router|`1048576`|`580.32ns ± 1.65ns`|`713.7ns`|`537.11ns - 880.62ns`|
|rou3|`1048576`|`611.03ns ± 1.72ns`|`665.39ns`|`573.11ns - 726.39ns`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`124ns ± 531.22ps`|`146.65ns`|`76.81ns - 155.1ns`|
|@mapl/pattern-router (jit)|`1048576`|`139.21ns ± 461.28ps`|`159.26ns`|`92.81ns - 182.17ns`|
|rou3 (jit)|`1048576`|`199.68ns ± 920.69ps`|`283.22ns`|`150.31ns - 292.46ns`|
|hono pattern-router|`1048576`|`237.62ns ± 1.15ns`|`306.7ns`|`200.26ns - 331.85ns`|
|@mapl/pattern-router|`1048576`|`257.47ns ± 423.29ps`|`287.35ns`|`224.1ns - 306.68ns`|
|hono reg-exp-router|`1048576`|`318.36ns ± 529.5ps`|`351.61ns`|`288.26ns - 366.86ns`|
|find-my-way (jit)|`1048576`|`320.37ns ± 1.4ns`|`391.08ns`|`255.66ns - 499.97ns`|
|hono trie-router|`1048576`|`519.36ns ± 685.42ps`|`575.27ns`|`478.08ns - 594.75ns`|
|rou3|`1048576`|`713.59ns ± 1.79ns`|`772.25ns`|`670.38ns - 781.08ns`|
|hono linear-router|`1048576`|`1.16μs ± 2.91ns`|`1.3μs`|`1.12μs - 1.33μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`116.71ns ± 377.46ps`|`139.25ns`|`72.68ns - 142.86ns`|
|@mapl/pattern-router (jit)|`1048576`|`128.64ns ± 658.35ps`|`164.87ns`|`77.28ns - 177.79ns`|
|hono pattern-router|`1048576`|`185.01ns ± 762.24ps`|`250.7ns`|`135.46ns - 255.21ns`|
|rou3 (jit)|`1048576`|`226.94ns ± 602.01ps`|`255.36ns`|`164.02ns - 269.04ns`|
|@mapl/pattern-router|`1048576`|`256.14ns ± 415.94ps`|`283.12ns`|`218.74ns - 306.25ns`|
|find-my-way (jit)|`1048576`|`282.34ns ± 717.05ps`|`323.67ns`|`240.49ns - 338.68ns`|
|hono reg-exp-router|`1048576`|`338.65ns ± 576.88ps`|`373.13ns`|`303.9ns - 412.96ns`|
|hono trie-router|`1048576`|`524.2ns ± 1.52ns`|`536.33ns`|`483.61ns - 796.3ns`|
|rou3|`1048576`|`719.91ns ± 1.82ns`|`780.02ns`|`671.27ns - 783.6ns`|
|hono linear-router|`1048576`|`1.96μs ± 3.39ns`|`2.09μs`|`1.9μs - 2.1μs`|

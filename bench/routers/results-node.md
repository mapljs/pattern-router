# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`8.57ns ± 255.84ps`|`32.6ns`|`4.4ns - 37.82ns`|
|@mapl/router (jit)|`1048576`|`10.08ns ± 304.03ps`|`34.49ns`|`5.36ns - 39.85ns`|
|rou3 (jit)|`1048576`|`30.5ns ± 403.8ps`|`57.01ns`|`15.5ns - 59.08ns`|
|find-my-way (jit)|`1048576`|`45.9ns ± 638.58ps`|`74.98ns`|`24.56ns - 80.55ns`|
|hono reg-exp-router|`1048576`|`54.2ns ± 448.69ps`|`82.21ns`|`29.14ns - 84.31ns`|
|hono pattern-router|`1048576`|`180.87ns ± 951.91ps`|`215.2ns`|`121.68ns - 265.46ns`|
|hono trie-router|`1048576`|`194.53ns ± 1.14ns`|`237.48ns`|`133.17ns - 388.75ns`|
|rou3|`1048576`|`204.01ns ± 849.41ps`|`239.62ns`|`142.09ns - 301.26ns`|
|hono linear-router|`1048576`|`482.21ns ± 4.26ns`|`774.39ns`|`389.83ns - 803.59ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`10.01ns ± 292.22ps`|`33.55ns`|`5.4ns - 38.96ns`|
|@mapl/pattern-router (jit)|`1048576`|`10.85ns ± 341.61ps`|`35.04ns`|`5.82ns - 44.76ns`|
|rou3 (jit)|`1048576`|`28.6ns ± 290.12ps`|`49.46ns`|`14.15ns - 57.09ns`|
|hono reg-exp-router|`1048576`|`56.28ns ± 611.41ps`|`85.57ns`|`29.72ns - 89.68ns`|
|rou3|`1048576`|`91.58ns ± 499.27ps`|`111.21ns`|`52.61ns - 118.22ns`|
|find-my-way (jit)|`1048576`|`114.69ns ± 820.2ps`|`151.85ns`|`57.86ns - 158.93ns`|
|hono pattern-router|`1048576`|`185.38ns ± 961.12ps`|`233.66ns`|`124.1ns - 266.34ns`|
|hono trie-router|`1048576`|`208.16ns ± 1.03ns`|`262.86ns`|`145.27ns - 334.57ns`|
|hono linear-router|`1048576`|`507.95ns ± 2.41ns`|`576.86ns`|`443.32ns - 909.62ns`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`50.49ns ± 416ps`|`76.18ns`|`28.2ns - 79.39ns`|
|@mapl/pattern-router (jit)|`1048576`|`133.2ns ± 951.97ps`|`173.94ns`|`70.25ns - 181.86ns`|
|rou3 (jit)|`1048576`|`180.48ns ± 1.47ns`|`237.82ns`|`113.27ns - 365.17ns`|
|find-my-way (jit)|`1048576`|`205.47ns ± 1.04ns`|`245.25ns`|`146.48ns - 300.68ns`|
|hono pattern-router|`1048576`|`223.82ns ± 1.35ns`|`316.19ns`|`152.15ns - 357.52ns`|
|hono reg-exp-router|`1048576`|`327.68ns ± 1.78ns`|`418.8ns`|`309.32ns - 575.55ns`|
|hono trie-router|`1048576`|`549.35ns ± 1.03ns`|`621.78ns`|`496.53ns - 664.95ns`|
|rou3|`1048576`|`765.85ns ± 2.66ns`|`867.52ns`|`714.31ns - 938.24ns`|
|hono linear-router|`1048576`|`997.52ns ± 6.67ns`|`1.28μs`|`884.79ns - 1.41μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`49.75ns ± 566.5ps`|`74.7ns`|`26.31ns - 80.51ns`|
|@mapl/pattern-router (jit)|`1048576`|`130.71ns ± 720.06ps`|`167.9ns`|`68.58ns - 177.17ns`|
|rou3 (jit)|`1048576`|`179.75ns ± 1.13ns`|`241.29ns`|`109.52ns - 308.96ns`|
|hono pattern-router|`1048576`|`180.18ns ± 1.34ns`|`274.82ns`|`107.4ns - 310.08ns`|
|find-my-way (jit)|`1048576`|`205.09ns ± 1.07ns`|`251.3ns`|`144.14ns - 275.94ns`|
|hono reg-exp-router|`1048576`|`359.35ns ± 817.61ps`|`409.54ns`|`314.18ns - 442.11ns`|
|hono trie-router|`1048576`|`556.75ns ± 2.07ns`|`613.74ns`|`497.45ns - 1.03μs`|
|hono linear-router|`1048576`|`743.49ns ± 4.57ns`|`927.55ns`|`675.96ns - 1.57μs`|
|rou3|`1048576`|`780ns ± 3.29ns`|`907.79ns`|`716.86ns - 1.02μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`9.38ns ± 397.97ps`|`35ns`|`4.18ns - 37.47ns`|
|@mapl/router (jit)|`1048576`|`9.81ns ± 317.14ps`|`33.83ns`|`5.34ns - 37.38ns`|
|rou3 (jit)|`1048576`|`24.97ns ± 367ps`|`50.4ns`|`13.6ns - 56ns`|
|hono reg-exp-router|`1048576`|`45.63ns ± 496.37ps`|`74.45ns`|`24.8ns - 79.48ns`|
|rou3|`1048576`|`66.5ns ± 493.44ps`|`87.53ns`|`37.13ns - 98.6ns`|
|find-my-way (jit)|`1048576`|`105.64ns ± 929.12ps`|`149.96ns`|`53.26ns - 195.29ns`|
|hono pattern-router|`1048576`|`145.99ns ± 924.11ps`|`181.29ns`|`84.19ns - 193.81ns`|
|hono trie-router|`1048576`|`196.69ns ± 1.58ns`|`317.28ns`|`128.48ns - 336.72ns`|
|hono linear-router|`1048576`|`255.97ns ± 1.14ns`|`295.94ns`|`195.06ns - 458.5ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`49.8ns ± 333.25ps`|`71.61ns`|`27.85ns - 77.71ns`|
|@mapl/pattern-router (jit)|`1048576`|`135.05ns ± 839.18ps`|`152.52ns`|`72.55ns - 177.49ns`|
|rou3 (jit)|`1048576`|`184.8ns ± 788.87ps`|`221.89ns`|`115.35ns - 230.37ns`|
|find-my-way (jit)|`1048576`|`207.79ns ± 1.68ns`|`338.21ns`|`135.18ns - 356.45ns`|
|hono pattern-router|`1048576`|`234.92ns ± 1.48ns`|`364.97ns`|`163.69ns - 379.23ns`|
|hono reg-exp-router|`1048576`|`349.89ns ± 1.94ns`|`433.54ns`|`296.11ns - 629.98ns`|
|hono trie-router|`1048576`|`555.25ns ± 775.16ps`|`604.51ns`|`503.86ns - 643.56ns`|
|rou3|`1048576`|`682.9ns ± 1.03ns`|`756.28ns`|`627.29ns - 785.41ns`|
|hono linear-router|`1048576`|`1.46μs ± 6.36ns`|`1.67μs`|`1.31μs - 1.68μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`49.11ns ± 495.3ps`|`79.43ns`|`26.21ns - 82.68ns`|
|@mapl/pattern-router (jit)|`1048576`|`128.97ns ± 730.87ps`|`162.65ns`|`65.4ns - 171.16ns`|
|rou3 (jit)|`1048576`|`181.5ns ± 894.63ps`|`229.1ns`|`111.62ns - 247.64ns`|
|hono pattern-router|`1048576`|`182.5ns ± 1.09ns`|`240.74ns`|`112.98ns - 283.43ns`|
|find-my-way (jit)|`1048576`|`208.06ns ± 1.09ns`|`259.32ns`|`117.62ns - 278.92ns`|
|hono reg-exp-router|`1048576`|`347.87ns ± 802.95ps`|`393.63ns`|`293.99ns - 424.17ns`|
|hono trie-router|`1048576`|`558.87ns ± 850.63ps`|`617.42ns`|`500.83ns - 631.74ns`|
|hono linear-router|`1048576`|`745.46ns ± 3.4ns`|`955.15ns`|`678.85ns - 1.38μs`|
|rou3|`1048576`|`769.28ns ± 3.12ns`|`865.13ns`|`700.55ns - 951.52ns`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`154.56ns ± 796.2ps`|`203.45ns`|`96.54ns - 218.65ns`|
|@mapl/pattern-router (jit)|`1048576`|`179.38ns ± 707.85ps`|`219.85ns`|`110.05ns - 263.24ns`|
|rou3 (jit)|`1048576`|`247.46ns ± 860.34ps`|`293.63ns`|`182.56ns - 321.5ns`|
|hono pattern-router|`1048576`|`293.43ns ± 664.77ps`|`330.95ns`|`233.54ns - 375.78ns`|
|find-my-way (jit)|`1048576`|`346.14ns ± 1.44ns`|`425.36ns`|`311.77ns - 574.31ns`|
|hono reg-exp-router|`1048576`|`389.04ns ± 1.1ns`|`456.14ns`|`334.7ns - 499.72ns`|
|hono trie-router|`1048576`|`737.49ns ± 3.13ns`|`853.12ns`|`677.68ns - 862.52ns`|
|rou3|`1048576`|`879.44ns ± 2.76ns`|`971.66ns`|`823.74ns - 1μs`|
|hono linear-router|`1048576`|`1.52μs ± 5.64ns`|`1.74μs`|`1.41μs - 1.75μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`145.33ns ± 920.16ps`|`186.5ns`|`88.21ns - 189.88ns`|
|@mapl/pattern-router (jit)|`1048576`|`164.76ns ± 892.18ps`|`212.84ns`|`98.56ns - 244.47ns`|
|hono pattern-router|`1048576`|`237.46ns ± 803.06ps`|`274.34ns`|`165.62ns - 289.4ns`|
|rou3 (jit)|`1048576`|`256.2ns ± 1.89ns`|`415.44ns`|`236.49ns - 424.62ns`|
|find-my-way (jit)|`1048576`|`358.4ns ± 2.65ns`|`589.69ns`|`288.15ns - 612.92ns`|
|hono reg-exp-router|`1048576`|`389.94ns ± 2.12ns`|`511.67ns`|`332.5ns - 662.84ns`|
|hono trie-router|`1048576`|`737.29ns ± 3ns`|`846.59ns`|`681.06ns - 856.9ns`|
|rou3|`1048576`|`892.15ns ± 3.36ns`|`1.01μs`|`819.82ns - 1.11μs`|
|hono linear-router|`1048576`|`2.6μs ± 5.12ns`|`2.77μs`|`2.49μs - 2.91μs`|

# simple api
## GET /
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`12.45ns ± 474.04ps`|`46.73ns`|`5.76ns - 87.95ns`|
|@mapl/router (jit)|`1048576`|`15.79ns ± 684.43ps`|`47.29ns`|`6.24ns - 86.94ns`|
|rou3 (jit)|`1048576`|`35.04ns ± 544.9ps`|`69.4ns`|`18.88ns - 79.27ns`|
|@mapl/pattern-router|`1048576`|`45.3ns ± 692.09ps`|`77.55ns`|`23.38ns - 106.47ns`|
|find-my-way (jit)|`1048576`|`63.96ns ± 1.04ns`|`105.32ns`|`36.06ns - 154.56ns`|
|hono reg-exp-router|`1048576`|`66.42ns ± 573.96ps`|`101.66ns`|`37.04ns - 119.56ns`|
|hono pattern-router|`1048576`|`211.42ns ± 837.26ps`|`250.81ns`|`155.83ns - 279.76ns`|
|hono trie-router|`1048576`|`225.35ns ± 1.53ns`|`351.33ns`|`166.24ns - 371.84ns`|
|rou3|`1048576`|`233.3ns ± 1.69ns`|`349.01ns`|`173.47ns - 370.36ns`|
|hono linear-router|`1048576`|`517.04ns ± 1.15ns`|`562.41ns`|`460.42ns - 699.61ns`|
## GET /about
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`18.35ns ± 756.84ps`|`50.72ns`|`6.68ns - 52.75ns`|
|@mapl/router (jit)|`1048576`|`21.14ns ± 244.18ps`|`42.79ns`|`11.49ns - 49.28ns`|
|rou3 (jit)|`1048576`|`48.4ns ± 670.26ps`|`73.18ns`|`20.4ns - 124.4ns`|
|@mapl/pattern-router|`1048576`|`49.99ns ± 717.43ps`|`78.4ns`|`29.7ns - 115.69ns`|
|hono reg-exp-router|`1048576`|`64.28ns ± 534.14ps`|`100.56ns`|`36.1ns - 106.15ns`|
|rou3|`1048576`|`115.34ns ± 653.59ps`|`139.77ns`|`66.72ns - 180.62ns`|
|find-my-way (jit)|`1048576`|`130.29ns ± 714ps`|`169.93ns`|`81.73ns - 182.33ns`|
|hono pattern-router|`1048576`|`218.64ns ± 818.76ps`|`258.55ns`|`163.95ns - 327.62ns`|
|hono trie-router|`1048576`|`239.57ns ± 1.52ns`|`374.53ns`|`185.89ns - 416.72ns`|
|hono linear-router|`1048576`|`573.72ns ± 2.22ns`|`624.71ns`|`517.83ns - 1.06μs`|
## GET /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`65.89ns ± 622.19ps`|`97.4ns`|`35.42ns - 123.72ns`|
|@mapl/pattern-router (jit)|`1048576`|`154.74ns ± 931.04ps`|`218.02ns`|`103.16ns - 229.58ns`|
|rou3 (jit)|`1048576`|`209.62ns ± 971.91ps`|`269.98ns`|`159.48ns - 317.07ns`|
|find-my-way (jit)|`1048576`|`227.95ns ± 1.61ns`|`375.02ns`|`172.88ns - 378.07ns`|
|hono pattern-router|`1048576`|`267.49ns ± 1.57ns`|`427.1ns`|`209.31ns - 435.89ns`|
|@mapl/pattern-router|`1048576`|`296.56ns ± 570.95ps`|`334.61ns`|`251.23ns - 373.78ns`|
|hono reg-exp-router|`1048576`|`365.64ns ± 675.04ps`|`406.92ns`|`319.56ns - 442.19ns`|
|hono trie-router|`1048576`|`965.85ns ± 3.07ns`|`1.05μs`|`896.36ns - 1.08μs`|
|rou3|`1048576`|`1.01μs ± 3.38ns`|`1.1μs`|`931.65ns - 1.13μs`|
|hono linear-router|`1048576`|`1.45μs ± 5.79ns`|`1.64μs`|`1.31μs - 1.86μs`|
## PUT /user/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`62.53ns ± 400.87ps`|`94.3ns`|`35.06ns - 98.55ns`|
|@mapl/pattern-router (jit)|`1048576`|`156.87ns ± 1.93ns`|`213.43ns`|`94.68ns - 539.45ns`|
|rou3 (jit)|`1048576`|`211.96ns ± 1.21ns`|`313.96ns`|`153.81ns - 323.76ns`|
|hono pattern-router|`1048576`|`213.36ns ± 692.19ps`|`239.8ns`|`156.28ns - 301.64ns`|
|find-my-way (jit)|`1048576`|`230.77ns ± 963.35ps`|`270.2ns`|`173.83ns - 330.02ns`|
|@mapl/pattern-router|`1048576`|`303.67ns ± 539.47ps`|`345.75ns`|`254.68ns - 353.2ns`|
|hono reg-exp-router|`1048576`|`397.32ns ± 1.72ns`|`490.53ns`|`384.53ns - 674.05ns`|
|hono trie-router|`1048576`|`948.66ns ± 2.82ns`|`1.06μs`|`905.35ns - 1.16μs`|
|rou3|`1048576`|`1μs ± 6.51ns`|`1.58μs`|`905.28ns - 1.67μs`|
|hono linear-router|`1048576`|`1.19μs ± 6.22ns`|`1.43μs`|`1.07μs - 1.43μs`|
## POST /post
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/pattern-router (jit)|`1048576`|`13.01ns ± 347.18ps`|`46.07ns`|`6.37ns - 49.41ns`|
|@mapl/router (jit)|`1048576`|`16.64ns ± 699.5ps`|`48.8ns`|`6.67ns - 101.02ns`|
|rou3 (jit)|`1048576`|`34.44ns ± 390.01ps`|`66.09ns`|`30.37ns - 74.3ns`|
|@mapl/pattern-router|`1048576`|`45.05ns ± 766.12ps`|`74.92ns`|`21.49ns - 113.46ns`|
|hono reg-exp-router|`1048576`|`58.53ns ± 507.7ps`|`93.37ns`|`32.87ns - 95.98ns`|
|rou3|`1048576`|`83.57ns ± 577.05ps`|`110.84ns`|`44.17ns - 112.23ns`|
|find-my-way (jit)|`1048576`|`128.46ns ± 614.86ps`|`167.36ns`|`68.11ns - 174.71ns`|
|hono pattern-router|`1048576`|`169.86ns ± 743.59ps`|`237.07ns`|`118.61ns - 242.28ns`|
|hono trie-router|`1048576`|`226.44ns ± 1ns`|`286.8ns`|`168.3ns - 357.16ns`|
|hono linear-router|`1048576`|`291.1ns ± 988.02ps`|`337.45ns`|`227.79ns - 493.63ns`|
## GET /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`66.31ns ± 553.52ps`|`98.03ns`|`35.08ns - 128.09ns`|
|@mapl/pattern-router (jit)|`1048576`|`152.15ns ± 763.71ps`|`196.66ns`|`96.11ns - 217.97ns`|
|rou3 (jit)|`1048576`|`213.38ns ± 546.83ps`|`252.56ns`|`157.51ns - 280.3ns`|
|find-my-way (jit)|`1048576`|`229.49ns ± 1.11ns`|`280ns`|`173.23ns - 298.63ns`|
|hono pattern-router|`1048576`|`279.62ns ± 908.59ps`|`321.53ns`|`221.38ns - 392.62ns`|
|@mapl/pattern-router|`1048576`|`309.25ns ± 678.05ps`|`356.14ns`|`261.49ns - 395.9ns`|
|hono reg-exp-router|`1048576`|`381.55ns ± 677.2ps`|`429.97ns`|`369.15ns - 445.79ns`|
|hono trie-router|`1048576`|`943.47ns ± 2.37ns`|`1.06μs`|`913.05ns - 1.08μs`|
|rou3|`1048576`|`965.24ns ± 2.49ns`|`1.09μs`|`921.53ns - 1.1μs`|
|hono linear-router|`1048576`|`2.08μs ± 5.72ns`|`2.34μs`|`2μs - 2.39μs`|
## PUT /post/:id
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`63.48ns ± 604.21ps`|`97.38ns`|`33.64ns - 103.55ns`|
|@mapl/pattern-router (jit)|`1048576`|`149.3ns ± 977.99ps`|`205.75ns`|`91.99ns - 209.07ns`|
|hono pattern-router|`1048576`|`215.05ns ± 1.11ns`|`291.75ns`|`156.72ns - 336.91ns`|
|rou3 (jit)|`1048576`|`217.44ns ± 714.05ps`|`255.84ns`|`205.04ns - 332.83ns`|
|find-my-way (jit)|`1048576`|`238.09ns ± 2.51ns`|`380.85ns`|`172.74ns - 421.06ns`|
|@mapl/pattern-router|`1048576`|`294.46ns ± 1.57ns`|`444.33ns`|`238.72ns - 482.48ns`|
|hono reg-exp-router|`1048576`|`383.63ns ± 719.37ps`|`417.86ns`|`336.53ns - 502.46ns`|
|hono trie-router|`1048576`|`940.05ns ± 2.31ns`|`1.06μs`|`911.99ns - 1.07μs`|
|rou3|`1048576`|`957.99ns ± 3.09ns`|`1.08μs`|`878.38ns - 1.13μs`|
|hono linear-router|`1048576`|`1.26μs ± 5.17ns`|`1.44μs`|`1.15μs - 1.44μs`|
## GET /post/:id/comments
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`171.65ns ± 663.74ps`|`200.83ns`|`106.51ns - 246.75ns`|
|@mapl/pattern-router (jit)|`1048576`|`208.75ns ± 636.75ps`|`236.28ns`|`147.73ns - 280.75ns`|
|rou3 (jit)|`1048576`|`294.93ns ± 1.18ns`|`339.85ns`|`229.68ns - 473.66ns`|
|hono pattern-router|`1048576`|`338.13ns ± 749.26ps`|`373.81ns`|`302.4ns - 482.37ns`|
|@mapl/pattern-router|`1048576`|`379.83ns ± 2.21ns`|`611.5ns`|`315.73ns - 649.55ns`|
|find-my-way (jit)|`1048576`|`395.38ns ± 1.42ns`|`448.45ns`|`278.24ns - 577.46ns`|
|hono reg-exp-router|`1048576`|`451.3ns ± 2.36ns`|`526.55ns`|`396.3ns - 831.68ns`|
|hono trie-router|`1048576`|`1.08μs ± 4.11ns`|`1.19μs`|`1.02μs - 1.82μs`|
|rou3|`1048576`|`1.15μs ± 3.18ns`|`1.26μs`|`1.09μs - 1.29μs`|
|hono linear-router|`1048576`|`2.2μs ± 6.06ns`|`2.43μs`|`2.1μs - 2.47μs`|
## POST /post/:id/comment
|case|runs|mean|p99|range|
|-|-|-|-|-|
|@mapl/router (jit)|`1048576`|`159.3ns ± 858.15ps`|`219.13ns`|`92.53ns - 225.84ns`|
|@mapl/pattern-router (jit)|`1048576`|`188.04ns ± 694.93ps`|`206.37ns`|`121.22ns - 271.88ns`|
|hono pattern-router|`1048576`|`270.67ns ± 547.52ps`|`296.81ns`|`212.97ns - 318.15ns`|
|rou3 (jit)|`1048576`|`303.85ns ± 1.4ns`|`363.34ns`|`232.66ns - 470.05ns`|
|@mapl/pattern-router|`1048576`|`344.52ns ± 769.68ps`|`393ns`|`286.31ns - 399.01ns`|
|find-my-way (jit)|`1048576`|`396.55ns ± 1.68ns`|`443.54ns`|`279.79ns - 670.45ns`|
|hono reg-exp-router|`1048576`|`482.72ns ± 1.14ns`|`555.3ns`|`420.98ns - 595.82ns`|
|hono trie-router|`1048576`|`1.08μs ± 2.96ns`|`1.18μs`|`1.02μs - 1.29μs`|
|rou3|`1048576`|`1.15μs ± 3.36ns`|`1.26μs`|`1.09μs - 1.27μs`|
|hono linear-router|`1048576`|`3.17μs ± 5.86ns`|`3.36μs`|`3.03μs - 3.36μs`|

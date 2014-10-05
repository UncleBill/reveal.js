for (var i = 0; i < 5; ++i) {
    console.log(i);
}
// 0,1,2,3,4

for (var i = 0; i < 5; ++i) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
// 4,4,4,4,4

for (var i = 0; i < 5; ++i) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        })
    }(i))
}
// 0,1,2,3,4

function fakeSetTimeout(cb) {
    var n = 0xfffffff;  // 100+ms on 3.2GHz CPU
    while(n--);
    cb();
}
for (var i = 0; i < 5; ++i) {
    fakeSetTimeout(function () {
        console.log(i);
    })
}
// 0,1,2,3,4

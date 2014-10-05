function cacheableFun(fn){
    var dict = {};
    var hasOwn = Object.prototype.hasOwnProperty;
    return function(){
        var key = Array.prototype.join.call(arguments, '-'), ret;
        if( hasOwn.call(dict, key) ) {
            ret dict[key];
        } else {
            ret = dict[key] = fn.apply(null, arguments);
        }
        return ret;
    }
}

function square(n){ return n*n; }

var cacheableSquare = cacheableFun( square );

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["defipay-sdk"] = factory());
})(this, (function () { 'use strict';

    function call() {
      console.log('我在测试 !!!');
    }

    var src = call;

    return src;

}));

angular.module('underscore', [])
    .factory('$underscore', function() {return {
        debounce:function(cb, wait, immediate) {
            this.debounced = {callback:cb,wait:wait,immediate:immediate};
            return cb;
        }
    };});
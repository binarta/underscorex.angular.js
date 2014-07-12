describe('underscore', function() {
    var _;

    beforeEach(module('underscore'));
    beforeEach(inject(function($underscore) {
        _ = $underscore;
    }));

    describe('debounce', function() {
        it('stub', function() {
            var callback = function() {return 'x'};

            expect(_.debounce(callback, 100, true)()).toEqual('x');
        });

        it('spy', function() {
            var callback = function() {};

            _.debounce(callback, 100, true);

            expect(_.debounced.callback).toEqual(callback);
            expect(_.debounced.wait).toEqual(100);
            expect(_.debounced.immediate).toEqual(true);
        });
    });
});
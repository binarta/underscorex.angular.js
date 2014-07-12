describe('underscore', function() {
    beforeEach(module('underscore'));

    it('exposes underscore wrapper', inject(function($underscore) {
        expect($underscore).toBeDefined();
    }));
});
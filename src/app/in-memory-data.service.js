"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero' },
            { id: 1, name: 'Mr. Good' },
            { id: 2, name: 'Grishnak' },
            { id: 3, name: 'Lambardo' },
            { id: 4, name: 'Super Duck' },
            { id: 5, name: 'Mega Person' },
            { id: 6, name: 'GooMan' },
            { id: 7, name: 'Testerman' },
            { id: 8, name: 'Astrobob' },
            { id: 9, name: 'Joker' },
            { id: 10, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
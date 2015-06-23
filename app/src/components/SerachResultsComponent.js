/// <reference path="../../../typings/tsd.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    SearchResultsComponent = __decorate([
        angular2_1.Component({
            selector: 'serach-results'
        }),
        angular2_1.View({
            template: "\n\t\t\t<li *for=\"#searchResult in seachResults\">\n\t\t\t\t\t<search-entity [searchEntity]=#searchResult>\n\t\t\t</li>\n\t\t\t"
        })
    ], SearchResultsComponent);
    return SearchResultsComponent;
})();
exports.SearchResultsComponent = SearchResultsComponent;

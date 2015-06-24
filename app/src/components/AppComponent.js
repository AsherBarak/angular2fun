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
var AppComponent = (function () {
    function AppComponent() {
        this._jamieInlinePictureData = 'data:image/jpeg;base64,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';
        this.searchResults = [
            {
                name: 'Jaime Lanister',
                imageUrl: this._jamieInlinePictureData,
                relationDescription: 'relation'
            },
            {
                name: 'Daenerys Targaryen',
                relationDescription: 'relation',
                imageUrl: 'http://www.freelargeimages.com/wp-content/uploads/2014/12/Daenerys_targaryen-2.jpg'
            },
            {
                name: 'Eddard Stark',
                relationDescription: 'relation',
                imageUrl: 'http://randomcelebs.com/wp-content/uploads/2015/03/Eddard-Stark-6-300x169.jpg?timestamp=1435039755'
            },
        ];
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n            <div>\n                <serach-results [seachResults]=\"searchResults\"/>\n            </div>\n        "
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
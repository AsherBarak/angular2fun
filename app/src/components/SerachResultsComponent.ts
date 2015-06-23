/// <reference path="../../../typings/tsd.d.ts" />

import {SearchEntity} from '../entities/SearchEntity';
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: 'serach-results'
})
    @View({
        template:`
			<li *for="#searchResult in seachResults">
					<search-entity [searchEntity]=#searchResult>
			</li>
			`
})
export class SearchResultsComponent {
    seachResults: Array<SearchEntity>;
    constructor() {
    }
}
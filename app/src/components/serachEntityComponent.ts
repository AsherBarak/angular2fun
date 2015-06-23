/// <reference path="../../../typings/tsd.d.ts" />

import {SearchEntity} from '../entities/SearchEntity';
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';



@Component({
    selector: 'search-entity'
})
@View({
        templateUrl: '../../templates/searchEntity.html'
})
export class SearchEntityComponent {
    searchEntity: SearchEntity;
    constructor() {
    }
}
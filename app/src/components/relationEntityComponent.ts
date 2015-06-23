/// <reference path="../../../typings/tsd.d.ts" />

import {Relation} from '../entities/Relation';
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';



@Component({
    selector: 'relation-entity'
})
@View({
    templateUrl: '../../templates/relationEntity.html'
})
export class RelationEntityComponent {
    relation: Relation;
    constructor() {
    }
}
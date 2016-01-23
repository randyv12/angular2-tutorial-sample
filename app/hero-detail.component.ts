import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {RouteParams} from "angular2/router";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-hero-detail',
    template: `<div *ngIf="hero">
                <h1>{{title}}</h1><h2>{{hero.name}} details!</h2>
                <div><label>id: </label>{{hero.id}}</div>
                <div><label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
                </div>
                </div>`,
    inputs: ['hero'],
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    constructor(private _routeParams: RouteParams, private _heroService: HeroService) {

    }

    ngOnInit() {
        if (!this.hero) {
            let id = this._routeParams.get('id');
            this._heroService.getHero(id).then(hero => this.hero = hero);
        }
    }

    public hero: Hero;

}

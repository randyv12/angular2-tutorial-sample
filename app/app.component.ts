import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroesComponent} from "./heroes.component.ts";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {APP_ROUTES} from "./route.config";
import {SearchBoxComponent} from "./search-box.component";

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
    <search-box></search-box>
    <list-result></list-result>
    `,
    directives: [ROUTER_DIRECTIVES, SearchBoxComponent],
    styleUrls: ['app/app.component.css']
})
@RouteConfig(APP_ROUTES)
export class AppComponent {

    public title = 'Tour of Heroes';
}
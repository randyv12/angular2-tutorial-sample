import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "angular2/router";


@Component({
  template: `<h3>{{title}}</h3>
             <div class="grid grid-pad">
              <div *ngFor="#hero of heroes" class="col-1-4">
                <div class="module hero" (click)="goToDetail(hero)">
                  <h4>{{hero.name}}</h4>
                </div>
              </div>
             </div>`,
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private _heroService: HeroService, private _router: Router) {}

  public heroes: Hero[];
  public title = "Top Heroes";

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5))
  }

  goToDetail(hero: Hero) {
    this._router.navigate(['HeroDetail', { id: hero.id }]);
  }

}
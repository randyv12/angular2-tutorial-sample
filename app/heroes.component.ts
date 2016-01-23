import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from "./hero.service";
import {Router} from "angular2/router";

@Component({
    selector: 'my-heroes',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>

    <ul class="heroes">
    <li
    [class.selected]="hero === selectedHero"
    *ngFor="#hero of heroes" (click)="goToDetail(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
    </ul>
    `, //<my-hero-detail [hero]="selectedHero"></my-hero-detail>
    directives: [HeroDetailComponent],
    providers: [HeroService],
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
    `]
})
export class HeroesComponent implements OnInit {

    constructor(private _heroService: HeroService, private _router: Router) {}

    public selectedHero: Hero;
    public heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero;}

    ngOnInit() {
        this.getHeroes();
    }

    goToDetail(hero: Hero) {
        this._router.navigate(['HeroDetail', { id: hero.id }]);
    }

    getHeroes() {
        this._heroService.getHeroes().then(
            heroes => this.heroes = heroes
        );
        console.log(this.heroes);
    }

}


import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=> resolve(HEROES), 2000)
        )
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(heroes => heroes.filter(h => h.id === id)[0]);
    }
}
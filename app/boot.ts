import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component.ts'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from "./hero.service";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HeroService
]);
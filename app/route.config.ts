import {HeroesComponent} from "./heroes.component.ts";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

export var APP_ROUTES: Object[] = [{path: '/heroes', name: 'Heroes', component: HeroesComponent},
    {path: '/', name: 'Dashboard', component: DashboardComponent},
    {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
];

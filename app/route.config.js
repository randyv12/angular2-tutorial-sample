System.register(["./heroes.component.ts", "./dashboard.component", "./hero-detail.component"], function(exports_1) {
    var heroes_component_ts_1, dashboard_component_1, hero_detail_component_1;
    var APP_ROUTES;
    return {
        setters:[
            function (heroes_component_ts_1_1) {
                heroes_component_ts_1 = heroes_component_ts_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [{ path: '/heroes', name: 'Heroes', component: heroes_component_ts_1.HeroesComponent },
                { path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
                { path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
            ]);
        }
    }
});
//# sourceMappingURL=route.config.js.map
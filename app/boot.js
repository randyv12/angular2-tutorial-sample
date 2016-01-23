System.register(['angular2/platform/browser', './app.component.ts', 'angular2/router', "./hero.service"], function(exports_1) {
    var browser_1, app_component_ts_1, router_1, hero_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_ts_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map
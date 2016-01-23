System.register(['angular2/core', "./form-input.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, form_input_service_1;
    var SearchBoxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_input_service_1_1) {
                form_input_service_1 = form_input_service_1_1;
            }],
        execute: function() {
            SearchBoxComponent = (function () {
                function SearchBoxComponent(_formInputService) {
                    this._formInputService = _formInputService;
                }
                SearchBoxComponent.prototype.ngOnInit = function () {
                    this.loadQuery();
                };
                SearchBoxComponent.prototype.loadQuery = function () {
                    var _this = this;
                    this._formInputService.getUserQuery().then(function (query) { return _this.queryString = query; });
                };
                SearchBoxComponent = __decorate([
                    core_1.Component({
                        selector: 'search-box',
                        template: "<input [(ngModel)]=\"queryString\" placeholder=\"name\"> <h4>{{queryString}}</h4>",
                        providers: [form_input_service_1.FormInputService]
                    }), 
                    __metadata('design:paramtypes', [form_input_service_1.FormInputService])
                ], SearchBoxComponent);
                return SearchBoxComponent;
            })();
            exports_1("SearchBoxComponent", SearchBoxComponent);
        }
    }
});
//# sourceMappingURL=search-box.component.js.map
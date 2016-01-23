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
    var ListResultComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_input_service_1_1) {
                form_input_service_1 = form_input_service_1_1;
            }],
        execute: function() {
            ListResultComponent = (function () {
                function ListResultComponent(_formInputService) {
                    this._formInputService = _formInputService;
                }
                ListResultComponent = __decorate([
                    core_1.Component({
                        selector: 'list-result',
                        template: "<div>{{resultInfo}}</div>",
                        providers: [form_input_service_1.FormInputService]
                    }), 
                    __metadata('design:paramtypes', [form_input_service_1.FormInputService])
                ], ListResultComponent);
                return ListResultComponent;
            })();
            exports_1("ListResultComponent", ListResultComponent);
        }
    }
});
//# sourceMappingURL=list-result.component.js.map
import {Component, OnInit} from 'angular2/core';
import {FormInputService} from "./form-input.service";

@Component({
  selector: 'search-box',
  template: `<input [(ngModel)]="queryString" placeholder="name"> <h4>{{queryString}}</h4>`,
  providers: [FormInputService]
})

export class SearchBoxComponent implements OnInit {
    public queryString: String;

    constructor(private _formInputService: FormInputService) {}

    ngOnInit() {
        this.loadQuery();
    }

    loadQuery() {
        this._formInputService.getUserQuery().then((query) => this.queryString = query);
    }

}

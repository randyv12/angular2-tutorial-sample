import {Component, OnInit} from 'angular2/core';
import {FormInputService} from "./form-input.service";

@Component({
  selector: 'list-result',
  template: `<div>{{resultInfo}}</div>`,
  providers: [FormInputService]
})

export class ListResultComponent {
    public resultInfo: String;

    constructor(private _formInputService: FormInputService) {}


}

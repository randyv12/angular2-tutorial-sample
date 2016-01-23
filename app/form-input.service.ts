import {QUERY} from './mock-queries';
import {Injectable} from 'angular2/core';

@Injectable()
export class FormInputService {

  getUserQuery() {
    return Promise.resolve(QUERY);
  }

}

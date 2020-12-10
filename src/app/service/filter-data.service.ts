import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {

  constructor() { }

  subject = new Subject();

  passFilterhInfo(filterData: any) {
    this.subject.next(filterData)
    console.log(filterData)
  }

  getFilterInfo() {
    return this.subject.asObservable();
  }
}

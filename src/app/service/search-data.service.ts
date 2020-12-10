import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor() { }

  subject = new Subject();

  passSearchInfo(searchData: any) {
    this.subject.next(searchData)
  }

  getSearchInfo() {
    return this.subject.asObservable();
  }
}

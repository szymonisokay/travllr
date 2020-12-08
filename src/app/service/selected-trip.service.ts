import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Trip } from '../shared/trip';

@Injectable({
  providedIn: 'root'
})
export class SelectedTripService {

  subject = new Subject();

  constructor() { }

  sendTripInfo(trip: Trip) {
    this.subject.next(trip);
    console.log(trip);
  }

  getTripInfo() {
    return this.subject.asObservable();
  }

}

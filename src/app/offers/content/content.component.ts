import { Component, OnInit } from '@angular/core';
import { SelectedTripService } from 'src/app/service/selected-trip.service';
import { TripDataService } from 'src/app/service/trip-data.service';
import { Trip } from 'src/app/shared/trip';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripsData: TripDataService, private sTrip: SelectedTripService) { }

  ngOnInit(): void {
    this.trips = this.tripsData.getTripData();
  }

  addToCart(trip: Trip) {
    window.alert("Dodano do koszyka wycieczkę o nazwie " + trip.name + "!")
  }
}

import { Component, OnInit } from '@angular/core';
import { SelectedTripService } from '../service/selected-trip.service';
import { Trip } from '../shared/trip';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  constructor(private sTrip: SelectedTripService) { }

  ngOnInit(): void {

  }

}  
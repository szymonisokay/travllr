import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Trip } from 'src/app/shared/trip';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

  selectedTrip: Trip[] = [];
  peopleQty: number = this.data.qty;
  price: number = 0;

  constructor(public dialogRef: MatDialogRef<TripDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trip) { }

  ngOnInit(): void {
    this.showTripInfo();
  }

  showTripInfo() {
    this.selectedTrip.push(this.data);
  }

  buy() {
    this.price = this.selectedTrip[0].price * this.peopleQty
    console.log(this.peopleQty, this.price)
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

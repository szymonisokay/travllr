import { Component, OnChanges, OnInit } from '@angular/core';
import { TripDataService } from 'src/app/service/trip-data.service';
import { Trip } from 'src/app/shared/trip';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchDataService } from 'src/app/service/search-data.service';
import { FilterDataService } from 'src/app/service/filter-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  trips: Trip[] = [];
  searchValue: any;
  price: any;
  priceFrom: any;
  priceTo: any;

  constructor(private tripsData: TripDataService,
    private dialog: MatDialog,
    private search: SearchDataService,
    private filter: FilterDataService) { }

  ngOnInit() {
    this.trips = this.tripsData.getTripData();
    this.search.getSearchInfo().subscribe((value) => {
      this.searchValue = value;
    });

    this.filter.getFilterInfo().subscribe((price: any) => {
      this.priceFrom = price.priceFrom;
      this.priceTo = price.priceTo
    })



  }

  addToCart(trip: Trip) {


    const dialogRef = this.dialog.open(TripDetailsComponent, {
      disableClose: true,
      width: '60vw',
      height: '60vh',
      data: trip,
      panelClass: 'dialog-styling'
    });

  }
}

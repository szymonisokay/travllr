import { Component, OnInit } from '@angular/core';
import { FilterDataService } from 'src/app/service/filter-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  priceFrom: number = 2200;
  priceTo: number = 11500;
  dateFrom: string = '';
  dateTo: string = '';

  constructor(private filterService: FilterDataService) { }

  ngOnInit(): void {
  }

  filter(filterData: any) {
    this.filterService.passFilterhInfo(filterData.value);
  }

}

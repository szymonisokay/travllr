import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../service/search-data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  providers: [SearchDataService]
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

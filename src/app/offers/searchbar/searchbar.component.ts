import { Component, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/service/search-data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchValue: string = '';

  constructor(private searchData: SearchDataService) { }

  ngOnInit(): void {

  }

  searchFor(event: any) {
    this.searchValue = event.target.value
    this.searchData.passSearchInfo(this.searchValue);
  }
}

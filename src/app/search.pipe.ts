import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from './shared/trip';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Trip[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
